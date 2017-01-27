/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _elements = __webpack_require__(1);

	var _App = __webpack_require__(4);

	var _App2 = _interopRequireDefault(_App);

	var _state = __webpack_require__(10);

	var _mutators = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var root = document.createElement('div');

	function render() {
	    (0, _elements.renderer)((0, _elements.e)(_App2.default), root, root.lastChild);
	}

	(0, _state.subscribe)(render);

	document.body.appendChild(root);

	render();

	(0, _state.setState)((0, _mutators.navigate)(window.location.hash ? window.location.hash.replace('#', '') : '/'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _lib = __webpack_require__(2);

	var _preact = __webpack_require__(3);

	var _preact2 = _interopRequireDefault(_preact);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _extends({}, (0, _lib.elements)(_preact2.default.h), {
	  e: _preact2.default.h,
	  renderer: _preact2.default.render
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.elements = elements;
	exports.setInitialState = setInitialState;
	//hyperscript-helpers like created from React.createElement or preact.h or Inferno etc
	function elements(createElement) {
	  var additionalElements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	  return ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"].concat(additionalElements).reduce(function (elementFactory, tag) {
	    elementFactory[tag] = function () {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return createElement.apply(undefined, [tag].concat(args));
	    };
	    return elementFactory;
	  }, {});
	}

	function setInitialState(initialState, middleWares) {
	  var subscribers = [];
	  var state = initialState;
	  return {
	    getState: function getState(key) {
	      if (key) {
	        return state[key];
	      }
	      return state;
	    },
	    setState: function setState(mutator) {
	      var mutatorIsFunction = typeof mutator === 'function';
	      var mutatorName = mutatorIsFunction ? mutator.name : false;
	      var mutation = mutatorIsFunction ? mutator(state) : mutator;
	      Object.assign(state, _extends({}, state, mutation));
	      Object.assign(state, middleWares.reduce(function (state, middleWare) {
	        return middleWare(state, mutatorName, mutation);
	      }, _extends({}, state)));
	      subscribers.forEach(function (subscriber) {
	        return subscriber();
	      });
	    },
	    subscribe: function subscribe(subscriber) {
	      if (typeof subscriber === 'function') {
	        subscribers.push(subscriber);
	      }
	    },
	    unsubscribe: function unsubscribe(subscriber) {
	      if (typeof subscriber === 'function') {
	        subscribers.splice(subscribers.indexOf(subscriber), 1);
	      }
	    }
	  };
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	!function(global, factory) {
	     true ? factory(exports) : 'function' == typeof define && define.amd ? define([ 'exports' ], factory) : factory(global.preact = global.preact || {});
	}(this, function(exports) {
	    function VNode(nodeName, attributes, children) {
	        this.nodeName = nodeName;
	        this.attributes = attributes;
	        this.children = children;
	        this.key = attributes && attributes.key;
	    }
	    function h(nodeName, attributes) {
	        var children, lastSimple, child, simple, i;
	        for (i = arguments.length; i-- > 2; ) stack.push(arguments[i]);
	        if (attributes && attributes.children) {
	            if (!stack.length) stack.push(attributes.children);
	            delete attributes.children;
	        }
	        while (stack.length) if ((child = stack.pop()) instanceof Array) for (i = child.length; i--; ) stack.push(child[i]); else if (null != child && child !== !0 && child !== !1) {
	            if ('number' == typeof child) child = String(child);
	            simple = 'string' == typeof child;
	            if (simple && lastSimple) children[children.length - 1] += child; else {
	                (children || (children = [])).push(child);
	                lastSimple = simple;
	            }
	        }
	        var p = new VNode(nodeName, attributes || void 0, children || EMPTY_CHILDREN);
	        if (options.vnode) options.vnode(p);
	        return p;
	    }
	    function extend(obj, props) {
	        if (props) for (var i in props) obj[i] = props[i];
	        return obj;
	    }
	    function clone(obj) {
	        return extend({}, obj);
	    }
	    function delve(obj, key) {
	        for (var p = key.split('.'), i = 0; i < p.length && obj; i++) obj = obj[p[i]];
	        return obj;
	    }
	    function isFunction(obj) {
	        return 'function' == typeof obj;
	    }
	    function isString(obj) {
	        return 'string' == typeof obj;
	    }
	    function hashToClassName(c) {
	        var str = '';
	        for (var prop in c) if (c[prop]) {
	            if (str) str += ' ';
	            str += prop;
	        }
	        return str;
	    }
	    function cloneElement(vnode, props) {
	        return h(vnode.nodeName, extend(clone(vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
	    }
	    function createLinkedState(component, key, eventPath) {
	        var path = key.split('.');
	        return function(e) {
	            var t = e && e.target || this, state = {}, obj = state, v = isString(eventPath) ? delve(e, eventPath) : t.nodeName ? t.type.match(/^che|rad/) ? t.checked : t.value : e, i = 0;
	            for (;i < path.length - 1; i++) obj = obj[path[i]] || (obj[path[i]] = !i && component.state[path[i]] || {});
	            obj[path[i]] = v;
	            component.setState(state);
	        };
	    }
	    function enqueueRender(component) {
	        if (!component._dirty && (component._dirty = !0) && 1 == items.push(component)) (options.debounceRendering || defer)(rerender);
	    }
	    function rerender() {
	        var p, list = items;
	        items = [];
	        while (p = list.pop()) if (p._dirty) renderComponent(p);
	    }
	    function isFunctionalComponent(vnode) {
	        var nodeName = vnode && vnode.nodeName;
	        return nodeName && isFunction(nodeName) && !(nodeName.prototype && nodeName.prototype.render);
	    }
	    function buildFunctionalComponent(vnode, context) {
	        return vnode.nodeName(getNodeProps(vnode), context || EMPTY);
	    }
	    function isSameNodeType(node, vnode) {
	        if (isString(vnode)) return node instanceof Text;
	        if (isString(vnode.nodeName)) return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
	        if (isFunction(vnode.nodeName)) return (node._componentConstructor ? node._componentConstructor === vnode.nodeName : !0) || isFunctionalComponent(vnode); else ;
	    }
	    function isNamedNode(node, nodeName) {
	        return node.normalizedNodeName === nodeName || toLowerCase(node.nodeName) === toLowerCase(nodeName);
	    }
	    function getNodeProps(vnode) {
	        var props = clone(vnode.attributes);
	        props.children = vnode.children;
	        var defaultProps = vnode.nodeName.defaultProps;
	        if (defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];
	        return props;
	    }
	    function removeNode(node) {
	        var p = node.parentNode;
	        if (p) p.removeChild(node);
	    }
	    function setAccessor(node, name, old, value, isSvg) {
	        if ('className' === name) name = 'class';
	        if ('class' === name && value && 'object' == typeof value) value = hashToClassName(value);
	        if ('key' === name) ; else if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {
	            if (!value || isString(value) || isString(old)) node.style.cssText = value || '';
	            if (value && 'object' == typeof value) {
	                if (!isString(old)) for (var i in old) if (!(i in value)) node.style[i] = '';
	                for (var i in value) node.style[i] = 'number' == typeof value[i] && !NON_DIMENSION_PROPS[i] ? value[i] + 'px' : value[i];
	            }
	        } else if ('dangerouslySetInnerHTML' === name) {
	            if (value) node.innerHTML = value.__html || '';
	        } else if ('o' == name[0] && 'n' == name[1]) {
	            var l = node._listeners || (node._listeners = {});
	            name = toLowerCase(name.substring(2));
	            if (value) {
	                if (!l[name]) node.addEventListener(name, eventProxy, !!NON_BUBBLING_EVENTS[name]);
	            } else if (l[name]) node.removeEventListener(name, eventProxy, !!NON_BUBBLING_EVENTS[name]);
	            l[name] = value;
	        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {
	            setProperty(node, name, null == value ? '' : value);
	            if (null == value || value === !1) node.removeAttribute(name);
	        } else {
	            var ns = isSvg && name.match(/^xlink\:?(.+)/);
	            if (null == value || value === !1) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1])); else node.removeAttribute(name); else if ('object' != typeof value && !isFunction(value)) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1]), value); else node.setAttribute(name, value);
	        }
	    }
	    function setProperty(node, name, value) {
	        try {
	            node[name] = value;
	        } catch (e) {}
	    }
	    function eventProxy(e) {
	        return this._listeners[e.type](options.event && options.event(e) || e);
	    }
	    function collectNode(node) {
	        removeNode(node);
	        if (node instanceof Element) {
	            node._component = node._componentConstructor = null;
	            var _name = node.normalizedNodeName || toLowerCase(node.nodeName);
	            (nodes[_name] || (nodes[_name] = [])).push(node);
	        }
	    }
	    function createNode(nodeName, isSvg) {
	        var name = toLowerCase(nodeName), node = nodes[name] && nodes[name].pop() || (isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName));
	        node.normalizedNodeName = name;
	        return node;
	    }
	    function flushMounts() {
	        var c;
	        while (c = mounts.pop()) {
	            if (options.afterMount) options.afterMount(c);
	            if (c.componentDidMount) c.componentDidMount();
	        }
	    }
	    function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	        if (!diffLevel++) {
	            isSvgMode = parent && 'undefined' != typeof parent.ownerSVGElement;
	            hydrating = dom && !(ATTR_KEY in dom);
	        }
	        var ret = idiff(dom, vnode, context, mountAll);
	        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
	        if (!--diffLevel) {
	            hydrating = !1;
	            if (!componentRoot) flushMounts();
	        }
	        return ret;
	    }
	    function idiff(dom, vnode, context, mountAll) {
	        var ref = vnode && vnode.attributes && vnode.attributes.ref;
	        while (isFunctionalComponent(vnode)) vnode = buildFunctionalComponent(vnode, context);
	        if (null == vnode) vnode = '';
	        if (isString(vnode)) {
	            if (dom && dom instanceof Text && dom.parentNode) {
	                if (dom.nodeValue != vnode) dom.nodeValue = vnode;
	            } else {
	                if (dom) recollectNodeTree(dom);
	                dom = document.createTextNode(vnode);
	            }
	            return dom;
	        }
	        if (isFunction(vnode.nodeName)) return buildComponentFromVNode(dom, vnode, context, mountAll);
	        var out = dom, nodeName = String(vnode.nodeName), prevSvgMode = isSvgMode, vchildren = vnode.children;
	        isSvgMode = 'svg' === nodeName ? !0 : 'foreignObject' === nodeName ? !1 : isSvgMode;
	        if (!dom) out = createNode(nodeName, isSvgMode); else if (!isNamedNode(dom, nodeName)) {
	            out = createNode(nodeName, isSvgMode);
	            while (dom.firstChild) out.appendChild(dom.firstChild);
	            if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
	            recollectNodeTree(dom);
	        }
	        var fc = out.firstChild, props = out[ATTR_KEY];
	        if (!props) {
	            out[ATTR_KEY] = props = {};
	            for (var a = out.attributes, i = a.length; i--; ) props[a[i].name] = a[i].value;
	        }
	        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && fc && fc instanceof Text && !fc.nextSibling) {
	            if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
	        } else if (vchildren && vchildren.length || fc) innerDiffNode(out, vchildren, context, mountAll, !!props.dangerouslySetInnerHTML);
	        diffAttributes(out, vnode.attributes, props);
	        if (ref) (props.ref = ref)(out);
	        isSvgMode = prevSvgMode;
	        return out;
	    }
	    function innerDiffNode(dom, vchildren, context, mountAll, absorb) {
	        var j, c, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren && vchildren.length;
	        if (len) for (var i = 0; i < len; i++) {
	            var _child = originalChildren[i], props = _child[ATTR_KEY], key = vlen ? (c = _child._component) ? c.__key : props ? props.key : null : null;
	            if (null != key) {
	                keyedLen++;
	                keyed[key] = _child;
	            } else if (hydrating || absorb || props || _child instanceof Text) children[childrenLen++] = _child;
	        }
	        if (vlen) for (var i = 0; i < vlen; i++) {
	            vchild = vchildren[i];
	            child = null;
	            var key = vchild.key;
	            if (null != key) {
	                if (keyedLen && key in keyed) {
	                    child = keyed[key];
	                    keyed[key] = void 0;
	                    keyedLen--;
	                }
	            } else if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) {
	                c = children[j];
	                if (c && isSameNodeType(c, vchild)) {
	                    child = c;
	                    children[j] = void 0;
	                    if (j === childrenLen - 1) childrenLen--;
	                    if (j === min) min++;
	                    break;
	                }
	            }
	            child = idiff(child, vchild, context, mountAll);
	            if (child && child !== dom) if (i >= len) dom.appendChild(child); else if (child !== originalChildren[i]) {
	                if (child === originalChildren[i + 1]) removeNode(originalChildren[i]);
	                dom.insertBefore(child, originalChildren[i] || null);
	            }
	        }
	        if (keyedLen) for (var i in keyed) if (keyed[i]) recollectNodeTree(keyed[i]);
	        while (min <= childrenLen) {
	            child = children[childrenLen--];
	            if (child) recollectNodeTree(child);
	        }
	    }
	    function recollectNodeTree(node, unmountOnly) {
	        var component = node._component;
	        if (component) unmountComponent(component, !unmountOnly); else {
	            if (node[ATTR_KEY] && node[ATTR_KEY].ref) node[ATTR_KEY].ref(null);
	            if (!unmountOnly) collectNode(node);
	            var c;
	            while (c = node.lastChild) recollectNodeTree(c, unmountOnly);
	        }
	    }
	    function diffAttributes(dom, attrs, old) {
	        var name;
	        for (name in old) if (!(attrs && name in attrs) && null != old[name]) setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode);
	        if (attrs) for (name in attrs) if (!('children' === name || 'innerHTML' === name || name in old && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
	    }
	    function collectComponent(component) {
	        var name = component.constructor.name, list = components[name];
	        if (list) list.push(component); else components[name] = [ component ];
	    }
	    function createComponent(Ctor, props, context) {
	        var inst = new Ctor(props, context), list = components[Ctor.name];
	        Component.call(inst, props, context);
	        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
	            inst.nextBase = list[i].nextBase;
	            list.splice(i, 1);
	            break;
	        }
	        return inst;
	    }
	    function setComponentProps(component, props, opts, context, mountAll) {
	        if (!component._disable) {
	            component._disable = !0;
	            if (component.__ref = props.ref) delete props.ref;
	            if (component.__key = props.key) delete props.key;
	            if (!component.base || mountAll) {
	                if (component.componentWillMount) component.componentWillMount();
	            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
	            if (context && context !== component.context) {
	                if (!component.prevContext) component.prevContext = component.context;
	                component.context = context;
	            }
	            if (!component.prevProps) component.prevProps = component.props;
	            component.props = props;
	            component._disable = !1;
	            if (0 !== opts) if (1 === opts || options.syncComponentUpdates !== !1 || !component.base) renderComponent(component, 1, mountAll); else enqueueRender(component);
	            if (component.__ref) component.__ref(component);
	        }
	    }
	    function renderComponent(component, opts, mountAll, isChild) {
	        if (!component._disable) {
	            var skip, rendered, inst, cbase, props = component.props, state = component.state, context = component.context, previousProps = component.prevProps || props, previousState = component.prevState || state, previousContext = component.prevContext || context, isUpdate = component.base, nextBase = component.nextBase, initialBase = isUpdate || nextBase, initialChildComponent = component._component;
	            if (isUpdate) {
	                component.props = previousProps;
	                component.state = previousState;
	                component.context = previousContext;
	                if (2 !== opts && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === !1) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
	                component.props = props;
	                component.state = state;
	                component.context = context;
	            }
	            component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	            component._dirty = !1;
	            if (!skip) {
	                if (component.render) rendered = component.render(props, state, context);
	                if (component.getChildContext) context = extend(clone(context), component.getChildContext());
	                while (isFunctionalComponent(rendered)) rendered = buildFunctionalComponent(rendered, context);
	                var toUnmount, base, childComponent = rendered && rendered.nodeName;
	                if (isFunction(childComponent)) {
	                    var childProps = getNodeProps(rendered);
	                    inst = initialChildComponent;
	                    if (inst && inst.constructor === childComponent && childProps.key == inst.__key) setComponentProps(inst, childProps, 1, context); else {
	                        toUnmount = inst;
	                        inst = createComponent(childComponent, childProps, context);
	                        inst.nextBase = inst.nextBase || nextBase;
	                        inst._parentComponent = component;
	                        component._component = inst;
	                        setComponentProps(inst, childProps, 0, context);
	                        renderComponent(inst, 1, mountAll, !0);
	                    }
	                    base = inst.base;
	                } else {
	                    cbase = initialBase;
	                    toUnmount = initialChildComponent;
	                    if (toUnmount) cbase = component._component = null;
	                    if (initialBase || 1 === opts) {
	                        if (cbase) cbase._component = null;
	                        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);
	                    }
	                }
	                if (initialBase && base !== initialBase && inst !== initialChildComponent) {
	                    var baseParent = initialBase.parentNode;
	                    if (baseParent && base !== baseParent) {
	                        baseParent.replaceChild(base, initialBase);
	                        if (!toUnmount) {
	                            initialBase._component = null;
	                            recollectNodeTree(initialBase);
	                        }
	                    }
	                }
	                if (toUnmount) unmountComponent(toUnmount, base !== initialBase);
	                component.base = base;
	                if (base && !isChild) {
	                    var componentRef = component, t = component;
	                    while (t = t._parentComponent) (componentRef = t).base = base;
	                    base._component = componentRef;
	                    base._componentConstructor = componentRef.constructor;
	                }
	            }
	            if (!isUpdate || mountAll) mounts.unshift(component); else if (!skip) {
	                if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
	                if (options.afterUpdate) options.afterUpdate(component);
	            }
	            var fn, cb = component._renderCallbacks;
	            if (cb) while (fn = cb.pop()) fn.call(component);
	            if (!diffLevel && !isChild) flushMounts();
	        }
	    }
	    function buildComponentFromVNode(dom, vnode, context, mountAll) {
	        var c = dom && dom._component, originalComponent = c, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
	        while (c && !isOwner && (c = c._parentComponent)) isOwner = c.constructor === vnode.nodeName;
	        if (c && isOwner && (!mountAll || c._component)) {
	            setComponentProps(c, props, 3, context, mountAll);
	            dom = c.base;
	        } else {
	            if (originalComponent && !isDirectOwner) {
	                unmountComponent(originalComponent, !0);
	                dom = oldDom = null;
	            }
	            c = createComponent(vnode.nodeName, props, context);
	            if (dom && !c.nextBase) {
	                c.nextBase = dom;
	                oldDom = null;
	            }
	            setComponentProps(c, props, 1, context, mountAll);
	            dom = c.base;
	            if (oldDom && dom !== oldDom) {
	                oldDom._component = null;
	                recollectNodeTree(oldDom);
	            }
	        }
	        return dom;
	    }
	    function unmountComponent(component, remove) {
	        if (options.beforeUnmount) options.beforeUnmount(component);
	        var base = component.base;
	        component._disable = !0;
	        if (component.componentWillUnmount) component.componentWillUnmount();
	        component.base = null;
	        var inner = component._component;
	        if (inner) unmountComponent(inner, remove); else if (base) {
	            if (base[ATTR_KEY] && base[ATTR_KEY].ref) base[ATTR_KEY].ref(null);
	            component.nextBase = base;
	            if (remove) {
	                removeNode(base);
	                collectComponent(component);
	            }
	            var c;
	            while (c = base.lastChild) recollectNodeTree(c, !remove);
	        }
	        if (component.__ref) component.__ref(null);
	        if (component.componentDidUnmount) component.componentDidUnmount();
	    }
	    function Component(props, context) {
	        this._dirty = !0;
	        this.context = context;
	        this.props = props;
	        if (!this.state) this.state = {};
	    }
	    function render(vnode, parent, merge) {
	        return diff(merge, vnode, {}, !1, parent);
	    }
	    var options = {};
	    var stack = [];
	    var EMPTY_CHILDREN = [];
	    var lcCache = {};
	    var toLowerCase = function(s) {
	        return lcCache[s] || (lcCache[s] = s.toLowerCase());
	    };
	    var resolved = 'undefined' != typeof Promise && Promise.resolve();
	    var defer = resolved ? function(f) {
	        resolved.then(f);
	    } : setTimeout;
	    var EMPTY = {};
	    var ATTR_KEY = 'undefined' != typeof Symbol ? Symbol.for('preactattr') : '__preactattr_';
	    var NON_DIMENSION_PROPS = {
	        boxFlex: 1,
	        boxFlexGroup: 1,
	        columnCount: 1,
	        fillOpacity: 1,
	        flex: 1,
	        flexGrow: 1,
	        flexPositive: 1,
	        flexShrink: 1,
	        flexNegative: 1,
	        fontWeight: 1,
	        lineClamp: 1,
	        lineHeight: 1,
	        opacity: 1,
	        order: 1,
	        orphans: 1,
	        strokeOpacity: 1,
	        widows: 1,
	        zIndex: 1,
	        zoom: 1
	    };
	    var NON_BUBBLING_EVENTS = {
	        blur: 1,
	        error: 1,
	        focus: 1,
	        load: 1,
	        resize: 1,
	        scroll: 1
	    };
	    var items = [];
	    var nodes = {};
	    var mounts = [];
	    var diffLevel = 0;
	    var isSvgMode = !1;
	    var hydrating = !1;
	    var components = {};
	    extend(Component.prototype, {
	        linkState: function(key, eventPath) {
	            var c = this._linkedStates || (this._linkedStates = {});
	            return c[key + eventPath] || (c[key + eventPath] = createLinkedState(this, key, eventPath));
	        },
	        setState: function(state, callback) {
	            var s = this.state;
	            if (!this.prevState) this.prevState = clone(s);
	            extend(s, isFunction(state) ? state(s, this.props) : state);
	            if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
	            enqueueRender(this);
	        },
	        forceUpdate: function() {
	            renderComponent(this, 2);
	        },
	        render: function() {}
	    });
	    exports.h = h;
	    exports.cloneElement = cloneElement;
	    exports.Component = Component;
	    exports.render = render;
	    exports.rerender = rerender;
	    exports.options = options;
	});
	//# sourceMappingURL=preact.js.map

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _templateObject = _taggedTemplateLiteral(['\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n', '\n\n&{\n  padding-top: 3.5em;\n  overflow: auto;\n  background: #f1f1f1;\n  min-height: 100vh;\n}\n\n& .page-header {\n  background: ', ';\n  overflow: hidden;\n  margin-bottom: -3.5em;\n  color: white;\n  text-align: center;\n  padding: 5em 0 7.5em;\n}\n& .page-content {\n  width: 640px;\n  max-width: 100%;\n  background: white;\n  border-radius: 2px;\n  padding: 1em;\n  margin: 1em auto;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n}\n@media (max-width: 767px){\n  & .page-content {\n     margin: 1em;\n     max-width: calc(100% - 2em);\n  }\n}\n'], ['\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n', '\n\n&{\n  padding-top: 3.5em;\n  overflow: auto;\n  background: #f1f1f1;\n  min-height: 100vh;\n}\n\n& .page-header {\n  background: ', ';\n  overflow: hidden;\n  margin-bottom: -3.5em;\n  color: white;\n  text-align: center;\n  padding: 5em 0 7.5em;\n}\n& .page-content {\n  width: 640px;\n  max-width: 100%;\n  background: white;\n  border-radius: 2px;\n  padding: 1em;\n  margin: 1em auto;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n}\n@media (max-width: 767px){\n  & .page-content {\n     margin: 1em;\n     max-width: calc(100% - 2em);\n  }\n}\n']);

	var _elements = __webpack_require__(1);

	var _styled = __webpack_require__(5);

	var _styled2 = _interopRequireDefault(_styled);

	var _Counter = __webpack_require__(6);

	var _Counter2 = _interopRequireDefault(_Counter);

	var _Header = __webpack_require__(12);

	var _Header2 = _interopRequireDefault(_Header);

	var _Login = __webpack_require__(14);

	var _Login2 = _interopRequireDefault(_Login);

	var _Register = __webpack_require__(16);

	var _Register2 = _interopRequireDefault(_Register);

	var _state = __webpack_require__(10);

	var _theme = __webpack_require__(7);

	var _typography = __webpack_require__(17);

	var _typography2 = _interopRequireDefault(_typography);

	var _typographyThemeBootstrap = __webpack_require__(190);

	var _typographyThemeBootstrap2 = _interopRequireDefault(_typographyThemeBootstrap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	var typography = new _typography2.default(_typographyThemeBootstrap2.default);
	var Match = function Match(props) {
	  return (0, _state.getState)().location.pathname === props.pathname ? props.children[0] : null;
	};

	var App = (0, _styled2.default)(function App(props) {
	  return (0, _elements.div)({ className: props.className }, (0, _elements.e)(_Header2.default), (0, _elements.e)(Match, { pathname: '/' }, (0, _elements.div)({ className: 'page' }, (0, _elements.div)({ className: 'page-header' }, (0, _elements.h1)(_elements.n, 'Welcome to the Minimalist!')), (0, _elements.div)({ className: 'page-content' }, (0, _elements.p)(_elements.n, 'This is a POC for a minimal reimplementation of popular react ecosystem libaries. (without JSX!)'), (0, _elements.p)(_elements.n, 'The list of reimplemented libaries:'), (0, _elements.ul)(_elements.n, (0, _elements.li)(_elements.n, 'redux - without the reducers see ./state.js, ./mutator.js and ./lib.js'), (0, _elements.li)(_elements.n, 'react-router - just use window.history / hash and sync that to state'), (0, _elements.li)(_elements.n, 'styled-components - without html helper (.eg styled.div) - see ./styled.js'), (0, _elements.li)(_elements.n, 'react-hyperscripts - just a factory - see ./elements.js'), (0, _elements.li)(_elements.n, 'preact instead of react')), (0, _elements.p)(_elements.n, 'The one thing you really need to see in this app is ./lib.js, that\'s where we create the apis for state management and element creation. Everything else is built on top of that. Also, I\'m using preact rather than react because I only use stateless functional components and wanted the footprint to be small. No context, no this.state. Everything comes from a single state tree.'), (0, _elements.h2)(_elements.n, 'Why?'), (0, _elements.p)(_elements.n, 'Just for fun! Also, I\'m getting tired to see the list of dependencies of my project. The dependencies used in this project are non critical: typography.js, typography-theme-bootstrap, preact, and material-design-icons Use it if you want to, and discuss with me if you find bugs.'),
	  /*       p(n, `The current state of my code is getting complex. More libraries, more codes that we don't control. Concepts are bigger than implementation. So I just take the concepts of these libaries and reimplemented using my own code.`),
	         p(n, `This project is an approach to simplify any of that. For example, creating a separate reducer and action creators is painful in a complex redux webapp, In this project, it all happens in a mutator.`),
	         p(n, `JSX will require you to use module bundlers. We try to keep transpilation minimal, so we can just include a script and start building. Also, it's easier to just write JS rather than XML.`),
	         p(n, `The things that we really need in this project is Object spread operator, which can be replaced with Object.assign or $.extend or _.assign. For styling, I haven't found better way than the tagged template approach with styled-components. So there's that.`),*/
	  (0, _elements.p)({ style: { textAlign: 'center', padding: '0 1em' } }, 'Created by ', (0, _elements.a)({ href: 'https://github.com/viankakrisna', target: '__blank' }, 'Ade Viankakrisna Fadlil'))))), (0, _elements.e)(Match, { pathname: '/counter' }, (0, _elements.div)({ className: 'page' }, (0, _elements.div)({ className: 'page-header' }, (0, _elements.h1)(_elements.n, 'Counter Example')), (0, _elements.div)({ className: 'page-content' }, (0, _elements.e)(_Counter2.default)))), (0, _elements.e)(Match, { pathname: '/login' }, (0, _elements.e)(_Login2.default)), (0, _elements.e)(Match, { pathname: '/register' }, (0, _elements.e)(_Register2.default)), (0, _elements.e)(Match, { pathname: '/*' }, (0, _elements.e)(_Register2.default)));
	})(_templateObject, function () {
	  return typography.toString();
	}, function () {
	  return _theme.colors.blue.shade_800;
	});

	exports.default = App;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = styled;

	var _elements = __webpack_require__(1);

	function createRawCSSReducer(exp, props) {
	  return function rawCSSReducer(res, string, i) {
	    if (typeof exp[i] === 'function') {
	      res += string + exp[i](props);
	      return res;
	    }
	    res += string;
	    return res;
	  };
	}

	function styled(Component) {
	  return function createStyled(css) {
	    for (var _len = arguments.length, exp = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      exp[_key - 1] = arguments[_key];
	    }

	    return function styledComponent(props) {
	      var interpolatedCSS = css.raw.reduce(createRawCSSReducer(exp, props), '');
	      var className = [Component.name || 'styled', hashCode(interpolatedCSS)].join('_');
	      var styleAppended = document.getElementById(className);
	      var style = document.createElement('style');
	      style.innerHTML = interpolatedCSS.replace(/\&/g, '.' + className);
	      style.id = className;

	      if (!styleAppended) {
	        document.head.appendChild(style);
	      }
	      return (0, _elements.e)(Component, _extends({}, props, {
	        className: className
	      }));
	    };
	  };
	}

	function hashCode(str) {
	  return Math.abs(str.split('').reduce(function (res, currentChar) {
	    return (res << 6) - res + currentChar.charCodeAt(0);
	  }, 0));
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _elements = __webpack_require__(1);

	var _styled = __webpack_require__(5);

	var _styled2 = _interopRequireDefault(_styled);

	var _theme = __webpack_require__(7);

	var _mutators = __webpack_require__(9);

	var _state = __webpack_require__(10);

	var _Button = __webpack_require__(11);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Counter = function Counter(props) {
	  return (0, _elements.div)({
	    style: { textAlign: 'center' }
	  }, (0, _elements.p)({ style: { fontSize: '72px', lineHeight: '144px' } }, (0, _state.getState)().counter), (0, _elements.e)(_Button2.default, {
	    bg: _theme.colors.blue.shade_700,
	    onClick: function onClick(e) {
	      return (0, _state.setState)((0, _mutators.increment)(1));
	    }
	  }, 'Increment'), (0, _elements.e)(_Button2.default, {
	    bg: _theme.colors.red.shade_700,
	    onClick: function onClick(e) {
	      return (0, _state.setState)((0, _mutators.decrement)(1));
	    }
	  }, 'Decrement'), (0, _elements.br)(), (0, _elements.e)(_Button2.default, {
	    bg: _theme.colors.green.shade_700,
	    color: 'white',
	    onClick: function onClick(e) {
	      (0, _state.setState)(_mutators.asyncIncrement.loading());
	      setTimeout(function () {
	        (0, _state.setState)(_mutators.asyncIncrement.success(123));
	      }, 1000);
	    },
	    disabled: (0, _state.getState)().loading.asyncIncrement
	  }, 'Async Increment'), (0, _elements.e)(_Button2.default, {
	    bg: _theme.colors.yellow.shade_700,
	    color: 'black',
	    onClick: function onClick(e) {
	      (0, _state.setState)(_mutators.asyncDecrement.loading());
	      setTimeout(function () {
	        (0, _state.setState)(_mutators.asyncDecrement.success(123));
	      }, 1000);
	    },
	    disabled: (0, _state.getState)().loading.asyncDecrement
	  }, 'Async Decrement'), (0, _state.getState)('list').map(function (item) {
	    return (0, _elements.div)(_elements.n, item);
	  }).reverse());
	};

	exports.default = Counter;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _googleMaterialColorPaletteJson = __webpack_require__(8);

	var _googleMaterialColorPaletteJson2 = _interopRequireDefault(_googleMaterialColorPaletteJson);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  colors: _googleMaterialColorPaletteJson2.default
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var require;var require;(function(f){if(true){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.PALETTE = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
	module.exports={
	  "red": {
	    "shade_50": "#ffebee",
	    "shade_100": "#ffcdd2",
	    "shade_200": "#ef9a9a",
	    "shade_300": "#e57373",
	    "shade_400": "#ef5350",
	    "shade_500": "#f44336",
	    "shade_600": "#e53935",
	    "shade_700": "#d32f2f",
	    "shade_800": "#c62828",
	    "shade_900": "#b71c1c",
	    "shade_A100": "#ff8a80",
	    "shade_A200": "#ff5252",
	    "shade_A400": "#ff1744",
	    "shade_A700": "#d50000"
	  },
	  "pink": {
	    "shade_50": "#fce4ec",
	    "shade_100": "#f8bbd0",
	    "shade_200": "#f48fb1",
	    "shade_300": "#f06292",
	    "shade_400": "#ec407a",
	    "shade_500": "#e91e63",
	    "shade_600": "#d81b60",
	    "shade_700": "#c2185b",
	    "shade_800": "#ad1457",
	    "shade_900": "#880e4f",
	    "shade_A100": "#ff80ab",
	    "shade_A200": "#ff4081",
	    "shade_A400": "#f50057",
	    "shade_A700": "#c51162"
	  },
	  "purple": {
	    "shade_50": "#f3e5f5",
	    "shade_100": "#e1bee7",
	    "shade_200": "#ce93d8",
	    "shade_300": "#ba68c8",
	    "shade_400": "#ab47bc",
	    "shade_500": "#9c27b0",
	    "shade_600": "#8e24aa",
	    "shade_700": "#7b1fa2",
	    "shade_800": "#6a1b9a",
	    "shade_900": "#4a148c",
	    "shade_A100": "#ea80fc",
	    "shade_A200": "#e040fb",
	    "shade_A400": "#d500f9",
	    "shade_A700": "#aa00ff"
	  },
	  "deepPurple": {
	    "shade_50": "#ede7f6",
	    "shade_100": "#d1c4e9",
	    "shade_200": "#b39ddb",
	    "shade_300": "#9575cd",
	    "shade_400": "#7e57c2",
	    "shade_500": "#673ab7",
	    "shade_600": "#5e35b1",
	    "shade_700": "#512da8",
	    "shade_800": "#4527a0",
	    "shade_900": "#311b92",
	    "shade_A100": "#b388ff",
	    "shade_A200": "#7c4dff",
	    "shade_A400": "#651fff",
	    "shade_A700": "#6200ea"
	  },
	  "indigo": {
	    "shade_50": "#e8eaf6",
	    "shade_100": "#c5cae9",
	    "shade_200": "#9fa8da",
	    "shade_300": "#7986cb",
	    "shade_400": "#5c6bc0",
	    "shade_500": "#3f51b5",
	    "shade_600": "#3949ab",
	    "shade_700": "#303f9f",
	    "shade_800": "#283593",
	    "shade_900": "#1a237e",
	    "shade_A100": "#8c9eff",
	    "shade_A200": "#536dfe",
	    "shade_A400": "#3d5afe",
	    "shade_A700": "#304ffe"
	  },
	  "blue": {
	    "shade_50": "#e3f2fd",
	    "shade_100": "#bbdefb",
	    "shade_200": "#90caf9",
	    "shade_300": "#64b5f6",
	    "shade_400": "#42a5f5",
	    "shade_500": "#2196f3",
	    "shade_600": "#1e88e5",
	    "shade_700": "#1976d2",
	    "shade_800": "#1565c0",
	    "shade_900": "#0d47a1",
	    "shade_A100": "#82b1ff",
	    "shade_A200": "#448aff",
	    "shade_A400": "#2979ff",
	    "shade_A700": "#2962ff"
	  },
	  "lightBlue": {
	    "shade_50": "#e1f5fe",
	    "shade_100": "#b3e5fc",
	    "shade_200": "#81d4fa",
	    "shade_300": "#4fc3f7",
	    "shade_400": "#29b6f6",
	    "shade_500": "#03a9f4",
	    "shade_600": "#039be5",
	    "shade_700": "#0288d1",
	    "shade_800": "#0277bd",
	    "shade_900": "#01579b",
	    "shade_A100": "#80d8ff",
	    "shade_A200": "#40c4ff",
	    "shade_A400": "#00b0ff",
	    "shade_A700": "#0091ea"
	  },
	  "cyan": {
	    "shade_50": "#e0f7fa",
	    "shade_100": "#b2ebf2",
	    "shade_200": "#80deea",
	    "shade_300": "#4dd0e1",
	    "shade_400": "#26c6da",
	    "shade_500": "#00bcd4",
	    "shade_600": "#00acc1",
	    "shade_700": "#0097a7",
	    "shade_800": "#00838f",
	    "shade_900": "#006064",
	    "shade_A100": "#84ffff",
	    "shade_A200": "#18ffff",
	    "shade_A400": "#00e5ff",
	    "shade_A700": "#00b8d4"
	  },
	  "teal": {
	    "shade_50": "#e0f2f1",
	    "shade_100": "#b2dfdb",
	    "shade_200": "#80cbc4",
	    "shade_300": "#4db6ac",
	    "shade_400": "#26a69a",
	    "shade_500": "#009688",
	    "shade_600": "#00897b",
	    "shade_700": "#00796b",
	    "shade_800": "#00695c",
	    "shade_900": "#004d40",
	    "shade_A100": "#a7ffeb",
	    "shade_A200": "#64ffda",
	    "shade_A400": "#1de9b6",
	    "shade_A700": "#00bfa5"
	  },
	  "green": {
	    "shade_50": "#e8f5e9",
	    "shade_100": "#c8e6c9",
	    "shade_200": "#a5d6a7",
	    "shade_300": "#81c784",
	    "shade_400": "#66bb6a",
	    "shade_500": "#4caf50",
	    "shade_600": "#43a047",
	    "shade_700": "#388e3c",
	    "shade_800": "#2e7d32",
	    "shade_900": "#1b5e20",
	    "shade_A100": "#b9f6ca",
	    "shade_A200": "#69f0ae",
	    "shade_A400": "#00e676",
	    "shade_A700": "#00c853"
	  },
	  "lightGreen": {
	    "shade_50": "#f1f8e9",
	    "shade_100": "#dcedc8",
	    "shade_200": "#c5e1a5",
	    "shade_300": "#aed581",
	    "shade_400": "#9ccc65",
	    "shade_500": "#8bc34a",
	    "shade_600": "#7cb342",
	    "shade_700": "#689f38",
	    "shade_800": "#558b2f",
	    "shade_900": "#33691e",
	    "shade_A100": "#ccff90",
	    "shade_A200": "#b2ff59",
	    "shade_A400": "#76ff03",
	    "shade_A700": "#64dd17"
	  },
	  "lime": {
	    "shade_50": "#f9fbe7",
	    "shade_100": "#f0f4c3",
	    "shade_200": "#e6ee9c",
	    "shade_300": "#dce775",
	    "shade_400": "#d4e157",
	    "shade_500": "#cddc39",
	    "shade_600": "#c0ca33",
	    "shade_700": "#afb42b",
	    "shade_800": "#9e9d24",
	    "shade_900": "#827717",
	    "shade_A100": "#f4ff81",
	    "shade_A200": "#eeff41",
	    "shade_A400": "#c6ff00",
	    "shade_A700": "#aeea00"
	  },
	  "yellow": {
	    "shade_50": "#fffde7",
	    "shade_100": "#fff9c4",
	    "shade_200": "#fff59d",
	    "shade_300": "#fff176",
	    "shade_400": "#ffee58",
	    "shade_500": "#ffeb3b",
	    "shade_600": "#fdd835",
	    "shade_700": "#fbc02d",
	    "shade_800": "#f9a825",
	    "shade_900": "#f57f17",
	    "shade_A100": "#ffff8d",
	    "shade_A200": "#ffff00",
	    "shade_A400": "#ffea00",
	    "shade_A700": "#ffd600"
	  },
	  "amber": {
	    "shade_50": "#fff8e1",
	    "shade_100": "#ffecb3",
	    "shade_200": "#ffe082",
	    "shade_300": "#ffd54f",
	    "shade_400": "#ffca28",
	    "shade_500": "#ffc107",
	    "shade_600": "#ffb300",
	    "shade_700": "#ffa000",
	    "shade_800": "#ff8f00",
	    "shade_900": "#ff6f00",
	    "shade_A100": "#ffe57f",
	    "shade_A200": "#ffd740",
	    "shade_A400": "#ffc400",
	    "shade_A700": "#ffab00"
	  },
	  "orange": {
	    "shade_50": "#fff3e0",
	    "shade_100": "#ffe0b2",
	    "shade_200": "#ffcc80",
	    "shade_300": "#ffb74d",
	    "shade_400": "#ffa726",
	    "shade_500": "#ff9800",
	    "shade_600": "#fb8c00",
	    "shade_700": "#f57c00",
	    "shade_800": "#ef6c00",
	    "shade_900": "#e65100",
	    "shade_A100": "#ffd180",
	    "shade_A200": "#ffab40",
	    "shade_A400": "#ff9100",
	    "shade_A700": "#ff6d00"
	  },
	  "deepOrange": {
	    "shade_50": "#fbe9e7",
	    "shade_100": "#ffccbc",
	    "shade_200": "#ffab91",
	    "shade_300": "#ff8a65",
	    "shade_400": "#ff7043",
	    "shade_500": "#ff5722",
	    "shade_600": "#f4511e",
	    "shade_700": "#e64a19",
	    "shade_800": "#d84315",
	    "shade_900": "#bf360c",
	    "shade_A100": "#ff9e80",
	    "shade_A200": "#ff6e40",
	    "shade_A400": "#ff3d00",
	    "shade_A700": "#dd2c00"
	  },
	  "brown": {
	    "shade_50": "#efebe9",
	    "shade_100": "#d7ccc8",
	    "shade_200": "#bcaaa4",
	    "shade_300": "#a1887f",
	    "shade_400": "#8d6e63",
	    "shade_500": "#795548",
	    "shade_600": "#6d4c41",
	    "shade_700": "#5d4037",
	    "shade_800": "#4e342e",
	    "shade_900": "#3e2723"
	  },
	  "grey": {
	    "shade_50": "#fafafa",
	    "shade_100": "#f5f5f5",
	    "shade_200": "#eeeeee",
	    "shade_300": "#e0e0e0",
	    "shade_400": "#bdbdbd",
	    "shade_500": "#9e9e9e",
	    "shade_600": "#757575",
	    "shade_700": "#616161",
	    "shade_800": "#424242",
	    "shade_900": "#212121"
	  },
	  "blueGrey": {
	    "shade_50": "#eceff1",
	    "shade_100": "#cfd8dc",
	    "shade_200": "#b0bec5",
	    "shade_300": "#90a4ae",
	    "shade_400": "#78909c",
	    "shade_500": "#607d8b",
	    "shade_600": "#546e7a",
	    "shade_700": "#455a64",
	    "shade_800": "#37474f",
	    "shade_900": "#263238"
	  },
	  "black": "#000000",
	  "white": "#FFFFFF"
	}
	},{}],2:[function(require,module,exports){
	module.exports = require('../lib/color-palette.json')
	},{"../lib/color-palette.json":1}]},{},[2])(2)
	});

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	//instead in reducers we mutate the state in the mutators
	var navigate = exports.navigate = function navigate(where) {
	  return function NAVIGATE(state) {
	    var pathname = typeof where === 'string' ? where : where.pathname;
	    var hashchange = true;
	    if (hashchange) {
	      window.location.hash = pathname;
	    } else {
	      window.history.pushState(null, null, pathname);
	    }
	    return {
	      location: typeof where === 'string' ? { pathname: where } : where,
	      menuOpen: false
	    };
	  };
	};
	var menuOpen = exports.menuOpen = function menuOpen(isOpen) {
	  return function MENU_OPEN(state) {
	    return {
	      menuOpen: isOpen
	    };
	  };
	};
	var increment = exports.increment = function increment(howMuch) {
	  return function COUNTER_INCREMENT(state) {
	    return {
	      counter: state.counter + howMuch
	    };
	  };
	};
	var decrement = exports.decrement = function decrement(howMuch) {
	  return function COUNTER_DECREMENT(state) {
	    return {
	      counter: state.counter - howMuch
	    };
	  };
	};
	var asyncDecrement = exports.asyncDecrement = {
	  loading: function loading() {
	    return function ASYNC_DECREMENT_LOADING(state) {
	      return {
	        loading: _extends({}, state.loading, {
	          asyncDecrement: true
	        })
	      };
	    };
	  },
	  success: function success(howMuch) {
	    return function ASYNC_DECREMENT_SUCCESS(state) {
	      return {
	        counter: state.counter - howMuch,
	        loading: _extends({}, state.loading, {
	          asyncDecrement: false
	        })
	      };
	    };
	  },
	  error: function error() {
	    return function ASYNC_DECREMENT_ERROR(state) {
	      return {
	        loading: _extends({}, state.loading, {
	          asyncDecrement: false
	        })
	      };
	    };
	  }
	};

	var asyncIncrement = exports.asyncIncrement = {
	  loading: function loading() {
	    return function ASYNC_INCREMENT_LOADING(state) {
	      return {
	        loading: _extends({}, state.loading, {
	          asyncIncrement: true
	        })
	      };
	    };
	  },
	  success: function success(howMuch) {
	    return function ASYNC_INCREMENT_SUCCESS(state) {
	      return {
	        counter: state.counter + howMuch,
	        loading: _extends({}, state.loading, {
	          asyncIncrement: false
	        })
	      };
	    };
	  },
	  error: function error() {
	    return function ASYNC_INCREMENT_ERROR(state) {
	      return {
	        loading: _extends({}, state.loading, {
	          asyncIncrement: false
	        })
	      };
	    };
	  }
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _lib = __webpack_require__(2);

	module.exports = (0, _lib.setInitialState)(_extends({
	  counter: 0,
	  list: [],
	  loading: {},
	  location: _extends({}, window.location)
	}, void JSON.parse(localStorage.getItem('state'))), [saveHistoryOfState, lastMutated]);

	//middleware for storing history
	var stateHistory = [];
	function saveHistoryOfState(state) {
	  stateHistory.push(state);
	  localStorage.setItem('state', JSON.stringify(state));
	  return state;
	}
	function lastMutated(state, mutatorName, mutation) {
	  state.lastMutator = mutatorName;
	  state.lastMutated = Date.now();
	  console.log(mutatorName, mutation);
	  return state;
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _templateObject = _taggedTemplateLiteral(['\n& {\n  background: ', ';\n  color: ', ';\n  box-sizing: border-box;\n  border-color: transparent;\n  transition: 250ms;\n  cursor: pointer;\n  padding: 0.5em 1em;\n  width: ', ';\n  display: ', ';\n  text-transform: uppercase;\n  border-radius: 2px;\n  margin-bottom: 1em;\n}\n&:after {\n}\n&:hover {\n  opacity: 0.7;\n}\n&:active {\n  outline: none;\n}\n&[disabled] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n'], ['\n& {\n  background: ', ';\n  color: ', ';\n  box-sizing: border-box;\n  border-color: transparent;\n  transition: 250ms;\n  cursor: pointer;\n  padding: 0.5em 1em;\n  width: ', ';\n  display: ', ';\n  text-transform: uppercase;\n  border-radius: 2px;\n  margin-bottom: 1em;\n}\n&:after {\n}\n&:hover {\n  opacity: 0.7;\n}\n&:active {\n  outline: none;\n}\n&[disabled] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n']);

	var _elements = __webpack_require__(1);

	var _styled = __webpack_require__(5);

	var _styled2 = _interopRequireDefault(_styled);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	exports.default = (0, _styled2.default)(function Button(_ref) {
	  var className = _ref.className,
	      children = _ref.children,
	      props = _objectWithoutProperties(_ref, ['className', 'children']);

	  return (0, _elements.button)(_extends({
	    className: className
	  }, props), children);
	})(_templateObject, function (props) {
	  return props.bg;
	}, function (props) {
	  return props.color || 'white';
	}, function (props) {
	  return props.block ? '100%' : 'auto';
	}, function (props) {
	  return props.block ? 'block' : 'inline-block';
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _templateObject = _taggedTemplateLiteral(['\n  & {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    background: ', ';\n    height: ', ';\n    line-height: 1.5em;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n  }\n  & a {\n    color: white;\n    padding: 1em;\n    text-decoration: none;\n    display: inline-block;\n    transition: 250ms;\n  }\n  & a.active,\n  & a:hover{\n    background: rgba(0,0,0,0.25)\n  }\n  & .menu-toggle,\n  & .mobile-logo {\n    display: none;\n  }\n  @media (min-width: 768px){\n    & {\n      text-align: center;\n    }\n  }\n  @media (max-width: 767px){\n    & .mobile-logo {\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      height: ', ';\n      padding: 1em;\n      text-align: center;\n      margin: auto;\n      width: 10em;\n      box-sizing: border-box;\n      color: white;\n    }\n    & .menu-toggle {\n      color: white;\n      display: inline-block;\n      line-height: inherit;\n      padding: 1em;\n      cursor: pointer;\n      font-size: 1em;\n      box-sizing: border-box;\n    }\n    & .menu {\n      position: fixed;\n      top: ', ';\n      left: 0;\n      bottom: 0; \n      transition: 250ms;\n      width: 220px;\n      background: white;\n      border-right: 1px solid lightgrey;\n      transform: translateX(', ');\n    }\n    & .menu a {\n      display: block;\n      color: black;\n    }\n    & .overlay {\n      background: rgba(0,0,0,0.5);\n      position: fixed;\n      transition: 250ms;\n      top: ', ';\n      left: 0;\n      right: 0;\n      bottom: 0;\n      opacity: ', ';\n      pointer-events: ', '\n    }\n  }\n'], ['\n  & {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    background: ', ';\n    height: ', ';\n    line-height: 1.5em;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n  }\n  & a {\n    color: white;\n    padding: 1em;\n    text-decoration: none;\n    display: inline-block;\n    transition: 250ms;\n  }\n  & a.active,\n  & a:hover{\n    background: rgba(0,0,0,0.25)\n  }\n  & .menu-toggle,\n  & .mobile-logo {\n    display: none;\n  }\n  @media (min-width: 768px){\n    & {\n      text-align: center;\n    }\n  }\n  @media (max-width: 767px){\n    & .mobile-logo {\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      height: ', ';\n      padding: 1em;\n      text-align: center;\n      margin: auto;\n      width: 10em;\n      box-sizing: border-box;\n      color: white;\n    }\n    & .menu-toggle {\n      color: white;\n      display: inline-block;\n      line-height: inherit;\n      padding: 1em;\n      cursor: pointer;\n      font-size: 1em;\n      box-sizing: border-box;\n    }\n    & .menu {\n      position: fixed;\n      top: ', ';\n      left: 0;\n      bottom: 0; \n      transition: 250ms;\n      width: 220px;\n      background: white;\n      border-right: 1px solid lightgrey;\n      transform: translateX(', ');\n    }\n    & .menu a {\n      display: block;\n      color: black;\n    }\n    & .overlay {\n      background: rgba(0,0,0,0.5);\n      position: fixed;\n      transition: 250ms;\n      top: ', ';\n      left: 0;\n      right: 0;\n      bottom: 0;\n      opacity: ', ';\n      pointer-events: ', '\n    }\n  }\n']);

	var _elements = __webpack_require__(1);

	var _mutators = __webpack_require__(9);

	var _styled = __webpack_require__(5);

	var _styled2 = _interopRequireDefault(_styled);

	var _theme = __webpack_require__(7);

	var _state = __webpack_require__(10);

	var _Link = __webpack_require__(13);

	var _Link2 = _interopRequireDefault(_Link);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	function Header(props) {
	  return (0, _elements.div)({ className: props.className }, (0, _elements.i)({
	    className: 'material-icons menu-toggle',
	    onClick: function onClick() {
	      return (0, _state.setState)((0, _mutators.menuOpen)(!(0, _state.getState)().menuOpen));
	    } }, 'menu'), (0, _elements.div)({ className: 'mobile-logo' }, 'Minimalist'), (0, _elements.div)({
	    className: 'overlay',
	    onClick: function onClick() {
	      return (0, _state.setState)((0, _mutators.menuOpen)(false));
	    } }), (0, _elements.div)({ className: 'menu' }, (0, _elements.e)(_Link2.default, { to: '/' }, 'Home'), (0, _elements.e)(_Link2.default, { to: '/counter' }, 'Counter'), (0, _elements.e)(_Link2.default, { to: '/login' }, 'Login'), (0, _elements.e)(_Link2.default, { to: '/register' }, 'Register')));
	}
	var headerHeight = function headerHeight() {
	  return '3.5em';
	};
	exports.default = (0, _styled2.default)(Header)(_templateObject, function (props) {
	  return _theme.colors.blue.shade_900;
	}, headerHeight, headerHeight, headerHeight, function (props) {
	  return (0, _state.getState)().menuOpen ? '0' : '-100%';
	}, headerHeight, function (props) {
	  return (0, _state.getState)().menuOpen ? '1' : '0';
	}, function (props) {
	  return (0, _state.getState)().menuOpen ? 'visible' : 'none';
	});

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _elements = __webpack_require__(1);

	var _mutators = __webpack_require__(9);

	var _state = __webpack_require__(10);

	function Link(props) {
	  return (0, _elements.a)(_extends({
	    className: [props.className, (0, _state.getState)().location.pathname === props.to || (0, _state.getState)().location.pathname === props.to.pathname ? 'active' : ''].filter(Boolean).join(' '),
	    href: props.to,
	    onClick: function onClick(event) {
	      event.preventDefault();
	      (0, _state.setState)((0, _mutators.navigate)({
	        pathname: props.to
	      }));
	    }
	  }, props));
	}
	exports.default = Link;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Login;

	var _elements = __webpack_require__(1);

	var _Button = __webpack_require__(11);

	var _Button2 = _interopRequireDefault(_Button);

	var _Form = __webpack_require__(15);

	var _Form2 = _interopRequireDefault(_Form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Login(props) {
	  return (0, _elements.e)(_Form2.default, { className: props.className }, (0, _elements.fieldset)(_elements.n, (0, _elements.h1)(_elements.n, 'Login'), (0, _elements.div)(_elements.n, (0, _elements.label)(_elements.n, 'Email'), (0, _elements.input)({ type: 'email' })), (0, _elements.div)(_elements.n, (0, _elements.label)(_elements.n, 'Password'), (0, _elements.input)({ type: 'password' })), (0, _elements.div)(_elements.n, (0, _elements.e)(_Button2.default, { type: 'submit', bg: 'blue', block: true }, 'Submit'))));
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _templateObject = _taggedTemplateLiteral(['\n  & {\n    max-width: 100%;\n    width: 320px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  & fieldset {\n    padding: 1em;\n    background: white;\n    border-radius: 2px;\n    margin-top: 1em;\n    border: 0;\n  }\n  & fieldset > div {\n    margin-bottom: 0.5em\n  }\n  & label {\n    display: block;\n    margin-bottom: 0.25em;\n  }\n  & input {\n    padding: 0.5em 0;\n    width: 100%;\n    box-sizing: border-box;\n    border-radius: 2px;\n    border: 0;\n    border-bottom: 1px solid lightgrey;\n    margin-bottom: 0.5em;\n  }\n  & input:focus {\n    outline: none;\n    border-bottom: 1px solid ', ';\n  }\n\n  & fieldset > *:first-child {\n    margin-top: 0;\n  }\n'], ['\n  & {\n    max-width: 100%;\n    width: 320px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  & fieldset {\n    padding: 1em;\n    background: white;\n    border-radius: 2px;\n    margin-top: 1em;\n    border: 0;\n  }\n  & fieldset > div {\n    margin-bottom: 0.5em\n  }\n  & label {\n    display: block;\n    margin-bottom: 0.25em;\n  }\n  & input {\n    padding: 0.5em 0;\n    width: 100%;\n    box-sizing: border-box;\n    border-radius: 2px;\n    border: 0;\n    border-bottom: 1px solid lightgrey;\n    margin-bottom: 0.5em;\n  }\n  & input:focus {\n    outline: none;\n    border-bottom: 1px solid ', ';\n  }\n\n  & fieldset > *:first-child {\n    margin-top: 0;\n  }\n']);

	var _elements = __webpack_require__(1);

	var _theme = __webpack_require__(7);

	var _styled = __webpack_require__(5);

	var _styled2 = _interopRequireDefault(_styled);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	exports.default = (0, _styled2.default)(function Form(props) {
	  return (0, _elements.form)(_extends({}, props, { onSubmit: function onSubmit(event) {
	      event.preventDefault();
	      if (typeof props.onSubmit === 'function') {
	        props.onSubmit();
	      }
	    } }));
	})(_templateObject, function () {
	  return _theme.colors.blue.shade_500;
	});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Register;

	var _elements = __webpack_require__(1);

	var _Button = __webpack_require__(11);

	var _Button2 = _interopRequireDefault(_Button);

	var _Form = __webpack_require__(15);

	var _Form2 = _interopRequireDefault(_Form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Register(props) {
	  return (0, _elements.e)(_Form2.default, { className: props.className }, (0, _elements.fieldset)(_elements.n, (0, _elements.h1)(_elements.n, 'Register'), (0, _elements.div)(_elements.n, (0, _elements.label)(_elements.n, 'Email'), (0, _elements.input)({ type: 'email' })), (0, _elements.div)(_elements.n, (0, _elements.label)(_elements.n, 'Password'), (0, _elements.input)({ type: 'password' })), (0, _elements.div)(_elements.n, (0, _elements.e)(_Button2.default, { type: 'submit', bg: 'blue', block: true }, 'Submit'))));
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _objectAssign = __webpack_require__(18);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _compassVerticalRhythm = __webpack_require__(19);

	var _compassVerticalRhythm2 = _interopRequireDefault(_compassVerticalRhythm);

	var _modularscale = __webpack_require__(23);

	var _modularscale2 = _interopRequireDefault(_modularscale);

	var _createStyles = __webpack_require__(25);

	var _createStyles2 = _interopRequireDefault(_createStyles);

	var _compileStyles = __webpack_require__(187);

	var _compileStyles2 = _interopRequireDefault(_compileStyles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var typography = function typography(opts) {
	  var defaults = {
	    baseFontSize: '16px',
	    baseLineHeight: 1.5,
	    scaleRatio: 2,
	    googleFonts: [],
	    headerFontFamily: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
	    bodyFontFamily: ['georgia', 'serif'],
	    headerColor: 'inherit',
	    bodyColor: 'hsla(0,0%,0%,0.8)',
	    headerWeight: 'bold',
	    bodyWeight: 'normal',
	    boldWeight: 'bold',
	    includeNormalize: true,
	    blockMarginBottom: 1
	  };

	  var options = (0, _objectAssign2.default)({}, defaults, opts);

	  var vr = (0, _compassVerticalRhythm2.default)(options);

	  // Add this function to the vertical rhythm object so it'll be passed around
	  // as well and be available. Not related really but this is the easiest
	  // way to pass around extra utility functions atm... :-\
	  vr.scale = function (value) {
	    // This doesn't pick the right scale ratio if a theme has more than one ratio.
	    // Perhaps add optional parameter for a width and it'll get the ratio
	    // for this width. Tricky part is maxWidth could be set in non-pixels.
	    var baseFont = options.baseFontSize.slice(0, -2);
	    var newFontSize = (0, _modularscale2.default)(value, options.scaleRatio) * baseFont + 'px';
	    return vr.adjustFontSizeTo(newFontSize);
	  };

	  return _extends({
	    options: options
	  }, vr, {
	    createStyles: function createStyles() {
	      return this.toString();
	    },
	    // TODO remove in next breaking release.
	    toJSON: function toJSON() {
	      return (0, _createStyles2.default)(vr, options);
	    },
	    toString: function toString() {
	      return (0, _compileStyles2.default)(vr, options, this.toJSON());
	    },
	    injectStyles: function injectStyles() {
	      if (typeof document !== 'undefined') {
	        // Replace existing
	        if (document.getElementById('typography.js')) {
	          var styleNode = document.getElementById('typography.js');
	          styleNode.innerHTML = this.toString();
	        } else {
	          var node = document.createElement('style');
	          node.id = 'typography.js';
	          node.innerHTML = this.toString();
	          document.head.appendChild(node);
	        }
	      }
	    }
	  });
	};

	module.exports = typography;

	/*
	const test = typography({
	  baseFontSize: '16px',
	  includeNormalize: false,
	})

	console.log(test.toJSON())
	console.log(test.toString())
	*/

/***/ },
/* 18 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.0
	var adjustFontSizeTo, convertLength, defaults, establishBaseline, linesForFontSize, objectAssign, parseUnit, rhythm, unit, unitLess;

	objectAssign = __webpack_require__(18);

	convertLength = __webpack_require__(20);

	parseUnit = __webpack_require__(21);

	unit = function(length) {
	  return parseUnit(length)[1];
	};

	unitLess = function(length) {
	  return parseUnit(length)[0];
	};

	defaults = {
	  baseFontSize: '16px',
	  baseLineHeight: 1.5,
	  rhythmUnit: 'rem',
	  defaultRhythmBorderWidth: '1px',
	  defaultRhythmBorderStyle: 'solid',
	  roundToNearestHalfLine: true,
	  minLinePadding: '2px'
	};

	linesForFontSize = function(fontSize, options) {
	  var convert, fontSizeInPx, lineHeightInPx, lines, minLinePadding;
	  convert = convertLength(options.baseFontSize);
	  fontSizeInPx = unitLess(convert(fontSize, 'px'));
	  lineHeightInPx = unitLess(options.baseLineHeightInPx);
	  minLinePadding = unitLess(convert(options.minLinePadding, 'px'));
	  if (options.roundToNearestHalfLine) {
	    lines = Math.ceil(2 * fontSizeInPx / lineHeightInPx) / 2;
	  } else {
	    lines = Math.ceil(fontSizeInPx / lineHeightInPx);
	  }
	  if ((lines * lineHeightInPx - fontSizeInPx) < (minLinePadding * 2)) {
	    if (options.roundToNearestHalfLine) {
	      lines += 0.5;
	    } else {
	      lines += 1;
	    }
	  }
	  return lines;
	};

	rhythm = function(options) {
	  var convert;
	  convert = convertLength(options.baseFontSize);
	  return function(lines, fontSize, offset) {
	    var length, rhythmLength;
	    if (lines == null) {
	      lines = 1;
	    }
	    if (fontSize == null) {
	      fontSize = options.baseFontSize;
	    }
	    if (offset == null) {
	      offset = 0;
	    }
	    length = ((lines * unitLess(options.baseLineHeightInPx)) - offset) + "px";
	    rhythmLength = convert(length, options.rhythmUnit, fontSize);
	    if (unit(rhythmLength) === "px") {
	      rhythmLength = Math.floor(unitLess(rhythmLength)) + unit(rhythmLength);
	    }
	    return parseFloat(unitLess(rhythmLength).toFixed(5)) + unit(rhythmLength);
	  };
	};

	establishBaseline = function(options) {
	  var convert;
	  convert = convertLength(options.baseFontSize);
	  return {
	    fontSize: (unitLess(options.baseFontSize) / 16) * 100 + "%",
	    lineHeight: convert(options.baseLineHeightInPx, 'em')
	  };
	};

	adjustFontSizeTo = function(toSize, lines, fromSize, options) {
	  var convert, r;
	  if (fromSize == null) {
	    fromSize = options.baseFontSize;
	  }
	  if (unit(toSize) === "%") {
	    toSize = unitLess(options.baseFontSize) * (unitLess(toSize) / 100) + "px";
	  }
	  convert = convertLength(options.baseFontSize);
	  fromSize = convert(fromSize, 'px');
	  toSize = convert(toSize, 'px', fromSize);
	  r = rhythm(options);
	  if (lines === "auto") {
	    lines = linesForFontSize(toSize, options);
	  }
	  return {
	    fontSize: convert(toSize, options.rhythmUnit, fromSize),
	    lineHeight: r(lines, fromSize)
	  };
	};

	module.exports = function(options) {
	  var convert, defaultsCopy, fontSizeInPx, lineHeight;
	  defaultsCopy = JSON.parse(JSON.stringify(defaults));
	  options = objectAssign(defaultsCopy, options);
	  convert = convertLength(options.baseFontSize);
	  if (unit(options.baseLineHeight)) {
	    fontSizeInPx = unitLess(convert(options.baseFontSize, 'px'));
	    lineHeight = convert(options.baseLineHeight, 'px');
	    options.baseLineHeightInPx = lineHeight;
	    options.baseLineHeight = unitLess(lineHeight) / fontSizeInPx;
	  } else {
	    options.baseLineHeightInPx = (unitLess(options.baseFontSize) * options.baseLineHeight) + "px";
	  }
	  return {
	    rhythm: rhythm(options),
	    establishBaseline: function() {
	      return establishBaseline(options);
	    },
	    linesForFontSize: function(fontSize) {
	      return linesForFontSize(fontSize, options);
	    },
	    adjustFontSizeTo: function(toSize, lines, fromSize) {
	      if (lines == null) {
	        lines = "auto";
	      }
	      return adjustFontSizeTo(toSize, lines, fromSize, options);
	    }
	  };
	};


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.0
	var baseFontSize, parseUnit, unit, unitLess;

	parseUnit = __webpack_require__(21);

	__webpack_require__(22);

	baseFontSize = "16px";

	unit = function(length) {
	  return parseUnit(length)[1];
	};

	unitLess = function(length) {
	  return parseUnit(length)[0];
	};

	module.exports = function(baseFontSize) {
	  if (baseFontSize == null) {
	    baseFontSize = baseFontSize;
	  }
	  return function(length, toUnit, fromContext, toContext) {
	    var fromUnit, outputLength, pxLength;
	    if (fromContext == null) {
	      fromContext = baseFontSize;
	    }
	    if (toContext == null) {
	      toContext = fromContext;
	    }
	    fromUnit = unit(length);
	    if (fromUnit === toUnit) {
	      return length;
	    }
	    pxLength = unitLess(length);
	    if (unit(fromContext) !== "px") {
	      console.warn("Parameter fromContext must resolve to a value in pixel units.");
	    }
	    if (unit(toContext) !== "px") {
	      console.warn("Parameter toContext must resolve to a value in pixel units.");
	    }
	    if (fromUnit !== "px") {
	      if (fromUnit === "em") {
	        pxLength = unitLess(length) * unitLess(fromContext);
	      } else if (fromUnit === "rem") {
	        pxLength = unitLess(length) * unitLess(baseFontSize);
	      } else if (fromUnit === "ex") {
	        pxLength = unitLess(length) * unitLess(fromContext) * 2;
	      } else if (fromUnit === "ch" || fromUnit === "vw" || fromUnit === "vh" || fromUnit === "vmin") {
	        console.warn(fromUnit + " units can't be reliably converted; Returning original value.");
	        return length;
	      } else {
	        console.warn(fromUnit + " is an unknown or unsupported length unit; Returning original value.");
	        return length;
	      }
	    }
	    outputLength = pxLength;
	    if (toUnit !== "px") {
	      if (toUnit === "em") {
	        outputLength = pxLength / unitLess(toContext);
	      } else if (toUnit === "rem") {
	        outputLength = pxLength / unitLess(baseFontSize);
	      } else if (toUnit === "ex") {
	        outputLength = pxLength / unitLess(toContext) / 2;
	      } else if (toUnit === "ch" || toUnit === "vw" || toUnit === "vh" || toUnit === "vmin") {
	        console.warn(toUnit + " units can't be reliably converted; Returning original value.");
	        return length;
	      } else {
	        console.warn(toUnit + " is an unknown or unsupported length unit; Returning original value.");
	        return length;
	      }
	    }
	    return parseFloat(outputLength.toFixed(5)) + toUnit;
	  };
	};


/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function parseUnit(str, out) {
	    if (!out)
	        out = [ 0, '' ]

	    str = String(str)
	    var num = parseFloat(str, 10)
	    out[0] = num
	    out[1] = str.match(/[\d.\-\+]*\s*(.*)/)[1] || ''
	    return out
	}

/***/ },
/* 22 */
/***/ function(module, exports) {

	// Console-polyfill. MIT license.
	// https://github.com/paulmillr/console-polyfill
	// Make it safe to do console.log() always.
	(function(con) {
	  'use strict';
	  var prop, method;
	  var empty = {};
	  var dummy = function() {};
	  var properties = 'memory'.split(',');
	  var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' +
	     'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' +
	     'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
	  while (prop = properties.pop()) con[prop] = con[prop] || empty;
	  while (method = methods.pop()) con[method] = con[method] || dummy;
	})(this.console = this.console || {}); // Using `this` for web workers.


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	var isNumber, ratios;

	isNumber = __webpack_require__(24);

	ratios = {
	  "minor second": 16 / 15,
	  "major second": 9 / 8,
	  "minor third": 6 / 5,
	  "major third": 4 / 3,
	  "diminished fourth": Math.sqrt(2),
	  "perfect fifth": 3 / 2,
	  "minor sixth": 8 / 5,
	  "golden": 1.61803398875,
	  "phi": 1.61803398875,
	  "major sixth": 5 / 3,
	  "minor seventh": 16 / 9,
	  "major seventh": 15 / 8,
	  "octave": 2,
	  "major tenth": 5 / 2,
	  "major eleventh": 8 / 3,
	  "major twelfth": 3,
	  "double octave": 4
	};

	module.exports = function(value, ratio) {
	  var r;
	  if (value == null) {
	    value = 0;
	  }
	  if (ratio == null) {
	    ratio = "golden";
	  }
	  if (isNumber(ratio)) {
	    r = ratio;
	  } else if (ratios[ratio] != null) {
	    r = ratios[ratio];
	  } else {
	    r = ratios['golden'];
	  }
	  return Math.pow(r, value);
	};


/***/ },
/* 24 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	var numberTag = '[object Number]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Number` primitive or object.
	 *
	 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
	 * as numbers, use the `_.isFinite` method.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isNumber(3);
	 * // => true
	 *
	 * _.isNumber(Number.MIN_VALUE);
	 * // => true
	 *
	 * _.isNumber(Infinity);
	 * // => true
	 *
	 * _.isNumber('3');
	 * // => false
	 */
	function isNumber(value) {
	  return typeof value == 'number' ||
	    (isObjectLike(value) && objectToString.call(value) == numberTag);
	}

	module.exports = isNumber;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _grayPercentage = __webpack_require__(26);

	var _grayPercentage2 = _interopRequireDefault(_grayPercentage);

	var _set = __webpack_require__(27);

	var _set2 = _interopRequireDefault(_set);

	var _forEach = __webpack_require__(83);

	var _forEach2 = _interopRequireDefault(_forEach);

	var _isNumber = __webpack_require__(110);

	var _isNumber2 = _interopRequireDefault(_isNumber);

	var _isString = __webpack_require__(111);

	var _isString2 = _interopRequireDefault(_isString);

	var _isFunction = __webpack_require__(34);

	var _isFunction2 = _interopRequireDefault(_isFunction);

	var _isArray = __webpack_require__(48);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _merge = __webpack_require__(112);

	var _merge2 = _interopRequireDefault(_merge);

	var _reduce = __webpack_require__(146);

	var _reduce2 = _interopRequireDefault(_reduce);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var setStyles = function setStyles() {
	  var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var els = arguments[1];
	  var rules = arguments[2];

	  var elements = void 0;
	  if (!(0, _isArray2.default)(els)) {
	    elements = [els];
	  } else {
	    elements = els;
	  }
	  (0, _forEach2.default)(elements, function (element) {
	    (0, _forEach2.default)(rules, function (value, prop) {
	      (0, _set2.default)(styles, element + '.' + prop, value);
	    });
	  });
	  return styles;
	};

	module.exports = function (vr, options) {
	  var styles = {};

	  var _vr$establishBaseline = vr.establishBaseline(),
	      fontSize = _vr$establishBaseline.fontSize,
	      lineHeight = _vr$establishBaseline.lineHeight;

	  // Base HTML styles.


	  styles = setStyles(styles, 'html', {
	    font: fontSize + '/' + lineHeight + ' ' + options.bodyFontFamily.join(','),
	    boxSizing: 'border-box',
	    overflowY: 'scroll'
	  });

	  // box-sizing reset.
	  styles = setStyles(styles, ['*', '*:before', '*:after'], {
	    boxSizing: 'inherit'
	  });

	  // Base body styles.
	  styles = setStyles(styles, 'body', {
	    color: options.bodyColor,
	    fontFamily: options.bodyFontFamily.join(','),
	    fontWeight: options.bodyWeight,
	    wordWrap: 'break-word',
	    fontKerning: 'normal',
	    MozFontFeatureSettings: '"kern", "liga", "clig", "calt"',
	    msFontFeatureSettings: '"kern", "liga", "clig", "calt"',
	    WebkitFontFeatureSettings: '"kern", "liga", "clig", "calt"',
	    fontFeatureSettings: '"kern", "liga", "clig", "calt"'
	  });

	  // Make images responsive.
	  styles = setStyles(styles, 'img', {
	    maxWidth: '100%'
	  });

	  // All block elements get one rhythm of bottom margin by default
	  // or whatever is passed in as option.
	  var blockMarginBottom = '';
	  if ((0, _isNumber2.default)(options.blockMarginBottom)) {
	    blockMarginBottom = vr.rhythm(options.blockMarginBottom);
	  } else if ((0, _isString2.default)(options.blockMarginBottom)) {
	    blockMarginBottom = options.blockMarginBottom;
	  } else {
	    blockMarginBottom = vr.rhythm(1);
	  }
	  styles = setStyles(styles, ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hgroup', 'ul', 'ol', 'dl', 'dd', 'p', 'figure', 'pre', 'table', 'fieldset', 'blockquote', 'form', 'noscript', 'iframe', 'img', 'hr', 'address'], {

	    // Reset margin/padding to 0.
	    marginLeft: 0,
	    marginRight: 0,
	    marginTop: 0,
	    paddingBottom: 0,
	    paddingLeft: 0,
	    paddingRight: 0,
	    paddingTop: 0,
	    marginBottom: blockMarginBottom
	  });

	  // Basic blockquote styles.
	  styles = setStyles(styles, 'blockquote', {
	    marginRight: vr.rhythm(1),
	    marginBottom: blockMarginBottom,
	    marginLeft: vr.rhythm(1)
	  });

	  // b, strong.
	  styles = setStyles(styles, ['b', 'strong', 'dt', 'th'], {
	    fontWeight: options.boldWeight
	  });

	  // hr.
	  styles = setStyles(styles, 'hr', {
	    background: (0, _grayPercentage2.default)(80),
	    border: 'none',
	    height: '1px',
	    marginBottom: 'calc(' + blockMarginBottom + ' - 1px)'
	  });

	  // ol, ul.
	  styles = setStyles(styles, ['ol', 'ul'], {
	    listStylePosition: 'outside',
	    listStyleImage: 'none',
	    marginLeft: vr.rhythm(1)
	  });

	  // li.
	  styles = setStyles(styles, 'li', {
	    marginBottom: 'calc(' + blockMarginBottom + ' / 2)'
	  });

	  // Remove default padding on list items.
	  styles = setStyles(styles, ['ol li', 'ul li'], {
	    paddingLeft: 0
	  });

	  // children ol, ul.
	  styles = setStyles(styles, ['li > ol', 'li > ul'], {
	    marginLeft: vr.rhythm(1),
	    marginBottom: 'calc(' + blockMarginBottom + ' / 2)',
	    marginTop: 'calc(' + blockMarginBottom + ' / 2)'
	  });

	  // Remove margin-bottom on the last-child of a few block elements
	  // The worst offender of this seems to be markdown => html compilers
	  // as they put paragraphs within LIs amoung other oddities.
	  styles = setStyles(styles, ['blockquote *:last-child', 'li *:last-child', 'p *:last-child'], {
	    marginBottom: 0
	  });

	  // Ensure li > p is 1/2 margin — this is another markdown => compiler oddity.
	  styles = setStyles(styles, ['li > p'], {
	    marginBottom: 'calc(' + blockMarginBottom + ' / 2)'
	  });

	  // Make generally smaller elements, smaller.
	  styles = setStyles(styles, ['code', 'kbd', 'pre', 'samp'], _extends({}, vr.adjustFontSizeTo('85%')));

	  // Abbr, Acronym.
	  styles = setStyles(styles, ['abbr', 'acronym'], {
	    borderBottom: '1px dotted ' + (0, _grayPercentage2.default)(50),
	    cursor: 'help'
	  });
	  styles['abbr[title]'] = {
	    borderBottom: '1px dotted ' + (0, _grayPercentage2.default)(50),
	    cursor: 'help',
	    textDecoration: 'none'
	  };

	  // Table styles.
	  styles = setStyles(styles, ['table'], _extends({}, vr.adjustFontSizeTo(options.baseFontSize), {
	    borderCollapse: 'collapse',
	    width: '100%'
	  }));
	  styles = setStyles(styles, ['thead'], {
	    textAlign: 'left'
	  });
	  styles = setStyles(styles, ['td,th'], {
	    textAlign: 'left',
	    borderBottom: '1px solid ' + (0, _grayPercentage2.default)(88),
	    fontFeatureSettings: 'tnum',
	    MozFontFeatureSettings: 'tnum',
	    msFontFeatureSettings: 'tnum',
	    WebkitFontFeatureSettings: 'tnum',
	    paddingLeft: vr.rhythm(2 / 3),
	    paddingRight: vr.rhythm(2 / 3),
	    paddingTop: vr.rhythm(1 / 2),
	    paddingBottom: 'calc(' + vr.rhythm(1 / 2) + ' - 1px)'
	  });
	  styles = setStyles(styles, 'th:first-child,td:first-child', {
	    paddingLeft: 0
	  });
	  styles = setStyles(styles, 'th:last-child,td:last-child', {
	    paddingRight: 0
	  });

	  // Create styles for headers.
	  styles = setStyles(styles, ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], {
	    color: options.headerColor,
	    fontFamily: options.headerFontFamily.join(','),
	    fontWeight: options.headerWeight,
	    textRendering: 'optimizeLegibility'
	  });

	  // Set header sizes.
	  var h1 = vr.scale(5 / 5);
	  var h2 = vr.scale(3 / 5);
	  var h3 = vr.scale(2 / 5);
	  var h4 = vr.scale(0 / 5);
	  var h5 = vr.scale(-1 / 5);
	  var h6 = vr.scale(-1.5 / 5);

	  (0, _forEach2.default)([h1, h2, h3, h4, h5, h6], function (header, i) {
	    styles = (0, _set2.default)(styles, 'h' + (i + 1) + '.fontSize', header.fontSize);
	    styles = (0, _set2.default)(styles, 'h' + (i + 1) + '.lineHeight', header.lineHeight);
	  });

	  // TODO add support for Breakpoints here.

	  // Call plugins if any.
	  if ((0, _isArray2.default)(options.plugins)) {
	    styles = (0, _reduce2.default)(options.plugins, function (stylesObj, plugin) {
	      return (0, _merge2.default)(stylesObj, plugin(vr, options, stylesObj));
	    }, styles);
	  }

	  // Call overrideStyles function on options (if set).
	  if (options.overrideStyles && (0, _isFunction2.default)(options.overrideStyles)) {
	    styles = (0, _merge2.default)(styles, options.overrideStyles(vr, options, styles));
	  }

	  // Call overrideThemeStyles function on options (if set).
	  if (options.overrideThemeStyles && (0, _isFunction2.default)(options.overrideThemeStyles)) {
	    styles = (0, _merge2.default)(styles, options.overrideThemeStyles(vr, options, styles));
	  }

	  return styles;
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	function isNumeric(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
	}


	module.exports = function(lightness, hue, darkBackground) {
	  if (typeof hue === "undefined") {
	    hue = 0;
	  }
	  if (typeof darkBackground === "undefined") {
	    darkBackground = false;
	  }

	  // Convert named hues into numeric lightness value.
	  if (hue === "cool") {
	    hue = 237;
	  }
	  else if (hue === "slate") {
	    hue = 122;
	  }
	  else if (hue === "warm") {
	    hue = 69;
	  }

	  if (!isNumeric(hue)) {
	    throw new Error("Hue is not a number");
	  }

	  if (!isNumeric(lightness)) {
	    throw new Error("Lightness is not a number");
	  }

	  if (lightness > 100) {
	    lightness = 100;
	  }
	  if (lightness < 0) {
	    lightness = 0;
	  }

	  var saturation = 0;
	  if (hue !== 0) {
	    var a = 19.92978;
	    var b = -0.3651759;
	    var c = 0.001737214;
	    saturation = a + b * lightness + c * Math.pow(lightness, 2);
	  }

	  var opacity = 0
	  if (darkBackground) {
	    opacity = lightness / 100
	    lightness = '100%,'
	  } else {
	    opacity = (100 - lightness) / 100
	    lightness = '0%,'
	  }

	  return "hsla(" + hue + "," + saturation + "%," + lightness + opacity + ")";
	};


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var baseSet = __webpack_require__(28);

	/**
	 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
	 * it's created. Arrays are created for missing index properties while objects
	 * are created for all other missing properties. Use `_.setWith` to customize
	 * `path` creation.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.set(object, 'a[0].b.c', 4);
	 * console.log(object.a[0].b.c);
	 * // => 4
	 *
	 * _.set(object, ['x', '0', 'y', 'z'], 5);
	 * console.log(object.x[0].y.z);
	 * // => 5
	 */
	function set(object, path, value) {
	  return object == null ? object : baseSet(object, path, value);
	}

	module.exports = set;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(29),
	    castPath = __webpack_require__(47),
	    isIndex = __webpack_require__(81),
	    isObject = __webpack_require__(41),
	    toKey = __webpack_require__(82);

	/**
	 * The base implementation of `_.set`.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @param {Function} [customizer] The function to customize path creation.
	 * @returns {Object} Returns `object`.
	 */
	function baseSet(object, path, value, customizer) {
	  if (!isObject(object)) {
	    return object;
	  }
	  path = castPath(path, object);

	  var index = -1,
	      length = path.length,
	      lastIndex = length - 1,
	      nested = object;

	  while (nested != null && ++index < length) {
	    var key = toKey(path[index]),
	        newValue = value;

	    if (index != lastIndex) {
	      var objValue = nested[key];
	      newValue = customizer ? customizer(objValue, key, nested) : undefined;
	      if (newValue === undefined) {
	        newValue = isObject(objValue)
	          ? objValue
	          : (isIndex(path[index + 1]) ? [] : {});
	      }
	    }
	    assignValue(nested, key, newValue);
	    nested = nested[key];
	  }
	  return object;
	}

	module.exports = baseSet;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(30),
	    eq = __webpack_require__(46);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	module.exports = assignValue;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(31);

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	module.exports = baseAssignValue;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(32);

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	module.exports = defineProperty;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(33),
	    getValue = __webpack_require__(45);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(34),
	    isMasked = __webpack_require__(42),
	    isObject = __webpack_require__(41),
	    toSource = __webpack_require__(44);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(35),
	    isObject = __webpack_require__(41);

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	module.exports = isFunction;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(36),
	    getRawTag = __webpack_require__(39),
	    objectToString = __webpack_require__(40);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(37);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(38);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 38 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(36);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ },
/* 40 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ },
/* 41 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(43);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(37);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ },
/* 44 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ },
/* 45 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ },
/* 46 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(48),
	    isKey = __webpack_require__(49),
	    stringToPath = __webpack_require__(52),
	    toString = __webpack_require__(78);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}

	module.exports = castPath;


/***/ },
/* 48 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(48),
	    isSymbol = __webpack_require__(50);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	module.exports = isKey;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(35),
	    isObjectLike = __webpack_require__(51);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 51 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(53);

	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(54);

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	module.exports = memoizeCapped;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(55);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(56),
	    mapCacheDelete = __webpack_require__(72),
	    mapCacheGet = __webpack_require__(75),
	    mapCacheHas = __webpack_require__(76),
	    mapCacheSet = __webpack_require__(77);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(57),
	    ListCache = __webpack_require__(64),
	    Map = __webpack_require__(71);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(58),
	    hashDelete = __webpack_require__(60),
	    hashGet = __webpack_require__(61),
	    hashHas = __webpack_require__(62),
	    hashSet = __webpack_require__(63);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(59);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	module.exports = hashClear;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(32);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 60 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = hashDelete;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(59);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(59);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(59);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(65),
	    listCacheDelete = __webpack_require__(66),
	    listCacheGet = __webpack_require__(68),
	    listCacheHas = __webpack_require__(69),
	    listCacheSet = __webpack_require__(70);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ },
/* 65 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	module.exports = listCacheClear;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(67);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	module.exports = listCacheDelete;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(46);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(67);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(67);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(67);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(32),
	    root = __webpack_require__(37);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(73);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = mapCacheDelete;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(74);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ },
/* 74 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(73);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(73);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(73);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	module.exports = mapCacheSet;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(79);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(36),
	    arrayMap = __webpack_require__(80),
	    isArray = __webpack_require__(48),
	    isSymbol = __webpack_require__(50);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = baseToString;


/***/ },
/* 80 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 81 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(50);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toKey;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(84),
	    baseEach = __webpack_require__(85),
	    castFunction = __webpack_require__(108),
	    isArray = __webpack_require__(48);

	/**
	 * Iterates over elements of `collection` and invokes `iteratee` for each element.
	 * The iteratee is invoked with three arguments: (value, index|key, collection).
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * **Note:** As with other "Collections" methods, objects with a "length"
	 * property are iterated like arrays. To avoid this behavior use `_.forIn`
	 * or `_.forOwn` for object iteration.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @alias each
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 * @see _.forEachRight
	 * @example
	 *
	 * _.forEach([1, 2], function(value) {
	 *   console.log(value);
	 * });
	 * // => Logs `1` then `2`.
	 *
	 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	 *   console.log(key);
	 * });
	 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	 */
	function forEach(collection, iteratee) {
	  var func = isArray(collection) ? arrayEach : baseEach;
	  return func(collection, castFunction(iteratee));
	}

	module.exports = forEach;


/***/ },
/* 84 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	module.exports = arrayEach;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(86),
	    createBaseEach = __webpack_require__(107);

	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);

	module.exports = baseEach;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(87),
	    keys = __webpack_require__(89);

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(88);

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;


/***/ },
/* 88 */
/***/ function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(90),
	    baseKeys = __webpack_require__(102),
	    isArrayLike = __webpack_require__(106);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	module.exports = keys;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(91),
	    isArguments = __webpack_require__(92),
	    isArray = __webpack_require__(48),
	    isBuffer = __webpack_require__(94),
	    isIndex = __webpack_require__(81),
	    isTypedArray = __webpack_require__(97);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;


/***/ },
/* 91 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(93),
	    isObjectLike = __webpack_require__(51);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	module.exports = isArguments;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(35),
	    isObjectLike = __webpack_require__(51);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	module.exports = baseIsArguments;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(37),
	    stubFalse = __webpack_require__(96);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(95)(module)))

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 96 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(98),
	    baseUnary = __webpack_require__(100),
	    nodeUtil = __webpack_require__(101);

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(35),
	    isLength = __webpack_require__(99),
	    isObjectLike = __webpack_require__(51);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	module.exports = baseIsTypedArray;


/***/ },
/* 99 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 100 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(38);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(95)(module)))

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(103),
	    nativeKeys = __webpack_require__(104);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeys;


/***/ },
/* 103 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(105);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	module.exports = nativeKeys;


/***/ },
/* 105 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(34),
	    isLength = __webpack_require__(99);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(106);

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	module.exports = createBaseEach;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(109);

	/**
	 * Casts `value` to `identity` if it's not a function.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Function} Returns cast function.
	 */
	function castFunction(value) {
	  return typeof value == 'function' ? value : identity;
	}

	module.exports = castFunction;


/***/ },
/* 109 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(35),
	    isObjectLike = __webpack_require__(51);

	/** `Object#toString` result references. */
	var numberTag = '[object Number]';

	/**
	 * Checks if `value` is classified as a `Number` primitive or object.
	 *
	 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
	 * classified as numbers, use the `_.isFinite` method.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
	 * @example
	 *
	 * _.isNumber(3);
	 * // => true
	 *
	 * _.isNumber(Number.MIN_VALUE);
	 * // => true
	 *
	 * _.isNumber(Infinity);
	 * // => true
	 *
	 * _.isNumber('3');
	 * // => false
	 */
	function isNumber(value) {
	  return typeof value == 'number' ||
	    (isObjectLike(value) && baseGetTag(value) == numberTag);
	}

	module.exports = isNumber;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(35),
	    isArray = __webpack_require__(48),
	    isObjectLike = __webpack_require__(51);

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
	}

	module.exports = isString;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var baseMerge = __webpack_require__(113),
	    createAssigner = __webpack_require__(137);

	/**
	 * This method is like `_.assign` except that it recursively merges own and
	 * inherited enumerable string keyed properties of source objects into the
	 * destination object. Source properties that resolve to `undefined` are
	 * skipped if a destination value exists. Array and plain object properties
	 * are merged recursively. Other objects and value types are overridden by
	 * assignment. Source objects are applied from left to right. Subsequent
	 * sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.5.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = {
	 *   'a': [{ 'b': 2 }, { 'd': 4 }]
	 * };
	 *
	 * var other = {
	 *   'a': [{ 'c': 3 }, { 'e': 5 }]
	 * };
	 *
	 * _.merge(object, other);
	 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	 */
	var merge = createAssigner(function(object, source, srcIndex) {
	  baseMerge(object, source, srcIndex);
	});

	module.exports = merge;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(114),
	    assignMergeValue = __webpack_require__(120),
	    baseFor = __webpack_require__(87),
	    baseMergeDeep = __webpack_require__(121),
	    isObject = __webpack_require__(41),
	    keysIn = __webpack_require__(134);

	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  baseFor(source, function(srcValue, key) {
	    if (isObject(srcValue)) {
	      stack || (stack = new Stack);
	      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    }
	    else {
	      var newValue = customizer
	        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
	        : undefined;

	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      assignMergeValue(object, key, newValue);
	    }
	  }, keysIn);
	}

	module.exports = baseMerge;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(64),
	    stackClear = __webpack_require__(115),
	    stackDelete = __webpack_require__(116),
	    stackGet = __webpack_require__(117),
	    stackHas = __webpack_require__(118),
	    stackSet = __webpack_require__(119);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(64);

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}

	module.exports = stackClear;


/***/ },
/* 116 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	module.exports = stackDelete;


/***/ },
/* 117 */
/***/ function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	module.exports = stackGet;


/***/ },
/* 118 */
/***/ function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	module.exports = stackHas;


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(64),
	    Map = __webpack_require__(71),
	    MapCache = __webpack_require__(55);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	module.exports = stackSet;


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(30),
	    eq = __webpack_require__(46);

	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue(object, key, value) {
	  if ((value !== undefined && !eq(object[key], value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	module.exports = assignMergeValue;


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var assignMergeValue = __webpack_require__(120),
	    cloneBuffer = __webpack_require__(122),
	    cloneTypedArray = __webpack_require__(123),
	    copyArray = __webpack_require__(126),
	    initCloneObject = __webpack_require__(127),
	    isArguments = __webpack_require__(92),
	    isArray = __webpack_require__(48),
	    isArrayLikeObject = __webpack_require__(130),
	    isBuffer = __webpack_require__(94),
	    isFunction = __webpack_require__(34),
	    isObject = __webpack_require__(41),
	    isPlainObject = __webpack_require__(131),
	    isTypedArray = __webpack_require__(97),
	    toPlainObject = __webpack_require__(132);

	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = object[key],
	      srcValue = source[key],
	      stacked = stack.get(srcValue);

	  if (stacked) {
	    assignMergeValue(object, key, stacked);
	    return;
	  }
	  var newValue = customizer
	    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	    : undefined;

	  var isCommon = newValue === undefined;

	  if (isCommon) {
	    var isArr = isArray(srcValue),
	        isBuff = !isArr && isBuffer(srcValue),
	        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

	    newValue = srcValue;
	    if (isArr || isBuff || isTyped) {
	      if (isArray(objValue)) {
	        newValue = objValue;
	      }
	      else if (isArrayLikeObject(objValue)) {
	        newValue = copyArray(objValue);
	      }
	      else if (isBuff) {
	        isCommon = false;
	        newValue = cloneBuffer(srcValue, true);
	      }
	      else if (isTyped) {
	        isCommon = false;
	        newValue = cloneTypedArray(srcValue, true);
	      }
	      else {
	        newValue = [];
	      }
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      newValue = objValue;
	      if (isArguments(objValue)) {
	        newValue = toPlainObject(objValue);
	      }
	      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
	        newValue = initCloneObject(srcValue);
	      }
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    stack.set(srcValue, newValue);
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	    stack['delete'](srcValue);
	  }
	  assignMergeValue(object, key, newValue);
	}

	module.exports = baseMergeDeep;


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(37);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

	  buffer.copy(result);
	  return result;
	}

	module.exports = cloneBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(95)(module)))

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(124);

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	module.exports = cloneTypedArray;


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var Uint8Array = __webpack_require__(125);

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	module.exports = cloneArrayBuffer;


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(37);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ },
/* 126 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	module.exports = copyArray;


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(128),
	    getPrototype = __webpack_require__(129),
	    isPrototype = __webpack_require__(103);

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}

	module.exports = initCloneObject;


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(41);

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());

	module.exports = baseCreate;


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(105);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(106),
	    isObjectLike = __webpack_require__(51);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(35),
	    getPrototype = __webpack_require__(129),
	    isObjectLike = __webpack_require__(51);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(133),
	    keysIn = __webpack_require__(134);

	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return copyObject(value, keysIn(value));
	}

	module.exports = toPlainObject;


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(29),
	    baseAssignValue = __webpack_require__(30);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	module.exports = copyObject;


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(90),
	    baseKeysIn = __webpack_require__(135),
	    isArrayLike = __webpack_require__(106);

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	module.exports = keysIn;


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(41),
	    isPrototype = __webpack_require__(103),
	    nativeKeysIn = __webpack_require__(136);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeysIn;


/***/ },
/* 136 */
/***/ function(module, exports) {

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = nativeKeysIn;


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(138),
	    isIterateeCall = __webpack_require__(145);

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(109),
	    overRest = __webpack_require__(139),
	    setToString = __webpack_require__(141);

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}

	module.exports = baseRest;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(140);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = overRest;


/***/ },
/* 140 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var baseSetToString = __webpack_require__(142),
	    shortOut = __webpack_require__(144);

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);

	module.exports = setToString;


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var constant = __webpack_require__(143),
	    defineProperty = __webpack_require__(31),
	    identity = __webpack_require__(109);

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	module.exports = baseSetToString;


/***/ },
/* 143 */
/***/ function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	module.exports = constant;


/***/ },
/* 144 */
/***/ function(module, exports) {

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	module.exports = shortOut;


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(46),
	    isArrayLike = __webpack_require__(106),
	    isIndex = __webpack_require__(81),
	    isObject = __webpack_require__(41);

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var arrayReduce = __webpack_require__(147),
	    baseEach = __webpack_require__(85),
	    baseIteratee = __webpack_require__(148),
	    baseReduce = __webpack_require__(186),
	    isArray = __webpack_require__(48);

	/**
	 * Reduces `collection` to a value which is the accumulated result of running
	 * each element in `collection` thru `iteratee`, where each successive
	 * invocation is supplied the return value of the previous. If `accumulator`
	 * is not given, the first element of `collection` is used as the initial
	 * value. The iteratee is invoked with four arguments:
	 * (accumulator, value, index|key, collection).
	 *
	 * Many lodash methods are guarded to work as iteratees for methods like
	 * `_.reduce`, `_.reduceRight`, and `_.transform`.
	 *
	 * The guarded methods are:
	 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
	 * and `sortBy`
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @returns {*} Returns the accumulated value.
	 * @see _.reduceRight
	 * @example
	 *
	 * _.reduce([1, 2], function(sum, n) {
	 *   return sum + n;
	 * }, 0);
	 * // => 3
	 *
	 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
	 *   (result[value] || (result[value] = [])).push(key);
	 *   return result;
	 * }, {});
	 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
	 */
	function reduce(collection, iteratee, accumulator) {
	  var func = isArray(collection) ? arrayReduce : baseReduce,
	      initAccum = arguments.length < 3;

	  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
	}

	module.exports = reduce;


/***/ },
/* 147 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	module.exports = arrayReduce;


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(149),
	    baseMatchesProperty = __webpack_require__(177),
	    identity = __webpack_require__(109),
	    isArray = __webpack_require__(48),
	    property = __webpack_require__(183);

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	module.exports = baseIteratee;


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(150),
	    getMatchData = __webpack_require__(174),
	    matchesStrictComparable = __webpack_require__(176);

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	module.exports = baseMatches;


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(114),
	    baseIsEqual = __webpack_require__(151);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(152),
	    isObjectLike = __webpack_require__(51);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}

	module.exports = baseIsEqual;


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(114),
	    equalArrays = __webpack_require__(153),
	    equalByTag = __webpack_require__(159),
	    equalObjects = __webpack_require__(162),
	    getTag = __webpack_require__(169),
	    isArray = __webpack_require__(48),
	    isBuffer = __webpack_require__(94),
	    isTypedArray = __webpack_require__(97);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);

	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;

	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	module.exports = baseIsEqualDeep;


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(154),
	    arraySome = __webpack_require__(157),
	    cacheHas = __webpack_require__(158);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalArrays;


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(55),
	    setCacheAdd = __webpack_require__(155),
	    setCacheHas = __webpack_require__(156);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ },
/* 155 */
/***/ function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ },
/* 156 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ },
/* 157 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ },
/* 158 */
/***/ function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(36),
	    Uint8Array = __webpack_require__(125),
	    eq = __webpack_require__(46),
	    equalArrays = __webpack_require__(153),
	    mapToArray = __webpack_require__(160),
	    setToArray = __webpack_require__(161);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ },
/* 160 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;


/***/ },
/* 161 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var getAllKeys = __webpack_require__(163);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalObjects;


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(164),
	    getSymbols = __webpack_require__(166),
	    keys = __webpack_require__(89);

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	module.exports = getAllKeys;


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(165),
	    isArray = __webpack_require__(48);

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	module.exports = baseGetAllKeys;


/***/ },
/* 165 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(167),
	    stubArray = __webpack_require__(168);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};

	module.exports = getSymbols;


/***/ },
/* 167 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	module.exports = arrayFilter;


/***/ },
/* 168 */
/***/ function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	module.exports = stubArray;


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(170),
	    Map = __webpack_require__(71),
	    Promise = __webpack_require__(171),
	    Set = __webpack_require__(172),
	    WeakMap = __webpack_require__(173),
	    baseGetTag = __webpack_require__(35),
	    toSource = __webpack_require__(44);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(32),
	    root = __webpack_require__(37);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(32),
	    root = __webpack_require__(37);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(32),
	    root = __webpack_require__(37);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(32),
	    root = __webpack_require__(37);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(175),
	    keys = __webpack_require__(89);

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}

	module.exports = getMatchData;


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(41);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;


/***/ },
/* 176 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	module.exports = matchesStrictComparable;


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(151),
	    get = __webpack_require__(178),
	    hasIn = __webpack_require__(180),
	    isKey = __webpack_require__(49),
	    isStrictComparable = __webpack_require__(175),
	    matchesStrictComparable = __webpack_require__(176),
	    toKey = __webpack_require__(82);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	  };
	}

	module.exports = baseMatchesProperty;


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(179);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(47),
	    toKey = __webpack_require__(82);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = castPath(path, object);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(181),
	    hasPath = __webpack_require__(182);

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	module.exports = hasIn;


/***/ },
/* 181 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	module.exports = baseHasIn;


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(47),
	    isArguments = __webpack_require__(92),
	    isArray = __webpack_require__(48),
	    isIndex = __webpack_require__(81),
	    isLength = __webpack_require__(99),
	    toKey = __webpack_require__(82);

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = castPath(path, object);

	  var index = -1,
	      length = path.length,
	      result = false;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}

	module.exports = hasPath;


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(184),
	    basePropertyDeep = __webpack_require__(185),
	    isKey = __webpack_require__(49),
	    toKey = __webpack_require__(82);

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = property;


/***/ },
/* 184 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(179);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	module.exports = basePropertyDeep;


/***/ },
/* 186 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.reduce` and `_.reduceRight`, without support
	 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} accumulator The initial value.
	 * @param {boolean} initAccum Specify using the first or last element of
	 *  `collection` as the initial value.
	 * @param {Function} eachFunc The function to iterate over `collection`.
	 * @returns {*} Returns the accumulated value.
	 */
	function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
	  eachFunc(collection, function(value, index, collection) {
	    accumulator = initAccum
	      ? (initAccum = false, value)
	      : iteratee(accumulator, value, index, collection);
	  });
	  return accumulator;
	}

	module.exports = baseReduce;


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typographyNormalize = __webpack_require__(188);

	var _typographyNormalize2 = _interopRequireDefault(_typographyNormalize);

	var _decamelize = __webpack_require__(189);

	var _decamelize2 = _interopRequireDefault(_decamelize);

	var _forEach = __webpack_require__(83);

	var _forEach2 = _interopRequireDefault(_forEach);

	var _reduce = __webpack_require__(146);

	var _reduce2 = _interopRequireDefault(_reduce);

	var _isObject = __webpack_require__(41);

	var _isObject2 = _interopRequireDefault(_isObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var compileStyles = function compileStyles(styles) {
	  return (0, _reduce2.default)(styles, function (stylesStr, ruleSet, selector) {
	    stylesStr += selector + '{'; // eslint-disable-line
	    (0, _forEach2.default)(ruleSet, function (value, property) {
	      if ((0, _isObject2.default)(value)) {
	        var newObject = {};
	        newObject[property] = value;
	        stylesStr += compileStyles(newObject); // eslint-disable-line
	      } else {
	        (function () {
	          var newStyle = (0, _decamelize2.default)(property, '-') + ':' + value + ';'; // eslint-disable-line
	          // If the property is prefixed, add an additional dash at the beginning.
	          var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
	          prefixes.forEach(function (prefix) {
	            if (property.slice(0, prefix.length) === prefix) {
	              newStyle = '-' + newStyle;
	            }
	          });
	          stylesStr += newStyle;
	        })();
	      }
	    });
	    stylesStr += '}'; // eslint-disable-line
	    return stylesStr;
	  }, '');
	};


	module.exports = function (vr, options, styles) {
	  // Compile styles to string.
	  var stylesStr = compileStyles(styles);

	  if (options.includeNormalize) {
	    stylesStr = '' + _typographyNormalize2.default + stylesStr;
	  }

	  return stylesStr;
	};

/***/ },
/* 188 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint-disable */
	/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */
	exports.default = 'html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,optgroup,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}';

/***/ },
/* 189 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str, sep) {
		if (typeof str !== 'string') {
			throw new TypeError('Expected a string');
		}

		sep = typeof sep === 'undefined' ? '_' : sep;

		return str
			.replace(/([a-z\d])([A-Z])/g, '$1' + sep + '$2')
			.replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + sep + '$2')
			.toLowerCase();
	};


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _grayPercentage = __webpack_require__(26);

	var _grayPercentage2 = _interopRequireDefault(_grayPercentage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var theme = {
	  title: 'Bootstrap',
	  baseFontSize: '16px',
	  baseLineHeight: 1.5,
	  bodyFontFamily: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
	  scaleRatio: 2.25,
	  bodyWeight: 400,
	  headerWeight: 500,
	  boldWeight: 'bold',
	  overrideStyles: function overrideStyles(_ref, options) {
	    var adjustFontSizeTo = _ref.adjustFontSizeTo,
	        scale = _ref.scale,
	        rhythm = _ref.rhythm;
	    return {
	      body: {
	        color: (0, _grayPercentage2.default)(23, 204)
	      },
	      h1: scale(4 / 4),
	      h2: scale(3 / 4),
	      h3: scale(2 / 4),
	      h4: scale(1 / 6),
	      h5: scale(-1 / 6),
	      h6: scale(-2 / 6),
	      blockquote: _extends({}, scale(1 / 4), {
	        borderLeft: rhythm(1 / 6) + ' solid #eceeef',
	        paddingTop: rhythm(1 / 3),
	        paddingBottom: rhythm(1 / 3),
	        paddingLeft: rhythm(2 / 3),
	        paddingRight: rhythm(2 / 3)
	      }),
	      'blockquote > :last-child': {
	        marginBottom: 0
	      },
	      'blockquote cite': _extends({}, adjustFontSizeTo(options.baseFontSize), {
	        color: (0, _grayPercentage2.default)(54, 204),
	        fontWeight: options.bodyWeight,
	        fontStyle: 'normal'
	      })
	    };
	  }
	};

	exports.default = theme;

/***/ }
/******/ ]);