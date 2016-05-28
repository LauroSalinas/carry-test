// Compiled by ClojureScript 1.8.51 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
reagent.dom.load_error = null;
reagent.dom.fail = (function reagent$dom$fail(e){
reagent.dom.load_error = e;

return null;
});
if(typeof reagent.dom.dom !== 'undefined'){
} else {
reagent.dom.dom = (function (){var or__18360__auto__ = ((typeof ReactDOM !== 'undefined')?ReactDOM:null);
if(cljs.core.truth_(or__18360__auto__)){
return or__18360__auto__;
} else {
try{if(typeof require !== 'undefined'){
var or__18360__auto____$1 = require("react-dom");
if(cljs.core.truth_(or__18360__auto____$1)){
return or__18360__auto____$1;
} else {
return reagent.dom.fail.call(null,(new Error("require('react-dom') failed")));
}
} else {
return reagent.dom.fail.call(null,(new Error("js/ReactDOM is missing")));
}
}catch (e20079){var e = e20079;
return reagent.dom.fail.call(null,e);
}}
})();
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.dom)){
return reagent.dom.dom;
} else {
throw reagent.dom.load_error;
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_20082 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_20082){
return (function (){
var _STAR_always_update_STAR_20083 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_20083;
}});})(_STAR_always_update_STAR_20082))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_20082;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args20084 = [];
var len__19430__auto___20087 = arguments.length;
var i__19431__auto___20088 = (0);
while(true){
if((i__19431__auto___20088 < len__19430__auto___20087)){
args20084.push((arguments[i__19431__auto___20088]));

var G__20089 = (i__19431__auto___20088 + (1));
i__19431__auto___20088 = G__20089;
continue;
} else {
}
break;
}

var G__20086 = args20084.length;
switch (G__20086) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20084.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
var seq__20095_20099 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__20096_20100 = null;
var count__20097_20101 = (0);
var i__20098_20102 = (0);
while(true){
if((i__20098_20102 < count__20097_20101)){
var v_20103 = cljs.core._nth.call(null,chunk__20096_20100,i__20098_20102);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_20103);

var G__20104 = seq__20095_20099;
var G__20105 = chunk__20096_20100;
var G__20106 = count__20097_20101;
var G__20107 = (i__20098_20102 + (1));
seq__20095_20099 = G__20104;
chunk__20096_20100 = G__20105;
count__20097_20101 = G__20106;
i__20098_20102 = G__20107;
continue;
} else {
var temp__4657__auto___20108 = cljs.core.seq.call(null,seq__20095_20099);
if(temp__4657__auto___20108){
var seq__20095_20109__$1 = temp__4657__auto___20108;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20095_20109__$1)){
var c__19171__auto___20110 = cljs.core.chunk_first.call(null,seq__20095_20109__$1);
var G__20111 = cljs.core.chunk_rest.call(null,seq__20095_20109__$1);
var G__20112 = c__19171__auto___20110;
var G__20113 = cljs.core.count.call(null,c__19171__auto___20110);
var G__20114 = (0);
seq__20095_20099 = G__20111;
chunk__20096_20100 = G__20112;
count__20097_20101 = G__20113;
i__20098_20102 = G__20114;
continue;
} else {
var v_20115 = cljs.core.first.call(null,seq__20095_20109__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_20115);

var G__20116 = cljs.core.next.call(null,seq__20095_20109__$1);
var G__20117 = null;
var G__20118 = (0);
var G__20119 = (0);
seq__20095_20099 = G__20116;
chunk__20096_20100 = G__20117;
count__20097_20101 = G__20118;
i__20098_20102 = G__20119;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1464365886735