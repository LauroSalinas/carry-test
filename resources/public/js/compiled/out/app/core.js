// Compiled by ClojureScript 1.8.51 {}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('counter.core');
goog.require('carry.core');
goog.require('carry_reagent.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
app.core.main = (function app$core$main(){
var app__$1 = carry.core.app.call(null,counter.core.spec);
var vec__26269 = carry_reagent.core.connect.call(null,app__$1,counter.core.view_model,counter.core.view);
var app_view_model = cljs.core.nth.call(null,vec__26269,(0),null);
var app_view = cljs.core.nth.call(null,vec__26269,(1),null);
reagent.core.render.call(null,app_view,document.getElementById("root"));

new cljs.core.Keyword(null,"dispatch-signal","dispatch-signal",205544591).cljs$core$IFn$_invoke$arity$1(app__$1).call(null,new cljs.core.Keyword(null,"on-start","on-start",-1839785985));

return cljs.core.assoc.call(null,app__$1,new cljs.core.Keyword(null,"view-model","view-model",-895405675),app_view_model);
});
app.core.app = app.core.main.call(null);
app.core.before_jsload = (function app$core$before_jsload(){
return new cljs.core.Keyword(null,"dispatch-signal","dispatch-signal",205544591).cljs$core$IFn$_invoke$arity$1(app.core.app).call(null,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515));
});
app.core.on_jsload = (function app$core$on_jsload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1464390726092