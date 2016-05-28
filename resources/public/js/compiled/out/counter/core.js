// Compiled by ClojureScript 1.8.51 {}
goog.provide('counter.core');
goog.require('cljs.core');
goog.require('cljs.core.match');
counter.core._initial_model = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"val","val",128701612),(0),new cljs.core.Keyword(null,"thetime","thetime",-1272205155),(0),new cljs.core.Keyword(null,"box-value","box-value",458192633),"hello",new cljs.core.Keyword(null,"clock-time","clock-time",1696313975),(new Date())], null);
counter.core._control = (function counter$core$_control(model,signal,_dispatch_signal,dispatch_action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-start","on-start",-1839785985))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"thetime","thetime",-1272205155).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,model)),(0))){
window.setInterval((function (){
return dispatch_action.call(null,new cljs.core.Keyword(null,"inc-time","inc-time",2114602055));
}),(1000));
} else {
}

return window.setInterval((function (){
return dispatch_action.call(null,new cljs.core.Keyword(null,"set-clock","set-clock",-748692873));
}),(1000));
} else {
throw cljs.core.match.backtrack;

}
}catch (e26243){if((e26243 instanceof Error)){
var e__21111__auto__ = e26243;
if((e__21111__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e26244){if((e26244 instanceof Error)){
var e__21111__auto____$1 = e26244;
if((e__21111__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-increment","on-increment",1757490926))){
return dispatch_action.call(null,new cljs.core.Keyword(null,"increment","increment",-1558831484));
} else {
throw cljs.core.match.backtrack;

}
}catch (e26245){if((e26245 instanceof Error)){
var e__21111__auto____$2 = e26245;
if((e__21111__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-decrement","on-decrement",614026502))){
return dispatch_action.call(null,new cljs.core.Keyword(null,"decrement","decrement",-725286119));
} else {
throw cljs.core.match.backtrack;

}
}catch (e26246){if((e26246 instanceof Error)){
var e__21111__auto____$3 = e26246;
if((e__21111__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-increment-if-odd","on-increment-if-odd",-724998172))){
if(cljs.core.odd_QMARK_.call(null,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,model)))){
return dispatch_action.call(null,new cljs.core.Keyword(null,"increment","increment",-1558831484));
} else {
return null;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e26247){if((e26247 instanceof Error)){
var e__21111__auto____$4 = e26247;
if((e__21111__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-increment-async","on-increment-async",1146967586))){
return window.setTimeout(((function (e__21111__auto____$4,e__21111__auto____$3,e__21111__auto____$2,e__21111__auto____$1,e__21111__auto__){
return (function (){
return dispatch_action.call(null,new cljs.core.Keyword(null,"increment","increment",-1558831484));
});})(e__21111__auto____$4,e__21111__auto____$3,e__21111__auto____$2,e__21111__auto____$1,e__21111__auto__))
,(1000));
} else {
throw cljs.core.match.backtrack;

}
}catch (e26248){if((e26248 instanceof Error)){
var e__21111__auto____$5 = e26248;
if((e__21111__auto____$5 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__21111__auto____$5;
}
} else {
throw e26248;

}
}} else {
throw e__21111__auto____$4;
}
} else {
throw e26247;

}
}} else {
throw e__21111__auto____$3;
}
} else {
throw e26246;

}
}} else {
throw e__21111__auto____$2;
}
} else {
throw e26245;

}
}} else {
throw e__21111__auto____$1;
}
} else {
throw e26244;

}
}} else {
throw e__21111__auto__;
}
} else {
throw e26243;

}
}});
counter.core._reconcile = (function counter$core$_reconcile(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"change-value","change-value",316989153))){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"box-value","box-value",458192633),(function (){
return [cljs.core.str("there")].join('');
}));
} else {
throw cljs.core.match.backtrack;

}
}catch (e26256){if((e26256 instanceof Error)){
var e__21111__auto__ = e26256;
if((e__21111__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"increment","increment",-1558831484))){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26257){if((e26257 instanceof Error)){
var e__21111__auto____$1 = e26257;
if((e__21111__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"decrement","decrement",-725286119))){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.dec);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26258){if((e26258 instanceof Error)){
var e__21111__auto____$2 = e26258;
if((e__21111__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"inc-time","inc-time",2114602055))){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"thetime","thetime",-1272205155),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26259){if((e26259 instanceof Error)){
var e__21111__auto____$3 = e26259;
if((e__21111__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"set-clock","set-clock",-748692873))){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"clock-time","clock-time",1696313975),((function (e__21111__auto____$3,e__21111__auto____$2,e__21111__auto____$1,e__21111__auto__){
return (function (){
return (new Date());
});})(e__21111__auto____$3,e__21111__auto____$2,e__21111__auto____$1,e__21111__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26260){if((e26260 instanceof Error)){
var e__21111__auto____$4 = e26260;
if((e__21111__auto____$4 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__21111__auto____$4;
}
} else {
throw e26260;

}
}} else {
throw e__21111__auto____$3;
}
} else {
throw e26259;

}
}} else {
throw e__21111__auto____$2;
}
} else {
throw e26258;

}
}} else {
throw e__21111__auto____$1;
}
} else {
throw e26257;

}
}} else {
throw e__21111__auto__;
}
} else {
throw e26256;

}
}});
counter.core.view_model = (function counter$core$view_model(model){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"counter","counter",804008177),reagent.ratom.make_reaction.call(null,(function (){
return [cljs.core.str("#"),cljs.core.str(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,model)))].join('');
})),new cljs.core.Keyword(null,"timer","timer",-1266967739),reagent.ratom.make_reaction.call(null,(function (){
return [cljs.core.str("Time elapsed: "),cljs.core.str(new cljs.core.Keyword(null,"thetime","thetime",-1272205155).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,model)))].join('');
})),new cljs.core.Keyword(null,"bvalue","bvalue",-217142384),reagent.ratom.make_reaction.call(null,(function (){
return [cljs.core.str("1"),cljs.core.str(new cljs.core.Keyword(null,"box-value","box-value",458192633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,model)))].join('');
})),new cljs.core.Keyword(null,"clock","clock",-894301127),reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"clock-time","clock-time",1696313975).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,model));
}))], null);
});
counter.core.show_time = (function counter$core$show_time(date){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),date.getHours(),":",((((9) < date.getMinutes()))?[cljs.core.str(date.getMinutes())].join(''):[cljs.core.str("0"),cljs.core.str(date.getMinutes())].join('')),":",((((9) < date.getSeconds()))?[cljs.core.str(date.getSeconds())].join(''):[cljs.core.str("0"),cljs.core.str(date.getSeconds())].join(''))], null);
});
counter.core.view = (function counter$core$view(p__26261,dispatch){
var map__26264 = p__26261;
var map__26264__$1 = ((((!((map__26264 == null)))?((((map__26264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26264):map__26264);
var _view_model = map__26264__$1;
var counter__$1 = cljs.core.get.call(null,map__26264__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
var timer = cljs.core.get.call(null,map__26264__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
var bvalue = cljs.core.get.call(null,map__26264__$1,new cljs.core.Keyword(null,"bvalue","bvalue",-217142384));
var clock = cljs.core.get.call(null,map__26264__$1,new cljs.core.Keyword(null,"clock","clock",-894301127));
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.deref.call(null,counter__$1)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__26264,map__26264__$1,_view_model,counter__$1,timer,bvalue,clock){
return (function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-increment","on-increment",1757490926));
});})(map__26264,map__26264__$1,_view_model,counter__$1,timer,bvalue,clock))
], null),"+"], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__26264,map__26264__$1,_view_model,counter__$1,timer,bvalue,clock){
return (function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-decrement","on-decrement",614026502));
});})(map__26264,map__26264__$1,_view_model,counter__$1,timer,bvalue,clock))
], null),"-"], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__26264,map__26264__$1,_view_model,counter__$1,timer,bvalue,clock){
return (function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-increment-if-odd","on-increment-if-odd",-724998172));
});})(map__26264,map__26264__$1,_view_model,counter__$1,timer,bvalue,clock))
], null),"Increment if odd"], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__26264,map__26264__$1,_view_model,counter__$1,timer,bvalue,clock){
return (function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-increment-async","on-increment-async",1146967586));
});})(map__26264,map__26264__$1,_view_model,counter__$1,timer,bvalue,clock))
], null),"Increment async"], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.deref.call(null,timer)," "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Input Value: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,bvalue),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__26264,map__26264__$1,_view_model,counter__$1,timer,bvalue,clock){
return (function (){
return dispatch.call(null,new cljs.core.Keyword(null,"change-value","change-value",316989153));
});})(map__26264,map__26264__$1,_view_model,counter__$1,timer,bvalue,clock))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The time is: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter.core.show_time,cljs.core.deref.call(null,clock)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Test input: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,bvalue),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__26264,map__26264__$1,_view_model,counter__$1,timer,bvalue,clock){
return (function (){
return dispatch.call(null,new cljs.core.Keyword(null,"change-value","change-value",316989153));
});})(map__26264,map__26264__$1,_view_model,counter__$1,timer,bvalue,clock))
], null)], null)], null)], null)], null);
});
counter.core.spec = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),counter.core._initial_model,new cljs.core.Keyword(null,"control","control",1892578036),counter.core._control,new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),counter.core._reconcile], null);

//# sourceMappingURL=core.js.map?rel=1464390726070