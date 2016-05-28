// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19437__auto__ = [];
var len__19430__auto___25254 = arguments.length;
var i__19431__auto___25255 = (0);
while(true){
if((i__19431__auto___25255 < len__19430__auto___25254)){
args__19437__auto__.push((arguments[i__19431__auto___25255]));

var G__25256 = (i__19431__auto___25255 + (1));
i__19431__auto___25255 = G__25256;
continue;
} else {
}
break;
}

var argseq__19438__auto__ = ((((2) < args__19437__auto__.length))?(new cljs.core.IndexedSeq(args__19437__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19438__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__25246_25257 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__25247_25258 = null;
var count__25248_25259 = (0);
var i__25249_25260 = (0);
while(true){
if((i__25249_25260 < count__25248_25259)){
var k_25261 = cljs.core._nth.call(null,chunk__25247_25258,i__25249_25260);
e.setAttribute(cljs.core.name.call(null,k_25261),cljs.core.get.call(null,attrs,k_25261));

var G__25262 = seq__25246_25257;
var G__25263 = chunk__25247_25258;
var G__25264 = count__25248_25259;
var G__25265 = (i__25249_25260 + (1));
seq__25246_25257 = G__25262;
chunk__25247_25258 = G__25263;
count__25248_25259 = G__25264;
i__25249_25260 = G__25265;
continue;
} else {
var temp__4657__auto___25266 = cljs.core.seq.call(null,seq__25246_25257);
if(temp__4657__auto___25266){
var seq__25246_25267__$1 = temp__4657__auto___25266;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25246_25267__$1)){
var c__19171__auto___25268 = cljs.core.chunk_first.call(null,seq__25246_25267__$1);
var G__25269 = cljs.core.chunk_rest.call(null,seq__25246_25267__$1);
var G__25270 = c__19171__auto___25268;
var G__25271 = cljs.core.count.call(null,c__19171__auto___25268);
var G__25272 = (0);
seq__25246_25257 = G__25269;
chunk__25247_25258 = G__25270;
count__25248_25259 = G__25271;
i__25249_25260 = G__25272;
continue;
} else {
var k_25273 = cljs.core.first.call(null,seq__25246_25267__$1);
e.setAttribute(cljs.core.name.call(null,k_25273),cljs.core.get.call(null,attrs,k_25273));

var G__25274 = cljs.core.next.call(null,seq__25246_25267__$1);
var G__25275 = null;
var G__25276 = (0);
var G__25277 = (0);
seq__25246_25257 = G__25274;
chunk__25247_25258 = G__25275;
count__25248_25259 = G__25276;
i__25249_25260 = G__25277;
continue;
}
} else {
}
}
break;
}

var seq__25250_25278 = cljs.core.seq.call(null,children);
var chunk__25251_25279 = null;
var count__25252_25280 = (0);
var i__25253_25281 = (0);
while(true){
if((i__25253_25281 < count__25252_25280)){
var ch_25282 = cljs.core._nth.call(null,chunk__25251_25279,i__25253_25281);
e.appendChild(ch_25282);

var G__25283 = seq__25250_25278;
var G__25284 = chunk__25251_25279;
var G__25285 = count__25252_25280;
var G__25286 = (i__25253_25281 + (1));
seq__25250_25278 = G__25283;
chunk__25251_25279 = G__25284;
count__25252_25280 = G__25285;
i__25253_25281 = G__25286;
continue;
} else {
var temp__4657__auto___25287 = cljs.core.seq.call(null,seq__25250_25278);
if(temp__4657__auto___25287){
var seq__25250_25288__$1 = temp__4657__auto___25287;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25250_25288__$1)){
var c__19171__auto___25289 = cljs.core.chunk_first.call(null,seq__25250_25288__$1);
var G__25290 = cljs.core.chunk_rest.call(null,seq__25250_25288__$1);
var G__25291 = c__19171__auto___25289;
var G__25292 = cljs.core.count.call(null,c__19171__auto___25289);
var G__25293 = (0);
seq__25250_25278 = G__25290;
chunk__25251_25279 = G__25291;
count__25252_25280 = G__25292;
i__25253_25281 = G__25293;
continue;
} else {
var ch_25294 = cljs.core.first.call(null,seq__25250_25288__$1);
e.appendChild(ch_25294);

var G__25295 = cljs.core.next.call(null,seq__25250_25288__$1);
var G__25296 = null;
var G__25297 = (0);
var G__25298 = (0);
seq__25250_25278 = G__25295;
chunk__25251_25279 = G__25296;
count__25252_25280 = G__25297;
i__25253_25281 = G__25298;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq25243){
var G__25244 = cljs.core.first.call(null,seq25243);
var seq25243__$1 = cljs.core.next.call(null,seq25243);
var G__25245 = cljs.core.first.call(null,seq25243__$1);
var seq25243__$2 = cljs.core.next.call(null,seq25243__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__25244,G__25245,seq25243__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19285__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19286__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19287__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19288__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19289__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19285__auto__,prefer_table__19286__auto__,method_cache__19287__auto__,cached_hierarchy__19288__auto__,hierarchy__19289__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19285__auto__,prefer_table__19286__auto__,method_cache__19287__auto__,cached_hierarchy__19288__auto__,hierarchy__19289__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19289__auto__,method_table__19285__auto__,prefer_table__19286__auto__,method_cache__19287__auto__,cached_hierarchy__19288__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_25299 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_25299.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_25299.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_25299.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_25299);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__25300,st_map){
var map__25305 = p__25300;
var map__25305__$1 = ((((!((map__25305 == null)))?((((map__25305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25305):map__25305);
var container_el = cljs.core.get.call(null,map__25305__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__25305,map__25305__$1,container_el){
return (function (p__25307){
var vec__25308 = p__25307;
var k = cljs.core.nth.call(null,vec__25308,(0),null);
var v = cljs.core.nth.call(null,vec__25308,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__25305,map__25305__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__25309,dom_str){
var map__25312 = p__25309;
var map__25312__$1 = ((((!((map__25312 == null)))?((((map__25312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25312):map__25312);
var c = map__25312__$1;
var content_area_el = cljs.core.get.call(null,map__25312__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__25314){
var map__25317 = p__25314;
var map__25317__$1 = ((((!((map__25317 == null)))?((((map__25317.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25317.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25317):map__25317);
var content_area_el = cljs.core.get.call(null,map__25317__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21212__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21212__auto__){
return (function (){
var f__21213__auto__ = (function (){var switch__21100__auto__ = ((function (c__21212__auto__){
return (function (state_25360){
var state_val_25361 = (state_25360[(1)]);
if((state_val_25361 === (1))){
var inst_25345 = (state_25360[(7)]);
var inst_25345__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25346 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25347 = ["10px","10px","100%","68px","1.0"];
var inst_25348 = cljs.core.PersistentHashMap.fromArrays(inst_25346,inst_25347);
var inst_25349 = cljs.core.merge.call(null,inst_25348,style);
var inst_25350 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25345__$1,inst_25349);
var inst_25351 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25345__$1,msg);
var inst_25352 = cljs.core.async.timeout.call(null,(300));
var state_25360__$1 = (function (){var statearr_25362 = state_25360;
(statearr_25362[(7)] = inst_25345__$1);

(statearr_25362[(8)] = inst_25350);

(statearr_25362[(9)] = inst_25351);

return statearr_25362;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25360__$1,(2),inst_25352);
} else {
if((state_val_25361 === (2))){
var inst_25345 = (state_25360[(7)]);
var inst_25354 = (state_25360[(2)]);
var inst_25355 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_25356 = ["auto"];
var inst_25357 = cljs.core.PersistentHashMap.fromArrays(inst_25355,inst_25356);
var inst_25358 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25345,inst_25357);
var state_25360__$1 = (function (){var statearr_25363 = state_25360;
(statearr_25363[(10)] = inst_25354);

return statearr_25363;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25360__$1,inst_25358);
} else {
return null;
}
}
});})(c__21212__auto__))
;
return ((function (switch__21100__auto__,c__21212__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21101__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21101__auto____0 = (function (){
var statearr_25367 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25367[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21101__auto__);

(statearr_25367[(1)] = (1));

return statearr_25367;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21101__auto____1 = (function (state_25360){
while(true){
var ret_value__21102__auto__ = (function (){try{while(true){
var result__21103__auto__ = switch__21100__auto__.call(null,state_25360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21103__auto__;
}
break;
}
}catch (e25368){if((e25368 instanceof Object)){
var ex__21104__auto__ = e25368;
var statearr_25369_25371 = state_25360;
(statearr_25369_25371[(5)] = ex__21104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25372 = state_25360;
state_25360 = G__25372;
continue;
} else {
return ret_value__21102__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21101__auto__ = function(state_25360){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21101__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21101__auto____1.call(this,state_25360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21101__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21101__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21101__auto__;
})()
;})(switch__21100__auto__,c__21212__auto__))
})();
var state__21214__auto__ = (function (){var statearr_25370 = f__21213__auto__.call(null);
(statearr_25370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21212__auto__);

return statearr_25370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21214__auto__);
});})(c__21212__auto__))
);

return c__21212__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__25374 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__25374,(0),null);
var ln = cljs.core.nth.call(null,vec__25374,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__25377 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__25377,(0),null);
var file_line = cljs.core.nth.call(null,vec__25377,(1),null);
var file_column = cljs.core.nth.call(null,vec__25377,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__25377,file_name,file_line,file_column){
return (function (p1__25375_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__25375_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__25377,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18360__auto__ = file_line;
if(cljs.core.truth_(or__18360__auto__)){
return or__18360__auto__;
} else {
var and__18348__auto__ = cause;
if(cljs.core.truth_(and__18348__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18348__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__25380 = figwheel.client.heads_up.ensure_container.call(null);
var map__25380__$1 = ((((!((map__25380 == null)))?((((map__25380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25380):map__25380);
var content_area_el = cljs.core.get.call(null,map__25380__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21212__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21212__auto__){
return (function (){
var f__21213__auto__ = (function (){var switch__21100__auto__ = ((function (c__21212__auto__){
return (function (state_25428){
var state_val_25429 = (state_25428[(1)]);
if((state_val_25429 === (1))){
var inst_25411 = (state_25428[(7)]);
var inst_25411__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25412 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25413 = ["0.0"];
var inst_25414 = cljs.core.PersistentHashMap.fromArrays(inst_25412,inst_25413);
var inst_25415 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25411__$1,inst_25414);
var inst_25416 = cljs.core.async.timeout.call(null,(300));
var state_25428__$1 = (function (){var statearr_25430 = state_25428;
(statearr_25430[(7)] = inst_25411__$1);

(statearr_25430[(8)] = inst_25415);

return statearr_25430;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25428__$1,(2),inst_25416);
} else {
if((state_val_25429 === (2))){
var inst_25411 = (state_25428[(7)]);
var inst_25418 = (state_25428[(2)]);
var inst_25419 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_25420 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_25421 = cljs.core.PersistentHashMap.fromArrays(inst_25419,inst_25420);
var inst_25422 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25411,inst_25421);
var inst_25423 = cljs.core.async.timeout.call(null,(200));
var state_25428__$1 = (function (){var statearr_25431 = state_25428;
(statearr_25431[(9)] = inst_25422);

(statearr_25431[(10)] = inst_25418);

return statearr_25431;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25428__$1,(3),inst_25423);
} else {
if((state_val_25429 === (3))){
var inst_25411 = (state_25428[(7)]);
var inst_25425 = (state_25428[(2)]);
var inst_25426 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25411,"");
var state_25428__$1 = (function (){var statearr_25432 = state_25428;
(statearr_25432[(11)] = inst_25425);

return statearr_25432;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25428__$1,inst_25426);
} else {
return null;
}
}
}
});})(c__21212__auto__))
;
return ((function (switch__21100__auto__,c__21212__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21101__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21101__auto____0 = (function (){
var statearr_25436 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25436[(0)] = figwheel$client$heads_up$clear_$_state_machine__21101__auto__);

(statearr_25436[(1)] = (1));

return statearr_25436;
});
var figwheel$client$heads_up$clear_$_state_machine__21101__auto____1 = (function (state_25428){
while(true){
var ret_value__21102__auto__ = (function (){try{while(true){
var result__21103__auto__ = switch__21100__auto__.call(null,state_25428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21103__auto__;
}
break;
}
}catch (e25437){if((e25437 instanceof Object)){
var ex__21104__auto__ = e25437;
var statearr_25438_25440 = state_25428;
(statearr_25438_25440[(5)] = ex__21104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25441 = state_25428;
state_25428 = G__25441;
continue;
} else {
return ret_value__21102__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21101__auto__ = function(state_25428){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21101__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21101__auto____1.call(this,state_25428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21101__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21101__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21101__auto__;
})()
;})(switch__21100__auto__,c__21212__auto__))
})();
var state__21214__auto__ = (function (){var statearr_25439 = f__21213__auto__.call(null);
(statearr_25439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21212__auto__);

return statearr_25439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21214__auto__);
});})(c__21212__auto__))
);

return c__21212__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21212__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21212__auto__){
return (function (){
var f__21213__auto__ = (function (){var switch__21100__auto__ = ((function (c__21212__auto__){
return (function (state_25473){
var state_val_25474 = (state_25473[(1)]);
if((state_val_25474 === (1))){
var inst_25463 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_25473__$1 = state_25473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25473__$1,(2),inst_25463);
} else {
if((state_val_25474 === (2))){
var inst_25465 = (state_25473[(2)]);
var inst_25466 = cljs.core.async.timeout.call(null,(400));
var state_25473__$1 = (function (){var statearr_25475 = state_25473;
(statearr_25475[(7)] = inst_25465);

return statearr_25475;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25473__$1,(3),inst_25466);
} else {
if((state_val_25474 === (3))){
var inst_25468 = (state_25473[(2)]);
var inst_25469 = figwheel.client.heads_up.clear.call(null);
var state_25473__$1 = (function (){var statearr_25476 = state_25473;
(statearr_25476[(8)] = inst_25468);

return statearr_25476;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25473__$1,(4),inst_25469);
} else {
if((state_val_25474 === (4))){
var inst_25471 = (state_25473[(2)]);
var state_25473__$1 = state_25473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25473__$1,inst_25471);
} else {
return null;
}
}
}
}
});})(c__21212__auto__))
;
return ((function (switch__21100__auto__,c__21212__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21101__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21101__auto____0 = (function (){
var statearr_25480 = [null,null,null,null,null,null,null,null,null];
(statearr_25480[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21101__auto__);

(statearr_25480[(1)] = (1));

return statearr_25480;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21101__auto____1 = (function (state_25473){
while(true){
var ret_value__21102__auto__ = (function (){try{while(true){
var result__21103__auto__ = switch__21100__auto__.call(null,state_25473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21103__auto__;
}
break;
}
}catch (e25481){if((e25481 instanceof Object)){
var ex__21104__auto__ = e25481;
var statearr_25482_25484 = state_25473;
(statearr_25482_25484[(5)] = ex__21104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25485 = state_25473;
state_25473 = G__25485;
continue;
} else {
return ret_value__21102__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21101__auto__ = function(state_25473){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21101__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21101__auto____1.call(this,state_25473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21101__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21101__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21101__auto__;
})()
;})(switch__21100__auto__,c__21212__auto__))
})();
var state__21214__auto__ = (function (){var statearr_25483 = f__21213__auto__.call(null);
(statearr_25483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21212__auto__);

return statearr_25483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21214__auto__);
});})(c__21212__auto__))
);

return c__21212__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1464365889835