//hyperscript-helpers like created from React.createElement or preact.h or Inferno etc
export function elements(createElement, additionalElements = []) {
  return [
    'a',
    'abbr',
    'acronym',
    'address',
    'applet',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'basefont',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'center',
    'cite',
    'code',
    'col',
    'colgroup',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'dir',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'font',
    'footer',
    'form',
    'frame',
    'frameset',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noframes',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strike',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'tt',
    'u',
    'ul',
    'var',
    'video',
    'wbr'
  ]
    .concat(additionalElements)
    .reduce(
      (elementFactory, tag) => {
        elementFactory[tag] = (...args) => createElement(tag, ...args);
        return elementFactory;
      },
      {}
    );
}

const middlewareReducer = (mutatorName, mutation) => (state, middleware) => {
  return middleware(state, mutatorName, mutation);
};

export function setInitialState(initialState, middlewares) {
  const subscribers = [];
  const state = initialState;

  const render = () => {
    subscribers.forEach(subscriber => subscriber());
  };
  return {
    getState(key) {
      if (key) {
        if (typeof state[key] === 'undefined') {
          throw new Error(`getState could not find your ${key} in the store!`);
        }
        return state[key];
      }
      return state;
    },
    setState(mutator, cb) {
      if (typeof cb === 'function') {
        return cb(state);
      }
      return new Promise(resolve => {
        const mutatorIsFunction = typeof mutator === 'function';
        const mutatorName = mutatorIsFunction ? mutator.name : false;
        const mutation = mutatorIsFunction ? mutator(state) : mutator;
        Object.assign(
          state,
          mutation,
          middlewares.reduce(middlewareReducer(mutatorName, mutation), state)
        );
        render(mutator, cb);
        resolve(state);
      });
    },
    subscribe(subscriber) {
      if (typeof subscriber === 'function') {
        subscribers.push(subscriber);
      }
    },
    unsubscribe(subscriber) {
      if (typeof subscriber === 'function') {
        subscribers.splice(subscribers.indexOf(subscriber), 1);
      }
    }
  };
}

function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last, deferTimer;
  return function() {
    var context = scope || this;

    var now = +new Date(), args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(
        function() {
          last = now;
          fn.apply(context, args);
        },
        threshhold
      );
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

