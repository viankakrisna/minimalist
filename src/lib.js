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

export function setInitialState(initialState, middleWares) {
  const subscribers = [];
  const state = initialState;
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
      const mutatorIsFunction = typeof mutator === 'function';
      const mutatorName = mutatorIsFunction ? mutator.name : false;
      const mutation = mutatorIsFunction ? mutator(state) : mutator;
      Object.assign(state, { ...state, ...mutation });
      Object.assign(
        state,
        middleWares.reduce(
          function(state, middleWare) {
            return middleWare(state, mutatorName, mutation);
          },
          { ...state }
        )
      );
      subscribers.forEach(subscriber => subscriber());
      if (typeof cb === 'function') {
        return cb(state);
      }
      return new Promise(resolve => resolve(state));
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

