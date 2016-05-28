// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25069_25083 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25070_25084 = null;
var count__25071_25085 = (0);
var i__25072_25086 = (0);
while(true){
if((i__25072_25086 < count__25071_25085)){
var f_25087 = cljs.core._nth.call(null,chunk__25070_25084,i__25072_25086);
cljs.core.println.call(null,"  ",f_25087);

var G__25088 = seq__25069_25083;
var G__25089 = chunk__25070_25084;
var G__25090 = count__25071_25085;
var G__25091 = (i__25072_25086 + (1));
seq__25069_25083 = G__25088;
chunk__25070_25084 = G__25089;
count__25071_25085 = G__25090;
i__25072_25086 = G__25091;
continue;
} else {
var temp__4657__auto___25092 = cljs.core.seq.call(null,seq__25069_25083);
if(temp__4657__auto___25092){
var seq__25069_25093__$1 = temp__4657__auto___25092;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25069_25093__$1)){
var c__19171__auto___25094 = cljs.core.chunk_first.call(null,seq__25069_25093__$1);
var G__25095 = cljs.core.chunk_rest.call(null,seq__25069_25093__$1);
var G__25096 = c__19171__auto___25094;
var G__25097 = cljs.core.count.call(null,c__19171__auto___25094);
var G__25098 = (0);
seq__25069_25083 = G__25095;
chunk__25070_25084 = G__25096;
count__25071_25085 = G__25097;
i__25072_25086 = G__25098;
continue;
} else {
var f_25099 = cljs.core.first.call(null,seq__25069_25093__$1);
cljs.core.println.call(null,"  ",f_25099);

var G__25100 = cljs.core.next.call(null,seq__25069_25093__$1);
var G__25101 = null;
var G__25102 = (0);
var G__25103 = (0);
seq__25069_25083 = G__25100;
chunk__25070_25084 = G__25101;
count__25071_25085 = G__25102;
i__25072_25086 = G__25103;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25104 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18360__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18360__auto__)){
return or__18360__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25104);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25104)))?cljs.core.second.call(null,arglists_25104):arglists_25104));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25073 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25074 = null;
var count__25075 = (0);
var i__25076 = (0);
while(true){
if((i__25076 < count__25075)){
var vec__25077 = cljs.core._nth.call(null,chunk__25074,i__25076);
var name = cljs.core.nth.call(null,vec__25077,(0),null);
var map__25078 = cljs.core.nth.call(null,vec__25077,(1),null);
var map__25078__$1 = ((((!((map__25078 == null)))?((((map__25078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25078):map__25078);
var doc = cljs.core.get.call(null,map__25078__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25078__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25105 = seq__25073;
var G__25106 = chunk__25074;
var G__25107 = count__25075;
var G__25108 = (i__25076 + (1));
seq__25073 = G__25105;
chunk__25074 = G__25106;
count__25075 = G__25107;
i__25076 = G__25108;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25073);
if(temp__4657__auto__){
var seq__25073__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25073__$1)){
var c__19171__auto__ = cljs.core.chunk_first.call(null,seq__25073__$1);
var G__25109 = cljs.core.chunk_rest.call(null,seq__25073__$1);
var G__25110 = c__19171__auto__;
var G__25111 = cljs.core.count.call(null,c__19171__auto__);
var G__25112 = (0);
seq__25073 = G__25109;
chunk__25074 = G__25110;
count__25075 = G__25111;
i__25076 = G__25112;
continue;
} else {
var vec__25080 = cljs.core.first.call(null,seq__25073__$1);
var name = cljs.core.nth.call(null,vec__25080,(0),null);
var map__25081 = cljs.core.nth.call(null,vec__25080,(1),null);
var map__25081__$1 = ((((!((map__25081 == null)))?((((map__25081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25081):map__25081);
var doc = cljs.core.get.call(null,map__25081__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25081__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25113 = cljs.core.next.call(null,seq__25073__$1);
var G__25114 = null;
var G__25115 = (0);
var G__25116 = (0);
seq__25073 = G__25113;
chunk__25074 = G__25114;
count__25075 = G__25115;
i__25076 = G__25116;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1464365889415