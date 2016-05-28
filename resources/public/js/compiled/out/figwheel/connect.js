// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('app.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__21904__delegate = function (x){
if(cljs.core.truth_(app.core.on_jsload)){
return cljs.core.apply.call(null,app.core.on_jsload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'app.core/on-jsload' is missing");
}
};
var G__21904 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__21905__i = 0, G__21905__a = new Array(arguments.length -  0);
while (G__21905__i < G__21905__a.length) {G__21905__a[G__21905__i] = arguments[G__21905__i + 0]; ++G__21905__i;}
  x = new cljs.core.IndexedSeq(G__21905__a,0);
} 
return G__21904__delegate.call(this,x);};
G__21904.cljs$lang$maxFixedArity = 0;
G__21904.cljs$lang$applyTo = (function (arglist__21906){
var x = cljs.core.seq(arglist__21906);
return G__21904__delegate(x);
});
G__21904.cljs$core$IFn$_invoke$arity$variadic = G__21904__delegate;
return G__21904;
})()
,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),(function() { 
var G__21907__delegate = function (x){
if(cljs.core.truth_(app.core.before_jsload)){
return cljs.core.apply.call(null,app.core.before_jsload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :before-jsload hook 'app.core/before-jsload' is missing");
}
};
var G__21907 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__21908__i = 0, G__21908__a = new Array(arguments.length -  0);
while (G__21908__i < G__21908__a.length) {G__21908__a[G__21908__i] = arguments[G__21908__i + 0]; ++G__21908__i;}
  x = new cljs.core.IndexedSeq(G__21908__a,0);
} 
return G__21907__delegate.call(this,x);};
G__21907.cljs$lang$maxFixedArity = 0;
G__21907.cljs$lang$applyTo = (function (arglist__21909){
var x = cljs.core.seq(arglist__21909);
return G__21907__delegate(x);
});
G__21907.cljs$core$IFn$_invoke$arity$variadic = G__21907__delegate;
return G__21907;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1464476148147