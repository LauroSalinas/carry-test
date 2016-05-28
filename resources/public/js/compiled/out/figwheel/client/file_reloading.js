// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18360__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18360__auto__){
return or__18360__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18360__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18360__auto__)){
return or__18360__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24045_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24045_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__24050 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24051 = null;
var count__24052 = (0);
var i__24053 = (0);
while(true){
if((i__24053 < count__24052)){
var n = cljs.core._nth.call(null,chunk__24051,i__24053);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24054 = seq__24050;
var G__24055 = chunk__24051;
var G__24056 = count__24052;
var G__24057 = (i__24053 + (1));
seq__24050 = G__24054;
chunk__24051 = G__24055;
count__24052 = G__24056;
i__24053 = G__24057;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24050);
if(temp__4657__auto__){
var seq__24050__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24050__$1)){
var c__19171__auto__ = cljs.core.chunk_first.call(null,seq__24050__$1);
var G__24058 = cljs.core.chunk_rest.call(null,seq__24050__$1);
var G__24059 = c__19171__auto__;
var G__24060 = cljs.core.count.call(null,c__19171__auto__);
var G__24061 = (0);
seq__24050 = G__24058;
chunk__24051 = G__24059;
count__24052 = G__24060;
i__24053 = G__24061;
continue;
} else {
var n = cljs.core.first.call(null,seq__24050__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24062 = cljs.core.next.call(null,seq__24050__$1);
var G__24063 = null;
var G__24064 = (0);
var G__24065 = (0);
seq__24050 = G__24062;
chunk__24051 = G__24063;
count__24052 = G__24064;
i__24053 = G__24065;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__24104_24111 = cljs.core.seq.call(null,deps);
var chunk__24105_24112 = null;
var count__24106_24113 = (0);
var i__24107_24114 = (0);
while(true){
if((i__24107_24114 < count__24106_24113)){
var dep_24115 = cljs.core._nth.call(null,chunk__24105_24112,i__24107_24114);
topo_sort_helper_STAR_.call(null,dep_24115,(depth + (1)),state);

var G__24116 = seq__24104_24111;
var G__24117 = chunk__24105_24112;
var G__24118 = count__24106_24113;
var G__24119 = (i__24107_24114 + (1));
seq__24104_24111 = G__24116;
chunk__24105_24112 = G__24117;
count__24106_24113 = G__24118;
i__24107_24114 = G__24119;
continue;
} else {
var temp__4657__auto___24120 = cljs.core.seq.call(null,seq__24104_24111);
if(temp__4657__auto___24120){
var seq__24104_24121__$1 = temp__4657__auto___24120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24104_24121__$1)){
var c__19171__auto___24122 = cljs.core.chunk_first.call(null,seq__24104_24121__$1);
var G__24123 = cljs.core.chunk_rest.call(null,seq__24104_24121__$1);
var G__24124 = c__19171__auto___24122;
var G__24125 = cljs.core.count.call(null,c__19171__auto___24122);
var G__24126 = (0);
seq__24104_24111 = G__24123;
chunk__24105_24112 = G__24124;
count__24106_24113 = G__24125;
i__24107_24114 = G__24126;
continue;
} else {
var dep_24127 = cljs.core.first.call(null,seq__24104_24121__$1);
topo_sort_helper_STAR_.call(null,dep_24127,(depth + (1)),state);

var G__24128 = cljs.core.next.call(null,seq__24104_24121__$1);
var G__24129 = null;
var G__24130 = (0);
var G__24131 = (0);
seq__24104_24111 = G__24128;
chunk__24105_24112 = G__24129;
count__24106_24113 = G__24130;
i__24107_24114 = G__24131;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24108){
var vec__24110 = p__24108;
var x = cljs.core.nth.call(null,vec__24110,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24110,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24110,x,xs,get_deps__$1){
return (function (p1__24066_SHARP_){
return clojure.set.difference.call(null,p1__24066_SHARP_,x);
});})(vec__24110,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__24144 = cljs.core.seq.call(null,provides);
var chunk__24145 = null;
var count__24146 = (0);
var i__24147 = (0);
while(true){
if((i__24147 < count__24146)){
var prov = cljs.core._nth.call(null,chunk__24145,i__24147);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24148_24156 = cljs.core.seq.call(null,requires);
var chunk__24149_24157 = null;
var count__24150_24158 = (0);
var i__24151_24159 = (0);
while(true){
if((i__24151_24159 < count__24150_24158)){
var req_24160 = cljs.core._nth.call(null,chunk__24149_24157,i__24151_24159);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24160,prov);

var G__24161 = seq__24148_24156;
var G__24162 = chunk__24149_24157;
var G__24163 = count__24150_24158;
var G__24164 = (i__24151_24159 + (1));
seq__24148_24156 = G__24161;
chunk__24149_24157 = G__24162;
count__24150_24158 = G__24163;
i__24151_24159 = G__24164;
continue;
} else {
var temp__4657__auto___24165 = cljs.core.seq.call(null,seq__24148_24156);
if(temp__4657__auto___24165){
var seq__24148_24166__$1 = temp__4657__auto___24165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24148_24166__$1)){
var c__19171__auto___24167 = cljs.core.chunk_first.call(null,seq__24148_24166__$1);
var G__24168 = cljs.core.chunk_rest.call(null,seq__24148_24166__$1);
var G__24169 = c__19171__auto___24167;
var G__24170 = cljs.core.count.call(null,c__19171__auto___24167);
var G__24171 = (0);
seq__24148_24156 = G__24168;
chunk__24149_24157 = G__24169;
count__24150_24158 = G__24170;
i__24151_24159 = G__24171;
continue;
} else {
var req_24172 = cljs.core.first.call(null,seq__24148_24166__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24172,prov);

var G__24173 = cljs.core.next.call(null,seq__24148_24166__$1);
var G__24174 = null;
var G__24175 = (0);
var G__24176 = (0);
seq__24148_24156 = G__24173;
chunk__24149_24157 = G__24174;
count__24150_24158 = G__24175;
i__24151_24159 = G__24176;
continue;
}
} else {
}
}
break;
}

var G__24177 = seq__24144;
var G__24178 = chunk__24145;
var G__24179 = count__24146;
var G__24180 = (i__24147 + (1));
seq__24144 = G__24177;
chunk__24145 = G__24178;
count__24146 = G__24179;
i__24147 = G__24180;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24144);
if(temp__4657__auto__){
var seq__24144__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24144__$1)){
var c__19171__auto__ = cljs.core.chunk_first.call(null,seq__24144__$1);
var G__24181 = cljs.core.chunk_rest.call(null,seq__24144__$1);
var G__24182 = c__19171__auto__;
var G__24183 = cljs.core.count.call(null,c__19171__auto__);
var G__24184 = (0);
seq__24144 = G__24181;
chunk__24145 = G__24182;
count__24146 = G__24183;
i__24147 = G__24184;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24144__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24152_24185 = cljs.core.seq.call(null,requires);
var chunk__24153_24186 = null;
var count__24154_24187 = (0);
var i__24155_24188 = (0);
while(true){
if((i__24155_24188 < count__24154_24187)){
var req_24189 = cljs.core._nth.call(null,chunk__24153_24186,i__24155_24188);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24189,prov);

var G__24190 = seq__24152_24185;
var G__24191 = chunk__24153_24186;
var G__24192 = count__24154_24187;
var G__24193 = (i__24155_24188 + (1));
seq__24152_24185 = G__24190;
chunk__24153_24186 = G__24191;
count__24154_24187 = G__24192;
i__24155_24188 = G__24193;
continue;
} else {
var temp__4657__auto___24194__$1 = cljs.core.seq.call(null,seq__24152_24185);
if(temp__4657__auto___24194__$1){
var seq__24152_24195__$1 = temp__4657__auto___24194__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24152_24195__$1)){
var c__19171__auto___24196 = cljs.core.chunk_first.call(null,seq__24152_24195__$1);
var G__24197 = cljs.core.chunk_rest.call(null,seq__24152_24195__$1);
var G__24198 = c__19171__auto___24196;
var G__24199 = cljs.core.count.call(null,c__19171__auto___24196);
var G__24200 = (0);
seq__24152_24185 = G__24197;
chunk__24153_24186 = G__24198;
count__24154_24187 = G__24199;
i__24155_24188 = G__24200;
continue;
} else {
var req_24201 = cljs.core.first.call(null,seq__24152_24195__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24201,prov);

var G__24202 = cljs.core.next.call(null,seq__24152_24195__$1);
var G__24203 = null;
var G__24204 = (0);
var G__24205 = (0);
seq__24152_24185 = G__24202;
chunk__24153_24186 = G__24203;
count__24154_24187 = G__24204;
i__24155_24188 = G__24205;
continue;
}
} else {
}
}
break;
}

var G__24206 = cljs.core.next.call(null,seq__24144__$1);
var G__24207 = null;
var G__24208 = (0);
var G__24209 = (0);
seq__24144 = G__24206;
chunk__24145 = G__24207;
count__24146 = G__24208;
i__24147 = G__24209;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__24214_24218 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__24215_24219 = null;
var count__24216_24220 = (0);
var i__24217_24221 = (0);
while(true){
if((i__24217_24221 < count__24216_24220)){
var ns_24222 = cljs.core._nth.call(null,chunk__24215_24219,i__24217_24221);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24222);

var G__24223 = seq__24214_24218;
var G__24224 = chunk__24215_24219;
var G__24225 = count__24216_24220;
var G__24226 = (i__24217_24221 + (1));
seq__24214_24218 = G__24223;
chunk__24215_24219 = G__24224;
count__24216_24220 = G__24225;
i__24217_24221 = G__24226;
continue;
} else {
var temp__4657__auto___24227 = cljs.core.seq.call(null,seq__24214_24218);
if(temp__4657__auto___24227){
var seq__24214_24228__$1 = temp__4657__auto___24227;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24214_24228__$1)){
var c__19171__auto___24229 = cljs.core.chunk_first.call(null,seq__24214_24228__$1);
var G__24230 = cljs.core.chunk_rest.call(null,seq__24214_24228__$1);
var G__24231 = c__19171__auto___24229;
var G__24232 = cljs.core.count.call(null,c__19171__auto___24229);
var G__24233 = (0);
seq__24214_24218 = G__24230;
chunk__24215_24219 = G__24231;
count__24216_24220 = G__24232;
i__24217_24221 = G__24233;
continue;
} else {
var ns_24234 = cljs.core.first.call(null,seq__24214_24228__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24234);

var G__24235 = cljs.core.next.call(null,seq__24214_24228__$1);
var G__24236 = null;
var G__24237 = (0);
var G__24238 = (0);
seq__24214_24218 = G__24235;
chunk__24215_24219 = G__24236;
count__24216_24220 = G__24237;
i__24217_24221 = G__24238;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18360__auto__ = goog.require__;
if(cljs.core.truth_(or__18360__auto__)){
return or__18360__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__24239__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__24239 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24240__i = 0, G__24240__a = new Array(arguments.length -  0);
while (G__24240__i < G__24240__a.length) {G__24240__a[G__24240__i] = arguments[G__24240__i + 0]; ++G__24240__i;}
  args = new cljs.core.IndexedSeq(G__24240__a,0);
} 
return G__24239__delegate.call(this,args);};
G__24239.cljs$lang$maxFixedArity = 0;
G__24239.cljs$lang$applyTo = (function (arglist__24241){
var args = cljs.core.seq(arglist__24241);
return G__24239__delegate(args);
});
G__24239.cljs$core$IFn$_invoke$arity$variadic = G__24239__delegate;
return G__24239;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__24243 = cljs.core._EQ_;
var expr__24244 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__24243.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24244))){
var path_parts = ((function (pred__24243,expr__24244){
return (function (p1__24242_SHARP_){
return clojure.string.split.call(null,p1__24242_SHARP_,/[\/\\]/);
});})(pred__24243,expr__24244))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__24243,expr__24244){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e24246){if((e24246 instanceof Error)){
var e = e24246;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24246;

}
}})());
});
;})(path_parts,sep,root,pred__24243,expr__24244))
} else {
if(cljs.core.truth_(pred__24243.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24244))){
return ((function (pred__24243,expr__24244){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__24243,expr__24244){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__24243,expr__24244))
);

return deferred.addErrback(((function (deferred,pred__24243,expr__24244){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__24243,expr__24244))
);
});
;})(pred__24243,expr__24244))
} else {
return ((function (pred__24243,expr__24244){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__24243,expr__24244))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24247,callback){
var map__24250 = p__24247;
var map__24250__$1 = ((((!((map__24250 == null)))?((((map__24250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24250):map__24250);
var file_msg = map__24250__$1;
var request_url = cljs.core.get.call(null,map__24250__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24250,map__24250__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24250,map__24250__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__21212__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21212__auto__){
return (function (){
var f__21213__auto__ = (function (){var switch__21100__auto__ = ((function (c__21212__auto__){
return (function (state_24274){
var state_val_24275 = (state_24274[(1)]);
if((state_val_24275 === (7))){
var inst_24270 = (state_24274[(2)]);
var state_24274__$1 = state_24274;
var statearr_24276_24296 = state_24274__$1;
(statearr_24276_24296[(2)] = inst_24270);

(statearr_24276_24296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (1))){
var state_24274__$1 = state_24274;
var statearr_24277_24297 = state_24274__$1;
(statearr_24277_24297[(2)] = null);

(statearr_24277_24297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (4))){
var inst_24254 = (state_24274[(7)]);
var inst_24254__$1 = (state_24274[(2)]);
var state_24274__$1 = (function (){var statearr_24278 = state_24274;
(statearr_24278[(7)] = inst_24254__$1);

return statearr_24278;
})();
if(cljs.core.truth_(inst_24254__$1)){
var statearr_24279_24298 = state_24274__$1;
(statearr_24279_24298[(1)] = (5));

} else {
var statearr_24280_24299 = state_24274__$1;
(statearr_24280_24299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (6))){
var state_24274__$1 = state_24274;
var statearr_24281_24300 = state_24274__$1;
(statearr_24281_24300[(2)] = null);

(statearr_24281_24300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (3))){
var inst_24272 = (state_24274[(2)]);
var state_24274__$1 = state_24274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24274__$1,inst_24272);
} else {
if((state_val_24275 === (2))){
var state_24274__$1 = state_24274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24274__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24275 === (11))){
var inst_24266 = (state_24274[(2)]);
var state_24274__$1 = (function (){var statearr_24282 = state_24274;
(statearr_24282[(8)] = inst_24266);

return statearr_24282;
})();
var statearr_24283_24301 = state_24274__$1;
(statearr_24283_24301[(2)] = null);

(statearr_24283_24301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (9))){
var inst_24260 = (state_24274[(9)]);
var inst_24258 = (state_24274[(10)]);
var inst_24262 = inst_24260.call(null,inst_24258);
var state_24274__$1 = state_24274;
var statearr_24284_24302 = state_24274__$1;
(statearr_24284_24302[(2)] = inst_24262);

(statearr_24284_24302[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (5))){
var inst_24254 = (state_24274[(7)]);
var inst_24256 = figwheel.client.file_reloading.blocking_load.call(null,inst_24254);
var state_24274__$1 = state_24274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24274__$1,(8),inst_24256);
} else {
if((state_val_24275 === (10))){
var inst_24258 = (state_24274[(10)]);
var inst_24264 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_24258);
var state_24274__$1 = state_24274;
var statearr_24285_24303 = state_24274__$1;
(statearr_24285_24303[(2)] = inst_24264);

(statearr_24285_24303[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (8))){
var inst_24260 = (state_24274[(9)]);
var inst_24254 = (state_24274[(7)]);
var inst_24258 = (state_24274[(2)]);
var inst_24259 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_24260__$1 = cljs.core.get.call(null,inst_24259,inst_24254);
var state_24274__$1 = (function (){var statearr_24286 = state_24274;
(statearr_24286[(9)] = inst_24260__$1);

(statearr_24286[(10)] = inst_24258);

return statearr_24286;
})();
if(cljs.core.truth_(inst_24260__$1)){
var statearr_24287_24304 = state_24274__$1;
(statearr_24287_24304[(1)] = (9));

} else {
var statearr_24288_24305 = state_24274__$1;
(statearr_24288_24305[(1)] = (10));

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
});})(c__21212__auto__))
;
return ((function (switch__21100__auto__,c__21212__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21101__auto__ = null;
var figwheel$client$file_reloading$state_machine__21101__auto____0 = (function (){
var statearr_24292 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24292[(0)] = figwheel$client$file_reloading$state_machine__21101__auto__);

(statearr_24292[(1)] = (1));

return statearr_24292;
});
var figwheel$client$file_reloading$state_machine__21101__auto____1 = (function (state_24274){
while(true){
var ret_value__21102__auto__ = (function (){try{while(true){
var result__21103__auto__ = switch__21100__auto__.call(null,state_24274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21103__auto__;
}
break;
}
}catch (e24293){if((e24293 instanceof Object)){
var ex__21104__auto__ = e24293;
var statearr_24294_24306 = state_24274;
(statearr_24294_24306[(5)] = ex__21104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24307 = state_24274;
state_24274 = G__24307;
continue;
} else {
return ret_value__21102__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21101__auto__ = function(state_24274){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21101__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21101__auto____1.call(this,state_24274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21101__auto____0;
figwheel$client$file_reloading$state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21101__auto____1;
return figwheel$client$file_reloading$state_machine__21101__auto__;
})()
;})(switch__21100__auto__,c__21212__auto__))
})();
var state__21214__auto__ = (function (){var statearr_24295 = f__21213__auto__.call(null);
(statearr_24295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21212__auto__);

return statearr_24295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21214__auto__);
});})(c__21212__auto__))
);

return c__21212__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__24308,callback){
var map__24311 = p__24308;
var map__24311__$1 = ((((!((map__24311 == null)))?((((map__24311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24311):map__24311);
var file_msg = map__24311__$1;
var namespace = cljs.core.get.call(null,map__24311__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__24311,map__24311__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__24311,map__24311__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24313){
var map__24316 = p__24313;
var map__24316__$1 = ((((!((map__24316 == null)))?((((map__24316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24316):map__24316);
var file_msg = map__24316__$1;
var namespace = cljs.core.get.call(null,map__24316__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18348__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18348__auto__){
var or__18360__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18360__auto__)){
return or__18360__auto__;
} else {
var or__18360__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18360__auto____$1)){
return or__18360__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18348__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24318,callback){
var map__24321 = p__24318;
var map__24321__$1 = ((((!((map__24321 == null)))?((((map__24321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24321):map__24321);
var file_msg = map__24321__$1;
var request_url = cljs.core.get.call(null,map__24321__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24321__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21212__auto___24409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21212__auto___24409,out){
return (function (){
var f__21213__auto__ = (function (){var switch__21100__auto__ = ((function (c__21212__auto___24409,out){
return (function (state_24391){
var state_val_24392 = (state_24391[(1)]);
if((state_val_24392 === (1))){
var inst_24369 = cljs.core.nth.call(null,files,(0),null);
var inst_24370 = cljs.core.nthnext.call(null,files,(1));
var inst_24371 = files;
var state_24391__$1 = (function (){var statearr_24393 = state_24391;
(statearr_24393[(7)] = inst_24370);

(statearr_24393[(8)] = inst_24369);

(statearr_24393[(9)] = inst_24371);

return statearr_24393;
})();
var statearr_24394_24410 = state_24391__$1;
(statearr_24394_24410[(2)] = null);

(statearr_24394_24410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (2))){
var inst_24374 = (state_24391[(10)]);
var inst_24371 = (state_24391[(9)]);
var inst_24374__$1 = cljs.core.nth.call(null,inst_24371,(0),null);
var inst_24375 = cljs.core.nthnext.call(null,inst_24371,(1));
var inst_24376 = (inst_24374__$1 == null);
var inst_24377 = cljs.core.not.call(null,inst_24376);
var state_24391__$1 = (function (){var statearr_24395 = state_24391;
(statearr_24395[(11)] = inst_24375);

(statearr_24395[(10)] = inst_24374__$1);

return statearr_24395;
})();
if(inst_24377){
var statearr_24396_24411 = state_24391__$1;
(statearr_24396_24411[(1)] = (4));

} else {
var statearr_24397_24412 = state_24391__$1;
(statearr_24397_24412[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (3))){
var inst_24389 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24391__$1,inst_24389);
} else {
if((state_val_24392 === (4))){
var inst_24374 = (state_24391[(10)]);
var inst_24379 = figwheel.client.file_reloading.reload_js_file.call(null,inst_24374);
var state_24391__$1 = state_24391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24391__$1,(7),inst_24379);
} else {
if((state_val_24392 === (5))){
var inst_24385 = cljs.core.async.close_BANG_.call(null,out);
var state_24391__$1 = state_24391;
var statearr_24398_24413 = state_24391__$1;
(statearr_24398_24413[(2)] = inst_24385);

(statearr_24398_24413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (6))){
var inst_24387 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
var statearr_24399_24414 = state_24391__$1;
(statearr_24399_24414[(2)] = inst_24387);

(statearr_24399_24414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (7))){
var inst_24375 = (state_24391[(11)]);
var inst_24381 = (state_24391[(2)]);
var inst_24382 = cljs.core.async.put_BANG_.call(null,out,inst_24381);
var inst_24371 = inst_24375;
var state_24391__$1 = (function (){var statearr_24400 = state_24391;
(statearr_24400[(12)] = inst_24382);

(statearr_24400[(9)] = inst_24371);

return statearr_24400;
})();
var statearr_24401_24415 = state_24391__$1;
(statearr_24401_24415[(2)] = null);

(statearr_24401_24415[(1)] = (2));


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
});})(c__21212__auto___24409,out))
;
return ((function (switch__21100__auto__,c__21212__auto___24409,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21101__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21101__auto____0 = (function (){
var statearr_24405 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24405[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21101__auto__);

(statearr_24405[(1)] = (1));

return statearr_24405;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21101__auto____1 = (function (state_24391){
while(true){
var ret_value__21102__auto__ = (function (){try{while(true){
var result__21103__auto__ = switch__21100__auto__.call(null,state_24391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21103__auto__;
}
break;
}
}catch (e24406){if((e24406 instanceof Object)){
var ex__21104__auto__ = e24406;
var statearr_24407_24416 = state_24391;
(statearr_24407_24416[(5)] = ex__21104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24417 = state_24391;
state_24391 = G__24417;
continue;
} else {
return ret_value__21102__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21101__auto__ = function(state_24391){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21101__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21101__auto____1.call(this,state_24391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21101__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21101__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21101__auto__;
})()
;})(switch__21100__auto__,c__21212__auto___24409,out))
})();
var state__21214__auto__ = (function (){var statearr_24408 = f__21213__auto__.call(null);
(statearr_24408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21212__auto___24409);

return statearr_24408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21214__auto__);
});})(c__21212__auto___24409,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24418,opts){
var map__24422 = p__24418;
var map__24422__$1 = ((((!((map__24422 == null)))?((((map__24422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24422):map__24422);
var eval_body__$1 = cljs.core.get.call(null,map__24422__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__24422__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18348__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18348__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18348__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e24424){var e = e24424;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__24425_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24425_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__24430){
var vec__24431 = p__24430;
var k = cljs.core.nth.call(null,vec__24431,(0),null);
var v = cljs.core.nth.call(null,vec__24431,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__24432){
var vec__24433 = p__24432;
var k = cljs.core.nth.call(null,vec__24433,(0),null);
var v = cljs.core.nth.call(null,vec__24433,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__24437,p__24438){
var map__24685 = p__24437;
var map__24685__$1 = ((((!((map__24685 == null)))?((((map__24685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24685):map__24685);
var opts = map__24685__$1;
var before_jsload = cljs.core.get.call(null,map__24685__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__24685__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__24685__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__24686 = p__24438;
var map__24686__$1 = ((((!((map__24686 == null)))?((((map__24686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24686):map__24686);
var msg = map__24686__$1;
var files = cljs.core.get.call(null,map__24686__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__24686__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__24686__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21212__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21212__auto__,map__24685,map__24685__$1,opts,before_jsload,on_jsload,reload_dependents,map__24686,map__24686__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21213__auto__ = (function (){var switch__21100__auto__ = ((function (c__21212__auto__,map__24685,map__24685__$1,opts,before_jsload,on_jsload,reload_dependents,map__24686,map__24686__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_24839){
var state_val_24840 = (state_24839[(1)]);
if((state_val_24840 === (7))){
var inst_24703 = (state_24839[(7)]);
var inst_24701 = (state_24839[(8)]);
var inst_24702 = (state_24839[(9)]);
var inst_24700 = (state_24839[(10)]);
var inst_24708 = cljs.core._nth.call(null,inst_24701,inst_24703);
var inst_24709 = figwheel.client.file_reloading.eval_body.call(null,inst_24708,opts);
var inst_24710 = (inst_24703 + (1));
var tmp24841 = inst_24701;
var tmp24842 = inst_24702;
var tmp24843 = inst_24700;
var inst_24700__$1 = tmp24843;
var inst_24701__$1 = tmp24841;
var inst_24702__$1 = tmp24842;
var inst_24703__$1 = inst_24710;
var state_24839__$1 = (function (){var statearr_24844 = state_24839;
(statearr_24844[(7)] = inst_24703__$1);

(statearr_24844[(8)] = inst_24701__$1);

(statearr_24844[(9)] = inst_24702__$1);

(statearr_24844[(10)] = inst_24700__$1);

(statearr_24844[(11)] = inst_24709);

return statearr_24844;
})();
var statearr_24845_24931 = state_24839__$1;
(statearr_24845_24931[(2)] = null);

(statearr_24845_24931[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (20))){
var inst_24743 = (state_24839[(12)]);
var inst_24751 = figwheel.client.file_reloading.sort_files.call(null,inst_24743);
var state_24839__$1 = state_24839;
var statearr_24846_24932 = state_24839__$1;
(statearr_24846_24932[(2)] = inst_24751);

(statearr_24846_24932[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (27))){
var state_24839__$1 = state_24839;
var statearr_24847_24933 = state_24839__$1;
(statearr_24847_24933[(2)] = null);

(statearr_24847_24933[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (1))){
var inst_24692 = (state_24839[(13)]);
var inst_24689 = before_jsload.call(null,files);
var inst_24690 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_24691 = (function (){return ((function (inst_24692,inst_24689,inst_24690,state_val_24840,c__21212__auto__,map__24685,map__24685__$1,opts,before_jsload,on_jsload,reload_dependents,map__24686,map__24686__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24434_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24434_SHARP_);
});
;})(inst_24692,inst_24689,inst_24690,state_val_24840,c__21212__auto__,map__24685,map__24685__$1,opts,before_jsload,on_jsload,reload_dependents,map__24686,map__24686__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24692__$1 = cljs.core.filter.call(null,inst_24691,files);
var inst_24693 = cljs.core.not_empty.call(null,inst_24692__$1);
var state_24839__$1 = (function (){var statearr_24848 = state_24839;
(statearr_24848[(14)] = inst_24689);

(statearr_24848[(15)] = inst_24690);

(statearr_24848[(13)] = inst_24692__$1);

return statearr_24848;
})();
if(cljs.core.truth_(inst_24693)){
var statearr_24849_24934 = state_24839__$1;
(statearr_24849_24934[(1)] = (2));

} else {
var statearr_24850_24935 = state_24839__$1;
(statearr_24850_24935[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (24))){
var state_24839__$1 = state_24839;
var statearr_24851_24936 = state_24839__$1;
(statearr_24851_24936[(2)] = null);

(statearr_24851_24936[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (39))){
var inst_24793 = (state_24839[(16)]);
var state_24839__$1 = state_24839;
var statearr_24852_24937 = state_24839__$1;
(statearr_24852_24937[(2)] = inst_24793);

(statearr_24852_24937[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (46))){
var inst_24834 = (state_24839[(2)]);
var state_24839__$1 = state_24839;
var statearr_24853_24938 = state_24839__$1;
(statearr_24853_24938[(2)] = inst_24834);

(statearr_24853_24938[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (4))){
var inst_24737 = (state_24839[(2)]);
var inst_24738 = cljs.core.List.EMPTY;
var inst_24739 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_24738);
var inst_24740 = (function (){return ((function (inst_24737,inst_24738,inst_24739,state_val_24840,c__21212__auto__,map__24685,map__24685__$1,opts,before_jsload,on_jsload,reload_dependents,map__24686,map__24686__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24435_SHARP_){
var and__18348__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24435_SHARP_);
if(cljs.core.truth_(and__18348__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24435_SHARP_));
} else {
return and__18348__auto__;
}
});
;})(inst_24737,inst_24738,inst_24739,state_val_24840,c__21212__auto__,map__24685,map__24685__$1,opts,before_jsload,on_jsload,reload_dependents,map__24686,map__24686__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24741 = cljs.core.filter.call(null,inst_24740,files);
var inst_24742 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_24743 = cljs.core.concat.call(null,inst_24741,inst_24742);
var state_24839__$1 = (function (){var statearr_24854 = state_24839;
(statearr_24854[(12)] = inst_24743);

(statearr_24854[(17)] = inst_24737);

(statearr_24854[(18)] = inst_24739);

return statearr_24854;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_24855_24939 = state_24839__$1;
(statearr_24855_24939[(1)] = (16));

} else {
var statearr_24856_24940 = state_24839__$1;
(statearr_24856_24940[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (15))){
var inst_24727 = (state_24839[(2)]);
var state_24839__$1 = state_24839;
var statearr_24857_24941 = state_24839__$1;
(statearr_24857_24941[(2)] = inst_24727);

(statearr_24857_24941[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (21))){
var inst_24753 = (state_24839[(19)]);
var inst_24753__$1 = (state_24839[(2)]);
var inst_24754 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24753__$1);
var state_24839__$1 = (function (){var statearr_24858 = state_24839;
(statearr_24858[(19)] = inst_24753__$1);

return statearr_24858;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24839__$1,(22),inst_24754);
} else {
if((state_val_24840 === (31))){
var inst_24837 = (state_24839[(2)]);
var state_24839__$1 = state_24839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24839__$1,inst_24837);
} else {
if((state_val_24840 === (32))){
var inst_24793 = (state_24839[(16)]);
var inst_24798 = inst_24793.cljs$lang$protocol_mask$partition0$;
var inst_24799 = (inst_24798 & (64));
var inst_24800 = inst_24793.cljs$core$ISeq$;
var inst_24801 = (inst_24799) || (inst_24800);
var state_24839__$1 = state_24839;
if(cljs.core.truth_(inst_24801)){
var statearr_24859_24942 = state_24839__$1;
(statearr_24859_24942[(1)] = (35));

} else {
var statearr_24860_24943 = state_24839__$1;
(statearr_24860_24943[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (40))){
var inst_24814 = (state_24839[(20)]);
var inst_24813 = (state_24839[(2)]);
var inst_24814__$1 = cljs.core.get.call(null,inst_24813,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24815 = cljs.core.get.call(null,inst_24813,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24816 = cljs.core.not_empty.call(null,inst_24814__$1);
var state_24839__$1 = (function (){var statearr_24861 = state_24839;
(statearr_24861[(21)] = inst_24815);

(statearr_24861[(20)] = inst_24814__$1);

return statearr_24861;
})();
if(cljs.core.truth_(inst_24816)){
var statearr_24862_24944 = state_24839__$1;
(statearr_24862_24944[(1)] = (41));

} else {
var statearr_24863_24945 = state_24839__$1;
(statearr_24863_24945[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (33))){
var state_24839__$1 = state_24839;
var statearr_24864_24946 = state_24839__$1;
(statearr_24864_24946[(2)] = false);

(statearr_24864_24946[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (13))){
var inst_24713 = (state_24839[(22)]);
var inst_24717 = cljs.core.chunk_first.call(null,inst_24713);
var inst_24718 = cljs.core.chunk_rest.call(null,inst_24713);
var inst_24719 = cljs.core.count.call(null,inst_24717);
var inst_24700 = inst_24718;
var inst_24701 = inst_24717;
var inst_24702 = inst_24719;
var inst_24703 = (0);
var state_24839__$1 = (function (){var statearr_24865 = state_24839;
(statearr_24865[(7)] = inst_24703);

(statearr_24865[(8)] = inst_24701);

(statearr_24865[(9)] = inst_24702);

(statearr_24865[(10)] = inst_24700);

return statearr_24865;
})();
var statearr_24866_24947 = state_24839__$1;
(statearr_24866_24947[(2)] = null);

(statearr_24866_24947[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (22))){
var inst_24756 = (state_24839[(23)]);
var inst_24753 = (state_24839[(19)]);
var inst_24757 = (state_24839[(24)]);
var inst_24761 = (state_24839[(25)]);
var inst_24756__$1 = (state_24839[(2)]);
var inst_24757__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24756__$1);
var inst_24758 = (function (){var all_files = inst_24753;
var res_SINGLEQUOTE_ = inst_24756__$1;
var res = inst_24757__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_24756,inst_24753,inst_24757,inst_24761,inst_24756__$1,inst_24757__$1,state_val_24840,c__21212__auto__,map__24685,map__24685__$1,opts,before_jsload,on_jsload,reload_dependents,map__24686,map__24686__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24436_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24436_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_24756,inst_24753,inst_24757,inst_24761,inst_24756__$1,inst_24757__$1,state_val_24840,c__21212__auto__,map__24685,map__24685__$1,opts,before_jsload,on_jsload,reload_dependents,map__24686,map__24686__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24759 = cljs.core.filter.call(null,inst_24758,inst_24756__$1);
var inst_24760 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_24761__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24760);
var inst_24762 = cljs.core.not_empty.call(null,inst_24761__$1);
var state_24839__$1 = (function (){var statearr_24867 = state_24839;
(statearr_24867[(26)] = inst_24759);

(statearr_24867[(23)] = inst_24756__$1);

(statearr_24867[(24)] = inst_24757__$1);

(statearr_24867[(25)] = inst_24761__$1);

return statearr_24867;
})();
if(cljs.core.truth_(inst_24762)){
var statearr_24868_24948 = state_24839__$1;
(statearr_24868_24948[(1)] = (23));

} else {
var statearr_24869_24949 = state_24839__$1;
(statearr_24869_24949[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (36))){
var state_24839__$1 = state_24839;
var statearr_24870_24950 = state_24839__$1;
(statearr_24870_24950[(2)] = false);

(statearr_24870_24950[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (41))){
var inst_24814 = (state_24839[(20)]);
var inst_24818 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_24819 = cljs.core.map.call(null,inst_24818,inst_24814);
var inst_24820 = cljs.core.pr_str.call(null,inst_24819);
var inst_24821 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_24820)].join('');
var inst_24822 = figwheel.client.utils.log.call(null,inst_24821);
var state_24839__$1 = state_24839;
var statearr_24871_24951 = state_24839__$1;
(statearr_24871_24951[(2)] = inst_24822);

(statearr_24871_24951[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (43))){
var inst_24815 = (state_24839[(21)]);
var inst_24825 = (state_24839[(2)]);
var inst_24826 = cljs.core.not_empty.call(null,inst_24815);
var state_24839__$1 = (function (){var statearr_24872 = state_24839;
(statearr_24872[(27)] = inst_24825);

return statearr_24872;
})();
if(cljs.core.truth_(inst_24826)){
var statearr_24873_24952 = state_24839__$1;
(statearr_24873_24952[(1)] = (44));

} else {
var statearr_24874_24953 = state_24839__$1;
(statearr_24874_24953[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (29))){
var inst_24759 = (state_24839[(26)]);
var inst_24756 = (state_24839[(23)]);
var inst_24753 = (state_24839[(19)]);
var inst_24757 = (state_24839[(24)]);
var inst_24761 = (state_24839[(25)]);
var inst_24793 = (state_24839[(16)]);
var inst_24789 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24792 = (function (){var all_files = inst_24753;
var res_SINGLEQUOTE_ = inst_24756;
var res = inst_24757;
var files_not_loaded = inst_24759;
var dependencies_that_loaded = inst_24761;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24759,inst_24756,inst_24753,inst_24757,inst_24761,inst_24793,inst_24789,state_val_24840,c__21212__auto__,map__24685,map__24685__$1,opts,before_jsload,on_jsload,reload_dependents,map__24686,map__24686__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24791){
var map__24875 = p__24791;
var map__24875__$1 = ((((!((map__24875 == null)))?((((map__24875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24875):map__24875);
var namespace = cljs.core.get.call(null,map__24875__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24759,inst_24756,inst_24753,inst_24757,inst_24761,inst_24793,inst_24789,state_val_24840,c__21212__auto__,map__24685,map__24685__$1,opts,before_jsload,on_jsload,reload_dependents,map__24686,map__24686__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24793__$1 = cljs.core.group_by.call(null,inst_24792,inst_24759);
var inst_24795 = (inst_24793__$1 == null);
var inst_24796 = cljs.core.not.call(null,inst_24795);
var state_24839__$1 = (function (){var statearr_24877 = state_24839;
(statearr_24877[(28)] = inst_24789);

(statearr_24877[(16)] = inst_24793__$1);

return statearr_24877;
})();
if(inst_24796){
var statearr_24878_24954 = state_24839__$1;
(statearr_24878_24954[(1)] = (32));

} else {
var statearr_24879_24955 = state_24839__$1;
(statearr_24879_24955[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (44))){
var inst_24815 = (state_24839[(21)]);
var inst_24828 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24815);
var inst_24829 = cljs.core.pr_str.call(null,inst_24828);
var inst_24830 = [cljs.core.str("not required: "),cljs.core.str(inst_24829)].join('');
var inst_24831 = figwheel.client.utils.log.call(null,inst_24830);
var state_24839__$1 = state_24839;
var statearr_24880_24956 = state_24839__$1;
(statearr_24880_24956[(2)] = inst_24831);

(statearr_24880_24956[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (6))){
var inst_24734 = (state_24839[(2)]);
var state_24839__$1 = state_24839;
var statearr_24881_24957 = state_24839__$1;
(statearr_24881_24957[(2)] = inst_24734);

(statearr_24881_24957[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (28))){
var inst_24759 = (state_24839[(26)]);
var inst_24786 = (state_24839[(2)]);
var inst_24787 = cljs.core.not_empty.call(null,inst_24759);
var state_24839__$1 = (function (){var statearr_24882 = state_24839;
(statearr_24882[(29)] = inst_24786);

return statearr_24882;
})();
if(cljs.core.truth_(inst_24787)){
var statearr_24883_24958 = state_24839__$1;
(statearr_24883_24958[(1)] = (29));

} else {
var statearr_24884_24959 = state_24839__$1;
(statearr_24884_24959[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (25))){
var inst_24757 = (state_24839[(24)]);
var inst_24773 = (state_24839[(2)]);
var inst_24774 = cljs.core.not_empty.call(null,inst_24757);
var state_24839__$1 = (function (){var statearr_24885 = state_24839;
(statearr_24885[(30)] = inst_24773);

return statearr_24885;
})();
if(cljs.core.truth_(inst_24774)){
var statearr_24886_24960 = state_24839__$1;
(statearr_24886_24960[(1)] = (26));

} else {
var statearr_24887_24961 = state_24839__$1;
(statearr_24887_24961[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (34))){
var inst_24808 = (state_24839[(2)]);
var state_24839__$1 = state_24839;
if(cljs.core.truth_(inst_24808)){
var statearr_24888_24962 = state_24839__$1;
(statearr_24888_24962[(1)] = (38));

} else {
var statearr_24889_24963 = state_24839__$1;
(statearr_24889_24963[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (17))){
var state_24839__$1 = state_24839;
var statearr_24890_24964 = state_24839__$1;
(statearr_24890_24964[(2)] = recompile_dependents);

(statearr_24890_24964[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (3))){
var state_24839__$1 = state_24839;
var statearr_24891_24965 = state_24839__$1;
(statearr_24891_24965[(2)] = null);

(statearr_24891_24965[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (12))){
var inst_24730 = (state_24839[(2)]);
var state_24839__$1 = state_24839;
var statearr_24892_24966 = state_24839__$1;
(statearr_24892_24966[(2)] = inst_24730);

(statearr_24892_24966[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (2))){
var inst_24692 = (state_24839[(13)]);
var inst_24699 = cljs.core.seq.call(null,inst_24692);
var inst_24700 = inst_24699;
var inst_24701 = null;
var inst_24702 = (0);
var inst_24703 = (0);
var state_24839__$1 = (function (){var statearr_24893 = state_24839;
(statearr_24893[(7)] = inst_24703);

(statearr_24893[(8)] = inst_24701);

(statearr_24893[(9)] = inst_24702);

(statearr_24893[(10)] = inst_24700);

return statearr_24893;
})();
var statearr_24894_24967 = state_24839__$1;
(statearr_24894_24967[(2)] = null);

(statearr_24894_24967[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (23))){
var inst_24759 = (state_24839[(26)]);
var inst_24756 = (state_24839[(23)]);
var inst_24753 = (state_24839[(19)]);
var inst_24757 = (state_24839[(24)]);
var inst_24761 = (state_24839[(25)]);
var inst_24764 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_24766 = (function (){var all_files = inst_24753;
var res_SINGLEQUOTE_ = inst_24756;
var res = inst_24757;
var files_not_loaded = inst_24759;
var dependencies_that_loaded = inst_24761;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24759,inst_24756,inst_24753,inst_24757,inst_24761,inst_24764,state_val_24840,c__21212__auto__,map__24685,map__24685__$1,opts,before_jsload,on_jsload,reload_dependents,map__24686,map__24686__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24765){
var map__24895 = p__24765;
var map__24895__$1 = ((((!((map__24895 == null)))?((((map__24895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24895):map__24895);
var request_url = cljs.core.get.call(null,map__24895__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24759,inst_24756,inst_24753,inst_24757,inst_24761,inst_24764,state_val_24840,c__21212__auto__,map__24685,map__24685__$1,opts,before_jsload,on_jsload,reload_dependents,map__24686,map__24686__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24767 = cljs.core.reverse.call(null,inst_24761);
var inst_24768 = cljs.core.map.call(null,inst_24766,inst_24767);
var inst_24769 = cljs.core.pr_str.call(null,inst_24768);
var inst_24770 = figwheel.client.utils.log.call(null,inst_24769);
var state_24839__$1 = (function (){var statearr_24897 = state_24839;
(statearr_24897[(31)] = inst_24764);

return statearr_24897;
})();
var statearr_24898_24968 = state_24839__$1;
(statearr_24898_24968[(2)] = inst_24770);

(statearr_24898_24968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (35))){
var state_24839__$1 = state_24839;
var statearr_24899_24969 = state_24839__$1;
(statearr_24899_24969[(2)] = true);

(statearr_24899_24969[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (19))){
var inst_24743 = (state_24839[(12)]);
var inst_24749 = figwheel.client.file_reloading.expand_files.call(null,inst_24743);
var state_24839__$1 = state_24839;
var statearr_24900_24970 = state_24839__$1;
(statearr_24900_24970[(2)] = inst_24749);

(statearr_24900_24970[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (11))){
var state_24839__$1 = state_24839;
var statearr_24901_24971 = state_24839__$1;
(statearr_24901_24971[(2)] = null);

(statearr_24901_24971[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (9))){
var inst_24732 = (state_24839[(2)]);
var state_24839__$1 = state_24839;
var statearr_24902_24972 = state_24839__$1;
(statearr_24902_24972[(2)] = inst_24732);

(statearr_24902_24972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (5))){
var inst_24703 = (state_24839[(7)]);
var inst_24702 = (state_24839[(9)]);
var inst_24705 = (inst_24703 < inst_24702);
var inst_24706 = inst_24705;
var state_24839__$1 = state_24839;
if(cljs.core.truth_(inst_24706)){
var statearr_24903_24973 = state_24839__$1;
(statearr_24903_24973[(1)] = (7));

} else {
var statearr_24904_24974 = state_24839__$1;
(statearr_24904_24974[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (14))){
var inst_24713 = (state_24839[(22)]);
var inst_24722 = cljs.core.first.call(null,inst_24713);
var inst_24723 = figwheel.client.file_reloading.eval_body.call(null,inst_24722,opts);
var inst_24724 = cljs.core.next.call(null,inst_24713);
var inst_24700 = inst_24724;
var inst_24701 = null;
var inst_24702 = (0);
var inst_24703 = (0);
var state_24839__$1 = (function (){var statearr_24905 = state_24839;
(statearr_24905[(7)] = inst_24703);

(statearr_24905[(8)] = inst_24701);

(statearr_24905[(9)] = inst_24702);

(statearr_24905[(32)] = inst_24723);

(statearr_24905[(10)] = inst_24700);

return statearr_24905;
})();
var statearr_24906_24975 = state_24839__$1;
(statearr_24906_24975[(2)] = null);

(statearr_24906_24975[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (45))){
var state_24839__$1 = state_24839;
var statearr_24907_24976 = state_24839__$1;
(statearr_24907_24976[(2)] = null);

(statearr_24907_24976[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (26))){
var inst_24759 = (state_24839[(26)]);
var inst_24756 = (state_24839[(23)]);
var inst_24753 = (state_24839[(19)]);
var inst_24757 = (state_24839[(24)]);
var inst_24761 = (state_24839[(25)]);
var inst_24776 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24778 = (function (){var all_files = inst_24753;
var res_SINGLEQUOTE_ = inst_24756;
var res = inst_24757;
var files_not_loaded = inst_24759;
var dependencies_that_loaded = inst_24761;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24759,inst_24756,inst_24753,inst_24757,inst_24761,inst_24776,state_val_24840,c__21212__auto__,map__24685,map__24685__$1,opts,before_jsload,on_jsload,reload_dependents,map__24686,map__24686__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24777){
var map__24908 = p__24777;
var map__24908__$1 = ((((!((map__24908 == null)))?((((map__24908.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24908.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24908):map__24908);
var namespace = cljs.core.get.call(null,map__24908__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__24908__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24759,inst_24756,inst_24753,inst_24757,inst_24761,inst_24776,state_val_24840,c__21212__auto__,map__24685,map__24685__$1,opts,before_jsload,on_jsload,reload_dependents,map__24686,map__24686__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24779 = cljs.core.map.call(null,inst_24778,inst_24757);
var inst_24780 = cljs.core.pr_str.call(null,inst_24779);
var inst_24781 = figwheel.client.utils.log.call(null,inst_24780);
var inst_24782 = (function (){var all_files = inst_24753;
var res_SINGLEQUOTE_ = inst_24756;
var res = inst_24757;
var files_not_loaded = inst_24759;
var dependencies_that_loaded = inst_24761;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24759,inst_24756,inst_24753,inst_24757,inst_24761,inst_24776,inst_24778,inst_24779,inst_24780,inst_24781,state_val_24840,c__21212__auto__,map__24685,map__24685__$1,opts,before_jsload,on_jsload,reload_dependents,map__24686,map__24686__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24759,inst_24756,inst_24753,inst_24757,inst_24761,inst_24776,inst_24778,inst_24779,inst_24780,inst_24781,state_val_24840,c__21212__auto__,map__24685,map__24685__$1,opts,before_jsload,on_jsload,reload_dependents,map__24686,map__24686__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24783 = setTimeout(inst_24782,(10));
var state_24839__$1 = (function (){var statearr_24910 = state_24839;
(statearr_24910[(33)] = inst_24776);

(statearr_24910[(34)] = inst_24781);

return statearr_24910;
})();
var statearr_24911_24977 = state_24839__$1;
(statearr_24911_24977[(2)] = inst_24783);

(statearr_24911_24977[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (16))){
var state_24839__$1 = state_24839;
var statearr_24912_24978 = state_24839__$1;
(statearr_24912_24978[(2)] = reload_dependents);

(statearr_24912_24978[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (38))){
var inst_24793 = (state_24839[(16)]);
var inst_24810 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24793);
var state_24839__$1 = state_24839;
var statearr_24913_24979 = state_24839__$1;
(statearr_24913_24979[(2)] = inst_24810);

(statearr_24913_24979[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (30))){
var state_24839__$1 = state_24839;
var statearr_24914_24980 = state_24839__$1;
(statearr_24914_24980[(2)] = null);

(statearr_24914_24980[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (10))){
var inst_24713 = (state_24839[(22)]);
var inst_24715 = cljs.core.chunked_seq_QMARK_.call(null,inst_24713);
var state_24839__$1 = state_24839;
if(inst_24715){
var statearr_24915_24981 = state_24839__$1;
(statearr_24915_24981[(1)] = (13));

} else {
var statearr_24916_24982 = state_24839__$1;
(statearr_24916_24982[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (18))){
var inst_24747 = (state_24839[(2)]);
var state_24839__$1 = state_24839;
if(cljs.core.truth_(inst_24747)){
var statearr_24917_24983 = state_24839__$1;
(statearr_24917_24983[(1)] = (19));

} else {
var statearr_24918_24984 = state_24839__$1;
(statearr_24918_24984[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (42))){
var state_24839__$1 = state_24839;
var statearr_24919_24985 = state_24839__$1;
(statearr_24919_24985[(2)] = null);

(statearr_24919_24985[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (37))){
var inst_24805 = (state_24839[(2)]);
var state_24839__$1 = state_24839;
var statearr_24920_24986 = state_24839__$1;
(statearr_24920_24986[(2)] = inst_24805);

(statearr_24920_24986[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (8))){
var inst_24713 = (state_24839[(22)]);
var inst_24700 = (state_24839[(10)]);
var inst_24713__$1 = cljs.core.seq.call(null,inst_24700);
var state_24839__$1 = (function (){var statearr_24921 = state_24839;
(statearr_24921[(22)] = inst_24713__$1);

return statearr_24921;
})();
if(inst_24713__$1){
var statearr_24922_24987 = state_24839__$1;
(statearr_24922_24987[(1)] = (10));

} else {
var statearr_24923_24988 = state_24839__$1;
(statearr_24923_24988[(1)] = (11));

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
});})(c__21212__auto__,map__24685,map__24685__$1,opts,before_jsload,on_jsload,reload_dependents,map__24686,map__24686__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21100__auto__,c__21212__auto__,map__24685,map__24685__$1,opts,before_jsload,on_jsload,reload_dependents,map__24686,map__24686__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21101__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21101__auto____0 = (function (){
var statearr_24927 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24927[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21101__auto__);

(statearr_24927[(1)] = (1));

return statearr_24927;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21101__auto____1 = (function (state_24839){
while(true){
var ret_value__21102__auto__ = (function (){try{while(true){
var result__21103__auto__ = switch__21100__auto__.call(null,state_24839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21103__auto__;
}
break;
}
}catch (e24928){if((e24928 instanceof Object)){
var ex__21104__auto__ = e24928;
var statearr_24929_24989 = state_24839;
(statearr_24929_24989[(5)] = ex__21104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24990 = state_24839;
state_24839 = G__24990;
continue;
} else {
return ret_value__21102__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21101__auto__ = function(state_24839){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21101__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21101__auto____1.call(this,state_24839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21101__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21101__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21101__auto__;
})()
;})(switch__21100__auto__,c__21212__auto__,map__24685,map__24685__$1,opts,before_jsload,on_jsload,reload_dependents,map__24686,map__24686__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21214__auto__ = (function (){var statearr_24930 = f__21213__auto__.call(null);
(statearr_24930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21212__auto__);

return statearr_24930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21214__auto__);
});})(c__21212__auto__,map__24685,map__24685__$1,opts,before_jsload,on_jsload,reload_dependents,map__24686,map__24686__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21212__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__24993,link){
var map__24996 = p__24993;
var map__24996__$1 = ((((!((map__24996 == null)))?((((map__24996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24996):map__24996);
var file = cljs.core.get.call(null,map__24996__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__24996,map__24996__$1,file){
return (function (p1__24991_SHARP_,p2__24992_SHARP_){
if(cljs.core._EQ_.call(null,p1__24991_SHARP_,p2__24992_SHARP_)){
return p1__24991_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__24996,map__24996__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25002){
var map__25003 = p__25002;
var map__25003__$1 = ((((!((map__25003 == null)))?((((map__25003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25003):map__25003);
var match_length = cljs.core.get.call(null,map__25003__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25003__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__24998_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__24998_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args25005 = [];
var len__19430__auto___25008 = arguments.length;
var i__19431__auto___25009 = (0);
while(true){
if((i__19431__auto___25009 < len__19430__auto___25008)){
args25005.push((arguments[i__19431__auto___25009]));

var G__25010 = (i__19431__auto___25009 + (1));
i__19431__auto___25009 = G__25010;
continue;
} else {
}
break;
}

var G__25007 = args25005.length;
switch (G__25007) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25005.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25012_SHARP_,p2__25013_SHARP_){
return cljs.core.assoc.call(null,p1__25012_SHARP_,cljs.core.get.call(null,p2__25013_SHARP_,key),p2__25013_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25014){
var map__25017 = p__25014;
var map__25017__$1 = ((((!((map__25017 == null)))?((((map__25017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25017):map__25017);
var f_data = map__25017__$1;
var file = cljs.core.get.call(null,map__25017__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25019,files_msg){
var map__25026 = p__25019;
var map__25026__$1 = ((((!((map__25026 == null)))?((((map__25026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25026):map__25026);
var opts = map__25026__$1;
var on_cssload = cljs.core.get.call(null,map__25026__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25028_25032 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25029_25033 = null;
var count__25030_25034 = (0);
var i__25031_25035 = (0);
while(true){
if((i__25031_25035 < count__25030_25034)){
var f_25036 = cljs.core._nth.call(null,chunk__25029_25033,i__25031_25035);
figwheel.client.file_reloading.reload_css_file.call(null,f_25036);

var G__25037 = seq__25028_25032;
var G__25038 = chunk__25029_25033;
var G__25039 = count__25030_25034;
var G__25040 = (i__25031_25035 + (1));
seq__25028_25032 = G__25037;
chunk__25029_25033 = G__25038;
count__25030_25034 = G__25039;
i__25031_25035 = G__25040;
continue;
} else {
var temp__4657__auto___25041 = cljs.core.seq.call(null,seq__25028_25032);
if(temp__4657__auto___25041){
var seq__25028_25042__$1 = temp__4657__auto___25041;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25028_25042__$1)){
var c__19171__auto___25043 = cljs.core.chunk_first.call(null,seq__25028_25042__$1);
var G__25044 = cljs.core.chunk_rest.call(null,seq__25028_25042__$1);
var G__25045 = c__19171__auto___25043;
var G__25046 = cljs.core.count.call(null,c__19171__auto___25043);
var G__25047 = (0);
seq__25028_25032 = G__25044;
chunk__25029_25033 = G__25045;
count__25030_25034 = G__25046;
i__25031_25035 = G__25047;
continue;
} else {
var f_25048 = cljs.core.first.call(null,seq__25028_25042__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25048);

var G__25049 = cljs.core.next.call(null,seq__25028_25042__$1);
var G__25050 = null;
var G__25051 = (0);
var G__25052 = (0);
seq__25028_25032 = G__25049;
chunk__25029_25033 = G__25050;
count__25030_25034 = G__25051;
i__25031_25035 = G__25052;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25026,map__25026__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25026,map__25026__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1464365889330