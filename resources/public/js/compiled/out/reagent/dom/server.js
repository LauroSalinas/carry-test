// Compiled by ClojureScript 1.8.51 {}
goog.provide('reagent.dom.server');
goog.require('cljs.core');
goog.require('cljsjs.react.dom.server');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.interop');
reagent.dom.server.load_error = null;
reagent.dom.server.fail = (function reagent$dom$server$fail(e){
reagent.dom.server.load_error = e;

return null;
});
if(typeof reagent.dom.server.server !== 'undefined'){
} else {
reagent.dom.server.server = (function (){var or__18360__auto__ = ((typeof ReactDOMServer !== 'undefined')?ReactDOMServer:null);
if(cljs.core.truth_(or__18360__auto__)){
return or__18360__auto__;
} else {
try{if(typeof require !== 'undefined'){
var or__18360__auto____$1 = require("react-dom/server");
if(cljs.core.truth_(or__18360__auto____$1)){
return or__18360__auto____$1;
} else {
return reagent.dom.server.fail.call(null,(new Error("require('react-dom/server') failed")));
}
} else {
return reagent.dom.server.fail.call(null,(new Error("js/ReactDOMServer is missing")));
}
}catch (e20072){var e = e20072;
return reagent.dom.server.fail.call(null,e);
}}
})();
}
reagent.dom.server.module = (function reagent$dom$server$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.server.server)){
return reagent.dom.server.server;
} else {
throw reagent.dom.server.load_error;
}
});
/**
 * Turns a component into an HTML string.
 */
reagent.dom.server.render_to_string = (function reagent$dom$server$render_to_string(component){
var _STAR_non_reactive_STAR_20074 = reagent.impl.util._STAR_non_reactive_STAR_;
reagent.impl.util._STAR_non_reactive_STAR_ = true;

try{return (reagent.dom.server.module.call(null)["renderToString"])(reagent.impl.template.as_element.call(null,component));
}finally {reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR_20074;
}});
/**
 * Turns a component into an HTML string, without data-react-id attributes, etc.
 */
reagent.dom.server.render_to_static_markup = (function reagent$dom$server$render_to_static_markup(component){
var _STAR_non_reactive_STAR_20076 = reagent.impl.util._STAR_non_reactive_STAR_;
reagent.impl.util._STAR_non_reactive_STAR_ = true;

try{return (reagent.dom.server.module.call(null)["renderToStaticMarkup"])(reagent.impl.template.as_element.call(null,component));
}finally {reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR_20076;
}});

//# sourceMappingURL=server.js.map?rel=1464365886677