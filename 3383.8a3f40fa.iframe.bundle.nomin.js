"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[3383],{

/***/ "../../node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/extends.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@5.20.0_react@17.0.2/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useMediaQuery)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * WordPress dependencies
 */

/**
 * Runs a media query and returns its value when it changes.
 *
 * @param {string} [query] Media Query.
 * @return {boolean} return value of the media query.
 */

function useMediaQuery(query) {
  const [match, setMatch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(() => !!(query && typeof window !== 'undefined' && window.matchMedia(query).matches));
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!query) {
      return;
    }

    const updateMatch = () => setMatch(window.matchMedia(query).matches);

    updateMatch();
    const list = window.matchMedia(query);
    list.addListener(updateMatch);
    return () => {
      list.removeListener(updateMatch);
    };
  }, [query]);
  return !!query && match;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@5.20.0_react@17.0.2/node_modules/@wordpress/compose/build-module/hooks/use-viewport-match/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _use_media_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@5.20.0_react@17.0.2/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * @typedef {"huge" | "wide" | "large" | "medium" | "small" | "mobile"} WPBreakpoint
 */

/**
 * Hash of breakpoint names with pixel width at which it becomes effective.
 *
 * @see _breakpoints.scss
 *
 * @type {Record<WPBreakpoint, number>}
 */

const BREAKPOINTS = {
  huge: 1440,
  wide: 1280,
  large: 960,
  medium: 782,
  small: 600,
  mobile: 480
};
/**
 * @typedef {">=" | "<"} WPViewportOperator
 */

/**
 * Object mapping media query operators to the condition to be used.
 *
 * @type {Record<WPViewportOperator, string>}
 */

const CONDITIONS = {
  '>=': 'min-width',
  '<': 'max-width'
};
/**
 * Object mapping media query operators to a function that given a breakpointValue and a width evaluates if the operator matches the values.
 *
 * @type {Record<WPViewportOperator, (breakpointValue: number, width: number) => boolean>}
 */

const OPERATOR_EVALUATORS = {
  '>=': (breakpointValue, width) => width >= breakpointValue,
  '<': (breakpointValue, width) => width < breakpointValue
};
const ViewportMatchWidthContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)(
/** @type {null | number} */
null);
/**
 * Returns true if the viewport matches the given query, or false otherwise.
 *
 * @param {WPBreakpoint}       breakpoint      Breakpoint size name.
 * @param {WPViewportOperator} [operator=">="] Viewport operator.
 *
 * @example
 *
 * ```js
 * useViewportMatch( 'huge', '<' );
 * useViewportMatch( 'medium' );
 * ```
 *
 * @return {boolean} Whether viewport matches query.
 */

const useViewportMatch = function (breakpoint) {
  let operator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '>=';
  const simulatedWidth = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(ViewportMatchWidthContext);
  const mediaQuery = !simulatedWidth && `(${CONDITIONS[operator]}: ${BREAKPOINTS[breakpoint]}px)`;
  const mediaQueryResult = (0,_use_media_query__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(mediaQuery || undefined);

  if (simulatedWidth) {
    return OPERATOR_EVALUATORS[operator](BREAKPOINTS[breakpoint], simulatedWidth);
  }

  return mediaQueryResult;
};

useViewportMatch.__experimentalWidthProvider = ViewportMatchWidthContext.Provider;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useViewportMatch);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@5.20.0_react@17.0.2/node_modules/@wordpress/compose/build-module/utils/create-higher-order-component/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* binding */ createHigherOrderComponent)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/tslib@2.6.3/node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__("../../node_modules/.pnpm/tslib@2.6.3/node_modules/tslib/tslib.es6.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/no-case@3.0.4/node_modules/no-case/dist.es2015/index.js + 1 modules
var dist_es2015 = __webpack_require__("../../node_modules/.pnpm/no-case@3.0.4/node_modules/no-case/dist.es2015/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/pascal-case@3.1.2/node_modules/pascal-case/dist.es2015/index.js


function pascalCaseTransform(input, index) {
    var firstChar = input.charAt(0);
    var lowerChars = input.substr(1).toLowerCase();
    if (index > 0 && firstChar >= "0" && firstChar <= "9") {
        return "_" + firstChar + lowerChars;
    }
    return "" + firstChar.toUpperCase() + lowerChars;
}
function pascalCaseTransformMerge(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}
function pascalCase(input, options) {
    if (options === void 0) { options = {}; }
    return (0,dist_es2015/* noCase */.W)(input, (0,tslib_es6/* __assign */.Cl)({ delimiter: "", transform: pascalCaseTransform }, options));
}
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+compose@5.20.0_react@17.0.2/node_modules/@wordpress/compose/build-module/utils/create-higher-order-component/index.js
/**
 * External dependencies
 */


/**
 * Given a function mapping a component to an enhanced component and modifier
 * name, returns the enhanced component augmented with a generated displayName.
 *
 * @param  mapComponent Function mapping component to enhanced component.
 * @param  modifierName Seed name from which to generated display name.
 *
 * @return Component class with generated display name assigned.
 */
function createHigherOrderComponent(mapComponent, modifierName) {
  return Inner => {
    const Outer = mapComponent(Inner);
    Outer.displayName = hocName(modifierName, Inner);
    return Outer;
  };
}
/**
 * Returns a displayName for a higher-order component, given a wrapper name.
 *
 * @example
 *     hocName( 'MyMemo', Widget ) === 'MyMemo(Widget)';
 *     hocName( 'MyMemo', <div /> ) === 'MyMemo(Component)';
 *
 * @param  name  Name assigned to higher-order component's wrapper component.
 * @param  Inner Wrapped component inside higher-order component.
 * @return       Wrapped name of higher-order component.
 */

const hocName = (name, Inner) => {
  const inner = Inner.displayName || Inner.name || 'Component';
  const outer = pascalCase(name !== null && name !== void 0 ? name : '');
  return `${outer}(${inner})`;
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@5.20.0_react@17.0.2/node_modules/@wordpress/compose/build-module/utils/debounce/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ debounce)
/* harmony export */ });
/**
 * Parts of this source were derived and modified from lodash,
 * released under the MIT license.
 *
 * https://github.com/lodash/lodash
 *
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 *
 * Based on Underscore.js, copyright Jeremy Ashkenas,
 * DocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>
 *
 * This software consists of voluntary contributions made by many
 * individuals. For exact contribution history, see the revision history
 * available at https://github.com/lodash/lodash
 *
 * The following license applies to all parts of this software except as
 * documented below:
 *
 * ====
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * A simplified and properly typed version of lodash's `debounce`, that
 * always uses timers instead of sometimes using rAF.
 *
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel delayed
 * `func` invocations and a `flush` method to immediately invoke them. Provide
 * `options` to indicate whether `func` should be invoked on the leading and/or
 * trailing edge of the `wait` timeout. The `func` is invoked with the last
 * arguments provided to the debounced function. Subsequent calls to the debounced
 * function return the result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * @param {Function}                   func             The function to debounce.
 * @param {number}                     wait             The number of milliseconds to delay.
 * @param {Partial< DebounceOptions >} options          The options object.
 * @param {boolean}                    options.leading  Specify invoking on the leading edge of the timeout.
 * @param {number}                     options.maxWait  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean}                    options.trailing Specify invoking on the trailing edge of the timeout.
 *
 * @return Returns the new debounced function.
 */
const debounce = (func, wait, options) => {
  let lastArgs;
  let lastThis;
  let maxWait = 0;
  let result;
  let timerId;
  let lastCallTime;
  let lastInvokeTime = 0;
  let leading = false;
  let maxing = false;
  let trailing = true;

  if (options) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;

    if (options.maxWait !== undefined) {
      maxWait = Math.max(options.maxWait, wait);
    }

    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    const args = lastArgs;
    const thisArg = lastThis;
    lastArgs = undefined;
    lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function startTimer(pendingFunc, waitTime) {
    timerId = setTimeout(pendingFunc, waitTime);
  }

  function cancelTimer() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time; // Start the timer for the trailing edge.

    startTimer(timerExpired, wait); // Invoke the leading edge.

    return leading ? invokeFunc(time) : result;
  }

  function getTimeSinceLastCall(time) {
    return time - (lastCallTime || 0);
  }

  function remainingWait(time) {
    const timeSinceLastCall = getTimeSinceLastCall(time);
    const timeSinceLastInvoke = time - lastInvokeTime;
    const timeWaiting = wait - timeSinceLastCall;
    return maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }

  function shouldInvoke(time) {
    const timeSinceLastCall = getTimeSinceLastCall(time);
    const timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.

    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    const time = Date.now();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    } // Restart the timer.


    startTimer(timerExpired, remainingWait(time));
    return undefined;
  }

  function clearTimer() {
    timerId = undefined;
  }

  function trailingEdge(time) {
    clearTimer(); // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }

    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    cancelTimer();
    lastInvokeTime = 0;
    clearTimer();
    lastArgs = lastCallTime = lastThis = undefined;
  }

  function flush() {
    return pending() ? trailingEdge(Date.now()) : result;
  }

  function pending() {
    return timerId !== undefined;
  }

  function debounced() {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    lastArgs = args;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (!pending()) {
        return leadingEdge(lastCallTime);
      }

      if (maxing) {
        // Handle invocations in a tight loop.
        startTimer(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }

    if (!pending()) {
      startTimer(timerExpired, wait);
    }

    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  debounced.pending = pending;
  return debounced;
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JD: () => (/* binding */ dispatch),
/* harmony export */   Lt: () => (/* binding */ select),
/* harmony export */   kz: () => (/* binding */ register),
/* harmony export */   ti: () => (/* binding */ registerStore)
/* harmony export */ });
/* unused harmony exports resolveSelect, subscribe, registerGenericStore, use */
/* harmony import */ var turbo_combine_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/turbo-combine-reducers@1.0.2/node_modules/turbo-combine-reducers/index.js");
/* harmony import */ var turbo_combine_reducers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(turbo_combine_reducers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _default_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/default-registry.js");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



/** @typedef {import('./types').StoreDescriptor} StoreDescriptor */












/**
 * Object of available plugins to use with a registry.
 *
 * @see [use](#use)
 *
 * @type {Object}
 */


/**
 * The combineReducers helper function turns an object whose values are different
 * reducing functions into a single reducing function you can pass to registerReducer.
 *
 * @param {Object} reducers An object whose values correspond to different reducing
 *                          functions that need to be combined into one.
 *
 * @example
 * ```js
 * import { combineReducers, createReduxStore, register } from '@wordpress/data';
 *
 * const prices = ( state = {}, action ) => {
 * 	return action.type === 'SET_PRICE' ?
 * 		{
 * 			...state,
 * 			[ action.item ]: action.price,
 * 		} :
 * 		state;
 * };
 *
 * const discountPercent = ( state = 0, action ) => {
 * 	return action.type === 'START_SALE' ?
 * 		action.discountPercent :
 * 		state;
 * };
 *
 * const store = createReduxStore( 'my-shop', {
 * 	reducer: combineReducers( {
 * 		prices,
 * 		discountPercent,
 * 	} ),
 * } );
 * register( store );
 * ```
 *
 * @return {Function} A reducer that invokes every reducer inside the reducers
 *                    object, and constructs a state object with the same shape.
 */


/**
 * Given the name or descriptor of a registered store, returns an object of the store's selectors.
 * The selector functions are been pre-bound to pass the current state automatically.
 * As a consumer, you need only pass arguments of the selector, if applicable.
 *
 * @param {string|StoreDescriptor} storeNameOrDescriptor Unique namespace identifier for the store
 *                                                       or the store descriptor.
 *
 * @example
 * ```js
 * import { select } from '@wordpress/data';
 *
 * select( 'my-shop' ).getPrice( 'hammer' );
 * ```
 *
 * @return {Object} Object containing the store's selectors.
 */

const select = _default_registry__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.select;
/**
 * Given the name of a registered store, returns an object containing the store's
 * selectors pre-bound to state so that you only need to supply additional arguments,
 * and modified so that they return promises that resolve to their eventual values,
 * after any resolvers have ran.
 *
 * @param {string|StoreDescriptor} storeNameOrDescriptor Unique namespace identifier for the store
 *                                                       or the store descriptor.
 *
 * @example
 * ```js
 * import { resolveSelect } from '@wordpress/data';
 *
 * resolveSelect( 'my-shop' ).getPrice( 'hammer' ).then(console.log)
 * ```
 *
 * @return {Object} Object containing the store's promise-wrapped selectors.
 */

const resolveSelect = _default_registry__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.resolveSelect;
/**
 * Given the name of a registered store, returns an object of the store's action creators.
 * Calling an action creator will cause it to be dispatched, updating the state value accordingly.
 *
 * Note: Action creators returned by the dispatch will return a promise when
 * they are called.
 *
 * @param {string|StoreDescriptor} storeNameOrDescriptor Unique namespace identifier for the store
 *                                                       or the store descriptor.
 *
 * @example
 * ```js
 * import { dispatch } from '@wordpress/data';
 *
 * dispatch( 'my-shop' ).setPrice( 'hammer', 9.75 );
 * ```
 * @return {Object} Object containing the action creators.
 */

const dispatch = _default_registry__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.dispatch;
/**
 * Given a listener function, the function will be called any time the state value
 * of one of the registered stores has changed. This function returns a `unsubscribe`
 * function used to stop the subscription.
 *
 * @param {Function} listener Callback function.
 *
 * @example
 * ```js
 * import { subscribe } from '@wordpress/data';
 *
 * const unsubscribe = subscribe( () => {
 * 	// You could use this opportunity to test whether the derived result of a
 * 	// selector has subsequently changed as the result of a state update.
 * } );
 *
 * // Later, if necessary...
 * unsubscribe();
 * ```
 */

const subscribe = _default_registry__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.subscribe;
/**
 * Registers a generic store instance.
 *
 * @deprecated Use `register( storeDescriptor )` instead.
 *
 * @param {string} name  Store registry name.
 * @param {Object} store Store instance (`{ getSelectors, getActions, subscribe }`).
 */

const registerGenericStore = _default_registry__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.registerGenericStore;
/**
 * Registers a standard `@wordpress/data` store.
 *
 * @deprecated Use `register` instead.
 *
 * @param {string} storeName Unique namespace identifier for the store.
 * @param {Object} options   Store description (reducer, actions, selectors, resolvers).
 *
 * @return {Object} Registered store object.
 */

const registerStore = _default_registry__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.registerStore;
/**
 * Extends a registry to inherit functionality provided by a given plugin. A
 * plugin is an object with properties aligning to that of a registry, merged
 * to extend the default registry behavior.
 *
 * @param {Object} plugin Plugin object.
 */

const use = _default_registry__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.use;
/**
 * Registers a standard `@wordpress/data` store descriptor.
 *
 * @example
 * ```js
 * import { createReduxStore, register } from '@wordpress/data';
 *
 * const store = createReduxStore( 'demo', {
 *     reducer: ( state = 'OK' ) => state,
 *     selectors: {
 *         getValue: ( state ) => state,
 *     },
 * } );
 * register( store );
 * ```
 *
 * @param {StoreDescriptor} store Store descriptor.
 */

const register = _default_registry__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.register;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+viewport@4.20.0_react@17.0.2/node_modules/@wordpress/viewport/build-module/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  uE: () => (/* reexport */ with_viewport_match)
});

// UNUSED EXPORTS: ifViewportMatches, store

// NAMESPACE OBJECT: ../../node_modules/.pnpm/@wordpress+viewport@4.20.0_react@17.0.2/node_modules/@wordpress/viewport/build-module/store/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, {
  setIsMatching: () => (setIsMatching)
});

// NAMESPACE OBJECT: ../../node_modules/.pnpm/@wordpress+viewport@4.20.0_react@17.0.2/node_modules/@wordpress/viewport/build-module/store/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, {
  isViewportMatch: () => (isViewportMatch)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@5.20.0_react@17.0.2/node_modules/@wordpress/compose/build-module/utils/debounce/index.js
var debounce = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@5.20.0_react@17.0.2/node_modules/@wordpress/compose/build-module/utils/debounce/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/index.js
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/redux-store/index.js + 18 modules
var redux_store = __webpack_require__("../../node_modules/.pnpm/@wordpress+data@6.6.2_react@17.0.2/node_modules/@wordpress/data/build-module/redux-store/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+viewport@4.20.0_react@17.0.2/node_modules/@wordpress/viewport/build-module/store/reducer.js
/**
 * Reducer returning the viewport state, as keys of breakpoint queries with
 * boolean value representing whether query is matched.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
function reducer() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_IS_MATCHING':
      return action.values;
  }

  return state;
}

/* harmony default export */ const store_reducer = (reducer);
//# sourceMappingURL=reducer.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+viewport@4.20.0_react@17.0.2/node_modules/@wordpress/viewport/build-module/store/actions.js
/**
 * Returns an action object used in signalling that viewport queries have been
 * updated. Values are specified as an object of breakpoint query keys where
 * value represents whether query matches.
 * Ignored from documentation as it is for internal use only.
 *
 * @ignore
 *
 * @param {Object} values Breakpoint query matches.
 *
 * @return {Object} Action object.
 */
function setIsMatching(values) {
  return {
    type: 'SET_IS_MATCHING',
    values
  };
}
//# sourceMappingURL=actions.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+viewport@4.20.0_react@17.0.2/node_modules/@wordpress/viewport/build-module/store/selectors.js
/**
 * Returns true if the viewport matches the given query, or false otherwise.
 *
 * @param {Object} state Viewport state object.
 * @param {string} query Query string. Includes operator and breakpoint name,
 *                       space separated. Operator defaults to >=.
 *
 * @example
 *
 * ```js
 * import { store as viewportStore } from '@wordpress/viewport';
 * import { useSelect } from '@wordpress/data';
 * import { __ } from '@wordpress/i18n';
 * const ExampleComponent = () => {
 *     const isMobile = useSelect(
 *         ( select ) => select( viewportStore ).isViewportMatch( '< small' ),
 *         []
 *     );
 *
 *     return isMobile ? (
 *         <div>{ __( 'Mobile' ) }</div>
 *     ) : (
 *         <div>{ __( 'Not Mobile' ) }</div>
 *     );
 * };
 * ```
 *
 * @return {boolean} Whether viewport matches query.
 */
function isViewportMatch(state, query) {
  // Default to `>=` if no operator is present.
  if (query.indexOf(' ') === -1) {
    query = '>= ' + query;
  }

  return !!state[query];
}
//# sourceMappingURL=selectors.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+viewport@4.20.0_react@17.0.2/node_modules/@wordpress/viewport/build-module/store/index.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */




const STORE_NAME = 'core/viewport';
/**
 * Store definition for the viewport namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */

const store = (0,redux_store/* default */.A)(STORE_NAME, {
  reducer: store_reducer,
  actions: actions_namespaceObject,
  selectors: selectors_namespaceObject
});
(0,build_module/* register */.kz)(store);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+viewport@4.20.0_react@17.0.2/node_modules/@wordpress/viewport/build-module/listener.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



const addDimensionsEventListener = (breakpoints, operators) => {
  /**
   * Callback invoked when media query state should be updated. Is invoked a
   * maximum of one time per call stack.
   */
  const setIsMatching = (0,debounce/* debounce */.s)(() => {
    const values = Object.fromEntries(queries.map(_ref => {
      let [key, query] = _ref;
      return [key, query.matches];
    }));
    (0,build_module/* dispatch */.JD)(store).setIsMatching(values);
  }, 0, {
    leading: true
  });
  /**
   * Hash of breakpoint names with generated MediaQueryList for corresponding
   * media query.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
   * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
   *
   * @type {Object<string,MediaQueryList>}
   */

  const operatorEntries = Object.entries(operators);
  const queries = Object.entries(breakpoints).flatMap(_ref2 => {
    let [name, width] = _ref2;
    return operatorEntries.map(_ref3 => {
      let [operator, condition] = _ref3;
      const list = window.matchMedia(`(${condition}: ${width}px)`);
      list.addEventListener('change', setIsMatching);
      return [`${operator} ${name}`, list];
    });
  });
  window.addEventListener('orientationchange', setIsMatching); // Set initial values.

  setIsMatching();
  setIsMatching.flush();
};

/* harmony default export */ const listener = (addDimensionsEventListener);
//# sourceMappingURL=listener.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/extends.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@5.20.0_react@17.0.2/node_modules/@wordpress/compose/build-module/hooks/use-viewport-match/index.js
var use_viewport_match = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@5.20.0_react@17.0.2/node_modules/@wordpress/compose/build-module/hooks/use-viewport-match/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@5.20.0_react@17.0.2/node_modules/@wordpress/compose/build-module/utils/create-higher-order-component/index.js + 1 modules
var create_higher_order_component = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@5.20.0_react@17.0.2/node_modules/@wordpress/compose/build-module/utils/create-higher-order-component/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.24.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js + 2 modules
var is_shallow_equal_build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.24.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+compose@5.20.0_react@17.0.2/node_modules/@wordpress/compose/build-module/higher-order/pure/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Given a component returns the enhanced component augmented with a component
 * only re-rendering when its props/state change
 */

const pure = (0,create_higher_order_component/* createHigherOrderComponent */.f)(function (WrappedComponent) {
  if (WrappedComponent.prototype instanceof react.Component) {
    return class extends WrappedComponent {
      shouldComponentUpdate(nextProps, nextState) {
        return !(0,is_shallow_equal_build_module/* default */.Ay)(nextProps, this.props) || !(0,is_shallow_equal_build_module/* default */.Ay)(nextState, this.state);
      }

    };
  }

  return class extends react.Component {
    shouldComponentUpdate(nextProps) {
      return !(0,is_shallow_equal_build_module/* default */.Ay)(nextProps, this.props);
    }

    render() {
      return (0,react.createElement)(WrappedComponent, this.props);
    }

  };
}, 'pure');
/* harmony default export */ const higher_order_pure = (pure);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+viewport@4.20.0_react@17.0.2/node_modules/@wordpress/viewport/build-module/with-viewport-match.js



/**
 * WordPress dependencies
 */

/**
 * Higher-order component creator, creating a new component which renders with
 * the given prop names, where the value passed to the underlying component is
 * the result of the query assigned as the object's value.
 *
 * @see isViewportMatch
 *
 * @param {Object} queries Object of prop name to viewport query.
 *
 * @example
 *
 * ```jsx
 * function MyComponent( { isMobile } ) {
 * 	return (
 * 		<div>Currently: { isMobile ? 'Mobile' : 'Not Mobile' }</div>
 * 	);
 * }
 *
 * MyComponent = withViewportMatch( { isMobile: '< small' } )( MyComponent );
 * ```
 *
 * @return {Function} Higher-order component.
 */

const withViewportMatch = queries => {
  const queryEntries = Object.entries(queries);

  const useViewPortQueriesResult = () => Object.fromEntries(queryEntries.map(_ref => {
    let [key, query] = _ref;
    let [operator, breakpointName] = query.split(' ');

    if (breakpointName === undefined) {
      breakpointName = operator;
      operator = '>=';
    } // Hooks should unconditionally execute in the same order,
    // we are respecting that as from the static query of the HOC we generate
    // a hook that calls other hooks always in the same order (because the query never changes).
    // eslint-disable-next-line react-hooks/rules-of-hooks


    return [key, (0,use_viewport_match/* default */.A)(breakpointName, operator)];
  }));

  return (0,create_higher_order_component/* createHigherOrderComponent */.f)(WrappedComponent => {
    return higher_order_pure(props => {
      const queriesResult = useViewPortQueriesResult();
      return (0,react.createElement)(WrappedComponent, (0,esm_extends/* default */.A)({}, props, queriesResult));
    });
  }, 'withViewportMatch');
};

/* harmony default export */ const with_viewport_match = (withViewportMatch);
//# sourceMappingURL=with-viewport-match.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+viewport@4.20.0_react@17.0.2/node_modules/@wordpress/viewport/build-module/index.js
/**
 * Internal dependencies
 */




/**
 * Hash of breakpoint names with pixel width at which it becomes effective.
 *
 * @see _breakpoints.scss
 *
 * @type {Object}
 */

const BREAKPOINTS = {
  huge: 1440,
  wide: 1280,
  large: 960,
  medium: 782,
  small: 600,
  mobile: 480
};
/**
 * Hash of query operators with corresponding condition for media query.
 *
 * @type {Object}
 */

const OPERATORS = {
  '<': 'max-width',
  '>=': 'min-width'
};
listener(BREAKPOINTS, OPERATORS);
//# sourceMappingURL=index.js.map

/***/ })

}]);