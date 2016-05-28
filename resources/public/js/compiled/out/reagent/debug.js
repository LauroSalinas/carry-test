// Compiled by ClojureScript 1.8.51 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__19599__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__19599 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19600__i = 0, G__19600__a = new Array(arguments.length -  0);
while (G__19600__i < G__19600__a.length) {G__19600__a[G__19600__i] = arguments[G__19600__i + 0]; ++G__19600__i;}
  args = new cljs.core.IndexedSeq(G__19600__a,0);
} 
return G__19599__delegate.call(this,args);};
G__19599.cljs$lang$maxFixedArity = 0;
G__19599.cljs$lang$applyTo = (function (arglist__19601){
var args = cljs.core.seq(arglist__19601);
return G__19599__delegate(args);
});
G__19599.cljs$core$IFn$_invoke$arity$variadic = G__19599__delegate;
return G__19599;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__19602__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__19602 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19603__i = 0, G__19603__a = new Array(arguments.length -  0);
while (G__19603__i < G__19603__a.length) {G__19603__a[G__19603__i] = arguments[G__19603__i + 0]; ++G__19603__i;}
  args = new cljs.core.IndexedSeq(G__19603__a,0);
} 
return G__19602__delegate.call(this,args);};
G__19602.cljs$lang$maxFixedArity = 0;
G__19602.cljs$lang$applyTo = (function (arglist__19604){
var args = cljs.core.seq(arglist__19604);
return G__19602__delegate(args);
});
G__19602.cljs$core$IFn$_invoke$arity$variadic = G__19602__delegate;
return G__19602;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1464365884616