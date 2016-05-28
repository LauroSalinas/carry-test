// Compiled by ClojureScript 1.8.51 {}
goog.provide('carry_reagent.core');
goog.require('cljs.core');
goog.require('carry.core');
goog.require('reagent.core');
/**
 * Arguments:
 * 
 *   * `app` - the app for which UI should be created
 *   * `view-model` - function which, given a read-only model ratom, returns reactions (e.g. in a map); returned value will be passed to `view`
 *   * `view` - Reagent component function with args: `[view-model dispatch-signal]`
 * 
 *   Note that `view-model` function will be called only once.
 * 
 *   Returns a pair of: view-model value (mostly for testing/debugging) and argless component to be rendered by Reagent.
 */
carry_reagent.core.connect = (function carry_reagent$core$connect(p__20204,view_model,view){
var map__20207 = p__20204;
var map__20207__$1 = ((((!((map__20207 == null)))?((((map__20207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20207):map__20207);
var _app = map__20207__$1;
var model = cljs.core.get.call(null,map__20207__$1,new cljs.core.Keyword(null,"model","model",331153215));
var dispatch_signal = cljs.core.get.call(null,map__20207__$1,new cljs.core.Keyword(null,"dispatch-signal","dispatch-signal",205544591));
if(cljs.core.truth_(model)){
} else {
throw (new Error("Assert failed: model"));
}

if(cljs.core.fn_QMARK_.call(null,dispatch_signal)){
} else {
throw (new Error("Assert failed: (fn? dispatch-signal)"));
}

if(cljs.core.fn_QMARK_.call(null,view_model)){
} else {
throw (new Error("Assert failed: (fn? view-model)"));
}

if(cljs.core.fn_QMARK_.call(null,view)){
} else {
throw (new Error("Assert failed: (fn? view)"));
}

var model_ratom = carry.core.entangle.call(null,model,cljs.core.identity,reagent.core.atom);
var app_view_model = view_model.call(null,model_ratom);
var app_view = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,app_view_model,dispatch_signal], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_view_model,app_view], null);
});
/**
 * Returns a map containing reactions to map entries specified by keys.
 */
carry_reagent.core.track_keys = (function carry_reagent$core$track_keys(map_ratom,keyseq){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__19140__auto__ = (function carry_reagent$core$track_keys_$_iter__20213(s__20214){
return (new cljs.core.LazySeq(null,(function (){
var s__20214__$1 = s__20214;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20214__$1);
if(temp__4657__auto__){
var s__20214__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20214__$2)){
var c__19138__auto__ = cljs.core.chunk_first.call(null,s__20214__$2);
var size__19139__auto__ = cljs.core.count.call(null,c__19138__auto__);
var b__20216 = cljs.core.chunk_buffer.call(null,size__19139__auto__);
if((function (){var i__20215 = (0);
while(true){
if((i__20215 < size__19139__auto__)){
var key = cljs.core._nth.call(null,c__19138__auto__,i__20215);
cljs.core.chunk_append.call(null,b__20216,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,reagent.ratom.make_reaction.call(null,((function (i__20215,key,c__19138__auto__,size__19139__auto__,b__20216,s__20214__$2,temp__4657__auto__){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,map_ratom),key);
});})(i__20215,key,c__19138__auto__,size__19139__auto__,b__20216,s__20214__$2,temp__4657__auto__))
)], null));

var G__20217 = (i__20215 + (1));
i__20215 = G__20217;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20216),carry_reagent$core$track_keys_$_iter__20213.call(null,cljs.core.chunk_rest.call(null,s__20214__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20216),null);
}
} else {
var key = cljs.core.first.call(null,s__20214__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,reagent.ratom.make_reaction.call(null,((function (key,s__20214__$2,temp__4657__auto__){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,map_ratom),key);
});})(key,s__20214__$2,temp__4657__auto__))
)], null),carry_reagent$core$track_keys_$_iter__20213.call(null,cljs.core.rest.call(null,s__20214__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19140__auto__.call(null,keyseq);
})());
});

//# sourceMappingURL=core.js.map?rel=1464365886964