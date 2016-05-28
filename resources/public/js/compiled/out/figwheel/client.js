// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__25488 = cljs.core._EQ_;
var expr__25489 = (function (){var or__18360__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e25492){if((e25492 instanceof Error)){
var e = e25492;
return false;
} else {
throw e25492;

}
}})();
if(cljs.core.truth_(or__18360__auto__)){
return or__18360__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__25488.call(null,"true",expr__25489))){
return true;
} else {
if(cljs.core.truth_(pred__25488.call(null,"false",expr__25489))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25489)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e25494){if((e25494 instanceof Error)){
var e = e25494;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e25494;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19437__auto__ = [];
var len__19430__auto___25496 = arguments.length;
var i__19431__auto___25497 = (0);
while(true){
if((i__19431__auto___25497 < len__19430__auto___25496)){
args__19437__auto__.push((arguments[i__19431__auto___25497]));

var G__25498 = (i__19431__auto___25497 + (1));
i__19431__auto___25497 = G__25498;
continue;
} else {
}
break;
}

var argseq__19438__auto__ = ((((0) < args__19437__auto__.length))?(new cljs.core.IndexedSeq(args__19437__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19438__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq25495){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25495));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25499){
var map__25502 = p__25499;
var map__25502__$1 = ((((!((map__25502 == null)))?((((map__25502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25502):map__25502);
var message = cljs.core.get.call(null,map__25502__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25502__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18360__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18360__auto__)){
return or__18360__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18348__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18348__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18348__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21212__auto___25664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21212__auto___25664,ch){
return (function (){
var f__21213__auto__ = (function (){var switch__21100__auto__ = ((function (c__21212__auto___25664,ch){
return (function (state_25633){
var state_val_25634 = (state_25633[(1)]);
if((state_val_25634 === (7))){
var inst_25629 = (state_25633[(2)]);
var state_25633__$1 = state_25633;
var statearr_25635_25665 = state_25633__$1;
(statearr_25635_25665[(2)] = inst_25629);

(statearr_25635_25665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (1))){
var state_25633__$1 = state_25633;
var statearr_25636_25666 = state_25633__$1;
(statearr_25636_25666[(2)] = null);

(statearr_25636_25666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (4))){
var inst_25586 = (state_25633[(7)]);
var inst_25586__$1 = (state_25633[(2)]);
var state_25633__$1 = (function (){var statearr_25637 = state_25633;
(statearr_25637[(7)] = inst_25586__$1);

return statearr_25637;
})();
if(cljs.core.truth_(inst_25586__$1)){
var statearr_25638_25667 = state_25633__$1;
(statearr_25638_25667[(1)] = (5));

} else {
var statearr_25639_25668 = state_25633__$1;
(statearr_25639_25668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (15))){
var inst_25593 = (state_25633[(8)]);
var inst_25608 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25593);
var inst_25609 = cljs.core.first.call(null,inst_25608);
var inst_25610 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25609);
var inst_25611 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_25610)].join('');
var inst_25612 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_25611);
var state_25633__$1 = state_25633;
var statearr_25640_25669 = state_25633__$1;
(statearr_25640_25669[(2)] = inst_25612);

(statearr_25640_25669[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (13))){
var inst_25617 = (state_25633[(2)]);
var state_25633__$1 = state_25633;
var statearr_25641_25670 = state_25633__$1;
(statearr_25641_25670[(2)] = inst_25617);

(statearr_25641_25670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (6))){
var state_25633__$1 = state_25633;
var statearr_25642_25671 = state_25633__$1;
(statearr_25642_25671[(2)] = null);

(statearr_25642_25671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (17))){
var inst_25615 = (state_25633[(2)]);
var state_25633__$1 = state_25633;
var statearr_25643_25672 = state_25633__$1;
(statearr_25643_25672[(2)] = inst_25615);

(statearr_25643_25672[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (3))){
var inst_25631 = (state_25633[(2)]);
var state_25633__$1 = state_25633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25633__$1,inst_25631);
} else {
if((state_val_25634 === (12))){
var inst_25592 = (state_25633[(9)]);
var inst_25606 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25592,opts);
var state_25633__$1 = state_25633;
if(cljs.core.truth_(inst_25606)){
var statearr_25644_25673 = state_25633__$1;
(statearr_25644_25673[(1)] = (15));

} else {
var statearr_25645_25674 = state_25633__$1;
(statearr_25645_25674[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (2))){
var state_25633__$1 = state_25633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25633__$1,(4),ch);
} else {
if((state_val_25634 === (11))){
var inst_25593 = (state_25633[(8)]);
var inst_25598 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25599 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25593);
var inst_25600 = cljs.core.async.timeout.call(null,(1000));
var inst_25601 = [inst_25599,inst_25600];
var inst_25602 = (new cljs.core.PersistentVector(null,2,(5),inst_25598,inst_25601,null));
var state_25633__$1 = state_25633;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25633__$1,(14),inst_25602);
} else {
if((state_val_25634 === (9))){
var inst_25593 = (state_25633[(8)]);
var inst_25619 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_25620 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25593);
var inst_25621 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25620);
var inst_25622 = [cljs.core.str("Not loading: "),cljs.core.str(inst_25621)].join('');
var inst_25623 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_25622);
var state_25633__$1 = (function (){var statearr_25646 = state_25633;
(statearr_25646[(10)] = inst_25619);

return statearr_25646;
})();
var statearr_25647_25675 = state_25633__$1;
(statearr_25647_25675[(2)] = inst_25623);

(statearr_25647_25675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (5))){
var inst_25586 = (state_25633[(7)]);
var inst_25588 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25589 = (new cljs.core.PersistentArrayMap(null,2,inst_25588,null));
var inst_25590 = (new cljs.core.PersistentHashSet(null,inst_25589,null));
var inst_25591 = figwheel.client.focus_msgs.call(null,inst_25590,inst_25586);
var inst_25592 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25591);
var inst_25593 = cljs.core.first.call(null,inst_25591);
var inst_25594 = figwheel.client.autoload_QMARK_.call(null);
var state_25633__$1 = (function (){var statearr_25648 = state_25633;
(statearr_25648[(8)] = inst_25593);

(statearr_25648[(9)] = inst_25592);

return statearr_25648;
})();
if(cljs.core.truth_(inst_25594)){
var statearr_25649_25676 = state_25633__$1;
(statearr_25649_25676[(1)] = (8));

} else {
var statearr_25650_25677 = state_25633__$1;
(statearr_25650_25677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (14))){
var inst_25604 = (state_25633[(2)]);
var state_25633__$1 = state_25633;
var statearr_25651_25678 = state_25633__$1;
(statearr_25651_25678[(2)] = inst_25604);

(statearr_25651_25678[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (16))){
var state_25633__$1 = state_25633;
var statearr_25652_25679 = state_25633__$1;
(statearr_25652_25679[(2)] = null);

(statearr_25652_25679[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (10))){
var inst_25625 = (state_25633[(2)]);
var state_25633__$1 = (function (){var statearr_25653 = state_25633;
(statearr_25653[(11)] = inst_25625);

return statearr_25653;
})();
var statearr_25654_25680 = state_25633__$1;
(statearr_25654_25680[(2)] = null);

(statearr_25654_25680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (8))){
var inst_25592 = (state_25633[(9)]);
var inst_25596 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25592,opts);
var state_25633__$1 = state_25633;
if(cljs.core.truth_(inst_25596)){
var statearr_25655_25681 = state_25633__$1;
(statearr_25655_25681[(1)] = (11));

} else {
var statearr_25656_25682 = state_25633__$1;
(statearr_25656_25682[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21212__auto___25664,ch))
;
return ((function (switch__21100__auto__,c__21212__auto___25664,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21101__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21101__auto____0 = (function (){
var statearr_25660 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25660[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21101__auto__);

(statearr_25660[(1)] = (1));

return statearr_25660;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21101__auto____1 = (function (state_25633){
while(true){
var ret_value__21102__auto__ = (function (){try{while(true){
var result__21103__auto__ = switch__21100__auto__.call(null,state_25633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21103__auto__;
}
break;
}
}catch (e25661){if((e25661 instanceof Object)){
var ex__21104__auto__ = e25661;
var statearr_25662_25683 = state_25633;
(statearr_25662_25683[(5)] = ex__21104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25684 = state_25633;
state_25633 = G__25684;
continue;
} else {
return ret_value__21102__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21101__auto__ = function(state_25633){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21101__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21101__auto____1.call(this,state_25633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21101__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21101__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21101__auto__;
})()
;})(switch__21100__auto__,c__21212__auto___25664,ch))
})();
var state__21214__auto__ = (function (){var statearr_25663 = f__21213__auto__.call(null);
(statearr_25663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21212__auto___25664);

return statearr_25663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21214__auto__);
});})(c__21212__auto___25664,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25685_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25685_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_25692 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25692){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25690 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25691 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25691;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25690;
}}catch (e25689){if((e25689 instanceof Error)){
var e = e25689;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25692], null));
} else {
var e = e25689;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25692))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25693){
var map__25700 = p__25693;
var map__25700__$1 = ((((!((map__25700 == null)))?((((map__25700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25700):map__25700);
var opts = map__25700__$1;
var build_id = cljs.core.get.call(null,map__25700__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25700,map__25700__$1,opts,build_id){
return (function (p__25702){
var vec__25703 = p__25702;
var map__25704 = cljs.core.nth.call(null,vec__25703,(0),null);
var map__25704__$1 = ((((!((map__25704 == null)))?((((map__25704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25704):map__25704);
var msg = map__25704__$1;
var msg_name = cljs.core.get.call(null,map__25704__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25703,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25703,map__25704,map__25704__$1,msg,msg_name,_,map__25700,map__25700__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25703,map__25704,map__25704__$1,msg,msg_name,_,map__25700,map__25700__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25700,map__25700__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25710){
var vec__25711 = p__25710;
var map__25712 = cljs.core.nth.call(null,vec__25711,(0),null);
var map__25712__$1 = ((((!((map__25712 == null)))?((((map__25712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25712):map__25712);
var msg = map__25712__$1;
var msg_name = cljs.core.get.call(null,map__25712__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25711,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25714){
var map__25724 = p__25714;
var map__25724__$1 = ((((!((map__25724 == null)))?((((map__25724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25724):map__25724);
var on_compile_warning = cljs.core.get.call(null,map__25724__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25724__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25724,map__25724__$1,on_compile_warning,on_compile_fail){
return (function (p__25726){
var vec__25727 = p__25726;
var map__25728 = cljs.core.nth.call(null,vec__25727,(0),null);
var map__25728__$1 = ((((!((map__25728 == null)))?((((map__25728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25728):map__25728);
var msg = map__25728__$1;
var msg_name = cljs.core.get.call(null,map__25728__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25727,(1));
var pred__25730 = cljs.core._EQ_;
var expr__25731 = msg_name;
if(cljs.core.truth_(pred__25730.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25731))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25730.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25731))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25724,map__25724__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21212__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21212__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21213__auto__ = (function (){var switch__21100__auto__ = ((function (c__21212__auto__,msg_hist,msg_names,msg){
return (function (state_25947){
var state_val_25948 = (state_25947[(1)]);
if((state_val_25948 === (7))){
var inst_25871 = (state_25947[(2)]);
var state_25947__$1 = state_25947;
if(cljs.core.truth_(inst_25871)){
var statearr_25949_25995 = state_25947__$1;
(statearr_25949_25995[(1)] = (8));

} else {
var statearr_25950_25996 = state_25947__$1;
(statearr_25950_25996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25948 === (20))){
var inst_25941 = (state_25947[(2)]);
var state_25947__$1 = state_25947;
var statearr_25951_25997 = state_25947__$1;
(statearr_25951_25997[(2)] = inst_25941);

(statearr_25951_25997[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25948 === (27))){
var inst_25937 = (state_25947[(2)]);
var state_25947__$1 = state_25947;
var statearr_25952_25998 = state_25947__$1;
(statearr_25952_25998[(2)] = inst_25937);

(statearr_25952_25998[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25948 === (1))){
var inst_25864 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25947__$1 = state_25947;
if(cljs.core.truth_(inst_25864)){
var statearr_25953_25999 = state_25947__$1;
(statearr_25953_25999[(1)] = (2));

} else {
var statearr_25954_26000 = state_25947__$1;
(statearr_25954_26000[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25948 === (24))){
var inst_25939 = (state_25947[(2)]);
var state_25947__$1 = state_25947;
var statearr_25955_26001 = state_25947__$1;
(statearr_25955_26001[(2)] = inst_25939);

(statearr_25955_26001[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25948 === (4))){
var inst_25945 = (state_25947[(2)]);
var state_25947__$1 = state_25947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25947__$1,inst_25945);
} else {
if((state_val_25948 === (15))){
var inst_25943 = (state_25947[(2)]);
var state_25947__$1 = state_25947;
var statearr_25956_26002 = state_25947__$1;
(statearr_25956_26002[(2)] = inst_25943);

(statearr_25956_26002[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25948 === (21))){
var inst_25902 = (state_25947[(2)]);
var state_25947__$1 = state_25947;
var statearr_25957_26003 = state_25947__$1;
(statearr_25957_26003[(2)] = inst_25902);

(statearr_25957_26003[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25948 === (31))){
var inst_25926 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25947__$1 = state_25947;
if(cljs.core.truth_(inst_25926)){
var statearr_25958_26004 = state_25947__$1;
(statearr_25958_26004[(1)] = (34));

} else {
var statearr_25959_26005 = state_25947__$1;
(statearr_25959_26005[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25948 === (32))){
var inst_25935 = (state_25947[(2)]);
var state_25947__$1 = state_25947;
var statearr_25960_26006 = state_25947__$1;
(statearr_25960_26006[(2)] = inst_25935);

(statearr_25960_26006[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25948 === (33))){
var inst_25924 = (state_25947[(2)]);
var state_25947__$1 = state_25947;
var statearr_25961_26007 = state_25947__$1;
(statearr_25961_26007[(2)] = inst_25924);

(statearr_25961_26007[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25948 === (13))){
var inst_25885 = figwheel.client.heads_up.clear.call(null);
var state_25947__$1 = state_25947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25947__$1,(16),inst_25885);
} else {
if((state_val_25948 === (22))){
var inst_25906 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25907 = figwheel.client.heads_up.append_message.call(null,inst_25906);
var state_25947__$1 = state_25947;
var statearr_25962_26008 = state_25947__$1;
(statearr_25962_26008[(2)] = inst_25907);

(statearr_25962_26008[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25948 === (36))){
var inst_25933 = (state_25947[(2)]);
var state_25947__$1 = state_25947;
var statearr_25963_26009 = state_25947__$1;
(statearr_25963_26009[(2)] = inst_25933);

(statearr_25963_26009[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25948 === (29))){
var inst_25917 = (state_25947[(2)]);
var state_25947__$1 = state_25947;
var statearr_25964_26010 = state_25947__$1;
(statearr_25964_26010[(2)] = inst_25917);

(statearr_25964_26010[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25948 === (6))){
var inst_25866 = (state_25947[(7)]);
var state_25947__$1 = state_25947;
var statearr_25965_26011 = state_25947__$1;
(statearr_25965_26011[(2)] = inst_25866);

(statearr_25965_26011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25948 === (28))){
var inst_25913 = (state_25947[(2)]);
var inst_25914 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25915 = figwheel.client.heads_up.display_warning.call(null,inst_25914);
var state_25947__$1 = (function (){var statearr_25966 = state_25947;
(statearr_25966[(8)] = inst_25913);

return statearr_25966;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25947__$1,(29),inst_25915);
} else {
if((state_val_25948 === (25))){
var inst_25911 = figwheel.client.heads_up.clear.call(null);
var state_25947__$1 = state_25947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25947__$1,(28),inst_25911);
} else {
if((state_val_25948 === (34))){
var inst_25928 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25947__$1 = state_25947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25947__$1,(37),inst_25928);
} else {
if((state_val_25948 === (17))){
var inst_25893 = (state_25947[(2)]);
var state_25947__$1 = state_25947;
var statearr_25967_26012 = state_25947__$1;
(statearr_25967_26012[(2)] = inst_25893);

(statearr_25967_26012[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25948 === (3))){
var inst_25883 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25947__$1 = state_25947;
if(cljs.core.truth_(inst_25883)){
var statearr_25968_26013 = state_25947__$1;
(statearr_25968_26013[(1)] = (13));

} else {
var statearr_25969_26014 = state_25947__$1;
(statearr_25969_26014[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25948 === (12))){
var inst_25879 = (state_25947[(2)]);
var state_25947__$1 = state_25947;
var statearr_25970_26015 = state_25947__$1;
(statearr_25970_26015[(2)] = inst_25879);

(statearr_25970_26015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25948 === (2))){
var inst_25866 = (state_25947[(7)]);
var inst_25866__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25947__$1 = (function (){var statearr_25971 = state_25947;
(statearr_25971[(7)] = inst_25866__$1);

return statearr_25971;
})();
if(cljs.core.truth_(inst_25866__$1)){
var statearr_25972_26016 = state_25947__$1;
(statearr_25972_26016[(1)] = (5));

} else {
var statearr_25973_26017 = state_25947__$1;
(statearr_25973_26017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25948 === (23))){
var inst_25909 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25947__$1 = state_25947;
if(cljs.core.truth_(inst_25909)){
var statearr_25974_26018 = state_25947__$1;
(statearr_25974_26018[(1)] = (25));

} else {
var statearr_25975_26019 = state_25947__$1;
(statearr_25975_26019[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25948 === (35))){
var state_25947__$1 = state_25947;
var statearr_25976_26020 = state_25947__$1;
(statearr_25976_26020[(2)] = null);

(statearr_25976_26020[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25948 === (19))){
var inst_25904 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25947__$1 = state_25947;
if(cljs.core.truth_(inst_25904)){
var statearr_25977_26021 = state_25947__$1;
(statearr_25977_26021[(1)] = (22));

} else {
var statearr_25978_26022 = state_25947__$1;
(statearr_25978_26022[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25948 === (11))){
var inst_25875 = (state_25947[(2)]);
var state_25947__$1 = state_25947;
var statearr_25979_26023 = state_25947__$1;
(statearr_25979_26023[(2)] = inst_25875);

(statearr_25979_26023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25948 === (9))){
var inst_25877 = figwheel.client.heads_up.clear.call(null);
var state_25947__$1 = state_25947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25947__$1,(12),inst_25877);
} else {
if((state_val_25948 === (5))){
var inst_25868 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25947__$1 = state_25947;
var statearr_25980_26024 = state_25947__$1;
(statearr_25980_26024[(2)] = inst_25868);

(statearr_25980_26024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25948 === (14))){
var inst_25895 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25947__$1 = state_25947;
if(cljs.core.truth_(inst_25895)){
var statearr_25981_26025 = state_25947__$1;
(statearr_25981_26025[(1)] = (18));

} else {
var statearr_25982_26026 = state_25947__$1;
(statearr_25982_26026[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25948 === (26))){
var inst_25919 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25947__$1 = state_25947;
if(cljs.core.truth_(inst_25919)){
var statearr_25983_26027 = state_25947__$1;
(statearr_25983_26027[(1)] = (30));

} else {
var statearr_25984_26028 = state_25947__$1;
(statearr_25984_26028[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25948 === (16))){
var inst_25887 = (state_25947[(2)]);
var inst_25888 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25889 = figwheel.client.format_messages.call(null,inst_25888);
var inst_25890 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25891 = figwheel.client.heads_up.display_error.call(null,inst_25889,inst_25890);
var state_25947__$1 = (function (){var statearr_25985 = state_25947;
(statearr_25985[(9)] = inst_25887);

return statearr_25985;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25947__$1,(17),inst_25891);
} else {
if((state_val_25948 === (30))){
var inst_25921 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25922 = figwheel.client.heads_up.display_warning.call(null,inst_25921);
var state_25947__$1 = state_25947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25947__$1,(33),inst_25922);
} else {
if((state_val_25948 === (10))){
var inst_25881 = (state_25947[(2)]);
var state_25947__$1 = state_25947;
var statearr_25986_26029 = state_25947__$1;
(statearr_25986_26029[(2)] = inst_25881);

(statearr_25986_26029[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25948 === (18))){
var inst_25897 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25898 = figwheel.client.format_messages.call(null,inst_25897);
var inst_25899 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25900 = figwheel.client.heads_up.display_error.call(null,inst_25898,inst_25899);
var state_25947__$1 = state_25947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25947__$1,(21),inst_25900);
} else {
if((state_val_25948 === (37))){
var inst_25930 = (state_25947[(2)]);
var state_25947__$1 = state_25947;
var statearr_25987_26030 = state_25947__$1;
(statearr_25987_26030[(2)] = inst_25930);

(statearr_25987_26030[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25948 === (8))){
var inst_25873 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25947__$1 = state_25947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25947__$1,(11),inst_25873);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21212__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21100__auto__,c__21212__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21101__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21101__auto____0 = (function (){
var statearr_25991 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25991[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21101__auto__);

(statearr_25991[(1)] = (1));

return statearr_25991;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21101__auto____1 = (function (state_25947){
while(true){
var ret_value__21102__auto__ = (function (){try{while(true){
var result__21103__auto__ = switch__21100__auto__.call(null,state_25947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21103__auto__;
}
break;
}
}catch (e25992){if((e25992 instanceof Object)){
var ex__21104__auto__ = e25992;
var statearr_25993_26031 = state_25947;
(statearr_25993_26031[(5)] = ex__21104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26032 = state_25947;
state_25947 = G__26032;
continue;
} else {
return ret_value__21102__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21101__auto__ = function(state_25947){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21101__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21101__auto____1.call(this,state_25947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21101__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21101__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21101__auto__;
})()
;})(switch__21100__auto__,c__21212__auto__,msg_hist,msg_names,msg))
})();
var state__21214__auto__ = (function (){var statearr_25994 = f__21213__auto__.call(null);
(statearr_25994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21212__auto__);

return statearr_25994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21214__auto__);
});})(c__21212__auto__,msg_hist,msg_names,msg))
);

return c__21212__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21212__auto___26095 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21212__auto___26095,ch){
return (function (){
var f__21213__auto__ = (function (){var switch__21100__auto__ = ((function (c__21212__auto___26095,ch){
return (function (state_26078){
var state_val_26079 = (state_26078[(1)]);
if((state_val_26079 === (1))){
var state_26078__$1 = state_26078;
var statearr_26080_26096 = state_26078__$1;
(statearr_26080_26096[(2)] = null);

(statearr_26080_26096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (2))){
var state_26078__$1 = state_26078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26078__$1,(4),ch);
} else {
if((state_val_26079 === (3))){
var inst_26076 = (state_26078[(2)]);
var state_26078__$1 = state_26078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26078__$1,inst_26076);
} else {
if((state_val_26079 === (4))){
var inst_26066 = (state_26078[(7)]);
var inst_26066__$1 = (state_26078[(2)]);
var state_26078__$1 = (function (){var statearr_26081 = state_26078;
(statearr_26081[(7)] = inst_26066__$1);

return statearr_26081;
})();
if(cljs.core.truth_(inst_26066__$1)){
var statearr_26082_26097 = state_26078__$1;
(statearr_26082_26097[(1)] = (5));

} else {
var statearr_26083_26098 = state_26078__$1;
(statearr_26083_26098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (5))){
var inst_26066 = (state_26078[(7)]);
var inst_26068 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26066);
var state_26078__$1 = state_26078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26078__$1,(8),inst_26068);
} else {
if((state_val_26079 === (6))){
var state_26078__$1 = state_26078;
var statearr_26084_26099 = state_26078__$1;
(statearr_26084_26099[(2)] = null);

(statearr_26084_26099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (7))){
var inst_26074 = (state_26078[(2)]);
var state_26078__$1 = state_26078;
var statearr_26085_26100 = state_26078__$1;
(statearr_26085_26100[(2)] = inst_26074);

(statearr_26085_26100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (8))){
var inst_26070 = (state_26078[(2)]);
var state_26078__$1 = (function (){var statearr_26086 = state_26078;
(statearr_26086[(8)] = inst_26070);

return statearr_26086;
})();
var statearr_26087_26101 = state_26078__$1;
(statearr_26087_26101[(2)] = null);

(statearr_26087_26101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__21212__auto___26095,ch))
;
return ((function (switch__21100__auto__,c__21212__auto___26095,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21101__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21101__auto____0 = (function (){
var statearr_26091 = [null,null,null,null,null,null,null,null,null];
(statearr_26091[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21101__auto__);

(statearr_26091[(1)] = (1));

return statearr_26091;
});
var figwheel$client$heads_up_plugin_$_state_machine__21101__auto____1 = (function (state_26078){
while(true){
var ret_value__21102__auto__ = (function (){try{while(true){
var result__21103__auto__ = switch__21100__auto__.call(null,state_26078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21103__auto__;
}
break;
}
}catch (e26092){if((e26092 instanceof Object)){
var ex__21104__auto__ = e26092;
var statearr_26093_26102 = state_26078;
(statearr_26093_26102[(5)] = ex__21104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26103 = state_26078;
state_26078 = G__26103;
continue;
} else {
return ret_value__21102__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21101__auto__ = function(state_26078){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21101__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21101__auto____1.call(this,state_26078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21101__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21101__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21101__auto__;
})()
;})(switch__21100__auto__,c__21212__auto___26095,ch))
})();
var state__21214__auto__ = (function (){var statearr_26094 = f__21213__auto__.call(null);
(statearr_26094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21212__auto___26095);

return statearr_26094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21214__auto__);
});})(c__21212__auto___26095,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21212__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21212__auto__){
return (function (){
var f__21213__auto__ = (function (){var switch__21100__auto__ = ((function (c__21212__auto__){
return (function (state_26124){
var state_val_26125 = (state_26124[(1)]);
if((state_val_26125 === (1))){
var inst_26119 = cljs.core.async.timeout.call(null,(3000));
var state_26124__$1 = state_26124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26124__$1,(2),inst_26119);
} else {
if((state_val_26125 === (2))){
var inst_26121 = (state_26124[(2)]);
var inst_26122 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26124__$1 = (function (){var statearr_26126 = state_26124;
(statearr_26126[(7)] = inst_26121);

return statearr_26126;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26124__$1,inst_26122);
} else {
return null;
}
}
});})(c__21212__auto__))
;
return ((function (switch__21100__auto__,c__21212__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21101__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21101__auto____0 = (function (){
var statearr_26130 = [null,null,null,null,null,null,null,null];
(statearr_26130[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21101__auto__);

(statearr_26130[(1)] = (1));

return statearr_26130;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21101__auto____1 = (function (state_26124){
while(true){
var ret_value__21102__auto__ = (function (){try{while(true){
var result__21103__auto__ = switch__21100__auto__.call(null,state_26124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21103__auto__;
}
break;
}
}catch (e26131){if((e26131 instanceof Object)){
var ex__21104__auto__ = e26131;
var statearr_26132_26134 = state_26124;
(statearr_26132_26134[(5)] = ex__21104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26135 = state_26124;
state_26124 = G__26135;
continue;
} else {
return ret_value__21102__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21101__auto__ = function(state_26124){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21101__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21101__auto____1.call(this,state_26124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21101__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21101__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21101__auto__;
})()
;})(switch__21100__auto__,c__21212__auto__))
})();
var state__21214__auto__ = (function (){var statearr_26133 = f__21213__auto__.call(null);
(statearr_26133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21212__auto__);

return statearr_26133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21214__auto__);
});})(c__21212__auto__))
);

return c__21212__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26136){
var map__26143 = p__26136;
var map__26143__$1 = ((((!((map__26143 == null)))?((((map__26143.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26143.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26143):map__26143);
var ed = map__26143__$1;
var formatted_exception = cljs.core.get.call(null,map__26143__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26143__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26143__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26145_26149 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26146_26150 = null;
var count__26147_26151 = (0);
var i__26148_26152 = (0);
while(true){
if((i__26148_26152 < count__26147_26151)){
var msg_26153 = cljs.core._nth.call(null,chunk__26146_26150,i__26148_26152);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26153);

var G__26154 = seq__26145_26149;
var G__26155 = chunk__26146_26150;
var G__26156 = count__26147_26151;
var G__26157 = (i__26148_26152 + (1));
seq__26145_26149 = G__26154;
chunk__26146_26150 = G__26155;
count__26147_26151 = G__26156;
i__26148_26152 = G__26157;
continue;
} else {
var temp__4657__auto___26158 = cljs.core.seq.call(null,seq__26145_26149);
if(temp__4657__auto___26158){
var seq__26145_26159__$1 = temp__4657__auto___26158;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26145_26159__$1)){
var c__19171__auto___26160 = cljs.core.chunk_first.call(null,seq__26145_26159__$1);
var G__26161 = cljs.core.chunk_rest.call(null,seq__26145_26159__$1);
var G__26162 = c__19171__auto___26160;
var G__26163 = cljs.core.count.call(null,c__19171__auto___26160);
var G__26164 = (0);
seq__26145_26149 = G__26161;
chunk__26146_26150 = G__26162;
count__26147_26151 = G__26163;
i__26148_26152 = G__26164;
continue;
} else {
var msg_26165 = cljs.core.first.call(null,seq__26145_26159__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26165);

var G__26166 = cljs.core.next.call(null,seq__26145_26159__$1);
var G__26167 = null;
var G__26168 = (0);
var G__26169 = (0);
seq__26145_26149 = G__26166;
chunk__26146_26150 = G__26167;
count__26147_26151 = G__26168;
i__26148_26152 = G__26169;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26170){
var map__26173 = p__26170;
var map__26173__$1 = ((((!((map__26173 == null)))?((((map__26173.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26173.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26173):map__26173);
var w = map__26173__$1;
var message = cljs.core.get.call(null,map__26173__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18348__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18348__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18348__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26181 = cljs.core.seq.call(null,plugins);
var chunk__26182 = null;
var count__26183 = (0);
var i__26184 = (0);
while(true){
if((i__26184 < count__26183)){
var vec__26185 = cljs.core._nth.call(null,chunk__26182,i__26184);
var k = cljs.core.nth.call(null,vec__26185,(0),null);
var plugin = cljs.core.nth.call(null,vec__26185,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26187 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26181,chunk__26182,count__26183,i__26184,pl_26187,vec__26185,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26187.call(null,msg_hist);
});})(seq__26181,chunk__26182,count__26183,i__26184,pl_26187,vec__26185,k,plugin))
);
} else {
}

var G__26188 = seq__26181;
var G__26189 = chunk__26182;
var G__26190 = count__26183;
var G__26191 = (i__26184 + (1));
seq__26181 = G__26188;
chunk__26182 = G__26189;
count__26183 = G__26190;
i__26184 = G__26191;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26181);
if(temp__4657__auto__){
var seq__26181__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26181__$1)){
var c__19171__auto__ = cljs.core.chunk_first.call(null,seq__26181__$1);
var G__26192 = cljs.core.chunk_rest.call(null,seq__26181__$1);
var G__26193 = c__19171__auto__;
var G__26194 = cljs.core.count.call(null,c__19171__auto__);
var G__26195 = (0);
seq__26181 = G__26192;
chunk__26182 = G__26193;
count__26183 = G__26194;
i__26184 = G__26195;
continue;
} else {
var vec__26186 = cljs.core.first.call(null,seq__26181__$1);
var k = cljs.core.nth.call(null,vec__26186,(0),null);
var plugin = cljs.core.nth.call(null,vec__26186,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26196 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26181,chunk__26182,count__26183,i__26184,pl_26196,vec__26186,k,plugin,seq__26181__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26196.call(null,msg_hist);
});})(seq__26181,chunk__26182,count__26183,i__26184,pl_26196,vec__26186,k,plugin,seq__26181__$1,temp__4657__auto__))
);
} else {
}

var G__26197 = cljs.core.next.call(null,seq__26181__$1);
var G__26198 = null;
var G__26199 = (0);
var G__26200 = (0);
seq__26181 = G__26197;
chunk__26182 = G__26198;
count__26183 = G__26199;
i__26184 = G__26200;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args26201 = [];
var len__19430__auto___26204 = arguments.length;
var i__19431__auto___26205 = (0);
while(true){
if((i__19431__auto___26205 < len__19430__auto___26204)){
args26201.push((arguments[i__19431__auto___26205]));

var G__26206 = (i__19431__auto___26205 + (1));
i__19431__auto___26205 = G__26206;
continue;
} else {
}
break;
}

var G__26203 = args26201.length;
switch (G__26203) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26201.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19437__auto__ = [];
var len__19430__auto___26212 = arguments.length;
var i__19431__auto___26213 = (0);
while(true){
if((i__19431__auto___26213 < len__19430__auto___26212)){
args__19437__auto__.push((arguments[i__19431__auto___26213]));

var G__26214 = (i__19431__auto___26213 + (1));
i__19431__auto___26213 = G__26214;
continue;
} else {
}
break;
}

var argseq__19438__auto__ = ((((0) < args__19437__auto__.length))?(new cljs.core.IndexedSeq(args__19437__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19438__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26209){
var map__26210 = p__26209;
var map__26210__$1 = ((((!((map__26210 == null)))?((((map__26210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26210):map__26210);
var opts = map__26210__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26208){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26208));
});

//# sourceMappingURL=client.js.map?rel=1464365890165