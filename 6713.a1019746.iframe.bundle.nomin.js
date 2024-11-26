(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[6713],{

/***/ "../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/controls.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ builtinControls),
/* harmony export */   n: () => (/* binding */ controls)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/factory.js");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/** @typedef {import('./types').StoreDescriptor} StoreDescriptor */

const SELECT = '@@data/SELECT';
const RESOLVE_SELECT = '@@data/RESOLVE_SELECT';
const DISPATCH = '@@data/DISPATCH';
/**
 * Dispatches a control action for triggering a synchronous registry select.
 *
 * Note: This control synchronously returns the current selector value, triggering the
 * resolution, but not waiting for it.
 *
 * @param {string|StoreDescriptor} storeNameOrDescriptor Unique namespace identifier for the store
 * @param {string}                 selectorName          The name of the selector.
 * @param {Array}                  args                  Arguments for the selector.
 *
 * @example
 * ```js
 * import { controls } from '@wordpress/data';
 *
 * // Action generator using `select`.
 * export function* myAction() {
 *   const isEditorSideBarOpened = yield controls.select( 'core/edit-post', 'isEditorSideBarOpened' );
 *   // Do stuff with the result from the `select`.
 * }
 * ```
 *
 * @return {Object} The control descriptor.
 */

function select(storeNameOrDescriptor, selectorName) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return {
    type: SELECT,
    storeKey: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isObject)(storeNameOrDescriptor) ? storeNameOrDescriptor.name : storeNameOrDescriptor,
    selectorName,
    args
  };
}
/**
 * Dispatches a control action for triggering and resolving a registry select.
 *
 * Note: when this control action is handled, it automatically considers
 * selectors that may have a resolver. In such case, it will return a `Promise` that resolves
 * after the selector finishes resolving, with the final result value.
 *
 * @param {string|StoreDescriptor} storeNameOrDescriptor Unique namespace identifier for the store
 * @param {string}                 selectorName          The name of the selector
 * @param {Array}                  args                  Arguments for the selector.
 *
 * @example
 * ```js
 * import { controls } from '@wordpress/data';
 *
 * // Action generator using resolveSelect
 * export function* myAction() {
 * 	const isSidebarOpened = yield controls.resolveSelect( 'core/edit-post', 'isEditorSideBarOpened' );
 * 	// do stuff with the result from the select.
 * }
 * ```
 *
 * @return {Object} The control descriptor.
 */


function resolveSelect(storeNameOrDescriptor, selectorName) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  return {
    type: RESOLVE_SELECT,
    storeKey: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isObject)(storeNameOrDescriptor) ? storeNameOrDescriptor.name : storeNameOrDescriptor,
    selectorName,
    args
  };
}
/**
 * Dispatches a control action for triggering a registry dispatch.
 *
 * @param {string|StoreDescriptor} storeNameOrDescriptor Unique namespace identifier for the store
 * @param {string}                 actionName            The name of the action to dispatch
 * @param {Array}                  args                  Arguments for the dispatch action.
 *
 * @example
 * ```js
 * import { controls } from '@wordpress/data-controls';
 *
 * // Action generator using dispatch
 * export function* myAction() {
 *   yield controls.dispatch( 'core/edit-post', 'togglePublishSidebar' );
 *   // do some other things.
 * }
 * ```
 *
 * @return {Object}  The control descriptor.
 */


function dispatch(storeNameOrDescriptor, actionName) {
  for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    args[_key3 - 2] = arguments[_key3];
  }

  return {
    type: DISPATCH,
    storeKey: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isObject)(storeNameOrDescriptor) ? storeNameOrDescriptor.name : storeNameOrDescriptor,
    actionName,
    args
  };
}

const controls = {
  select,
  resolveSelect,
  dispatch
};
const builtinControls = {
  [SELECT]: (0,_factory__WEBPACK_IMPORTED_MODULE_1__/* .createRegistryControl */ .b)(registry => _ref => {
    let {
      storeKey,
      selectorName,
      args
    } = _ref;
    return registry.select(storeKey)[selectorName](...args);
  }),
  [RESOLVE_SELECT]: (0,_factory__WEBPACK_IMPORTED_MODULE_1__/* .createRegistryControl */ .b)(registry => _ref2 => {
    let {
      storeKey,
      selectorName,
      args
    } = _ref2;
    const method = registry.select(storeKey)[selectorName].hasResolver ? 'resolveSelect' : 'select';
    return registry[method](storeKey)[selectorName](...args);
  }),
  [DISPATCH]: (0,_factory__WEBPACK_IMPORTED_MODULE_1__/* .createRegistryControl */ .b)(registry => _ref3 => {
    let {
      storeKey,
      actionName,
      args
    } = _ref3;
    return registry.dispatch(storeKey)[actionName](...args);
  })
};
//# sourceMappingURL=controls.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/default-registry.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/registry.js");
/**
 * Internal dependencies
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_registry__WEBPACK_IMPORTED_MODULE_0__/* .createRegistry */ .I)());
//# sourceMappingURL=default-registry.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/factory.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ createRegistrySelector),
/* harmony export */   b: () => (/* binding */ createRegistryControl)
/* harmony export */ });
/**
 * Creates a selector function that takes additional curried argument with the
 * registry `select` function. While a regular selector has signature
 * ```js
 * ( state, ...selectorArgs ) => ( result )
 * ```
 * that allows to select data from the store's `state`, a registry selector
 * has signature:
 * ```js
 * ( select ) => ( state, ...selectorArgs ) => ( result )
 * ```
 * that supports also selecting from other registered stores.
 *
 * @example
 * ```js
 * const getCurrentPostId = createRegistrySelector( ( select ) => ( state ) => {
 *   return select( 'core/editor' ).getCurrentPostId();
 * } );
 *
 * const getPostEdits = createRegistrySelector( ( select ) => ( state ) => {
 *   // calling another registry selector just like any other function
 *   const postType = getCurrentPostType( state );
 *   const postId = getCurrentPostId( state );
 *	 return select( 'core' ).getEntityRecordEdits( 'postType', postType, postId );
 * } );
 * ```
 *
 * Note how the `getCurrentPostId` selector can be called just like any other function,
 * (it works even inside a regular non-registry selector) and we don't need to pass the
 * registry as argument. The registry binding happens automatically when registering the selector
 * with a store.
 *
 * @param {Function} registrySelector Function receiving a registry `select`
 *                                    function and returning a state selector.
 *
 * @return {Function} Registry selector that can be registered with a store.
 */
function createRegistrySelector(registrySelector) {
  // Create a selector function that is bound to the registry referenced by `selector.registry`
  // and that has the same API as a regular selector. Binding it in such a way makes it
  // possible to call the selector directly from another selector.
  const selector = function () {
    return registrySelector(selector.registry.select)(...arguments);
  };
  /**
   * Flag indicating that the selector is a registry selector that needs the correct registry
   * reference to be assigned to `selecto.registry` to make it work correctly.
   * be mapped as a registry selector.
   *
   * @type {boolean}
   */


  selector.isRegistrySelector = true;
  return selector;
}
/**
 * Creates a control function that takes additional curried argument with the `registry` object.
 * While a regular control has signature
 * ```js
 * ( action ) => ( iteratorOrPromise )
 * ```
 * where the control works with the `action` that it's bound to, a registry control has signature:
 * ```js
 * ( registry ) => ( action ) => ( iteratorOrPromise )
 * ```
 * A registry control is typically used to select data or dispatch an action to a registered
 * store.
 *
 * When registering a control created with `createRegistryControl` with a store, the store
 * knows which calling convention to use when executing the control.
 *
 * @param {Function} registryControl Function receiving a registry object and returning a control.
 *
 * @return {Function} Registry control that can be registered with a store.
 */

function createRegistryControl(registryControl) {
  registryControl.isRegistryControl = true;
  return registryControl;
}
//# sourceMappingURL=factory.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/redux-store/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ createReduxStore)
});

// NAMESPACE OBJECT: ../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/redux-store/metadata/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, {
  getCachedResolvers: () => (getCachedResolvers),
  getIsResolving: () => (getIsResolving),
  getResolutionError: () => (getResolutionError),
  getResolutionState: () => (getResolutionState),
  hasFinishedResolution: () => (hasFinishedResolution),
  hasResolutionFailed: () => (hasResolutionFailed),
  hasStartedResolution: () => (hasStartedResolution),
  isResolving: () => (isResolving)
});

// NAMESPACE OBJECT: ../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/redux-store/metadata/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, {
  failResolution: () => (failResolution),
  failResolutions: () => (failResolutions),
  finishResolution: () => (finishResolution),
  finishResolutions: () => (finishResolutions),
  invalidateResolution: () => (invalidateResolution),
  invalidateResolutionForStore: () => (invalidateResolutionForStore),
  invalidateResolutionForStoreSelector: () => (invalidateResolutionForStoreSelector),
  startResolution: () => (startResolution),
  startResolutions: () => (startResolutions)
});

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/redux@4.2.1/node_modules/redux/es/redux.js


/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (false) {}

  return typeOfVal;
}

/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error( true ? formatProdErrorMessage(0) : 0);
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error( true ? formatProdErrorMessage(1) : 0);
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error( true ? formatProdErrorMessage(2) : 0);
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(3) : 0);
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error( true ? formatProdErrorMessage(4) : 0);
    }

    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(5) : 0);
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error( true ? formatProdErrorMessage(6) : 0);
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( true ? formatProdErrorMessage(7) : 0);
    }

    if (typeof action.type === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(8) : 0);
    }

    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(9) : 0);
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error( true ? formatProdErrorMessage(10) : 0);
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error( true ? formatProdErrorMessage(11) : 0);
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

var legacy_createStore = (/* unused pure expression or super */ null && (createStore));

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(12) : 0);
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(13) : 0);
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error( true ? formatProdErrorMessage(14) : 0);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error( true ? formatProdErrorMessage(16) : 0);
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error( true ? formatProdErrorMessage(15) : 0);
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2(_objectSpread2({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/turbo-combine-reducers@1.0.2/node_modules/turbo-combine-reducers/index.js
var turbo_combine_reducers = __webpack_require__("../../node_modules/.pnpm/turbo-combine-reducers@1.0.2/node_modules/turbo-combine-reducers/index.js");
var turbo_combine_reducers_default = /*#__PURE__*/__webpack_require__.n(turbo_combine_reducers);
// EXTERNAL MODULE: ../../node_modules/.pnpm/equivalent-key-map@0.2.2/node_modules/equivalent-key-map/equivalent-key-map.js
var equivalent_key_map = __webpack_require__("../../node_modules/.pnpm/equivalent-key-map@0.2.2/node_modules/equivalent-key-map/equivalent-key-map.js");
var equivalent_key_map_default = /*#__PURE__*/__webpack_require__.n(equivalent_key_map);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+redux-routine@4.58.0_redux@4.2.1/node_modules/@wordpress/redux-routine/build-module/is-generator.js
/* eslint-disable jsdoc/valid-types */
/**
 * Returns true if the given object is a generator, or false otherwise.
 *
 * @see https://www.ecma-international.org/ecma-262/6.0/#sec-generator-objects
 *
 * @param {any} object Object to test.
 *
 * @return {object is Generator} Whether object is a generator.
 */
function isGenerator(object) {
  /* eslint-enable jsdoc/valid-types */
  // Check that iterator (next) and iterable (Symbol.iterator) interfaces are satisfied.
  // These checks seem to be compatible with several generator helpers as well as the native implementation.
  return !!object && typeof object[Symbol.iterator] === 'function' && typeof object.next === 'function';
}
//# sourceMappingURL=is-generator.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/index.js
var dist = __webpack_require__("../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/is-promise@4.0.0/node_modules/is-promise/index.mjs
function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs
var is_plain_object = __webpack_require__("../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+redux-routine@4.58.0_redux@4.2.1/node_modules/@wordpress/redux-routine/build-module/is-action.js
/**
 * External dependencies
 */


/* eslint-disable jsdoc/valid-types */
/**
 * Returns true if the given object quacks like an action.
 *
 * @param {any} object Object to test
 *
 * @return {object is import('redux').AnyAction}  Whether object is an action.
 */
function isAction(object) {
  return (0,is_plain_object/* isPlainObject */.Q)(object) && typeof object.type === 'string';
}

/**
 * Returns true if the given object quacks like an action and has a specific
 * action type
 *
 * @param {unknown} object       Object to test
 * @param {string}  expectedType The expected type for the action.
 *
 * @return {object is import('redux').AnyAction} Whether object is an action and is of specific type.
 */
function isActionOfType(object, expectedType) {
  /* eslint-enable jsdoc/valid-types */
  return isAction(object) && object.type === expectedType;
}
//# sourceMappingURL=is-action.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+redux-routine@4.58.0_redux@4.2.1/node_modules/@wordpress/redux-routine/build-module/runtime.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


/**
 * Create a co-routine runtime.
 *
 * @param controls Object of control handlers.
 * @param dispatch Unhandled action dispatch.
 */
function createRuntime(controls = {}, dispatch) {
  const rungenControls = Object.entries(controls).map(([actionType, control]) => (value, next, iterate, yieldNext, yieldError) => {
    if (!isActionOfType(value, actionType)) {
      return false;
    }
    const routine = control(value);
    if (isPromise(routine)) {
      // Async control routine awaits resolution.
      routine.then(yieldNext, yieldError);
    } else {
      yieldNext(routine);
    }
    return true;
  });
  const unhandledActionControl = (value, next) => {
    if (!isAction(value)) {
      return false;
    }
    dispatch(value);
    next();
    return true;
  };
  rungenControls.push(unhandledActionControl);
  const rungenRuntime = (0,dist.create)(rungenControls);
  return action => new Promise((resolve, reject) => rungenRuntime(action, result => {
    if (isAction(result)) {
      dispatch(result);
    }
    resolve(result);
  }, reject));
}
//# sourceMappingURL=runtime.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+redux-routine@4.58.0_redux@4.2.1/node_modules/@wordpress/redux-routine/build-module/index.js
/**
 * Internal dependencies
 */



/**
 * Creates a Redux middleware, given an object of controls where each key is an
 * action type for which to act upon, the value a function which returns either
 * a promise which is to resolve when evaluation of the action should continue,
 * or a value. The value or resolved promise value is assigned on the return
 * value of the yield assignment. If the control handler returns undefined, the
 * execution is not continued.
 *
 * @param {Record<string, (value: import('redux').AnyAction) => Promise<boolean> | boolean>} controls Object of control handlers.
 *
 * @return {import('redux').Middleware} Co-routine runtime
 */
function createMiddleware(controls = {}) {
  return store => {
    const runtime = createRuntime(controls, store.dispatch);
    return next => action => {
      if (!isGenerator(action)) {
        return next(action);
      }
      return runtime(action);
    };
  };
}
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/controls.js
var build_module_controls = __webpack_require__("../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/controls.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/promise-middleware.js
/**
 * External dependencies
 */

/**
 * Simplest possible promise redux middleware.
 *
 * @type {import('redux').Middleware}
 */

const promiseMiddleware = () => next => action => {
  if (isPromise(action)) {
    return action.then(resolvedAction => {
      if (resolvedAction) {
        return next(resolvedAction);
      }
    });
  }

  return next(action);
};

/* harmony default export */ const promise_middleware = (promiseMiddleware);
//# sourceMappingURL=promise-middleware.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/store/index.js
var store = __webpack_require__("../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/store/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/resolvers-cache-middleware.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/** @typedef {import('./registry').WPDataRegistry} WPDataRegistry */

/**
 * Creates a middleware handling resolvers cache invalidation.
 *
 * @param {WPDataRegistry} registry   The registry reference for which to create
 *                                    the middleware.
 * @param {string}         reducerKey The namespace for which to create the
 *                                    middleware.
 *
 * @return {Function} Middleware function.
 */

const createResolversCacheMiddleware = (registry, reducerKey) => () => next => action => {
  const resolvers = registry.select(store/* default */.A).getCachedResolvers(reducerKey);
  Object.entries(resolvers).forEach(_ref => {
    let [selectorName, resolversByArgs] = _ref;
    const resolver = (0,lodash.get)(registry.stores, [reducerKey, 'resolvers', selectorName]);

    if (!resolver || !resolver.shouldInvalidate) {
      return;
    }

    resolversByArgs.forEach((value, args) => {
      // resolversByArgs is the map Map([ args ] => boolean) storing the cache resolution status for a given selector.
      // If the value is "finished" or "error" it means this resolver has finished its resolution which means we need
      // to invalidate it, if it's true it means it's inflight and the invalidation is not necessary.
      if ((value === null || value === void 0 ? void 0 : value.status) !== 'finished' && (value === null || value === void 0 ? void 0 : value.status) !== 'error' || !resolver.shouldInvalidate(action, ...args)) {
        return;
      } // Trigger cache invalidation


      registry.dispatch(store/* default */.A).invalidateResolution(reducerKey, selectorName, args);
    });
  });
  return next(action);
};

/* harmony default export */ const resolvers_cache_middleware = (createResolversCacheMiddleware);
//# sourceMappingURL=resolvers-cache-middleware.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/redux-store/thunk-middleware.js
function createThunkMiddleware(args) {
  return () => next => action => {
    if (typeof action === 'function') {
      return action(args);
    }

    return next(action);
  };
}
//# sourceMappingURL=thunk-middleware.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/redux-store/metadata/utils.js
/**
 * External dependencies
 */

/**
 * Higher-order reducer creator which creates a combined reducer object, keyed
 * by a property on the action object.
 *
 * @param  actionProperty Action property by which to key object.
 * @return Higher-order reducer.
 */
const onSubKey = actionProperty => reducer => function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;
  // Retrieve subkey from action. Do not track if undefined; useful for cases
  // where reducer is scoped by action shape.
  const key = action[actionProperty];

  if (key === undefined) {
    return state;
  } // Avoid updating state if unchanged. Note that this also accounts for a
  // reducer which returns undefined on a key which is not yet tracked.


  const nextKeyState = reducer(state[key], action);

  if (nextKeyState === state[key]) {
    return state;
  }

  return { ...state,
    [key]: nextKeyState
  };
};
/**
 * Normalize selector argument array by defaulting `undefined` value to an empty array
 * and removing trailing `undefined` values.
 *
 * @param  args Selector argument array
 * @return Normalized state key array
 */

function selectorArgsToStateKey(args) {
  if (args === undefined || args === null) {
    return [];
  }

  const len = args.length;
  let idx = len;

  while (idx > 0 && args[idx - 1] === undefined) {
    idx--;
  }

  return idx === len ? args : args.slice(0, idx);
}
//# sourceMappingURL=utils.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/redux-store/metadata/reducer.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


/**
 * Reducer function returning next state for selector resolution of
 * subkeys, object form:
 *
 *  selectorName -> EquivalentKeyMap<Array,boolean>
 */
const subKeysIsResolved = onSubKey('selectorName')(function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new (equivalent_key_map_default())();
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'START_RESOLUTION':
      {
        const nextState = new (equivalent_key_map_default())(state);
        nextState.set(selectorArgsToStateKey(action.args), {
          status: 'resolving'
        });
        return nextState;
      }

    case 'FINISH_RESOLUTION':
      {
        const nextState = new (equivalent_key_map_default())(state);
        nextState.set(selectorArgsToStateKey(action.args), {
          status: 'finished'
        });
        return nextState;
      }

    case 'FAIL_RESOLUTION':
      {
        const nextState = new (equivalent_key_map_default())(state);
        nextState.set(selectorArgsToStateKey(action.args), {
          status: 'error',
          error: action.error
        });
        return nextState;
      }

    case 'START_RESOLUTIONS':
      {
        const nextState = new (equivalent_key_map_default())(state);

        for (const resolutionArgs of action.args) {
          nextState.set(selectorArgsToStateKey(resolutionArgs), {
            status: 'resolving'
          });
        }

        return nextState;
      }

    case 'FINISH_RESOLUTIONS':
      {
        const nextState = new (equivalent_key_map_default())(state);

        for (const resolutionArgs of action.args) {
          nextState.set(selectorArgsToStateKey(resolutionArgs), {
            status: 'finished'
          });
        }

        return nextState;
      }

    case 'FAIL_RESOLUTIONS':
      {
        const nextState = new (equivalent_key_map_default())(state);
        action.args.forEach((resolutionArgs, idx) => {
          const resolutionState = {
            status: 'error',
            error: undefined
          };
          const error = action.errors[idx];

          if (error) {
            resolutionState.error = error;
          }

          nextState.set(selectorArgsToStateKey(resolutionArgs), resolutionState);
        });
        return nextState;
      }

    case 'INVALIDATE_RESOLUTION':
      {
        const nextState = new (equivalent_key_map_default())(state);
        nextState.delete(selectorArgsToStateKey(action.args));
        return nextState;
      }
  }

  return state;
});
/**
 * Reducer function returning next state for selector resolution, object form:
 *
 *   selectorName -> EquivalentKeyMap<Array, boolean>
 *
 * @param  state  Current state.
 * @param  action Dispatched action.
 *
 * @return Next state.
 */

const isResolved = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'INVALIDATE_RESOLUTION_FOR_STORE':
      return {};

    case 'INVALIDATE_RESOLUTION_FOR_STORE_SELECTOR':
      return (0,lodash.has)(state, [action.selectorName]) ? (0,lodash.omit)(state, [action.selectorName]) : state;

    case 'START_RESOLUTION':
    case 'FINISH_RESOLUTION':
    case 'FAIL_RESOLUTION':
    case 'START_RESOLUTIONS':
    case 'FINISH_RESOLUTIONS':
    case 'FAIL_RESOLUTIONS':
    case 'INVALIDATE_RESOLUTION':
      return subKeysIsResolved(state, action);
  }

  return state;
};

/* harmony default export */ const metadata_reducer = (isResolved);
//# sourceMappingURL=reducer.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/redux-store/metadata/selectors.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/** @typedef {Record<string, import('./reducer').State>} State */

/** @typedef {import('./reducer').StateValue} StateValue */

/** @typedef {import('./reducer').Status} Status */

/**
 * Returns the raw resolution state value for a given selector name,
 * and arguments set. May be undefined if the selector has never been resolved
 * or not resolved for the given set of arguments, otherwise true or false for
 * resolution started and completed respectively.
 *
 * @param {State}      state        Data state.
 * @param {string}     selectorName Selector name.
 * @param {unknown[]?} args         Arguments passed to selector.
 *
 * @return {StateValue|undefined} isResolving value.
 */

function getResolutionState(state, selectorName, args) {
  const map = (0,lodash.get)(state, [selectorName]);

  if (!map) {
    return;
  }

  return map.get(selectorArgsToStateKey(args));
}
/**
 * Returns the raw `isResolving` value for a given selector name,
 * and arguments set. May be undefined if the selector has never been resolved
 * or not resolved for the given set of arguments, otherwise true or false for
 * resolution started and completed respectively.
 *
 * @param {State}      state        Data state.
 * @param {string}     selectorName Selector name.
 * @param {unknown[]?} args         Arguments passed to selector.
 *
 * @return {boolean | undefined} isResolving value.
 */

function getIsResolving(state, selectorName, args) {
  const resolutionState = getResolutionState(state, selectorName, args);
  return resolutionState && resolutionState.status === 'resolving';
}
/**
 * Returns true if resolution has already been triggered for a given
 * selector name, and arguments set.
 *
 * @param {State}      state        Data state.
 * @param {string}     selectorName Selector name.
 * @param {unknown[]?} args         Arguments passed to selector.
 *
 * @return {boolean} Whether resolution has been triggered.
 */

function hasStartedResolution(state, selectorName, args) {
  return getResolutionState(state, selectorName, args) !== undefined;
}
/**
 * Returns true if resolution has completed for a given selector
 * name, and arguments set.
 *
 * @param {State}      state        Data state.
 * @param {string}     selectorName Selector name.
 * @param {unknown[]?} args         Arguments passed to selector.
 *
 * @return {boolean} Whether resolution has completed.
 */

function hasFinishedResolution(state, selectorName, args) {
  var _getResolutionState;

  const status = (_getResolutionState = getResolutionState(state, selectorName, args)) === null || _getResolutionState === void 0 ? void 0 : _getResolutionState.status;
  return status === 'finished' || status === 'error';
}
/**
 * Returns true if resolution has failed for a given selector
 * name, and arguments set.
 *
 * @param {State}      state        Data state.
 * @param {string}     selectorName Selector name.
 * @param {unknown[]?} args         Arguments passed to selector.
 *
 * @return {boolean} Has resolution failed
 */

function hasResolutionFailed(state, selectorName, args) {
  var _getResolutionState2;

  return ((_getResolutionState2 = getResolutionState(state, selectorName, args)) === null || _getResolutionState2 === void 0 ? void 0 : _getResolutionState2.status) === 'error';
}
/**
 * Returns the resolution error for a given selector name, and arguments set.
 * Note it may be of an Error type, but may also be null, undefined, or anything else
 * that can be `throw`-n.
 *
 * @param {State}      state        Data state.
 * @param {string}     selectorName Selector name.
 * @param {unknown[]?} args         Arguments passed to selector.
 *
 * @return {Error|unknown} Last resolution error
 */

function getResolutionError(state, selectorName, args) {
  const resolutionState = getResolutionState(state, selectorName, args);
  return (resolutionState === null || resolutionState === void 0 ? void 0 : resolutionState.status) === 'error' ? resolutionState.error : null;
}
/**
 * Returns true if resolution has been triggered but has not yet completed for
 * a given selector name, and arguments set.
 *
 * @param {State}      state        Data state.
 * @param {string}     selectorName Selector name.
 * @param {unknown[]?} args         Arguments passed to selector.
 *
 * @return {boolean} Whether resolution is in progress.
 */

function isResolving(state, selectorName, args) {
  var _getResolutionState3;

  return ((_getResolutionState3 = getResolutionState(state, selectorName, args)) === null || _getResolutionState3 === void 0 ? void 0 : _getResolutionState3.status) === 'resolving';
}
/**
 * Returns the list of the cached resolvers.
 *
 * @param {State} state Data state.
 *
 * @return {State} Resolvers mapped by args and selectorName.
 */

function getCachedResolvers(state) {
  return state;
}
//# sourceMappingURL=selectors.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/redux-store/metadata/actions.js
/**
 * Returns an action object used in signalling that selector resolution has
 * started.
 *
 * @param {string}    selectorName Name of selector for which resolver triggered.
 * @param {unknown[]} args         Arguments to associate for uniqueness.
 *
 * @return {{ type: 'START_RESOLUTION', selectorName: string, args: unknown[] }} Action object.
 */
function startResolution(selectorName, args) {
  return {
    type: 'START_RESOLUTION',
    selectorName,
    args
  };
}
/**
 * Returns an action object used in signalling that selector resolution has
 * completed.
 *
 * @param {string}    selectorName Name of selector for which resolver triggered.
 * @param {unknown[]} args         Arguments to associate for uniqueness.
 *
 * @return {{ type: 'FINISH_RESOLUTION', selectorName: string, args: unknown[] }} Action object.
 */

function finishResolution(selectorName, args) {
  return {
    type: 'FINISH_RESOLUTION',
    selectorName,
    args
  };
}
/**
 * Returns an action object used in signalling that selector resolution has
 * failed.
 *
 * @param {string}        selectorName Name of selector for which resolver triggered.
 * @param {unknown[]}     args         Arguments to associate for uniqueness.
 * @param {Error|unknown} error        The error that caused the failure.
 *
 * @return {{ type: 'FAIL_RESOLUTION', selectorName: string, args: unknown[], error: Error|unknown }} Action object.
 */

function failResolution(selectorName, args, error) {
  return {
    type: 'FAIL_RESOLUTION',
    selectorName,
    args,
    error
  };
}
/**
 * Returns an action object used in signalling that a batch of selector resolutions has
 * started.
 *
 * @param {string}      selectorName Name of selector for which resolver triggered.
 * @param {unknown[][]} args         Array of arguments to associate for uniqueness, each item
 *                                   is associated to a resolution.
 *
 * @return {{ type: 'START_RESOLUTIONS', selectorName: string, args: unknown[][] }} Action object.
 */

function startResolutions(selectorName, args) {
  return {
    type: 'START_RESOLUTIONS',
    selectorName,
    args
  };
}
/**
 * Returns an action object used in signalling that a batch of selector resolutions has
 * completed.
 *
 * @param {string}      selectorName Name of selector for which resolver triggered.
 * @param {unknown[][]} args         Array of arguments to associate for uniqueness, each item
 *                                   is associated to a resolution.
 *
 * @return {{ type: 'FINISH_RESOLUTIONS', selectorName: string, args: unknown[][] }} Action object.
 */

function finishResolutions(selectorName, args) {
  return {
    type: 'FINISH_RESOLUTIONS',
    selectorName,
    args
  };
}
/**
 * Returns an action object used in signalling that a batch of selector resolutions has
 * completed and at least one of them has failed.
 *
 * @param {string}            selectorName Name of selector for which resolver triggered.
 * @param {unknown[]}         args         Array of arguments to associate for uniqueness, each item
 *                                         is associated to a resolution.
 * @param {(Error|unknown)[]} errors       Array of errors to associate for uniqueness, each item
 *                                         is associated to a resolution.
 * @return {{ type: 'FAIL_RESOLUTIONS', selectorName: string, args: unknown[], errors: Array<Error|unknown> }} Action object.
 */

function failResolutions(selectorName, args, errors) {
  return {
    type: 'FAIL_RESOLUTIONS',
    selectorName,
    args,
    errors
  };
}
/**
 * Returns an action object used in signalling that we should invalidate the resolution cache.
 *
 * @param {string}    selectorName Name of selector for which resolver should be invalidated.
 * @param {unknown[]} args         Arguments to associate for uniqueness.
 *
 * @return {{ type: 'INVALIDATE_RESOLUTION', selectorName: string, args: any[] }} Action object.
 */

function invalidateResolution(selectorName, args) {
  return {
    type: 'INVALIDATE_RESOLUTION',
    selectorName,
    args
  };
}
/**
 * Returns an action object used in signalling that the resolution
 * should be invalidated.
 *
 * @return {{ type: 'INVALIDATE_RESOLUTION_FOR_STORE' }} Action object.
 */

function invalidateResolutionForStore() {
  return {
    type: 'INVALIDATE_RESOLUTION_FOR_STORE'
  };
}
/**
 * Returns an action object used in signalling that the resolution cache for a
 * given selectorName should be invalidated.
 *
 * @param {string} selectorName Name of selector for which all resolvers should
 *                              be invalidated.
 *
 * @return  {{ type: 'INVALIDATE_RESOLUTION_FOR_STORE_SELECTOR', selectorName: string }} Action object.
 */

function invalidateResolutionForStoreSelector(selectorName) {
  return {
    type: 'INVALIDATE_RESOLUTION_FOR_STORE_SELECTOR',
    selectorName
  };
}
//# sourceMappingURL=actions.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/redux-store/index.js
/**
 * External dependencies
 */




/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */








/** @typedef {import('../types').DataRegistry} DataRegistry */

/** @typedef {import('../types').StoreDescriptor} StoreDescriptor */

/** @typedef {import('../types').ReduxStoreConfig} ReduxStoreConfig */

const trimUndefinedValues = array => {
  const result = [...array];

  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] === undefined) {
      result.splice(i, 1);
    }
  }

  return result;
};
/**
 * Create a cache to track whether resolvers started running or not.
 *
 * @return {Object} Resolvers Cache.
 */


function createResolversCache() {
  const cache = {};
  return {
    isRunning(selectorName, args) {
      return cache[selectorName] && cache[selectorName].get(trimUndefinedValues(args));
    },

    clear(selectorName, args) {
      if (cache[selectorName]) {
        cache[selectorName].delete(trimUndefinedValues(args));
      }
    },

    markAsRunning(selectorName, args) {
      if (!cache[selectorName]) {
        cache[selectorName] = new (equivalent_key_map_default())();
      }

      cache[selectorName].set(trimUndefinedValues(args), true);
    }

  };
}
/**
 * Creates a data store descriptor for the provided Redux store configuration containing
 * properties describing reducer, actions, selectors, controls and resolvers.
 *
 * @example
 * ```js
 * import { createReduxStore } from '@wordpress/data';
 *
 * const store = createReduxStore( 'demo', {
 *     reducer: ( state = 'OK' ) => state,
 *     selectors: {
 *         getValue: ( state ) => state,
 *     },
 * } );
 * ```
 *
 * @param {string}           key     Unique namespace identifier.
 * @param {ReduxStoreConfig} options Registered store options, with properties
 *                                   describing reducer, actions, selectors,
 *                                   and resolvers.
 *
 * @return {StoreDescriptor} Store Object.
 */


function createReduxStore(key, options) {
  return {
    name: key,
    instantiate: registry => {
      const reducer = options.reducer;
      const thunkArgs = {
        registry,

        get dispatch() {
          return Object.assign(action => store.dispatch(action), getActions());
        },

        get select() {
          return Object.assign(selector => selector(store.__unstableOriginalGetState()), getSelectors());
        },

        get resolveSelect() {
          return getResolveSelectors();
        }

      };
      const store = instantiateReduxStore(key, options, registry, thunkArgs);
      const resolversCache = createResolversCache();
      let resolvers;
      const actions = mapActions({ ...actions_namespaceObject,
        ...options.actions
      }, store);
      let selectors = mapSelectors({ ...(0,lodash.mapValues)(selectors_namespaceObject, selector => function (state) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          return selector(state.metadata, ...args);
        }),
        ...(0,lodash.mapValues)(options.selectors, selector => {
          if (selector.isRegistrySelector) {
            selector.registry = registry;
          }

          return function (state) {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            return selector(state.root, ...args);
          };
        })
      }, store);

      if (options.resolvers) {
        const result = mapResolvers(options.resolvers, selectors, store, resolversCache);
        resolvers = result.resolvers;
        selectors = result.selectors;
      }

      const resolveSelectors = mapResolveSelectors(selectors, store);

      const getSelectors = () => selectors;

      const getActions = () => actions;

      const getResolveSelectors = () => resolveSelectors; // We have some modules monkey-patching the store object
      // It's wrong to do so but until we refactor all of our effects to controls
      // We need to keep the same "store" instance here.


      store.__unstableOriginalGetState = store.getState;

      store.getState = () => store.__unstableOriginalGetState().root; // Customize subscribe behavior to call listeners only on effective change,
      // not on every dispatch.


      const subscribe = store && (listener => {
        let lastState = store.__unstableOriginalGetState();

        return store.subscribe(() => {
          const state = store.__unstableOriginalGetState();

          const hasChanged = state !== lastState;
          lastState = state;

          if (hasChanged) {
            listener();
          }
        });
      }); // This can be simplified to just { subscribe, getSelectors, getActions }
      // Once we remove the use function.


      return {
        reducer,
        store,
        actions,
        selectors,
        resolvers,
        getSelectors,
        getResolveSelectors,
        getActions,
        subscribe
      };
    }
  };
}
/**
 * Creates a redux store for a namespace.
 *
 * @param {string}       key       Unique namespace identifier.
 * @param {Object}       options   Registered store options, with properties
 *                                 describing reducer, actions, selectors,
 *                                 and resolvers.
 * @param {DataRegistry} registry  Registry reference.
 * @param {Object}       thunkArgs Argument object for the thunk middleware.
 * @return {Object} Newly created redux store.
 */

function instantiateReduxStore(key, options, registry, thunkArgs) {
  const controls = { ...options.controls,
    ...build_module_controls/* builtinControls */.K
  };
  const normalizedControls = (0,lodash.mapValues)(controls, control => control.isRegistryControl ? control(registry) : control);
  const middlewares = [resolvers_cache_middleware(registry, key), promise_middleware, createMiddleware(normalizedControls), createThunkMiddleware(thunkArgs)];
  const enhancers = [applyMiddleware(...middlewares)];

  if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__({
      name: key,
      instanceId: key
    }));
  }

  const {
    reducer,
    initialState
  } = options;
  const enhancedReducer = turbo_combine_reducers_default()({
    metadata: metadata_reducer,
    root: reducer
  });
  return createStore(enhancedReducer, {
    root: initialState
  }, (0,lodash.flowRight)(enhancers));
}
/**
 * Maps selectors to a store.
 *
 * @param {Object} selectors Selectors to register. Keys will be used as the
 *                           public facing API. Selectors will get passed the
 *                           state as first argument.
 * @param {Object} store     The store to which the selectors should be mapped.
 * @return {Object} Selectors mapped to the provided store.
 */


function mapSelectors(selectors, store) {
  const createStateSelector = registrySelector => {
    const selector = function runSelector() {
      // This function is an optimized implementation of:
      //
      //   selector( store.getState(), ...arguments )
      //
      // Where the above would incur an `Array#concat` in its application,
      // the logic here instead efficiently constructs an arguments array via
      // direct assignment.
      const argsLength = arguments.length;
      const args = new Array(argsLength + 1);
      args[0] = store.__unstableOriginalGetState();

      for (let i = 0; i < argsLength; i++) {
        args[i + 1] = arguments[i];
      }

      return registrySelector(...args);
    };

    selector.hasResolver = false;
    return selector;
  };

  return (0,lodash.mapValues)(selectors, createStateSelector);
}
/**
 * Maps actions to dispatch from a given store.
 *
 * @param {Object} actions Actions to register.
 * @param {Object} store   The redux store to which the actions should be mapped.
 *
 * @return {Object} Actions mapped to the redux store provided.
 */


function mapActions(actions, store) {
  const createBoundAction = action => function () {
    return Promise.resolve(store.dispatch(action(...arguments)));
  };

  return (0,lodash.mapValues)(actions, createBoundAction);
}
/**
 * Maps selectors to functions that return a resolution promise for them
 *
 * @param {Object} selectors Selectors to map.
 * @param {Object} store     The redux store the selectors select from.
 *
 * @return {Object} Selectors mapped to their resolution functions.
 */


function mapResolveSelectors(selectors, store) {
  const storeSelectors = (0,lodash.omit)(selectors, ['getIsResolving', 'hasStartedResolution', 'hasFinishedResolution', 'hasResolutionFailed', 'isResolving', 'getCachedResolvers', 'getResolutionState', 'getResolutionError']);
  return (0,lodash.mapValues)(storeSelectors, (selector, selectorName) => {
    // If the selector doesn't have a resolver, just convert the return value
    // (including exceptions) to a Promise, no additional extra behavior is needed.
    if (!selector.hasResolver) {
      return async function () {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        return selector.apply(null, args);
      };
    }

    return function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return new Promise((resolve, reject) => {
        const hasFinished = () => selectors.hasFinishedResolution(selectorName, args);

        const finalize = result => {
          const hasFailed = selectors.hasResolutionFailed(selectorName, args);

          if (hasFailed) {
            const error = selectors.getResolutionError(selectorName, args);
            reject(error);
          } else {
            resolve(result);
          }
        };

        const getResult = () => selector.apply(null, args); // Trigger the selector (to trigger the resolver)


        const result = getResult();

        if (hasFinished()) {
          return finalize(result);
        }

        const unsubscribe = store.subscribe(() => {
          if (hasFinished()) {
            unsubscribe();
            finalize(getResult());
          }
        });
      });
    };
  });
}
/**
 * Returns resolvers with matched selectors for a given namespace.
 * Resolvers are side effects invoked once per argument set of a given selector call,
 * used in ensuring that the data needs for the selector are satisfied.
 *
 * @param {Object} resolvers      Resolvers to register.
 * @param {Object} selectors      The current selectors to be modified.
 * @param {Object} store          The redux store to which the resolvers should be mapped.
 * @param {Object} resolversCache Resolvers Cache.
 */


function mapResolvers(resolvers, selectors, store, resolversCache) {
  // The `resolver` can be either a function that does the resolution, or, in more advanced
  // cases, an object with a `fullfill` method and other optional methods like `isFulfilled`.
  // Here we normalize the `resolver` function to an object with `fulfill` method.
  const mappedResolvers = (0,lodash.mapValues)(resolvers, resolver => {
    if (resolver.fulfill) {
      return resolver;
    }

    return { ...resolver,
      // Copy the enumerable properties of the resolver function.
      fulfill: resolver // Add the fulfill method.

    };
  });

  const mapSelector = (selector, selectorName) => {
    const resolver = resolvers[selectorName];

    if (!resolver) {
      selector.hasResolver = false;
      return selector;
    }

    const selectorResolver = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      async function fulfillSelector() {
        const state = store.getState();

        if (resolversCache.isRunning(selectorName, args) || typeof resolver.isFulfilled === 'function' && resolver.isFulfilled(state, ...args)) {
          return;
        }

        const {
          metadata
        } = store.__unstableOriginalGetState();

        if (hasStartedResolution(metadata, selectorName, args)) {
          return;
        }

        resolversCache.markAsRunning(selectorName, args);
        setTimeout(async () => {
          resolversCache.clear(selectorName, args);
          store.dispatch(startResolution(selectorName, args));

          try {
            await fulfillResolver(store, mappedResolvers, selectorName, ...args);
            store.dispatch(finishResolution(selectorName, args));
          } catch (error) {
            store.dispatch(failResolution(selectorName, args, error));
          }
        });
      }

      fulfillSelector(...args);
      return selector(...args);
    };

    selectorResolver.hasResolver = true;
    return selectorResolver;
  };

  return {
    resolvers: mappedResolvers,
    selectors: (0,lodash.mapValues)(selectors, mapSelector)
  };
}
/**
 * Calls a resolver given arguments
 *
 * @param {Object} store        Store reference, for fulfilling via resolvers
 * @param {Object} resolvers    Store Resolvers
 * @param {string} selectorName Selector name to fulfill.
 * @param {Array}  args         Selector Arguments.
 */


async function fulfillResolver(store, resolvers, selectorName) {
  const resolver = (0,lodash.get)(resolvers, [selectorName]);

  if (!resolver) {
    return;
  }

  for (var _len6 = arguments.length, args = new Array(_len6 > 3 ? _len6 - 3 : 0), _key6 = 3; _key6 < _len6; _key6++) {
    args[_key6 - 3] = arguments[_key6];
  }

  const action = resolver.fulfill(...args);

  if (action) {
    await store.dispatch(action);
  }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/registry.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  I: () => (/* binding */ createRegistry)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+deprecated@3.6.1/node_modules/@wordpress/deprecated/build-module/index.js
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+deprecated@3.6.1/node_modules/@wordpress/deprecated/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/redux-store/index.js + 18 modules
var redux_store = __webpack_require__("../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/redux-store/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/store/index.js
var store = __webpack_require__("../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/store/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/utils/emitter.js
/**
 * Create an event emitter.
 *
 * @return {import("../types").DataEmitter} Emitter.
 */
function createEmitter() {
  let isPaused = false;
  let isPending = false;
  const listeners = new Set();

  const notifyListeners = () => // We use Array.from to clone the listeners Set
  // This ensures that we don't run a listener
  // that was added as a response to another listener.
  Array.from(listeners).forEach(listener => listener());

  return {
    get isPaused() {
      return isPaused;
    },

    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },

    pause() {
      isPaused = true;
    },

    resume() {
      isPaused = false;

      if (isPending) {
        isPending = false;
        notifyListeners();
      }
    },

    emit() {
      if (isPaused) {
        isPending = true;
        return;
      }

      notifyListeners();
    }

  };
}
//# sourceMappingURL=emitter.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/registry.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




/** @typedef {import('./types').StoreDescriptor} StoreDescriptor */

/**
 * @typedef {Object} WPDataRegistry An isolated orchestrator of store registrations.
 *
 * @property {Function} registerGenericStore Given a namespace key and settings
 *                                           object, registers a new generic
 *                                           store.
 * @property {Function} registerStore        Given a namespace key and settings
 *                                           object, registers a new namespace
 *                                           store.
 * @property {Function} subscribe            Given a function callback, invokes
 *                                           the callback on any change to state
 *                                           within any registered store.
 * @property {Function} select               Given a namespace key, returns an
 *                                           object of the  store's registered
 *                                           selectors.
 * @property {Function} dispatch             Given a namespace key, returns an
 *                                           object of the store's registered
 *                                           action dispatchers.
 */

/**
 * @typedef {Object} WPDataPlugin An object of registry function overrides.
 *
 * @property {Function} registerStore registers store.
 */

/**
 * Creates a new store registry, given an optional object of initial store
 * configurations.
 *
 * @param {Object}  storeConfigs Initial store configurations.
 * @param {Object?} parent       Parent registry.
 *
 * @return {WPDataRegistry} Data registry.
 */

function createRegistry() {
  let storeConfigs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  const stores = {};
  const emitter = createEmitter();
  const listeningStores = new Set();
  /**
   * Global listener called for each store's update.
   */

  function globalListener() {
    emitter.emit();
  }
  /**
   * Subscribe to changes to any data.
   *
   * @param {Function} listener Listener function.
   *
   * @return {Function} Unsubscribe function.
   */


  const subscribe = listener => {
    return emitter.subscribe(listener);
  };
  /**
   * Calls a selector given the current state and extra arguments.
   *
   * @param {string|StoreDescriptor} storeNameOrDescriptor Unique namespace identifier for the store
   *                                                       or the store descriptor.
   *
   * @return {*} The selector's returned value.
   */


  function select(storeNameOrDescriptor) {
    const storeName = (0,lodash.isObject)(storeNameOrDescriptor) ? storeNameOrDescriptor.name : storeNameOrDescriptor;
    listeningStores.add(storeName);
    const store = stores[storeName];

    if (store) {
      return store.getSelectors();
    }

    return parent && parent.select(storeName);
  }

  function __unstableMarkListeningStores(callback, ref) {
    listeningStores.clear();
    const result = callback.call(this);
    ref.current = Array.from(listeningStores);
    return result;
  }
  /**
   * Given the name of a registered store, returns an object containing the store's
   * selectors pre-bound to state so that you only need to supply additional arguments,
   * and modified so that they return promises that resolve to their eventual values,
   * after any resolvers have ran.
   *
   * @param {string|StoreDescriptor} storeNameOrDescriptor Unique namespace identifier for the store
   *                                                       or the store descriptor.
   *
   * @return {Object} Each key of the object matches the name of a selector.
   */


  function resolveSelect(storeNameOrDescriptor) {
    const storeName = (0,lodash.isObject)(storeNameOrDescriptor) ? storeNameOrDescriptor.name : storeNameOrDescriptor;
    listeningStores.add(storeName);
    const store = stores[storeName];

    if (store) {
      return store.getResolveSelectors();
    }

    return parent && parent.resolveSelect(storeName);
  }
  /**
   * Returns the available actions for a part of the state.
   *
   * @param {string|StoreDescriptor} storeNameOrDescriptor Unique namespace identifier for the store
   *                                                       or the store descriptor.
   *
   * @return {*} The action's returned value.
   */


  function dispatch(storeNameOrDescriptor) {
    const storeName = (0,lodash.isObject)(storeNameOrDescriptor) ? storeNameOrDescriptor.name : storeNameOrDescriptor;
    const store = stores[storeName];

    if (store) {
      return store.getActions();
    }

    return parent && parent.dispatch(storeName);
  } //
  // Deprecated
  // TODO: Remove this after `use()` is removed.


  function withPlugins(attributes) {
    return (0,lodash.mapValues)(attributes, (attribute, key) => {
      if (typeof attribute !== 'function') {
        return attribute;
      }

      return function () {
        return registry[key].apply(null, arguments);
      };
    });
  }
  /**
   * Registers a store instance.
   *
   * @param {string} name  Store registry name.
   * @param {Object} store Store instance object (getSelectors, getActions, subscribe).
   */


  function registerStoreInstance(name, store) {
    if (typeof store.getSelectors !== 'function') {
      throw new TypeError('store.getSelectors must be a function');
    }

    if (typeof store.getActions !== 'function') {
      throw new TypeError('store.getActions must be a function');
    }

    if (typeof store.subscribe !== 'function') {
      throw new TypeError('store.subscribe must be a function');
    } // The emitter is used to keep track of active listeners when the registry
    // get paused, that way, when resumed we should be able to call all these
    // pending listeners.


    store.emitter = createEmitter();
    const currentSubscribe = store.subscribe;

    store.subscribe = listener => {
      const unsubscribeFromEmitter = store.emitter.subscribe(listener);
      const unsubscribeFromStore = currentSubscribe(() => {
        if (store.emitter.isPaused) {
          store.emitter.emit();
          return;
        }

        listener();
      });
      return () => {
        unsubscribeFromStore === null || unsubscribeFromStore === void 0 ? void 0 : unsubscribeFromStore();
        unsubscribeFromEmitter === null || unsubscribeFromEmitter === void 0 ? void 0 : unsubscribeFromEmitter();
      };
    };

    stores[name] = store;
    store.subscribe(globalListener);
  }
  /**
   * Registers a new store given a store descriptor.
   *
   * @param {StoreDescriptor} store Store descriptor.
   */


  function register(store) {
    registerStoreInstance(store.name, store.instantiate(registry));
  }

  function registerGenericStore(name, store) {
    (0,build_module/* default */.A)('wp.data.registerGenericStore', {
      since: '5.9',
      alternative: 'wp.data.register( storeDescriptor )'
    });
    registerStoreInstance(name, store);
  }
  /**
   * Registers a standard `@wordpress/data` store.
   *
   * @param {string} storeName Unique namespace identifier.
   * @param {Object} options   Store description (reducer, actions, selectors, resolvers).
   *
   * @return {Object} Registered store object.
   */


  function registerStore(storeName, options) {
    if (!options.reducer) {
      throw new TypeError('Must specify store reducer');
    }

    const store = (0,redux_store/* default */.A)(storeName, options).instantiate(registry);
    registerStoreInstance(storeName, store);
    return store.store;
  }
  /**
   * Subscribe handler to a store.
   *
   * @param {string[]} storeName The store name.
   * @param {Function} handler   The function subscribed to the store.
   * @return {Function} A function to unsubscribe the handler.
   */


  function __unstableSubscribeStore(storeName, handler) {
    if (storeName in stores) {
      return stores[storeName].subscribe(handler);
    } // Trying to access a store that hasn't been registered,
    // this is a pattern rarely used but seen in some places.
    // We fallback to regular `subscribe` here for backward-compatibility for now.
    // See https://github.com/WordPress/gutenberg/pull/27466 for more info.


    if (!parent) {
      return subscribe(handler);
    }

    return parent.__unstableSubscribeStore(storeName, handler);
  }

  function batch(callback) {
    emitter.pause();
    (0,lodash.forEach)(stores, store => store.emitter.pause());
    callback();
    emitter.resume();
    (0,lodash.forEach)(stores, store => store.emitter.resume());
  }

  let registry = {
    batch,
    stores,
    namespaces: stores,
    // TODO: Deprecate/remove this.
    subscribe,
    select,
    resolveSelect,
    dispatch,
    use,
    register,
    registerGenericStore,
    registerStore,
    __unstableMarkListeningStores,
    __unstableSubscribeStore
  }; //
  // TODO:
  // This function will be deprecated as soon as it is no longer internally referenced.

  function use(plugin, options) {
    if (!plugin) {
      return;
    }

    registry = { ...registry,
      ...plugin(registry, options)
    };
    return registry;
  }

  registry.register(store/* default */.A);

  for (const [name, config] of Object.entries(storeConfigs)) {
    registry.register((0,redux_store/* default */.A)(name, config));
  }

  if (parent) {
    parent.subscribe(globalListener);
  }

  return withPlugins(registry);
}
//# sourceMappingURL=registry.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/store/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const coreDataStore = {
  name: 'core/data',

  instantiate(registry) {
    const getCoreDataSelector = selectorName => function (key) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return registry.select(key)[selectorName](...args);
    };

    const getCoreDataAction = actionName => function (key) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return registry.dispatch(key)[actionName](...args);
    };

    return {
      getSelectors() {
        return Object.fromEntries(['getIsResolving', 'hasStartedResolution', 'hasFinishedResolution', 'isResolving', 'getCachedResolvers'].map(selectorName => [selectorName, getCoreDataSelector(selectorName)]));
      },

      getActions() {
        return Object.fromEntries(['startResolution', 'finishResolution', 'invalidateResolution', 'invalidateResolutionForStore', 'invalidateResolutionForStoreSelector'].map(actionName => [actionName, getCoreDataAction(actionName)]));
      },

      subscribe() {
        // There's no reasons to trigger any listener when we subscribe to this store
        // because there's no state stored in this store that need to retrigger selectors
        // if a change happens, the corresponding store where the tracking stated live
        // would have already triggered a "subscribe" call.
        return () => () => {};
      }

    };
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (coreDataStore);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+deprecated@3.6.1/node_modules/@wordpress/deprecated/build-module/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ deprecated)
/* harmony export */ });
/* unused harmony export logged */
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+hooks@3.6.1/node_modules/@wordpress/hooks/build-module/index.js");
/**
 * WordPress dependencies
 */

/**
 * Object map tracking messages which have been logged, for use in ensuring a
 * message is only logged once.
 *
 * @type {Record<string, true | undefined>}
 */

const logged = Object.create(null);
/**
 * Logs a message to notify developers about a deprecated feature.
 *
 * @param {string} feature               Name of the deprecated feature.
 * @param {Object} [options]             Personalisation options
 * @param {string} [options.since]       Version in which the feature was deprecated.
 * @param {string} [options.version]     Version in which the feature will be removed.
 * @param {string} [options.alternative] Feature to use instead
 * @param {string} [options.plugin]      Plugin name if it's a plugin feature
 * @param {string} [options.link]        Link to documentation
 * @param {string} [options.hint]        Additional message to help transition away from the deprecated feature.
 *
 * @example
 * ```js
 * import deprecated from '@wordpress/deprecated';
 *
 * deprecated( 'Eating meat', {
 * 	since: '2019.01.01'
 * 	version: '2020.01.01',
 * 	alternative: 'vegetables',
 * 	plugin: 'the earth',
 * 	hint: 'You may find it beneficial to transition gradually.',
 * } );
 *
 * // Logs: 'Eating meat is deprecated since version 2019.01.01 and will be removed from the earth in version 2020.01.01. Please use vegetables instead. Note: You may find it beneficial to transition gradually.'
 * ```
 */

function deprecated(feature) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    since,
    version,
    alternative,
    plugin,
    link,
    hint
  } = options;
  const pluginMessage = plugin ? ` from ${plugin}` : '';
  const sinceMessage = since ? ` since version ${since}` : '';
  const versionMessage = version ? ` and will be removed${pluginMessage} in version ${version}` : '';
  const useInsteadMessage = alternative ? ` Please use ${alternative} instead.` : '';
  const linkMessage = link ? ` See: ${link}` : '';
  const hintMessage = hint ? ` Note: ${hint}` : '';
  const message = `${feature} is deprecated${sinceMessage}${versionMessage}.${useInsteadMessage}${linkMessage}${hintMessage}`; // Skip if already logged.

  if (message in logged) {
    return;
  }
  /**
   * Fires whenever a deprecated feature is encountered
   *
   * @param {string}  feature             Name of the deprecated feature.
   * @param {?Object} options             Personalisation options
   * @param {string}  options.since       Version in which the feature was deprecated.
   * @param {?string} options.version     Version in which the feature will be removed.
   * @param {?string} options.alternative Feature to use instead
   * @param {?string} options.plugin      Plugin name if it's a plugin feature
   * @param {?string} options.link        Link to documentation
   * @param {?string} options.hint        Additional message to help transition away from the deprecated feature.
   * @param {?string} message             Message sent to console.warn
   */


  (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__/* .doAction */ .Eo)('deprecated', feature, options, message); // eslint-disable-next-line no-console

  console.warn(message);
  logged[message] = true;
}
/** @typedef {import('utility-types').NonUndefined<Parameters<typeof deprecated>[1]>} DeprecatedOptions */
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/equivalent-key-map@0.2.2/node_modules/equivalent-key-map/equivalent-key-map.js":
/***/ ((module) => {

"use strict";


function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/**
 * Given an instance of EquivalentKeyMap, returns its internal value pair tuple
 * for a key, if one exists. The tuple members consist of the last reference
 * value for the key (used in efficient subsequent lookups) and the value
 * assigned for the key at the leaf node.
 *
 * @param {EquivalentKeyMap} instance EquivalentKeyMap instance.
 * @param {*} key                     The key for which to return value pair.
 *
 * @return {?Array} Value pair, if exists.
 */
function getValuePair(instance, key) {
  var _map = instance._map,
      _arrayTreeMap = instance._arrayTreeMap,
      _objectTreeMap = instance._objectTreeMap; // Map keeps a reference to the last object-like key used to set the
  // value, which can be used to shortcut immediately to the value.

  if (_map.has(key)) {
    return _map.get(key);
  } // Sort keys to ensure stable retrieval from tree.


  var properties = Object.keys(key).sort(); // Tree by type to avoid conflicts on numeric object keys, empty value.

  var map = Array.isArray(key) ? _arrayTreeMap : _objectTreeMap;

  for (var i = 0; i < properties.length; i++) {
    var property = properties[i];
    map = map.get(property);

    if (map === undefined) {
      return;
    }

    var propertyValue = key[property];
    map = map.get(propertyValue);

    if (map === undefined) {
      return;
    }
  }

  var valuePair = map.get('_ekm_value');

  if (!valuePair) {
    return;
  } // If reached, it implies that an object-like key was set with another
  // reference, so delete the reference and replace with the current.


  _map.delete(valuePair[0]);

  valuePair[0] = key;
  map.set('_ekm_value', valuePair);

  _map.set(key, valuePair);

  return valuePair;
}
/**
 * Variant of a Map object which enables lookup by equivalent (deeply equal)
 * object and array keys.
 */


var EquivalentKeyMap =
/*#__PURE__*/
function () {
  /**
   * Constructs a new instance of EquivalentKeyMap.
   *
   * @param {Iterable.<*>} iterable Initial pair of key, value for map.
   */
  function EquivalentKeyMap(iterable) {
    _classCallCheck(this, EquivalentKeyMap);

    this.clear();

    if (iterable instanceof EquivalentKeyMap) {
      // Map#forEach is only means of iterating with support for IE11.
      var iterablePairs = [];
      iterable.forEach(function (value, key) {
        iterablePairs.push([key, value]);
      });
      iterable = iterablePairs;
    }

    if (iterable != null) {
      for (var i = 0; i < iterable.length; i++) {
        this.set(iterable[i][0], iterable[i][1]);
      }
    }
  }
  /**
   * Accessor property returning the number of elements.
   *
   * @return {number} Number of elements.
   */


  _createClass(EquivalentKeyMap, [{
    key: "set",

    /**
     * Add or update an element with a specified key and value.
     *
     * @param {*} key   The key of the element to add.
     * @param {*} value The value of the element to add.
     *
     * @return {EquivalentKeyMap} Map instance.
     */
    value: function set(key, value) {
      // Shortcut non-object-like to set on internal Map.
      if (key === null || _typeof(key) !== 'object') {
        this._map.set(key, value);

        return this;
      } // Sort keys to ensure stable assignment into tree.


      var properties = Object.keys(key).sort();
      var valuePair = [key, value]; // Tree by type to avoid conflicts on numeric object keys, empty value.

      var map = Array.isArray(key) ? this._arrayTreeMap : this._objectTreeMap;

      for (var i = 0; i < properties.length; i++) {
        var property = properties[i];

        if (!map.has(property)) {
          map.set(property, new EquivalentKeyMap());
        }

        map = map.get(property);
        var propertyValue = key[property];

        if (!map.has(propertyValue)) {
          map.set(propertyValue, new EquivalentKeyMap());
        }

        map = map.get(propertyValue);
      } // If an _ekm_value exists, there was already an equivalent key. Before
      // overriding, ensure that the old key reference is removed from map to
      // avoid memory leak of accumulating equivalent keys. This is, in a
      // sense, a poor man's WeakMap, while still enabling iterability.


      var previousValuePair = map.get('_ekm_value');

      if (previousValuePair) {
        this._map.delete(previousValuePair[0]);
      }

      map.set('_ekm_value', valuePair);

      this._map.set(key, valuePair);

      return this;
    }
    /**
     * Returns a specified element.
     *
     * @param {*} key The key of the element to return.
     *
     * @return {?*} The element associated with the specified key or undefined
     *              if the key can't be found.
     */

  }, {
    key: "get",
    value: function get(key) {
      // Shortcut non-object-like to get from internal Map.
      if (key === null || _typeof(key) !== 'object') {
        return this._map.get(key);
      }

      var valuePair = getValuePair(this, key);

      if (valuePair) {
        return valuePair[1];
      }
    }
    /**
     * Returns a boolean indicating whether an element with the specified key
     * exists or not.
     *
     * @param {*} key The key of the element to test for presence.
     *
     * @return {boolean} Whether an element with the specified key exists.
     */

  }, {
    key: "has",
    value: function has(key) {
      if (key === null || _typeof(key) !== 'object') {
        return this._map.has(key);
      } // Test on the _presence_ of the pair, not its value, as even undefined
      // can be a valid member value for a key.


      return getValuePair(this, key) !== undefined;
    }
    /**
     * Removes the specified element.
     *
     * @param {*} key The key of the element to remove.
     *
     * @return {boolean} Returns true if an element existed and has been
     *                   removed, or false if the element does not exist.
     */

  }, {
    key: "delete",
    value: function _delete(key) {
      if (!this.has(key)) {
        return false;
      } // This naive implementation will leave orphaned child trees. A better
      // implementation should traverse and remove orphans.


      this.set(key, undefined);
      return true;
    }
    /**
     * Executes a provided function once per each key/value pair, in insertion
     * order.
     *
     * @param {Function} callback Function to execute for each element.
     * @param {*}        thisArg  Value to use as `this` when executing
     *                            `callback`.
     */

  }, {
    key: "forEach",
    value: function forEach(callback) {
      var _this = this;

      var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;

      this._map.forEach(function (value, key) {
        // Unwrap value from object-like value pair.
        if (key !== null && _typeof(key) === 'object') {
          value = value[1];
        }

        callback.call(thisArg, value, key, _this);
      });
    }
    /**
     * Removes all elements.
     */

  }, {
    key: "clear",
    value: function clear() {
      this._map = new Map();
      this._arrayTreeMap = new Map();
      this._objectTreeMap = new Map();
    }
  }, {
    key: "size",
    get: function get() {
      return this._map.size;
    }
  }]);

  return EquivalentKeyMap;
}();

module.exports = EquivalentKeyMap;


/***/ }),

/***/ "../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ isPlainObject)
/* harmony export */ });
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  var ctor,prot;

  if (isObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (ctor === undefined) return true;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
}




/***/ }),

/***/ "../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/controls/async.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.race = exports.join = exports.fork = exports.promise = undefined;

var _is = __webpack_require__("../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/is.js");

var _is2 = _interopRequireDefault(_is);

var _helpers = __webpack_require__("../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/helpers.js");

var _dispatcher = __webpack_require__("../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/dispatcher.js");

var _dispatcher2 = _interopRequireDefault(_dispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var promise = exports.promise = function promise(value, next, rungen, yieldNext, raiseNext) {
  if (!_is2.default.promise(value)) return false;
  value.then(next, raiseNext);
  return true;
};

var forkedTasks = new Map();
var fork = exports.fork = function fork(value, next, rungen) {
  if (!_is2.default.fork(value)) return false;
  var task = Symbol('fork');
  var dispatcher = (0, _dispatcher2.default)();
  forkedTasks.set(task, dispatcher);
  rungen(value.iterator.apply(null, value.args), function (result) {
    return dispatcher.dispatch(result);
  }, function (err) {
    return dispatcher.dispatch((0, _helpers.error)(err));
  });
  var unsubscribe = dispatcher.subscribe(function () {
    unsubscribe();
    forkedTasks.delete(task);
  });
  next(task);
  return true;
};

var join = exports.join = function join(value, next, rungen, yieldNext, raiseNext) {
  if (!_is2.default.join(value)) return false;
  var dispatcher = forkedTasks.get(value.task);
  if (!dispatcher) {
    raiseNext('join error : task not found');
  } else {
    (function () {
      var unsubscribe = dispatcher.subscribe(function (result) {
        unsubscribe();
        next(result);
      });
    })();
  }
  return true;
};

var race = exports.race = function race(value, next, rungen, yieldNext, raiseNext) {
  if (!_is2.default.race(value)) return false;
  var finished = false;
  var success = function success(result, k, v) {
    if (finished) return;
    finished = true;
    result[k] = v;
    next(result);
  };

  var fail = function fail(err) {
    if (finished) return;
    raiseNext(err);
  };
  if (_is2.default.array(value.competitors)) {
    (function () {
      var result = value.competitors.map(function () {
        return false;
      });
      value.competitors.forEach(function (competitor, index) {
        rungen(competitor, function (output) {
          return success(result, index, output);
        }, fail);
      });
    })();
  } else {
    (function () {
      var result = Object.keys(value.competitors).reduce(function (p, c) {
        p[c] = false;
        return p;
      }, {});
      Object.keys(value.competitors).forEach(function (index) {
        rungen(value.competitors[index], function (output) {
          return success(result, index, output);
        }, fail);
      });
    })();
  }
  return true;
};

var subscribe = function subscribe(value, next) {
  if (!_is2.default.subscribe(value)) return false;
  if (!_is2.default.channel(value.channel)) {
    throw new Error('the first argument of "subscribe" must be a valid channel');
  }
  var unsubscribe = value.channel.subscribe(function (ret) {
    unsubscribe && unsubscribe();
    next(ret);
  });

  return true;
};

exports["default"] = [promise, fork, join, race, subscribe];

/***/ }),

/***/ "../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/controls/builtin.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.iterator = exports.array = exports.object = exports.error = exports.any = undefined;

var _is = __webpack_require__("../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/is.js");

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var any = exports.any = function any(value, next, rungen, yieldNext) {
  yieldNext(value);
  return true;
};

var error = exports.error = function error(value, next, rungen, yieldNext, raiseNext) {
  if (!_is2.default.error(value)) return false;
  raiseNext(value.error);
  return true;
};

var object = exports.object = function object(value, next, rungen, yieldNext, raiseNext) {
  if (!_is2.default.all(value) || !_is2.default.obj(value.value)) return false;
  var result = {};
  var keys = Object.keys(value.value);
  var count = 0;
  var hasError = false;
  var gotResultSuccess = function gotResultSuccess(key, ret) {
    if (hasError) return;
    result[key] = ret;
    count++;
    if (count === keys.length) {
      yieldNext(result);
    }
  };

  var gotResultError = function gotResultError(key, error) {
    if (hasError) return;
    hasError = true;
    raiseNext(error);
  };

  keys.map(function (key) {
    rungen(value.value[key], function (ret) {
      return gotResultSuccess(key, ret);
    }, function (err) {
      return gotResultError(key, err);
    });
  });

  return true;
};

var array = exports.array = function array(value, next, rungen, yieldNext, raiseNext) {
  if (!_is2.default.all(value) || !_is2.default.array(value.value)) return false;
  var result = [];
  var count = 0;
  var hasError = false;
  var gotResultSuccess = function gotResultSuccess(key, ret) {
    if (hasError) return;
    result[key] = ret;
    count++;
    if (count === value.value.length) {
      yieldNext(result);
    }
  };

  var gotResultError = function gotResultError(key, error) {
    if (hasError) return;
    hasError = true;
    raiseNext(error);
  };

  value.value.map(function (v, key) {
    rungen(v, function (ret) {
      return gotResultSuccess(key, ret);
    }, function (err) {
      return gotResultError(key, err);
    });
  });

  return true;
};

var iterator = exports.iterator = function iterator(value, next, rungen, yieldNext, raiseNext) {
  if (!_is2.default.iterator(value)) return false;
  rungen(value, next, raiseNext);
  return true;
};

exports["default"] = [error, iterator, array, object, any];

/***/ }),

/***/ "../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/controls/wrap.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.cps = exports.call = undefined;

var _is = __webpack_require__("../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/is.js");

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var call = exports.call = function call(value, next, rungen, yieldNext, raiseNext) {
  if (!_is2.default.call(value)) return false;
  try {
    next(value.func.apply(value.context, value.args));
  } catch (err) {
    raiseNext(err);
  }
  return true;
};

var cps = exports.cps = function cps(value, next, rungen, yieldNext, raiseNext) {
  var _value$func;

  if (!_is2.default.cps(value)) return false;
  (_value$func = value.func).call.apply(_value$func, [null].concat(_toConsumableArray(value.args), [function (err, result) {
    if (err) raiseNext(err);else next(result);
  }]));
  return true;
};

exports["default"] = [call, cps];

/***/ }),

/***/ "../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/create.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _builtin = __webpack_require__("../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/controls/builtin.js");

var _builtin2 = _interopRequireDefault(_builtin);

var _is = __webpack_require__("../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/is.js");

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var create = function create() {
  var userControls = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  var controls = [].concat(_toConsumableArray(userControls), _toConsumableArray(_builtin2.default));

  var runtime = function runtime(input) {
    var success = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];
    var error = arguments.length <= 2 || arguments[2] === undefined ? function () {} : arguments[2];

    var iterate = function iterate(gen) {
      var yieldValue = function yieldValue(isError) {
        return function (ret) {
          try {
            var _ref = isError ? gen.throw(ret) : gen.next(ret);

            var value = _ref.value;
            var done = _ref.done;

            if (done) return success(value);
            next(value);
          } catch (e) {
            return error(e);
          }
        };
      };

      var next = function next(ret) {
        controls.some(function (control) {
          return control(ret, next, runtime, yieldValue(false), yieldValue(true));
        });
      };

      yieldValue(false)();
    };

    var iterator = _is2.default.iterator(input) ? input : regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return input;

            case 2:
              return _context.abrupt('return', _context.sent);

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    })();

    iterate(iterator, success, error);
  };

  return runtime;
};

exports["default"] = create;

/***/ }),

/***/ "../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/index.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.wrapControls = exports.asyncControls = exports.create = undefined;

var _helpers = __webpack_require__("../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/helpers.js");

Object.keys(_helpers).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _helpers[key];
    }
  });
});

var _create = __webpack_require__("../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/create.js");

var _create2 = _interopRequireDefault(_create);

var _async = __webpack_require__("../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/controls/async.js");

var _async2 = _interopRequireDefault(_async);

var _wrap = __webpack_require__("../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/controls/wrap.js");

var _wrap2 = _interopRequireDefault(_wrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.create = _create2.default;
exports.asyncControls = _async2.default;
exports.wrapControls = _wrap2.default;

/***/ }),

/***/ "../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/dispatcher.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var createDispatcher = function createDispatcher() {
  var listeners = [];

  return {
    subscribe: function subscribe(listener) {
      listeners.push(listener);
      return function () {
        listeners = listeners.filter(function (l) {
          return l !== listener;
        });
      };
    },
    dispatch: function dispatch(action) {
      listeners.slice().forEach(function (listener) {
        return listener(action);
      });
    }
  };
};

exports["default"] = createDispatcher;

/***/ }),

/***/ "../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/helpers.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createChannel = exports.subscribe = exports.cps = exports.apply = exports.call = exports.invoke = exports.delay = exports.race = exports.join = exports.fork = exports.error = exports.all = undefined;

var _keys = __webpack_require__("../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/keys.js");

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var all = exports.all = function all(value) {
  return {
    type: _keys2.default.all,
    value: value
  };
};

var error = exports.error = function error(err) {
  return {
    type: _keys2.default.error,
    error: err
  };
};

var fork = exports.fork = function fork(iterator) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return {
    type: _keys2.default.fork,
    iterator: iterator,
    args: args
  };
};

var join = exports.join = function join(task) {
  return {
    type: _keys2.default.join,
    task: task
  };
};

var race = exports.race = function race(competitors) {
  return {
    type: _keys2.default.race,
    competitors: competitors
  };
};

var delay = exports.delay = function delay(timeout) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      return resolve(true);
    }, timeout);
  });
};

var invoke = exports.invoke = function invoke(func) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return {
    type: _keys2.default.call,
    func: func,
    context: null,
    args: args
  };
};

var call = exports.call = function call(func, context) {
  for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    args[_key3 - 2] = arguments[_key3];
  }

  return {
    type: _keys2.default.call,
    func: func,
    context: context,
    args: args
  };
};

var apply = exports.apply = function apply(func, context, args) {
  return {
    type: _keys2.default.call,
    func: func,
    context: context,
    args: args
  };
};

var cps = exports.cps = function cps(func) {
  for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  return {
    type: _keys2.default.cps,
    func: func,
    args: args
  };
};

var subscribe = exports.subscribe = function subscribe(channel) {
  return {
    type: _keys2.default.subscribe,
    channel: channel
  };
};

var createChannel = exports.createChannel = function createChannel(callback) {
  var listeners = [];
  var subscribe = function subscribe(l) {
    listeners.push(l);
    return function () {
      return listeners.splice(listeners.indexOf(l), 1);
    };
  };
  var next = function next(val) {
    return listeners.forEach(function (l) {
      return l(val);
    });
  };
  callback(next);

  return {
    subscribe: subscribe
  };
};

/***/ }),

/***/ "../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/is.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _keys = __webpack_require__("../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/keys.js");

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var is = {
  obj: function obj(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && !!value;
  },
  all: function all(value) {
    return is.obj(value) && value.type === _keys2.default.all;
  },
  error: function error(value) {
    return is.obj(value) && value.type === _keys2.default.error;
  },
  array: Array.isArray,
  func: function func(value) {
    return typeof value === 'function';
  },
  promise: function promise(value) {
    return value && is.func(value.then);
  },
  iterator: function iterator(value) {
    return value && is.func(value.next) && is.func(value.throw);
  },
  fork: function fork(value) {
    return is.obj(value) && value.type === _keys2.default.fork;
  },
  join: function join(value) {
    return is.obj(value) && value.type === _keys2.default.join;
  },
  race: function race(value) {
    return is.obj(value) && value.type === _keys2.default.race;
  },
  call: function call(value) {
    return is.obj(value) && value.type === _keys2.default.call;
  },
  cps: function cps(value) {
    return is.obj(value) && value.type === _keys2.default.cps;
  },
  subscribe: function subscribe(value) {
    return is.obj(value) && value.type === _keys2.default.subscribe;
  },
  channel: function channel(value) {
    return is.obj(value) && is.func(value.subscribe);
  }
};

exports["default"] = is;

/***/ }),

/***/ "../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/keys.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var keys = {
  all: Symbol('all'),
  error: Symbol('error'),
  fork: Symbol('fork'),
  join: Symbol('join'),
  race: Symbol('race'),
  call: Symbol('call'),
  cps: Symbol('cps'),
  subscribe: Symbol('subscribe')
};

exports["default"] = keys;

/***/ }),

/***/ "../../node_modules/.pnpm/turbo-combine-reducers@1.0.2/node_modules/turbo-combine-reducers/index.js":
/***/ ((module) => {

function combineReducers( reducers ) {
	var keys = Object.keys( reducers ),
		getNextState;

	getNextState = ( function() {
		var fn, i, key;

		fn = 'return {';
		for ( i = 0; i < keys.length; i++ ) {
			// Rely on Quoted escaping of JSON.stringify with guarantee that
			// each member of Object.keys is a string.
			//
			// "If Type(value) is String, then return the result of calling the
			// abstract operation Quote with argument value. [...] The abstract
			// operation Quote(value) wraps a String value in double quotes and
			// escapes characters within it."
			//
			// https://www.ecma-international.org/ecma-262/5.1/#sec-15.12.3
			key = JSON.stringify( keys[ i ] );

			fn += key + ':r[' + key + '](s[' + key + '],a),';
		}
		fn += '}';

		return new Function( 'r,s,a', fn );
	} )();

	return function combinedReducer( state, action ) {
		var nextState, i, key;

		// Assumed changed if initial state.
		if ( state === undefined ) {
			return getNextState( reducers, {}, action );
		}

		nextState = getNextState( reducers, state, action );

		// Determine whether state has changed.
		i = keys.length;
		while ( i-- ) {
			key = keys[ i ];
			if ( state[ key ] !== nextState[ key ] ) {
				// Return immediately if a changed value is encountered.
				return nextState;
			}
		}

		return state;
	};
}

module.exports = combineReducers;


/***/ })

}]);