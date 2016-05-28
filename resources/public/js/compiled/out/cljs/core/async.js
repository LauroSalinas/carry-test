// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args21257 = [];
var len__19430__auto___21263 = arguments.length;
var i__19431__auto___21264 = (0);
while(true){
if((i__19431__auto___21264 < len__19430__auto___21263)){
args21257.push((arguments[i__19431__auto___21264]));

var G__21265 = (i__19431__auto___21264 + (1));
i__19431__auto___21264 = G__21265;
continue;
} else {
}
break;
}

var G__21259 = args21257.length;
switch (G__21259) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21257.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21260 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21260 = (function (f,blockable,meta21261){
this.f = f;
this.blockable = blockable;
this.meta21261 = meta21261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21262,meta21261__$1){
var self__ = this;
var _21262__$1 = this;
return (new cljs.core.async.t_cljs$core$async21260(self__.f,self__.blockable,meta21261__$1));
});

cljs.core.async.t_cljs$core$async21260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21262){
var self__ = this;
var _21262__$1 = this;
return self__.meta21261;
});

cljs.core.async.t_cljs$core$async21260.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21260.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21260.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21260.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21260.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21261","meta21261",288240797,null)], null);
});

cljs.core.async.t_cljs$core$async21260.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21260";

cljs.core.async.t_cljs$core$async21260.cljs$lang$ctorPrWriter = (function (this__18966__auto__,writer__18967__auto__,opt__18968__auto__){
return cljs.core._write.call(null,writer__18967__auto__,"cljs.core.async/t_cljs$core$async21260");
});

cljs.core.async.__GT_t_cljs$core$async21260 = (function cljs$core$async$__GT_t_cljs$core$async21260(f__$1,blockable__$1,meta21261){
return (new cljs.core.async.t_cljs$core$async21260(f__$1,blockable__$1,meta21261));
});

}

return (new cljs.core.async.t_cljs$core$async21260(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args21269 = [];
var len__19430__auto___21272 = arguments.length;
var i__19431__auto___21273 = (0);
while(true){
if((i__19431__auto___21273 < len__19430__auto___21272)){
args21269.push((arguments[i__19431__auto___21273]));

var G__21274 = (i__19431__auto___21273 + (1));
i__19431__auto___21273 = G__21274;
continue;
} else {
}
break;
}

var G__21271 = args21269.length;
switch (G__21271) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21269.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args21276 = [];
var len__19430__auto___21279 = arguments.length;
var i__19431__auto___21280 = (0);
while(true){
if((i__19431__auto___21280 < len__19430__auto___21279)){
args21276.push((arguments[i__19431__auto___21280]));

var G__21281 = (i__19431__auto___21280 + (1));
i__19431__auto___21280 = G__21281;
continue;
} else {
}
break;
}

var G__21278 = args21276.length;
switch (G__21278) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21276.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args21283 = [];
var len__19430__auto___21286 = arguments.length;
var i__19431__auto___21287 = (0);
while(true){
if((i__19431__auto___21287 < len__19430__auto___21286)){
args21283.push((arguments[i__19431__auto___21287]));

var G__21288 = (i__19431__auto___21287 + (1));
i__19431__auto___21287 = G__21288;
continue;
} else {
}
break;
}

var G__21285 = args21283.length;
switch (G__21285) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21283.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21290 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21290);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21290,ret){
return (function (){
return fn1.call(null,val_21290);
});})(val_21290,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args21291 = [];
var len__19430__auto___21294 = arguments.length;
var i__19431__auto___21295 = (0);
while(true){
if((i__19431__auto___21295 < len__19430__auto___21294)){
args21291.push((arguments[i__19431__auto___21295]));

var G__21296 = (i__19431__auto___21295 + (1));
i__19431__auto___21295 = G__21296;
continue;
} else {
}
break;
}

var G__21293 = args21291.length;
switch (G__21293) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21291.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19275__auto___21298 = n;
var x_21299 = (0);
while(true){
if((x_21299 < n__19275__auto___21298)){
(a[x_21299] = (0));

var G__21300 = (x_21299 + (1));
x_21299 = G__21300;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__21301 = (i + (1));
i = G__21301;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21305 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21305 = (function (alt_flag,flag,meta21306){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta21306 = meta21306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21307,meta21306__$1){
var self__ = this;
var _21307__$1 = this;
return (new cljs.core.async.t_cljs$core$async21305(self__.alt_flag,self__.flag,meta21306__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21305.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21307){
var self__ = this;
var _21307__$1 = this;
return self__.meta21306;
});})(flag))
;

cljs.core.async.t_cljs$core$async21305.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21305.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21305.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21305.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21305.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21306","meta21306",-867765379,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21305.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21305.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21305";

cljs.core.async.t_cljs$core$async21305.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18966__auto__,writer__18967__auto__,opt__18968__auto__){
return cljs.core._write.call(null,writer__18967__auto__,"cljs.core.async/t_cljs$core$async21305");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21305 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21305(alt_flag__$1,flag__$1,meta21306){
return (new cljs.core.async.t_cljs$core$async21305(alt_flag__$1,flag__$1,meta21306));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21305(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21311 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21311 = (function (alt_handler,flag,cb,meta21312){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta21312 = meta21312;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21313,meta21312__$1){
var self__ = this;
var _21313__$1 = this;
return (new cljs.core.async.t_cljs$core$async21311(self__.alt_handler,self__.flag,self__.cb,meta21312__$1));
});

cljs.core.async.t_cljs$core$async21311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21313){
var self__ = this;
var _21313__$1 = this;
return self__.meta21312;
});

cljs.core.async.t_cljs$core$async21311.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21311.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21311.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21311.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21311.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21312","meta21312",2024471957,null)], null);
});

cljs.core.async.t_cljs$core$async21311.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21311.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21311";

cljs.core.async.t_cljs$core$async21311.cljs$lang$ctorPrWriter = (function (this__18966__auto__,writer__18967__auto__,opt__18968__auto__){
return cljs.core._write.call(null,writer__18967__auto__,"cljs.core.async/t_cljs$core$async21311");
});

cljs.core.async.__GT_t_cljs$core$async21311 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21311(alt_handler__$1,flag__$1,cb__$1,meta21312){
return (new cljs.core.async.t_cljs$core$async21311(alt_handler__$1,flag__$1,cb__$1,meta21312));
});

}

return (new cljs.core.async.t_cljs$core$async21311(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21314_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21314_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21315_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21315_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18360__auto__ = wport;
if(cljs.core.truth_(or__18360__auto__)){
return or__18360__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21316 = (i + (1));
i = G__21316;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18360__auto__ = ret;
if(cljs.core.truth_(or__18360__auto__)){
return or__18360__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18348__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18348__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18348__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19437__auto__ = [];
var len__19430__auto___21322 = arguments.length;
var i__19431__auto___21323 = (0);
while(true){
if((i__19431__auto___21323 < len__19430__auto___21322)){
args__19437__auto__.push((arguments[i__19431__auto___21323]));

var G__21324 = (i__19431__auto___21323 + (1));
i__19431__auto___21323 = G__21324;
continue;
} else {
}
break;
}

var argseq__19438__auto__ = ((((1) < args__19437__auto__.length))?(new cljs.core.IndexedSeq(args__19437__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19438__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21319){
var map__21320 = p__21319;
var map__21320__$1 = ((((!((map__21320 == null)))?((((map__21320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21320):map__21320);
var opts = map__21320__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21317){
var G__21318 = cljs.core.first.call(null,seq21317);
var seq21317__$1 = cljs.core.next.call(null,seq21317);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21318,seq21317__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args21325 = [];
var len__19430__auto___21375 = arguments.length;
var i__19431__auto___21376 = (0);
while(true){
if((i__19431__auto___21376 < len__19430__auto___21375)){
args21325.push((arguments[i__19431__auto___21376]));

var G__21377 = (i__19431__auto___21376 + (1));
i__19431__auto___21376 = G__21377;
continue;
} else {
}
break;
}

var G__21327 = args21325.length;
switch (G__21327) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21325.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21212__auto___21379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21212__auto___21379){
return (function (){
var f__21213__auto__ = (function (){var switch__21100__auto__ = ((function (c__21212__auto___21379){
return (function (state_21351){
var state_val_21352 = (state_21351[(1)]);
if((state_val_21352 === (7))){
var inst_21347 = (state_21351[(2)]);
var state_21351__$1 = state_21351;
var statearr_21353_21380 = state_21351__$1;
(statearr_21353_21380[(2)] = inst_21347);

(statearr_21353_21380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21352 === (1))){
var state_21351__$1 = state_21351;
var statearr_21354_21381 = state_21351__$1;
(statearr_21354_21381[(2)] = null);

(statearr_21354_21381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21352 === (4))){
var inst_21330 = (state_21351[(7)]);
var inst_21330__$1 = (state_21351[(2)]);
var inst_21331 = (inst_21330__$1 == null);
var state_21351__$1 = (function (){var statearr_21355 = state_21351;
(statearr_21355[(7)] = inst_21330__$1);

return statearr_21355;
})();
if(cljs.core.truth_(inst_21331)){
var statearr_21356_21382 = state_21351__$1;
(statearr_21356_21382[(1)] = (5));

} else {
var statearr_21357_21383 = state_21351__$1;
(statearr_21357_21383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21352 === (13))){
var state_21351__$1 = state_21351;
var statearr_21358_21384 = state_21351__$1;
(statearr_21358_21384[(2)] = null);

(statearr_21358_21384[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21352 === (6))){
var inst_21330 = (state_21351[(7)]);
var state_21351__$1 = state_21351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21351__$1,(11),to,inst_21330);
} else {
if((state_val_21352 === (3))){
var inst_21349 = (state_21351[(2)]);
var state_21351__$1 = state_21351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21351__$1,inst_21349);
} else {
if((state_val_21352 === (12))){
var state_21351__$1 = state_21351;
var statearr_21359_21385 = state_21351__$1;
(statearr_21359_21385[(2)] = null);

(statearr_21359_21385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21352 === (2))){
var state_21351__$1 = state_21351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21351__$1,(4),from);
} else {
if((state_val_21352 === (11))){
var inst_21340 = (state_21351[(2)]);
var state_21351__$1 = state_21351;
if(cljs.core.truth_(inst_21340)){
var statearr_21360_21386 = state_21351__$1;
(statearr_21360_21386[(1)] = (12));

} else {
var statearr_21361_21387 = state_21351__$1;
(statearr_21361_21387[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21352 === (9))){
var state_21351__$1 = state_21351;
var statearr_21362_21388 = state_21351__$1;
(statearr_21362_21388[(2)] = null);

(statearr_21362_21388[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21352 === (5))){
var state_21351__$1 = state_21351;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21363_21389 = state_21351__$1;
(statearr_21363_21389[(1)] = (8));

} else {
var statearr_21364_21390 = state_21351__$1;
(statearr_21364_21390[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21352 === (14))){
var inst_21345 = (state_21351[(2)]);
var state_21351__$1 = state_21351;
var statearr_21365_21391 = state_21351__$1;
(statearr_21365_21391[(2)] = inst_21345);

(statearr_21365_21391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21352 === (10))){
var inst_21337 = (state_21351[(2)]);
var state_21351__$1 = state_21351;
var statearr_21366_21392 = state_21351__$1;
(statearr_21366_21392[(2)] = inst_21337);

(statearr_21366_21392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21352 === (8))){
var inst_21334 = cljs.core.async.close_BANG_.call(null,to);
var state_21351__$1 = state_21351;
var statearr_21367_21393 = state_21351__$1;
(statearr_21367_21393[(2)] = inst_21334);

(statearr_21367_21393[(1)] = (10));


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
});})(c__21212__auto___21379))
;
return ((function (switch__21100__auto__,c__21212__auto___21379){
return (function() {
var cljs$core$async$state_machine__21101__auto__ = null;
var cljs$core$async$state_machine__21101__auto____0 = (function (){
var statearr_21371 = [null,null,null,null,null,null,null,null];
(statearr_21371[(0)] = cljs$core$async$state_machine__21101__auto__);

(statearr_21371[(1)] = (1));

return statearr_21371;
});
var cljs$core$async$state_machine__21101__auto____1 = (function (state_21351){
while(true){
var ret_value__21102__auto__ = (function (){try{while(true){
var result__21103__auto__ = switch__21100__auto__.call(null,state_21351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21103__auto__;
}
break;
}
}catch (e21372){if((e21372 instanceof Object)){
var ex__21104__auto__ = e21372;
var statearr_21373_21394 = state_21351;
(statearr_21373_21394[(5)] = ex__21104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21395 = state_21351;
state_21351 = G__21395;
continue;
} else {
return ret_value__21102__auto__;
}
break;
}
});
cljs$core$async$state_machine__21101__auto__ = function(state_21351){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21101__auto____1.call(this,state_21351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21101__auto____0;
cljs$core$async$state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21101__auto____1;
return cljs$core$async$state_machine__21101__auto__;
})()
;})(switch__21100__auto__,c__21212__auto___21379))
})();
var state__21214__auto__ = (function (){var statearr_21374 = f__21213__auto__.call(null);
(statearr_21374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21212__auto___21379);

return statearr_21374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21214__auto__);
});})(c__21212__auto___21379))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21579){
var vec__21580 = p__21579;
var v = cljs.core.nth.call(null,vec__21580,(0),null);
var p = cljs.core.nth.call(null,vec__21580,(1),null);
var job = vec__21580;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21212__auto___21762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21212__auto___21762,res,vec__21580,v,p,job,jobs,results){
return (function (){
var f__21213__auto__ = (function (){var switch__21100__auto__ = ((function (c__21212__auto___21762,res,vec__21580,v,p,job,jobs,results){
return (function (state_21585){
var state_val_21586 = (state_21585[(1)]);
if((state_val_21586 === (1))){
var state_21585__$1 = state_21585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21585__$1,(2),res,v);
} else {
if((state_val_21586 === (2))){
var inst_21582 = (state_21585[(2)]);
var inst_21583 = cljs.core.async.close_BANG_.call(null,res);
var state_21585__$1 = (function (){var statearr_21587 = state_21585;
(statearr_21587[(7)] = inst_21582);

return statearr_21587;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21585__$1,inst_21583);
} else {
return null;
}
}
});})(c__21212__auto___21762,res,vec__21580,v,p,job,jobs,results))
;
return ((function (switch__21100__auto__,c__21212__auto___21762,res,vec__21580,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21101__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21101__auto____0 = (function (){
var statearr_21591 = [null,null,null,null,null,null,null,null];
(statearr_21591[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21101__auto__);

(statearr_21591[(1)] = (1));

return statearr_21591;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21101__auto____1 = (function (state_21585){
while(true){
var ret_value__21102__auto__ = (function (){try{while(true){
var result__21103__auto__ = switch__21100__auto__.call(null,state_21585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21103__auto__;
}
break;
}
}catch (e21592){if((e21592 instanceof Object)){
var ex__21104__auto__ = e21592;
var statearr_21593_21763 = state_21585;
(statearr_21593_21763[(5)] = ex__21104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21764 = state_21585;
state_21585 = G__21764;
continue;
} else {
return ret_value__21102__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21101__auto__ = function(state_21585){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21101__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21101__auto____1.call(this,state_21585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21101__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21101__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21101__auto__;
})()
;})(switch__21100__auto__,c__21212__auto___21762,res,vec__21580,v,p,job,jobs,results))
})();
var state__21214__auto__ = (function (){var statearr_21594 = f__21213__auto__.call(null);
(statearr_21594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21212__auto___21762);

return statearr_21594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21214__auto__);
});})(c__21212__auto___21762,res,vec__21580,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21595){
var vec__21596 = p__21595;
var v = cljs.core.nth.call(null,vec__21596,(0),null);
var p = cljs.core.nth.call(null,vec__21596,(1),null);
var job = vec__21596;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19275__auto___21765 = n;
var __21766 = (0);
while(true){
if((__21766 < n__19275__auto___21765)){
var G__21597_21767 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21597_21767) {
case "compute":
var c__21212__auto___21769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21766,c__21212__auto___21769,G__21597_21767,n__19275__auto___21765,jobs,results,process,async){
return (function (){
var f__21213__auto__ = (function (){var switch__21100__auto__ = ((function (__21766,c__21212__auto___21769,G__21597_21767,n__19275__auto___21765,jobs,results,process,async){
return (function (state_21610){
var state_val_21611 = (state_21610[(1)]);
if((state_val_21611 === (1))){
var state_21610__$1 = state_21610;
var statearr_21612_21770 = state_21610__$1;
(statearr_21612_21770[(2)] = null);

(statearr_21612_21770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21611 === (2))){
var state_21610__$1 = state_21610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21610__$1,(4),jobs);
} else {
if((state_val_21611 === (3))){
var inst_21608 = (state_21610[(2)]);
var state_21610__$1 = state_21610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21610__$1,inst_21608);
} else {
if((state_val_21611 === (4))){
var inst_21600 = (state_21610[(2)]);
var inst_21601 = process.call(null,inst_21600);
var state_21610__$1 = state_21610;
if(cljs.core.truth_(inst_21601)){
var statearr_21613_21771 = state_21610__$1;
(statearr_21613_21771[(1)] = (5));

} else {
var statearr_21614_21772 = state_21610__$1;
(statearr_21614_21772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21611 === (5))){
var state_21610__$1 = state_21610;
var statearr_21615_21773 = state_21610__$1;
(statearr_21615_21773[(2)] = null);

(statearr_21615_21773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21611 === (6))){
var state_21610__$1 = state_21610;
var statearr_21616_21774 = state_21610__$1;
(statearr_21616_21774[(2)] = null);

(statearr_21616_21774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21611 === (7))){
var inst_21606 = (state_21610[(2)]);
var state_21610__$1 = state_21610;
var statearr_21617_21775 = state_21610__$1;
(statearr_21617_21775[(2)] = inst_21606);

(statearr_21617_21775[(1)] = (3));


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
});})(__21766,c__21212__auto___21769,G__21597_21767,n__19275__auto___21765,jobs,results,process,async))
;
return ((function (__21766,switch__21100__auto__,c__21212__auto___21769,G__21597_21767,n__19275__auto___21765,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21101__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21101__auto____0 = (function (){
var statearr_21621 = [null,null,null,null,null,null,null];
(statearr_21621[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21101__auto__);

(statearr_21621[(1)] = (1));

return statearr_21621;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21101__auto____1 = (function (state_21610){
while(true){
var ret_value__21102__auto__ = (function (){try{while(true){
var result__21103__auto__ = switch__21100__auto__.call(null,state_21610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21103__auto__;
}
break;
}
}catch (e21622){if((e21622 instanceof Object)){
var ex__21104__auto__ = e21622;
var statearr_21623_21776 = state_21610;
(statearr_21623_21776[(5)] = ex__21104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21777 = state_21610;
state_21610 = G__21777;
continue;
} else {
return ret_value__21102__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21101__auto__ = function(state_21610){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21101__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21101__auto____1.call(this,state_21610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21101__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21101__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21101__auto__;
})()
;})(__21766,switch__21100__auto__,c__21212__auto___21769,G__21597_21767,n__19275__auto___21765,jobs,results,process,async))
})();
var state__21214__auto__ = (function (){var statearr_21624 = f__21213__auto__.call(null);
(statearr_21624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21212__auto___21769);

return statearr_21624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21214__auto__);
});})(__21766,c__21212__auto___21769,G__21597_21767,n__19275__auto___21765,jobs,results,process,async))
);


break;
case "async":
var c__21212__auto___21778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21766,c__21212__auto___21778,G__21597_21767,n__19275__auto___21765,jobs,results,process,async){
return (function (){
var f__21213__auto__ = (function (){var switch__21100__auto__ = ((function (__21766,c__21212__auto___21778,G__21597_21767,n__19275__auto___21765,jobs,results,process,async){
return (function (state_21637){
var state_val_21638 = (state_21637[(1)]);
if((state_val_21638 === (1))){
var state_21637__$1 = state_21637;
var statearr_21639_21779 = state_21637__$1;
(statearr_21639_21779[(2)] = null);

(statearr_21639_21779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21638 === (2))){
var state_21637__$1 = state_21637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21637__$1,(4),jobs);
} else {
if((state_val_21638 === (3))){
var inst_21635 = (state_21637[(2)]);
var state_21637__$1 = state_21637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21637__$1,inst_21635);
} else {
if((state_val_21638 === (4))){
var inst_21627 = (state_21637[(2)]);
var inst_21628 = async.call(null,inst_21627);
var state_21637__$1 = state_21637;
if(cljs.core.truth_(inst_21628)){
var statearr_21640_21780 = state_21637__$1;
(statearr_21640_21780[(1)] = (5));

} else {
var statearr_21641_21781 = state_21637__$1;
(statearr_21641_21781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21638 === (5))){
var state_21637__$1 = state_21637;
var statearr_21642_21782 = state_21637__$1;
(statearr_21642_21782[(2)] = null);

(statearr_21642_21782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21638 === (6))){
var state_21637__$1 = state_21637;
var statearr_21643_21783 = state_21637__$1;
(statearr_21643_21783[(2)] = null);

(statearr_21643_21783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21638 === (7))){
var inst_21633 = (state_21637[(2)]);
var state_21637__$1 = state_21637;
var statearr_21644_21784 = state_21637__$1;
(statearr_21644_21784[(2)] = inst_21633);

(statearr_21644_21784[(1)] = (3));


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
});})(__21766,c__21212__auto___21778,G__21597_21767,n__19275__auto___21765,jobs,results,process,async))
;
return ((function (__21766,switch__21100__auto__,c__21212__auto___21778,G__21597_21767,n__19275__auto___21765,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21101__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21101__auto____0 = (function (){
var statearr_21648 = [null,null,null,null,null,null,null];
(statearr_21648[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21101__auto__);

(statearr_21648[(1)] = (1));

return statearr_21648;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21101__auto____1 = (function (state_21637){
while(true){
var ret_value__21102__auto__ = (function (){try{while(true){
var result__21103__auto__ = switch__21100__auto__.call(null,state_21637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21103__auto__;
}
break;
}
}catch (e21649){if((e21649 instanceof Object)){
var ex__21104__auto__ = e21649;
var statearr_21650_21785 = state_21637;
(statearr_21650_21785[(5)] = ex__21104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21786 = state_21637;
state_21637 = G__21786;
continue;
} else {
return ret_value__21102__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21101__auto__ = function(state_21637){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21101__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21101__auto____1.call(this,state_21637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21101__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21101__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21101__auto__;
})()
;})(__21766,switch__21100__auto__,c__21212__auto___21778,G__21597_21767,n__19275__auto___21765,jobs,results,process,async))
})();
var state__21214__auto__ = (function (){var statearr_21651 = f__21213__auto__.call(null);
(statearr_21651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21212__auto___21778);

return statearr_21651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21214__auto__);
});})(__21766,c__21212__auto___21778,G__21597_21767,n__19275__auto___21765,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21787 = (__21766 + (1));
__21766 = G__21787;
continue;
} else {
}
break;
}

var c__21212__auto___21788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21212__auto___21788,jobs,results,process,async){
return (function (){
var f__21213__auto__ = (function (){var switch__21100__auto__ = ((function (c__21212__auto___21788,jobs,results,process,async){
return (function (state_21673){
var state_val_21674 = (state_21673[(1)]);
if((state_val_21674 === (1))){
var state_21673__$1 = state_21673;
var statearr_21675_21789 = state_21673__$1;
(statearr_21675_21789[(2)] = null);

(statearr_21675_21789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21674 === (2))){
var state_21673__$1 = state_21673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21673__$1,(4),from);
} else {
if((state_val_21674 === (3))){
var inst_21671 = (state_21673[(2)]);
var state_21673__$1 = state_21673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21673__$1,inst_21671);
} else {
if((state_val_21674 === (4))){
var inst_21654 = (state_21673[(7)]);
var inst_21654__$1 = (state_21673[(2)]);
var inst_21655 = (inst_21654__$1 == null);
var state_21673__$1 = (function (){var statearr_21676 = state_21673;
(statearr_21676[(7)] = inst_21654__$1);

return statearr_21676;
})();
if(cljs.core.truth_(inst_21655)){
var statearr_21677_21790 = state_21673__$1;
(statearr_21677_21790[(1)] = (5));

} else {
var statearr_21678_21791 = state_21673__$1;
(statearr_21678_21791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21674 === (5))){
var inst_21657 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21673__$1 = state_21673;
var statearr_21679_21792 = state_21673__$1;
(statearr_21679_21792[(2)] = inst_21657);

(statearr_21679_21792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21674 === (6))){
var inst_21659 = (state_21673[(8)]);
var inst_21654 = (state_21673[(7)]);
var inst_21659__$1 = cljs.core.async.chan.call(null,(1));
var inst_21660 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21661 = [inst_21654,inst_21659__$1];
var inst_21662 = (new cljs.core.PersistentVector(null,2,(5),inst_21660,inst_21661,null));
var state_21673__$1 = (function (){var statearr_21680 = state_21673;
(statearr_21680[(8)] = inst_21659__$1);

return statearr_21680;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21673__$1,(8),jobs,inst_21662);
} else {
if((state_val_21674 === (7))){
var inst_21669 = (state_21673[(2)]);
var state_21673__$1 = state_21673;
var statearr_21681_21793 = state_21673__$1;
(statearr_21681_21793[(2)] = inst_21669);

(statearr_21681_21793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21674 === (8))){
var inst_21659 = (state_21673[(8)]);
var inst_21664 = (state_21673[(2)]);
var state_21673__$1 = (function (){var statearr_21682 = state_21673;
(statearr_21682[(9)] = inst_21664);

return statearr_21682;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21673__$1,(9),results,inst_21659);
} else {
if((state_val_21674 === (9))){
var inst_21666 = (state_21673[(2)]);
var state_21673__$1 = (function (){var statearr_21683 = state_21673;
(statearr_21683[(10)] = inst_21666);

return statearr_21683;
})();
var statearr_21684_21794 = state_21673__$1;
(statearr_21684_21794[(2)] = null);

(statearr_21684_21794[(1)] = (2));


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
});})(c__21212__auto___21788,jobs,results,process,async))
;
return ((function (switch__21100__auto__,c__21212__auto___21788,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21101__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21101__auto____0 = (function (){
var statearr_21688 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21688[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21101__auto__);

(statearr_21688[(1)] = (1));

return statearr_21688;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21101__auto____1 = (function (state_21673){
while(true){
var ret_value__21102__auto__ = (function (){try{while(true){
var result__21103__auto__ = switch__21100__auto__.call(null,state_21673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21103__auto__;
}
break;
}
}catch (e21689){if((e21689 instanceof Object)){
var ex__21104__auto__ = e21689;
var statearr_21690_21795 = state_21673;
(statearr_21690_21795[(5)] = ex__21104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21796 = state_21673;
state_21673 = G__21796;
continue;
} else {
return ret_value__21102__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21101__auto__ = function(state_21673){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21101__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21101__auto____1.call(this,state_21673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21101__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21101__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21101__auto__;
})()
;})(switch__21100__auto__,c__21212__auto___21788,jobs,results,process,async))
})();
var state__21214__auto__ = (function (){var statearr_21691 = f__21213__auto__.call(null);
(statearr_21691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21212__auto___21788);

return statearr_21691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21214__auto__);
});})(c__21212__auto___21788,jobs,results,process,async))
);


var c__21212__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21212__auto__,jobs,results,process,async){
return (function (){
var f__21213__auto__ = (function (){var switch__21100__auto__ = ((function (c__21212__auto__,jobs,results,process,async){
return (function (state_21729){
var state_val_21730 = (state_21729[(1)]);
if((state_val_21730 === (7))){
var inst_21725 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
var statearr_21731_21797 = state_21729__$1;
(statearr_21731_21797[(2)] = inst_21725);

(statearr_21731_21797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (20))){
var state_21729__$1 = state_21729;
var statearr_21732_21798 = state_21729__$1;
(statearr_21732_21798[(2)] = null);

(statearr_21732_21798[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (1))){
var state_21729__$1 = state_21729;
var statearr_21733_21799 = state_21729__$1;
(statearr_21733_21799[(2)] = null);

(statearr_21733_21799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (4))){
var inst_21694 = (state_21729[(7)]);
var inst_21694__$1 = (state_21729[(2)]);
var inst_21695 = (inst_21694__$1 == null);
var state_21729__$1 = (function (){var statearr_21734 = state_21729;
(statearr_21734[(7)] = inst_21694__$1);

return statearr_21734;
})();
if(cljs.core.truth_(inst_21695)){
var statearr_21735_21800 = state_21729__$1;
(statearr_21735_21800[(1)] = (5));

} else {
var statearr_21736_21801 = state_21729__$1;
(statearr_21736_21801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (15))){
var inst_21707 = (state_21729[(8)]);
var state_21729__$1 = state_21729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21729__$1,(18),to,inst_21707);
} else {
if((state_val_21730 === (21))){
var inst_21720 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
var statearr_21737_21802 = state_21729__$1;
(statearr_21737_21802[(2)] = inst_21720);

(statearr_21737_21802[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (13))){
var inst_21722 = (state_21729[(2)]);
var state_21729__$1 = (function (){var statearr_21738 = state_21729;
(statearr_21738[(9)] = inst_21722);

return statearr_21738;
})();
var statearr_21739_21803 = state_21729__$1;
(statearr_21739_21803[(2)] = null);

(statearr_21739_21803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (6))){
var inst_21694 = (state_21729[(7)]);
var state_21729__$1 = state_21729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21729__$1,(11),inst_21694);
} else {
if((state_val_21730 === (17))){
var inst_21715 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
if(cljs.core.truth_(inst_21715)){
var statearr_21740_21804 = state_21729__$1;
(statearr_21740_21804[(1)] = (19));

} else {
var statearr_21741_21805 = state_21729__$1;
(statearr_21741_21805[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (3))){
var inst_21727 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21729__$1,inst_21727);
} else {
if((state_val_21730 === (12))){
var inst_21704 = (state_21729[(10)]);
var state_21729__$1 = state_21729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21729__$1,(14),inst_21704);
} else {
if((state_val_21730 === (2))){
var state_21729__$1 = state_21729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21729__$1,(4),results);
} else {
if((state_val_21730 === (19))){
var state_21729__$1 = state_21729;
var statearr_21742_21806 = state_21729__$1;
(statearr_21742_21806[(2)] = null);

(statearr_21742_21806[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (11))){
var inst_21704 = (state_21729[(2)]);
var state_21729__$1 = (function (){var statearr_21743 = state_21729;
(statearr_21743[(10)] = inst_21704);

return statearr_21743;
})();
var statearr_21744_21807 = state_21729__$1;
(statearr_21744_21807[(2)] = null);

(statearr_21744_21807[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (9))){
var state_21729__$1 = state_21729;
var statearr_21745_21808 = state_21729__$1;
(statearr_21745_21808[(2)] = null);

(statearr_21745_21808[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (5))){
var state_21729__$1 = state_21729;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21746_21809 = state_21729__$1;
(statearr_21746_21809[(1)] = (8));

} else {
var statearr_21747_21810 = state_21729__$1;
(statearr_21747_21810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (14))){
var inst_21707 = (state_21729[(8)]);
var inst_21709 = (state_21729[(11)]);
var inst_21707__$1 = (state_21729[(2)]);
var inst_21708 = (inst_21707__$1 == null);
var inst_21709__$1 = cljs.core.not.call(null,inst_21708);
var state_21729__$1 = (function (){var statearr_21748 = state_21729;
(statearr_21748[(8)] = inst_21707__$1);

(statearr_21748[(11)] = inst_21709__$1);

return statearr_21748;
})();
if(inst_21709__$1){
var statearr_21749_21811 = state_21729__$1;
(statearr_21749_21811[(1)] = (15));

} else {
var statearr_21750_21812 = state_21729__$1;
(statearr_21750_21812[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (16))){
var inst_21709 = (state_21729[(11)]);
var state_21729__$1 = state_21729;
var statearr_21751_21813 = state_21729__$1;
(statearr_21751_21813[(2)] = inst_21709);

(statearr_21751_21813[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (10))){
var inst_21701 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
var statearr_21752_21814 = state_21729__$1;
(statearr_21752_21814[(2)] = inst_21701);

(statearr_21752_21814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (18))){
var inst_21712 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
var statearr_21753_21815 = state_21729__$1;
(statearr_21753_21815[(2)] = inst_21712);

(statearr_21753_21815[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (8))){
var inst_21698 = cljs.core.async.close_BANG_.call(null,to);
var state_21729__$1 = state_21729;
var statearr_21754_21816 = state_21729__$1;
(statearr_21754_21816[(2)] = inst_21698);

(statearr_21754_21816[(1)] = (10));


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
});})(c__21212__auto__,jobs,results,process,async))
;
return ((function (switch__21100__auto__,c__21212__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21101__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21101__auto____0 = (function (){
var statearr_21758 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21758[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21101__auto__);

(statearr_21758[(1)] = (1));

return statearr_21758;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21101__auto____1 = (function (state_21729){
while(true){
var ret_value__21102__auto__ = (function (){try{while(true){
var result__21103__auto__ = switch__21100__auto__.call(null,state_21729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21103__auto__;
}
break;
}
}catch (e21759){if((e21759 instanceof Object)){
var ex__21104__auto__ = e21759;
var statearr_21760_21817 = state_21729;
(statearr_21760_21817[(5)] = ex__21104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21818 = state_21729;
state_21729 = G__21818;
continue;
} else {
return ret_value__21102__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21101__auto__ = function(state_21729){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21101__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21101__auto____1.call(this,state_21729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21101__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21101__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21101__auto__;
})()
;})(switch__21100__auto__,c__21212__auto__,jobs,results,process,async))
})();
var state__21214__auto__ = (function (){var statearr_21761 = f__21213__auto__.call(null);
(statearr_21761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21212__auto__);

return statearr_21761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21214__auto__);
});})(c__21212__auto__,jobs,results,process,async))
);

return c__21212__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args21819 = [];
var len__19430__auto___21822 = arguments.length;
var i__19431__auto___21823 = (0);
while(true){
if((i__19431__auto___21823 < len__19430__auto___21822)){
args21819.push((arguments[i__19431__auto___21823]));

var G__21824 = (i__19431__auto___21823 + (1));
i__19431__auto___21823 = G__21824;
continue;
} else {
}
break;
}

var G__21821 = args21819.length;
switch (G__21821) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21819.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args21826 = [];
var len__19430__auto___21829 = arguments.length;
var i__19431__auto___21830 = (0);
while(true){
if((i__19431__auto___21830 < len__19430__auto___21829)){
args21826.push((arguments[i__19431__auto___21830]));

var G__21831 = (i__19431__auto___21830 + (1));
i__19431__auto___21830 = G__21831;
continue;
} else {
}
break;
}

var G__21828 = args21826.length;
switch (G__21828) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21826.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args21833 = [];
var len__19430__auto___21886 = arguments.length;
var i__19431__auto___21887 = (0);
while(true){
if((i__19431__auto___21887 < len__19430__auto___21886)){
args21833.push((arguments[i__19431__auto___21887]));

var G__21888 = (i__19431__auto___21887 + (1));
i__19431__auto___21887 = G__21888;
continue;
} else {
}
break;
}

var G__21835 = args21833.length;
switch (G__21835) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21833.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21212__auto___21890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21212__auto___21890,tc,fc){
return (function (){
var f__21213__auto__ = (function (){var switch__21100__auto__ = ((function (c__21212__auto___21890,tc,fc){
return (function (state_21861){
var state_val_21862 = (state_21861[(1)]);
if((state_val_21862 === (7))){
var inst_21857 = (state_21861[(2)]);
var state_21861__$1 = state_21861;
var statearr_21863_21891 = state_21861__$1;
(statearr_21863_21891[(2)] = inst_21857);

(statearr_21863_21891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21862 === (1))){
var state_21861__$1 = state_21861;
var statearr_21864_21892 = state_21861__$1;
(statearr_21864_21892[(2)] = null);

(statearr_21864_21892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21862 === (4))){
var inst_21838 = (state_21861[(7)]);
var inst_21838__$1 = (state_21861[(2)]);
var inst_21839 = (inst_21838__$1 == null);
var state_21861__$1 = (function (){var statearr_21865 = state_21861;
(statearr_21865[(7)] = inst_21838__$1);

return statearr_21865;
})();
if(cljs.core.truth_(inst_21839)){
var statearr_21866_21893 = state_21861__$1;
(statearr_21866_21893[(1)] = (5));

} else {
var statearr_21867_21894 = state_21861__$1;
(statearr_21867_21894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21862 === (13))){
var state_21861__$1 = state_21861;
var statearr_21868_21895 = state_21861__$1;
(statearr_21868_21895[(2)] = null);

(statearr_21868_21895[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21862 === (6))){
var inst_21838 = (state_21861[(7)]);
var inst_21844 = p.call(null,inst_21838);
var state_21861__$1 = state_21861;
if(cljs.core.truth_(inst_21844)){
var statearr_21869_21896 = state_21861__$1;
(statearr_21869_21896[(1)] = (9));

} else {
var statearr_21870_21897 = state_21861__$1;
(statearr_21870_21897[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21862 === (3))){
var inst_21859 = (state_21861[(2)]);
var state_21861__$1 = state_21861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21861__$1,inst_21859);
} else {
if((state_val_21862 === (12))){
var state_21861__$1 = state_21861;
var statearr_21871_21898 = state_21861__$1;
(statearr_21871_21898[(2)] = null);

(statearr_21871_21898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21862 === (2))){
var state_21861__$1 = state_21861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21861__$1,(4),ch);
} else {
if((state_val_21862 === (11))){
var inst_21838 = (state_21861[(7)]);
var inst_21848 = (state_21861[(2)]);
var state_21861__$1 = state_21861;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21861__$1,(8),inst_21848,inst_21838);
} else {
if((state_val_21862 === (9))){
var state_21861__$1 = state_21861;
var statearr_21872_21899 = state_21861__$1;
(statearr_21872_21899[(2)] = tc);

(statearr_21872_21899[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21862 === (5))){
var inst_21841 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21842 = cljs.core.async.close_BANG_.call(null,fc);
var state_21861__$1 = (function (){var statearr_21873 = state_21861;
(statearr_21873[(8)] = inst_21841);

return statearr_21873;
})();
var statearr_21874_21900 = state_21861__$1;
(statearr_21874_21900[(2)] = inst_21842);

(statearr_21874_21900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21862 === (14))){
var inst_21855 = (state_21861[(2)]);
var state_21861__$1 = state_21861;
var statearr_21875_21901 = state_21861__$1;
(statearr_21875_21901[(2)] = inst_21855);

(statearr_21875_21901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21862 === (10))){
var state_21861__$1 = state_21861;
var statearr_21876_21902 = state_21861__$1;
(statearr_21876_21902[(2)] = fc);

(statearr_21876_21902[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21862 === (8))){
var inst_21850 = (state_21861[(2)]);
var state_21861__$1 = state_21861;
if(cljs.core.truth_(inst_21850)){
var statearr_21877_21903 = state_21861__$1;
(statearr_21877_21903[(1)] = (12));

} else {
var statearr_21878_21904 = state_21861__$1;
(statearr_21878_21904[(1)] = (13));

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
});})(c__21212__auto___21890,tc,fc))
;
return ((function (switch__21100__auto__,c__21212__auto___21890,tc,fc){
return (function() {
var cljs$core$async$state_machine__21101__auto__ = null;
var cljs$core$async$state_machine__21101__auto____0 = (function (){
var statearr_21882 = [null,null,null,null,null,null,null,null,null];
(statearr_21882[(0)] = cljs$core$async$state_machine__21101__auto__);

(statearr_21882[(1)] = (1));

return statearr_21882;
});
var cljs$core$async$state_machine__21101__auto____1 = (function (state_21861){
while(true){
var ret_value__21102__auto__ = (function (){try{while(true){
var result__21103__auto__ = switch__21100__auto__.call(null,state_21861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21103__auto__;
}
break;
}
}catch (e21883){if((e21883 instanceof Object)){
var ex__21104__auto__ = e21883;
var statearr_21884_21905 = state_21861;
(statearr_21884_21905[(5)] = ex__21104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21906 = state_21861;
state_21861 = G__21906;
continue;
} else {
return ret_value__21102__auto__;
}
break;
}
});
cljs$core$async$state_machine__21101__auto__ = function(state_21861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21101__auto____1.call(this,state_21861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21101__auto____0;
cljs$core$async$state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21101__auto____1;
return cljs$core$async$state_machine__21101__auto__;
})()
;})(switch__21100__auto__,c__21212__auto___21890,tc,fc))
})();
var state__21214__auto__ = (function (){var statearr_21885 = f__21213__auto__.call(null);
(statearr_21885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21212__auto___21890);

return statearr_21885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21214__auto__);
});})(c__21212__auto___21890,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21212__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21212__auto__){
return (function (){
var f__21213__auto__ = (function (){var switch__21100__auto__ = ((function (c__21212__auto__){
return (function (state_21970){
var state_val_21971 = (state_21970[(1)]);
if((state_val_21971 === (7))){
var inst_21966 = (state_21970[(2)]);
var state_21970__$1 = state_21970;
var statearr_21972_21993 = state_21970__$1;
(statearr_21972_21993[(2)] = inst_21966);

(statearr_21972_21993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (1))){
var inst_21950 = init;
var state_21970__$1 = (function (){var statearr_21973 = state_21970;
(statearr_21973[(7)] = inst_21950);

return statearr_21973;
})();
var statearr_21974_21994 = state_21970__$1;
(statearr_21974_21994[(2)] = null);

(statearr_21974_21994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (4))){
var inst_21953 = (state_21970[(8)]);
var inst_21953__$1 = (state_21970[(2)]);
var inst_21954 = (inst_21953__$1 == null);
var state_21970__$1 = (function (){var statearr_21975 = state_21970;
(statearr_21975[(8)] = inst_21953__$1);

return statearr_21975;
})();
if(cljs.core.truth_(inst_21954)){
var statearr_21976_21995 = state_21970__$1;
(statearr_21976_21995[(1)] = (5));

} else {
var statearr_21977_21996 = state_21970__$1;
(statearr_21977_21996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (6))){
var inst_21953 = (state_21970[(8)]);
var inst_21950 = (state_21970[(7)]);
var inst_21957 = (state_21970[(9)]);
var inst_21957__$1 = f.call(null,inst_21950,inst_21953);
var inst_21958 = cljs.core.reduced_QMARK_.call(null,inst_21957__$1);
var state_21970__$1 = (function (){var statearr_21978 = state_21970;
(statearr_21978[(9)] = inst_21957__$1);

return statearr_21978;
})();
if(inst_21958){
var statearr_21979_21997 = state_21970__$1;
(statearr_21979_21997[(1)] = (8));

} else {
var statearr_21980_21998 = state_21970__$1;
(statearr_21980_21998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (3))){
var inst_21968 = (state_21970[(2)]);
var state_21970__$1 = state_21970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21970__$1,inst_21968);
} else {
if((state_val_21971 === (2))){
var state_21970__$1 = state_21970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21970__$1,(4),ch);
} else {
if((state_val_21971 === (9))){
var inst_21957 = (state_21970[(9)]);
var inst_21950 = inst_21957;
var state_21970__$1 = (function (){var statearr_21981 = state_21970;
(statearr_21981[(7)] = inst_21950);

return statearr_21981;
})();
var statearr_21982_21999 = state_21970__$1;
(statearr_21982_21999[(2)] = null);

(statearr_21982_21999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (5))){
var inst_21950 = (state_21970[(7)]);
var state_21970__$1 = state_21970;
var statearr_21983_22000 = state_21970__$1;
(statearr_21983_22000[(2)] = inst_21950);

(statearr_21983_22000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (10))){
var inst_21964 = (state_21970[(2)]);
var state_21970__$1 = state_21970;
var statearr_21984_22001 = state_21970__$1;
(statearr_21984_22001[(2)] = inst_21964);

(statearr_21984_22001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (8))){
var inst_21957 = (state_21970[(9)]);
var inst_21960 = cljs.core.deref.call(null,inst_21957);
var state_21970__$1 = state_21970;
var statearr_21985_22002 = state_21970__$1;
(statearr_21985_22002[(2)] = inst_21960);

(statearr_21985_22002[(1)] = (10));


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
});})(c__21212__auto__))
;
return ((function (switch__21100__auto__,c__21212__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21101__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21101__auto____0 = (function (){
var statearr_21989 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21989[(0)] = cljs$core$async$reduce_$_state_machine__21101__auto__);

(statearr_21989[(1)] = (1));

return statearr_21989;
});
var cljs$core$async$reduce_$_state_machine__21101__auto____1 = (function (state_21970){
while(true){
var ret_value__21102__auto__ = (function (){try{while(true){
var result__21103__auto__ = switch__21100__auto__.call(null,state_21970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21103__auto__;
}
break;
}
}catch (e21990){if((e21990 instanceof Object)){
var ex__21104__auto__ = e21990;
var statearr_21991_22003 = state_21970;
(statearr_21991_22003[(5)] = ex__21104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22004 = state_21970;
state_21970 = G__22004;
continue;
} else {
return ret_value__21102__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21101__auto__ = function(state_21970){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21101__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21101__auto____1.call(this,state_21970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21101__auto____0;
cljs$core$async$reduce_$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21101__auto____1;
return cljs$core$async$reduce_$_state_machine__21101__auto__;
})()
;})(switch__21100__auto__,c__21212__auto__))
})();
var state__21214__auto__ = (function (){var statearr_21992 = f__21213__auto__.call(null);
(statearr_21992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21212__auto__);

return statearr_21992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21214__auto__);
});})(c__21212__auto__))
);

return c__21212__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args22005 = [];
var len__19430__auto___22057 = arguments.length;
var i__19431__auto___22058 = (0);
while(true){
if((i__19431__auto___22058 < len__19430__auto___22057)){
args22005.push((arguments[i__19431__auto___22058]));

var G__22059 = (i__19431__auto___22058 + (1));
i__19431__auto___22058 = G__22059;
continue;
} else {
}
break;
}

var G__22007 = args22005.length;
switch (G__22007) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22005.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21212__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21212__auto__){
return (function (){
var f__21213__auto__ = (function (){var switch__21100__auto__ = ((function (c__21212__auto__){
return (function (state_22032){
var state_val_22033 = (state_22032[(1)]);
if((state_val_22033 === (7))){
var inst_22014 = (state_22032[(2)]);
var state_22032__$1 = state_22032;
var statearr_22034_22061 = state_22032__$1;
(statearr_22034_22061[(2)] = inst_22014);

(statearr_22034_22061[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22033 === (1))){
var inst_22008 = cljs.core.seq.call(null,coll);
var inst_22009 = inst_22008;
var state_22032__$1 = (function (){var statearr_22035 = state_22032;
(statearr_22035[(7)] = inst_22009);

return statearr_22035;
})();
var statearr_22036_22062 = state_22032__$1;
(statearr_22036_22062[(2)] = null);

(statearr_22036_22062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22033 === (4))){
var inst_22009 = (state_22032[(7)]);
var inst_22012 = cljs.core.first.call(null,inst_22009);
var state_22032__$1 = state_22032;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22032__$1,(7),ch,inst_22012);
} else {
if((state_val_22033 === (13))){
var inst_22026 = (state_22032[(2)]);
var state_22032__$1 = state_22032;
var statearr_22037_22063 = state_22032__$1;
(statearr_22037_22063[(2)] = inst_22026);

(statearr_22037_22063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22033 === (6))){
var inst_22017 = (state_22032[(2)]);
var state_22032__$1 = state_22032;
if(cljs.core.truth_(inst_22017)){
var statearr_22038_22064 = state_22032__$1;
(statearr_22038_22064[(1)] = (8));

} else {
var statearr_22039_22065 = state_22032__$1;
(statearr_22039_22065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22033 === (3))){
var inst_22030 = (state_22032[(2)]);
var state_22032__$1 = state_22032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22032__$1,inst_22030);
} else {
if((state_val_22033 === (12))){
var state_22032__$1 = state_22032;
var statearr_22040_22066 = state_22032__$1;
(statearr_22040_22066[(2)] = null);

(statearr_22040_22066[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22033 === (2))){
var inst_22009 = (state_22032[(7)]);
var state_22032__$1 = state_22032;
if(cljs.core.truth_(inst_22009)){
var statearr_22041_22067 = state_22032__$1;
(statearr_22041_22067[(1)] = (4));

} else {
var statearr_22042_22068 = state_22032__$1;
(statearr_22042_22068[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22033 === (11))){
var inst_22023 = cljs.core.async.close_BANG_.call(null,ch);
var state_22032__$1 = state_22032;
var statearr_22043_22069 = state_22032__$1;
(statearr_22043_22069[(2)] = inst_22023);

(statearr_22043_22069[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22033 === (9))){
var state_22032__$1 = state_22032;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22044_22070 = state_22032__$1;
(statearr_22044_22070[(1)] = (11));

} else {
var statearr_22045_22071 = state_22032__$1;
(statearr_22045_22071[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22033 === (5))){
var inst_22009 = (state_22032[(7)]);
var state_22032__$1 = state_22032;
var statearr_22046_22072 = state_22032__$1;
(statearr_22046_22072[(2)] = inst_22009);

(statearr_22046_22072[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22033 === (10))){
var inst_22028 = (state_22032[(2)]);
var state_22032__$1 = state_22032;
var statearr_22047_22073 = state_22032__$1;
(statearr_22047_22073[(2)] = inst_22028);

(statearr_22047_22073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22033 === (8))){
var inst_22009 = (state_22032[(7)]);
var inst_22019 = cljs.core.next.call(null,inst_22009);
var inst_22009__$1 = inst_22019;
var state_22032__$1 = (function (){var statearr_22048 = state_22032;
(statearr_22048[(7)] = inst_22009__$1);

return statearr_22048;
})();
var statearr_22049_22074 = state_22032__$1;
(statearr_22049_22074[(2)] = null);

(statearr_22049_22074[(1)] = (2));


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
});})(c__21212__auto__))
;
return ((function (switch__21100__auto__,c__21212__auto__){
return (function() {
var cljs$core$async$state_machine__21101__auto__ = null;
var cljs$core$async$state_machine__21101__auto____0 = (function (){
var statearr_22053 = [null,null,null,null,null,null,null,null];
(statearr_22053[(0)] = cljs$core$async$state_machine__21101__auto__);

(statearr_22053[(1)] = (1));

return statearr_22053;
});
var cljs$core$async$state_machine__21101__auto____1 = (function (state_22032){
while(true){
var ret_value__21102__auto__ = (function (){try{while(true){
var result__21103__auto__ = switch__21100__auto__.call(null,state_22032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21103__auto__;
}
break;
}
}catch (e22054){if((e22054 instanceof Object)){
var ex__21104__auto__ = e22054;
var statearr_22055_22075 = state_22032;
(statearr_22055_22075[(5)] = ex__21104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22076 = state_22032;
state_22032 = G__22076;
continue;
} else {
return ret_value__21102__auto__;
}
break;
}
});
cljs$core$async$state_machine__21101__auto__ = function(state_22032){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21101__auto____1.call(this,state_22032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21101__auto____0;
cljs$core$async$state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21101__auto____1;
return cljs$core$async$state_machine__21101__auto__;
})()
;})(switch__21100__auto__,c__21212__auto__))
})();
var state__21214__auto__ = (function (){var statearr_22056 = f__21213__auto__.call(null);
(statearr_22056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21212__auto__);

return statearr_22056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21214__auto__);
});})(c__21212__auto__))
);

return c__21212__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19023__auto__ = (((_ == null))?null:_);
var m__19024__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19023__auto__)]);
if(!((m__19024__auto__ == null))){
return m__19024__auto__.call(null,_);
} else {
var m__19024__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19024__auto____$1 == null))){
return m__19024__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19023__auto__ = (((m == null))?null:m);
var m__19024__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19023__auto__)]);
if(!((m__19024__auto__ == null))){
return m__19024__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19024__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19024__auto____$1 == null))){
return m__19024__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19023__auto__ = (((m == null))?null:m);
var m__19024__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19023__auto__)]);
if(!((m__19024__auto__ == null))){
return m__19024__auto__.call(null,m,ch);
} else {
var m__19024__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19024__auto____$1 == null))){
return m__19024__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19023__auto__ = (((m == null))?null:m);
var m__19024__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19023__auto__)]);
if(!((m__19024__auto__ == null))){
return m__19024__auto__.call(null,m);
} else {
var m__19024__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19024__auto____$1 == null))){
return m__19024__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22298 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22298 = (function (mult,ch,cs,meta22299){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22299 = meta22299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22300,meta22299__$1){
var self__ = this;
var _22300__$1 = this;
return (new cljs.core.async.t_cljs$core$async22298(self__.mult,self__.ch,self__.cs,meta22299__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22300){
var self__ = this;
var _22300__$1 = this;
return self__.meta22299;
});})(cs))
;

cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22298.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22299","meta22299",1283863201,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22298.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22298.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22298";

cljs.core.async.t_cljs$core$async22298.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18966__auto__,writer__18967__auto__,opt__18968__auto__){
return cljs.core._write.call(null,writer__18967__auto__,"cljs.core.async/t_cljs$core$async22298");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22298 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22298(mult__$1,ch__$1,cs__$1,meta22299){
return (new cljs.core.async.t_cljs$core$async22298(mult__$1,ch__$1,cs__$1,meta22299));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22298(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21212__auto___22519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21212__auto___22519,cs,m,dchan,dctr,done){
return (function (){
var f__21213__auto__ = (function (){var switch__21100__auto__ = ((function (c__21212__auto___22519,cs,m,dchan,dctr,done){
return (function (state_22431){
var state_val_22432 = (state_22431[(1)]);
if((state_val_22432 === (7))){
var inst_22427 = (state_22431[(2)]);
var state_22431__$1 = state_22431;
var statearr_22433_22520 = state_22431__$1;
(statearr_22433_22520[(2)] = inst_22427);

(statearr_22433_22520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (20))){
var inst_22332 = (state_22431[(7)]);
var inst_22342 = cljs.core.first.call(null,inst_22332);
var inst_22343 = cljs.core.nth.call(null,inst_22342,(0),null);
var inst_22344 = cljs.core.nth.call(null,inst_22342,(1),null);
var state_22431__$1 = (function (){var statearr_22434 = state_22431;
(statearr_22434[(8)] = inst_22343);

return statearr_22434;
})();
if(cljs.core.truth_(inst_22344)){
var statearr_22435_22521 = state_22431__$1;
(statearr_22435_22521[(1)] = (22));

} else {
var statearr_22436_22522 = state_22431__$1;
(statearr_22436_22522[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (27))){
var inst_22303 = (state_22431[(9)]);
var inst_22374 = (state_22431[(10)]);
var inst_22379 = (state_22431[(11)]);
var inst_22372 = (state_22431[(12)]);
var inst_22379__$1 = cljs.core._nth.call(null,inst_22372,inst_22374);
var inst_22380 = cljs.core.async.put_BANG_.call(null,inst_22379__$1,inst_22303,done);
var state_22431__$1 = (function (){var statearr_22437 = state_22431;
(statearr_22437[(11)] = inst_22379__$1);

return statearr_22437;
})();
if(cljs.core.truth_(inst_22380)){
var statearr_22438_22523 = state_22431__$1;
(statearr_22438_22523[(1)] = (30));

} else {
var statearr_22439_22524 = state_22431__$1;
(statearr_22439_22524[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (1))){
var state_22431__$1 = state_22431;
var statearr_22440_22525 = state_22431__$1;
(statearr_22440_22525[(2)] = null);

(statearr_22440_22525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (24))){
var inst_22332 = (state_22431[(7)]);
var inst_22349 = (state_22431[(2)]);
var inst_22350 = cljs.core.next.call(null,inst_22332);
var inst_22312 = inst_22350;
var inst_22313 = null;
var inst_22314 = (0);
var inst_22315 = (0);
var state_22431__$1 = (function (){var statearr_22441 = state_22431;
(statearr_22441[(13)] = inst_22314);

(statearr_22441[(14)] = inst_22349);

(statearr_22441[(15)] = inst_22312);

(statearr_22441[(16)] = inst_22313);

(statearr_22441[(17)] = inst_22315);

return statearr_22441;
})();
var statearr_22442_22526 = state_22431__$1;
(statearr_22442_22526[(2)] = null);

(statearr_22442_22526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (39))){
var state_22431__$1 = state_22431;
var statearr_22446_22527 = state_22431__$1;
(statearr_22446_22527[(2)] = null);

(statearr_22446_22527[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (4))){
var inst_22303 = (state_22431[(9)]);
var inst_22303__$1 = (state_22431[(2)]);
var inst_22304 = (inst_22303__$1 == null);
var state_22431__$1 = (function (){var statearr_22447 = state_22431;
(statearr_22447[(9)] = inst_22303__$1);

return statearr_22447;
})();
if(cljs.core.truth_(inst_22304)){
var statearr_22448_22528 = state_22431__$1;
(statearr_22448_22528[(1)] = (5));

} else {
var statearr_22449_22529 = state_22431__$1;
(statearr_22449_22529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (15))){
var inst_22314 = (state_22431[(13)]);
var inst_22312 = (state_22431[(15)]);
var inst_22313 = (state_22431[(16)]);
var inst_22315 = (state_22431[(17)]);
var inst_22328 = (state_22431[(2)]);
var inst_22329 = (inst_22315 + (1));
var tmp22443 = inst_22314;
var tmp22444 = inst_22312;
var tmp22445 = inst_22313;
var inst_22312__$1 = tmp22444;
var inst_22313__$1 = tmp22445;
var inst_22314__$1 = tmp22443;
var inst_22315__$1 = inst_22329;
var state_22431__$1 = (function (){var statearr_22450 = state_22431;
(statearr_22450[(13)] = inst_22314__$1);

(statearr_22450[(15)] = inst_22312__$1);

(statearr_22450[(16)] = inst_22313__$1);

(statearr_22450[(17)] = inst_22315__$1);

(statearr_22450[(18)] = inst_22328);

return statearr_22450;
})();
var statearr_22451_22530 = state_22431__$1;
(statearr_22451_22530[(2)] = null);

(statearr_22451_22530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (21))){
var inst_22353 = (state_22431[(2)]);
var state_22431__$1 = state_22431;
var statearr_22455_22531 = state_22431__$1;
(statearr_22455_22531[(2)] = inst_22353);

(statearr_22455_22531[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (31))){
var inst_22379 = (state_22431[(11)]);
var inst_22383 = done.call(null,null);
var inst_22384 = cljs.core.async.untap_STAR_.call(null,m,inst_22379);
var state_22431__$1 = (function (){var statearr_22456 = state_22431;
(statearr_22456[(19)] = inst_22383);

return statearr_22456;
})();
var statearr_22457_22532 = state_22431__$1;
(statearr_22457_22532[(2)] = inst_22384);

(statearr_22457_22532[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (32))){
var inst_22374 = (state_22431[(10)]);
var inst_22373 = (state_22431[(20)]);
var inst_22371 = (state_22431[(21)]);
var inst_22372 = (state_22431[(12)]);
var inst_22386 = (state_22431[(2)]);
var inst_22387 = (inst_22374 + (1));
var tmp22452 = inst_22373;
var tmp22453 = inst_22371;
var tmp22454 = inst_22372;
var inst_22371__$1 = tmp22453;
var inst_22372__$1 = tmp22454;
var inst_22373__$1 = tmp22452;
var inst_22374__$1 = inst_22387;
var state_22431__$1 = (function (){var statearr_22458 = state_22431;
(statearr_22458[(10)] = inst_22374__$1);

(statearr_22458[(20)] = inst_22373__$1);

(statearr_22458[(21)] = inst_22371__$1);

(statearr_22458[(12)] = inst_22372__$1);

(statearr_22458[(22)] = inst_22386);

return statearr_22458;
})();
var statearr_22459_22533 = state_22431__$1;
(statearr_22459_22533[(2)] = null);

(statearr_22459_22533[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (40))){
var inst_22399 = (state_22431[(23)]);
var inst_22403 = done.call(null,null);
var inst_22404 = cljs.core.async.untap_STAR_.call(null,m,inst_22399);
var state_22431__$1 = (function (){var statearr_22460 = state_22431;
(statearr_22460[(24)] = inst_22403);

return statearr_22460;
})();
var statearr_22461_22534 = state_22431__$1;
(statearr_22461_22534[(2)] = inst_22404);

(statearr_22461_22534[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (33))){
var inst_22390 = (state_22431[(25)]);
var inst_22392 = cljs.core.chunked_seq_QMARK_.call(null,inst_22390);
var state_22431__$1 = state_22431;
if(inst_22392){
var statearr_22462_22535 = state_22431__$1;
(statearr_22462_22535[(1)] = (36));

} else {
var statearr_22463_22536 = state_22431__$1;
(statearr_22463_22536[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (13))){
var inst_22322 = (state_22431[(26)]);
var inst_22325 = cljs.core.async.close_BANG_.call(null,inst_22322);
var state_22431__$1 = state_22431;
var statearr_22464_22537 = state_22431__$1;
(statearr_22464_22537[(2)] = inst_22325);

(statearr_22464_22537[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (22))){
var inst_22343 = (state_22431[(8)]);
var inst_22346 = cljs.core.async.close_BANG_.call(null,inst_22343);
var state_22431__$1 = state_22431;
var statearr_22465_22538 = state_22431__$1;
(statearr_22465_22538[(2)] = inst_22346);

(statearr_22465_22538[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (36))){
var inst_22390 = (state_22431[(25)]);
var inst_22394 = cljs.core.chunk_first.call(null,inst_22390);
var inst_22395 = cljs.core.chunk_rest.call(null,inst_22390);
var inst_22396 = cljs.core.count.call(null,inst_22394);
var inst_22371 = inst_22395;
var inst_22372 = inst_22394;
var inst_22373 = inst_22396;
var inst_22374 = (0);
var state_22431__$1 = (function (){var statearr_22466 = state_22431;
(statearr_22466[(10)] = inst_22374);

(statearr_22466[(20)] = inst_22373);

(statearr_22466[(21)] = inst_22371);

(statearr_22466[(12)] = inst_22372);

return statearr_22466;
})();
var statearr_22467_22539 = state_22431__$1;
(statearr_22467_22539[(2)] = null);

(statearr_22467_22539[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (41))){
var inst_22390 = (state_22431[(25)]);
var inst_22406 = (state_22431[(2)]);
var inst_22407 = cljs.core.next.call(null,inst_22390);
var inst_22371 = inst_22407;
var inst_22372 = null;
var inst_22373 = (0);
var inst_22374 = (0);
var state_22431__$1 = (function (){var statearr_22468 = state_22431;
(statearr_22468[(27)] = inst_22406);

(statearr_22468[(10)] = inst_22374);

(statearr_22468[(20)] = inst_22373);

(statearr_22468[(21)] = inst_22371);

(statearr_22468[(12)] = inst_22372);

return statearr_22468;
})();
var statearr_22469_22540 = state_22431__$1;
(statearr_22469_22540[(2)] = null);

(statearr_22469_22540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (43))){
var state_22431__$1 = state_22431;
var statearr_22470_22541 = state_22431__$1;
(statearr_22470_22541[(2)] = null);

(statearr_22470_22541[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (29))){
var inst_22415 = (state_22431[(2)]);
var state_22431__$1 = state_22431;
var statearr_22471_22542 = state_22431__$1;
(statearr_22471_22542[(2)] = inst_22415);

(statearr_22471_22542[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (44))){
var inst_22424 = (state_22431[(2)]);
var state_22431__$1 = (function (){var statearr_22472 = state_22431;
(statearr_22472[(28)] = inst_22424);

return statearr_22472;
})();
var statearr_22473_22543 = state_22431__$1;
(statearr_22473_22543[(2)] = null);

(statearr_22473_22543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (6))){
var inst_22363 = (state_22431[(29)]);
var inst_22362 = cljs.core.deref.call(null,cs);
var inst_22363__$1 = cljs.core.keys.call(null,inst_22362);
var inst_22364 = cljs.core.count.call(null,inst_22363__$1);
var inst_22365 = cljs.core.reset_BANG_.call(null,dctr,inst_22364);
var inst_22370 = cljs.core.seq.call(null,inst_22363__$1);
var inst_22371 = inst_22370;
var inst_22372 = null;
var inst_22373 = (0);
var inst_22374 = (0);
var state_22431__$1 = (function (){var statearr_22474 = state_22431;
(statearr_22474[(29)] = inst_22363__$1);

(statearr_22474[(10)] = inst_22374);

(statearr_22474[(30)] = inst_22365);

(statearr_22474[(20)] = inst_22373);

(statearr_22474[(21)] = inst_22371);

(statearr_22474[(12)] = inst_22372);

return statearr_22474;
})();
var statearr_22475_22544 = state_22431__$1;
(statearr_22475_22544[(2)] = null);

(statearr_22475_22544[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (28))){
var inst_22371 = (state_22431[(21)]);
var inst_22390 = (state_22431[(25)]);
var inst_22390__$1 = cljs.core.seq.call(null,inst_22371);
var state_22431__$1 = (function (){var statearr_22476 = state_22431;
(statearr_22476[(25)] = inst_22390__$1);

return statearr_22476;
})();
if(inst_22390__$1){
var statearr_22477_22545 = state_22431__$1;
(statearr_22477_22545[(1)] = (33));

} else {
var statearr_22478_22546 = state_22431__$1;
(statearr_22478_22546[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (25))){
var inst_22374 = (state_22431[(10)]);
var inst_22373 = (state_22431[(20)]);
var inst_22376 = (inst_22374 < inst_22373);
var inst_22377 = inst_22376;
var state_22431__$1 = state_22431;
if(cljs.core.truth_(inst_22377)){
var statearr_22479_22547 = state_22431__$1;
(statearr_22479_22547[(1)] = (27));

} else {
var statearr_22480_22548 = state_22431__$1;
(statearr_22480_22548[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (34))){
var state_22431__$1 = state_22431;
var statearr_22481_22549 = state_22431__$1;
(statearr_22481_22549[(2)] = null);

(statearr_22481_22549[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (17))){
var state_22431__$1 = state_22431;
var statearr_22482_22550 = state_22431__$1;
(statearr_22482_22550[(2)] = null);

(statearr_22482_22550[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (3))){
var inst_22429 = (state_22431[(2)]);
var state_22431__$1 = state_22431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22431__$1,inst_22429);
} else {
if((state_val_22432 === (12))){
var inst_22358 = (state_22431[(2)]);
var state_22431__$1 = state_22431;
var statearr_22483_22551 = state_22431__$1;
(statearr_22483_22551[(2)] = inst_22358);

(statearr_22483_22551[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (2))){
var state_22431__$1 = state_22431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22431__$1,(4),ch);
} else {
if((state_val_22432 === (23))){
var state_22431__$1 = state_22431;
var statearr_22484_22552 = state_22431__$1;
(statearr_22484_22552[(2)] = null);

(statearr_22484_22552[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (35))){
var inst_22413 = (state_22431[(2)]);
var state_22431__$1 = state_22431;
var statearr_22485_22553 = state_22431__$1;
(statearr_22485_22553[(2)] = inst_22413);

(statearr_22485_22553[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (19))){
var inst_22332 = (state_22431[(7)]);
var inst_22336 = cljs.core.chunk_first.call(null,inst_22332);
var inst_22337 = cljs.core.chunk_rest.call(null,inst_22332);
var inst_22338 = cljs.core.count.call(null,inst_22336);
var inst_22312 = inst_22337;
var inst_22313 = inst_22336;
var inst_22314 = inst_22338;
var inst_22315 = (0);
var state_22431__$1 = (function (){var statearr_22486 = state_22431;
(statearr_22486[(13)] = inst_22314);

(statearr_22486[(15)] = inst_22312);

(statearr_22486[(16)] = inst_22313);

(statearr_22486[(17)] = inst_22315);

return statearr_22486;
})();
var statearr_22487_22554 = state_22431__$1;
(statearr_22487_22554[(2)] = null);

(statearr_22487_22554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (11))){
var inst_22312 = (state_22431[(15)]);
var inst_22332 = (state_22431[(7)]);
var inst_22332__$1 = cljs.core.seq.call(null,inst_22312);
var state_22431__$1 = (function (){var statearr_22488 = state_22431;
(statearr_22488[(7)] = inst_22332__$1);

return statearr_22488;
})();
if(inst_22332__$1){
var statearr_22489_22555 = state_22431__$1;
(statearr_22489_22555[(1)] = (16));

} else {
var statearr_22490_22556 = state_22431__$1;
(statearr_22490_22556[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (9))){
var inst_22360 = (state_22431[(2)]);
var state_22431__$1 = state_22431;
var statearr_22491_22557 = state_22431__$1;
(statearr_22491_22557[(2)] = inst_22360);

(statearr_22491_22557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (5))){
var inst_22310 = cljs.core.deref.call(null,cs);
var inst_22311 = cljs.core.seq.call(null,inst_22310);
var inst_22312 = inst_22311;
var inst_22313 = null;
var inst_22314 = (0);
var inst_22315 = (0);
var state_22431__$1 = (function (){var statearr_22492 = state_22431;
(statearr_22492[(13)] = inst_22314);

(statearr_22492[(15)] = inst_22312);

(statearr_22492[(16)] = inst_22313);

(statearr_22492[(17)] = inst_22315);

return statearr_22492;
})();
var statearr_22493_22558 = state_22431__$1;
(statearr_22493_22558[(2)] = null);

(statearr_22493_22558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (14))){
var state_22431__$1 = state_22431;
var statearr_22494_22559 = state_22431__$1;
(statearr_22494_22559[(2)] = null);

(statearr_22494_22559[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (45))){
var inst_22421 = (state_22431[(2)]);
var state_22431__$1 = state_22431;
var statearr_22495_22560 = state_22431__$1;
(statearr_22495_22560[(2)] = inst_22421);

(statearr_22495_22560[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (26))){
var inst_22363 = (state_22431[(29)]);
var inst_22417 = (state_22431[(2)]);
var inst_22418 = cljs.core.seq.call(null,inst_22363);
var state_22431__$1 = (function (){var statearr_22496 = state_22431;
(statearr_22496[(31)] = inst_22417);

return statearr_22496;
})();
if(inst_22418){
var statearr_22497_22561 = state_22431__$1;
(statearr_22497_22561[(1)] = (42));

} else {
var statearr_22498_22562 = state_22431__$1;
(statearr_22498_22562[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (16))){
var inst_22332 = (state_22431[(7)]);
var inst_22334 = cljs.core.chunked_seq_QMARK_.call(null,inst_22332);
var state_22431__$1 = state_22431;
if(inst_22334){
var statearr_22499_22563 = state_22431__$1;
(statearr_22499_22563[(1)] = (19));

} else {
var statearr_22500_22564 = state_22431__$1;
(statearr_22500_22564[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (38))){
var inst_22410 = (state_22431[(2)]);
var state_22431__$1 = state_22431;
var statearr_22501_22565 = state_22431__$1;
(statearr_22501_22565[(2)] = inst_22410);

(statearr_22501_22565[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (30))){
var state_22431__$1 = state_22431;
var statearr_22502_22566 = state_22431__$1;
(statearr_22502_22566[(2)] = null);

(statearr_22502_22566[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (10))){
var inst_22313 = (state_22431[(16)]);
var inst_22315 = (state_22431[(17)]);
var inst_22321 = cljs.core._nth.call(null,inst_22313,inst_22315);
var inst_22322 = cljs.core.nth.call(null,inst_22321,(0),null);
var inst_22323 = cljs.core.nth.call(null,inst_22321,(1),null);
var state_22431__$1 = (function (){var statearr_22503 = state_22431;
(statearr_22503[(26)] = inst_22322);

return statearr_22503;
})();
if(cljs.core.truth_(inst_22323)){
var statearr_22504_22567 = state_22431__$1;
(statearr_22504_22567[(1)] = (13));

} else {
var statearr_22505_22568 = state_22431__$1;
(statearr_22505_22568[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (18))){
var inst_22356 = (state_22431[(2)]);
var state_22431__$1 = state_22431;
var statearr_22506_22569 = state_22431__$1;
(statearr_22506_22569[(2)] = inst_22356);

(statearr_22506_22569[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (42))){
var state_22431__$1 = state_22431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22431__$1,(45),dchan);
} else {
if((state_val_22432 === (37))){
var inst_22303 = (state_22431[(9)]);
var inst_22399 = (state_22431[(23)]);
var inst_22390 = (state_22431[(25)]);
var inst_22399__$1 = cljs.core.first.call(null,inst_22390);
var inst_22400 = cljs.core.async.put_BANG_.call(null,inst_22399__$1,inst_22303,done);
var state_22431__$1 = (function (){var statearr_22507 = state_22431;
(statearr_22507[(23)] = inst_22399__$1);

return statearr_22507;
})();
if(cljs.core.truth_(inst_22400)){
var statearr_22508_22570 = state_22431__$1;
(statearr_22508_22570[(1)] = (39));

} else {
var statearr_22509_22571 = state_22431__$1;
(statearr_22509_22571[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (8))){
var inst_22314 = (state_22431[(13)]);
var inst_22315 = (state_22431[(17)]);
var inst_22317 = (inst_22315 < inst_22314);
var inst_22318 = inst_22317;
var state_22431__$1 = state_22431;
if(cljs.core.truth_(inst_22318)){
var statearr_22510_22572 = state_22431__$1;
(statearr_22510_22572[(1)] = (10));

} else {
var statearr_22511_22573 = state_22431__$1;
(statearr_22511_22573[(1)] = (11));

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
});})(c__21212__auto___22519,cs,m,dchan,dctr,done))
;
return ((function (switch__21100__auto__,c__21212__auto___22519,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21101__auto__ = null;
var cljs$core$async$mult_$_state_machine__21101__auto____0 = (function (){
var statearr_22515 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22515[(0)] = cljs$core$async$mult_$_state_machine__21101__auto__);

(statearr_22515[(1)] = (1));

return statearr_22515;
});
var cljs$core$async$mult_$_state_machine__21101__auto____1 = (function (state_22431){
while(true){
var ret_value__21102__auto__ = (function (){try{while(true){
var result__21103__auto__ = switch__21100__auto__.call(null,state_22431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21103__auto__;
}
break;
}
}catch (e22516){if((e22516 instanceof Object)){
var ex__21104__auto__ = e22516;
var statearr_22517_22574 = state_22431;
(statearr_22517_22574[(5)] = ex__21104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22575 = state_22431;
state_22431 = G__22575;
continue;
} else {
return ret_value__21102__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21101__auto__ = function(state_22431){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21101__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21101__auto____1.call(this,state_22431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21101__auto____0;
cljs$core$async$mult_$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21101__auto____1;
return cljs$core$async$mult_$_state_machine__21101__auto__;
})()
;})(switch__21100__auto__,c__21212__auto___22519,cs,m,dchan,dctr,done))
})();
var state__21214__auto__ = (function (){var statearr_22518 = f__21213__auto__.call(null);
(statearr_22518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21212__auto___22519);

return statearr_22518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21214__auto__);
});})(c__21212__auto___22519,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args22576 = [];
var len__19430__auto___22579 = arguments.length;
var i__19431__auto___22580 = (0);
while(true){
if((i__19431__auto___22580 < len__19430__auto___22579)){
args22576.push((arguments[i__19431__auto___22580]));

var G__22581 = (i__19431__auto___22580 + (1));
i__19431__auto___22580 = G__22581;
continue;
} else {
}
break;
}

var G__22578 = args22576.length;
switch (G__22578) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22576.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19023__auto__ = (((m == null))?null:m);
var m__19024__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19023__auto__)]);
if(!((m__19024__auto__ == null))){
return m__19024__auto__.call(null,m,ch);
} else {
var m__19024__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19024__auto____$1 == null))){
return m__19024__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19023__auto__ = (((m == null))?null:m);
var m__19024__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19023__auto__)]);
if(!((m__19024__auto__ == null))){
return m__19024__auto__.call(null,m,ch);
} else {
var m__19024__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19024__auto____$1 == null))){
return m__19024__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19023__auto__ = (((m == null))?null:m);
var m__19024__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19023__auto__)]);
if(!((m__19024__auto__ == null))){
return m__19024__auto__.call(null,m);
} else {
var m__19024__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19024__auto____$1 == null))){
return m__19024__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19023__auto__ = (((m == null))?null:m);
var m__19024__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19023__auto__)]);
if(!((m__19024__auto__ == null))){
return m__19024__auto__.call(null,m,state_map);
} else {
var m__19024__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19024__auto____$1 == null))){
return m__19024__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19023__auto__ = (((m == null))?null:m);
var m__19024__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19023__auto__)]);
if(!((m__19024__auto__ == null))){
return m__19024__auto__.call(null,m,mode);
} else {
var m__19024__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19024__auto____$1 == null))){
return m__19024__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19437__auto__ = [];
var len__19430__auto___22593 = arguments.length;
var i__19431__auto___22594 = (0);
while(true){
if((i__19431__auto___22594 < len__19430__auto___22593)){
args__19437__auto__.push((arguments[i__19431__auto___22594]));

var G__22595 = (i__19431__auto___22594 + (1));
i__19431__auto___22594 = G__22595;
continue;
} else {
}
break;
}

var argseq__19438__auto__ = ((((3) < args__19437__auto__.length))?(new cljs.core.IndexedSeq(args__19437__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19438__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22587){
var map__22588 = p__22587;
var map__22588__$1 = ((((!((map__22588 == null)))?((((map__22588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22588):map__22588);
var opts = map__22588__$1;
var statearr_22590_22596 = state;
(statearr_22590_22596[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__22588,map__22588__$1,opts){
return (function (val){
var statearr_22591_22597 = state;
(statearr_22591_22597[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22588,map__22588__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_22592_22598 = state;
(statearr_22592_22598[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22583){
var G__22584 = cljs.core.first.call(null,seq22583);
var seq22583__$1 = cljs.core.next.call(null,seq22583);
var G__22585 = cljs.core.first.call(null,seq22583__$1);
var seq22583__$2 = cljs.core.next.call(null,seq22583__$1);
var G__22586 = cljs.core.first.call(null,seq22583__$2);
var seq22583__$3 = cljs.core.next.call(null,seq22583__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22584,G__22585,G__22586,seq22583__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22762 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22762 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22763){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22763 = meta22763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22764,meta22763__$1){
var self__ = this;
var _22764__$1 = this;
return (new cljs.core.async.t_cljs$core$async22762(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22763__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22762.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22764){
var self__ = this;
var _22764__$1 = this;
return self__.meta22763;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22762.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22762.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22762.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22762.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22762.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22762.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22762.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22762.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22762.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22763","meta22763",-499873106,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22762.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22762";

cljs.core.async.t_cljs$core$async22762.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18966__auto__,writer__18967__auto__,opt__18968__auto__){
return cljs.core._write.call(null,writer__18967__auto__,"cljs.core.async/t_cljs$core$async22762");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22762 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22762(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22763){
return (new cljs.core.async.t_cljs$core$async22762(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22763));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22762(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21212__auto___22925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21212__auto___22925,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21213__auto__ = (function (){var switch__21100__auto__ = ((function (c__21212__auto___22925,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22862){
var state_val_22863 = (state_22862[(1)]);
if((state_val_22863 === (7))){
var inst_22780 = (state_22862[(2)]);
var state_22862__$1 = state_22862;
var statearr_22864_22926 = state_22862__$1;
(statearr_22864_22926[(2)] = inst_22780);

(statearr_22864_22926[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (20))){
var inst_22792 = (state_22862[(7)]);
var state_22862__$1 = state_22862;
var statearr_22865_22927 = state_22862__$1;
(statearr_22865_22927[(2)] = inst_22792);

(statearr_22865_22927[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (27))){
var state_22862__$1 = state_22862;
var statearr_22866_22928 = state_22862__$1;
(statearr_22866_22928[(2)] = null);

(statearr_22866_22928[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (1))){
var inst_22768 = (state_22862[(8)]);
var inst_22768__$1 = calc_state.call(null);
var inst_22770 = (inst_22768__$1 == null);
var inst_22771 = cljs.core.not.call(null,inst_22770);
var state_22862__$1 = (function (){var statearr_22867 = state_22862;
(statearr_22867[(8)] = inst_22768__$1);

return statearr_22867;
})();
if(inst_22771){
var statearr_22868_22929 = state_22862__$1;
(statearr_22868_22929[(1)] = (2));

} else {
var statearr_22869_22930 = state_22862__$1;
(statearr_22869_22930[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (24))){
var inst_22836 = (state_22862[(9)]);
var inst_22815 = (state_22862[(10)]);
var inst_22822 = (state_22862[(11)]);
var inst_22836__$1 = inst_22815.call(null,inst_22822);
var state_22862__$1 = (function (){var statearr_22870 = state_22862;
(statearr_22870[(9)] = inst_22836__$1);

return statearr_22870;
})();
if(cljs.core.truth_(inst_22836__$1)){
var statearr_22871_22931 = state_22862__$1;
(statearr_22871_22931[(1)] = (29));

} else {
var statearr_22872_22932 = state_22862__$1;
(statearr_22872_22932[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (4))){
var inst_22783 = (state_22862[(2)]);
var state_22862__$1 = state_22862;
if(cljs.core.truth_(inst_22783)){
var statearr_22873_22933 = state_22862__$1;
(statearr_22873_22933[(1)] = (8));

} else {
var statearr_22874_22934 = state_22862__$1;
(statearr_22874_22934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (15))){
var inst_22809 = (state_22862[(2)]);
var state_22862__$1 = state_22862;
if(cljs.core.truth_(inst_22809)){
var statearr_22875_22935 = state_22862__$1;
(statearr_22875_22935[(1)] = (19));

} else {
var statearr_22876_22936 = state_22862__$1;
(statearr_22876_22936[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (21))){
var inst_22814 = (state_22862[(12)]);
var inst_22814__$1 = (state_22862[(2)]);
var inst_22815 = cljs.core.get.call(null,inst_22814__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22816 = cljs.core.get.call(null,inst_22814__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22817 = cljs.core.get.call(null,inst_22814__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22862__$1 = (function (){var statearr_22877 = state_22862;
(statearr_22877[(13)] = inst_22816);

(statearr_22877[(10)] = inst_22815);

(statearr_22877[(12)] = inst_22814__$1);

return statearr_22877;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22862__$1,(22),inst_22817);
} else {
if((state_val_22863 === (31))){
var inst_22844 = (state_22862[(2)]);
var state_22862__$1 = state_22862;
if(cljs.core.truth_(inst_22844)){
var statearr_22878_22937 = state_22862__$1;
(statearr_22878_22937[(1)] = (32));

} else {
var statearr_22879_22938 = state_22862__$1;
(statearr_22879_22938[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (32))){
var inst_22821 = (state_22862[(14)]);
var state_22862__$1 = state_22862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22862__$1,(35),out,inst_22821);
} else {
if((state_val_22863 === (33))){
var inst_22814 = (state_22862[(12)]);
var inst_22792 = inst_22814;
var state_22862__$1 = (function (){var statearr_22880 = state_22862;
(statearr_22880[(7)] = inst_22792);

return statearr_22880;
})();
var statearr_22881_22939 = state_22862__$1;
(statearr_22881_22939[(2)] = null);

(statearr_22881_22939[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (13))){
var inst_22792 = (state_22862[(7)]);
var inst_22799 = inst_22792.cljs$lang$protocol_mask$partition0$;
var inst_22800 = (inst_22799 & (64));
var inst_22801 = inst_22792.cljs$core$ISeq$;
var inst_22802 = (inst_22800) || (inst_22801);
var state_22862__$1 = state_22862;
if(cljs.core.truth_(inst_22802)){
var statearr_22882_22940 = state_22862__$1;
(statearr_22882_22940[(1)] = (16));

} else {
var statearr_22883_22941 = state_22862__$1;
(statearr_22883_22941[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (22))){
var inst_22822 = (state_22862[(11)]);
var inst_22821 = (state_22862[(14)]);
var inst_22820 = (state_22862[(2)]);
var inst_22821__$1 = cljs.core.nth.call(null,inst_22820,(0),null);
var inst_22822__$1 = cljs.core.nth.call(null,inst_22820,(1),null);
var inst_22823 = (inst_22821__$1 == null);
var inst_22824 = cljs.core._EQ_.call(null,inst_22822__$1,change);
var inst_22825 = (inst_22823) || (inst_22824);
var state_22862__$1 = (function (){var statearr_22884 = state_22862;
(statearr_22884[(11)] = inst_22822__$1);

(statearr_22884[(14)] = inst_22821__$1);

return statearr_22884;
})();
if(cljs.core.truth_(inst_22825)){
var statearr_22885_22942 = state_22862__$1;
(statearr_22885_22942[(1)] = (23));

} else {
var statearr_22886_22943 = state_22862__$1;
(statearr_22886_22943[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (36))){
var inst_22814 = (state_22862[(12)]);
var inst_22792 = inst_22814;
var state_22862__$1 = (function (){var statearr_22887 = state_22862;
(statearr_22887[(7)] = inst_22792);

return statearr_22887;
})();
var statearr_22888_22944 = state_22862__$1;
(statearr_22888_22944[(2)] = null);

(statearr_22888_22944[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (29))){
var inst_22836 = (state_22862[(9)]);
var state_22862__$1 = state_22862;
var statearr_22889_22945 = state_22862__$1;
(statearr_22889_22945[(2)] = inst_22836);

(statearr_22889_22945[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (6))){
var state_22862__$1 = state_22862;
var statearr_22890_22946 = state_22862__$1;
(statearr_22890_22946[(2)] = false);

(statearr_22890_22946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (28))){
var inst_22832 = (state_22862[(2)]);
var inst_22833 = calc_state.call(null);
var inst_22792 = inst_22833;
var state_22862__$1 = (function (){var statearr_22891 = state_22862;
(statearr_22891[(7)] = inst_22792);

(statearr_22891[(15)] = inst_22832);

return statearr_22891;
})();
var statearr_22892_22947 = state_22862__$1;
(statearr_22892_22947[(2)] = null);

(statearr_22892_22947[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (25))){
var inst_22858 = (state_22862[(2)]);
var state_22862__$1 = state_22862;
var statearr_22893_22948 = state_22862__$1;
(statearr_22893_22948[(2)] = inst_22858);

(statearr_22893_22948[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (34))){
var inst_22856 = (state_22862[(2)]);
var state_22862__$1 = state_22862;
var statearr_22894_22949 = state_22862__$1;
(statearr_22894_22949[(2)] = inst_22856);

(statearr_22894_22949[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (17))){
var state_22862__$1 = state_22862;
var statearr_22895_22950 = state_22862__$1;
(statearr_22895_22950[(2)] = false);

(statearr_22895_22950[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (3))){
var state_22862__$1 = state_22862;
var statearr_22896_22951 = state_22862__$1;
(statearr_22896_22951[(2)] = false);

(statearr_22896_22951[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (12))){
var inst_22860 = (state_22862[(2)]);
var state_22862__$1 = state_22862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22862__$1,inst_22860);
} else {
if((state_val_22863 === (2))){
var inst_22768 = (state_22862[(8)]);
var inst_22773 = inst_22768.cljs$lang$protocol_mask$partition0$;
var inst_22774 = (inst_22773 & (64));
var inst_22775 = inst_22768.cljs$core$ISeq$;
var inst_22776 = (inst_22774) || (inst_22775);
var state_22862__$1 = state_22862;
if(cljs.core.truth_(inst_22776)){
var statearr_22897_22952 = state_22862__$1;
(statearr_22897_22952[(1)] = (5));

} else {
var statearr_22898_22953 = state_22862__$1;
(statearr_22898_22953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (23))){
var inst_22821 = (state_22862[(14)]);
var inst_22827 = (inst_22821 == null);
var state_22862__$1 = state_22862;
if(cljs.core.truth_(inst_22827)){
var statearr_22899_22954 = state_22862__$1;
(statearr_22899_22954[(1)] = (26));

} else {
var statearr_22900_22955 = state_22862__$1;
(statearr_22900_22955[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (35))){
var inst_22847 = (state_22862[(2)]);
var state_22862__$1 = state_22862;
if(cljs.core.truth_(inst_22847)){
var statearr_22901_22956 = state_22862__$1;
(statearr_22901_22956[(1)] = (36));

} else {
var statearr_22902_22957 = state_22862__$1;
(statearr_22902_22957[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (19))){
var inst_22792 = (state_22862[(7)]);
var inst_22811 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22792);
var state_22862__$1 = state_22862;
var statearr_22903_22958 = state_22862__$1;
(statearr_22903_22958[(2)] = inst_22811);

(statearr_22903_22958[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (11))){
var inst_22792 = (state_22862[(7)]);
var inst_22796 = (inst_22792 == null);
var inst_22797 = cljs.core.not.call(null,inst_22796);
var state_22862__$1 = state_22862;
if(inst_22797){
var statearr_22904_22959 = state_22862__$1;
(statearr_22904_22959[(1)] = (13));

} else {
var statearr_22905_22960 = state_22862__$1;
(statearr_22905_22960[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (9))){
var inst_22768 = (state_22862[(8)]);
var state_22862__$1 = state_22862;
var statearr_22906_22961 = state_22862__$1;
(statearr_22906_22961[(2)] = inst_22768);

(statearr_22906_22961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (5))){
var state_22862__$1 = state_22862;
var statearr_22907_22962 = state_22862__$1;
(statearr_22907_22962[(2)] = true);

(statearr_22907_22962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (14))){
var state_22862__$1 = state_22862;
var statearr_22908_22963 = state_22862__$1;
(statearr_22908_22963[(2)] = false);

(statearr_22908_22963[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (26))){
var inst_22822 = (state_22862[(11)]);
var inst_22829 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22822);
var state_22862__$1 = state_22862;
var statearr_22909_22964 = state_22862__$1;
(statearr_22909_22964[(2)] = inst_22829);

(statearr_22909_22964[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (16))){
var state_22862__$1 = state_22862;
var statearr_22910_22965 = state_22862__$1;
(statearr_22910_22965[(2)] = true);

(statearr_22910_22965[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (38))){
var inst_22852 = (state_22862[(2)]);
var state_22862__$1 = state_22862;
var statearr_22911_22966 = state_22862__$1;
(statearr_22911_22966[(2)] = inst_22852);

(statearr_22911_22966[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (30))){
var inst_22816 = (state_22862[(13)]);
var inst_22815 = (state_22862[(10)]);
var inst_22822 = (state_22862[(11)]);
var inst_22839 = cljs.core.empty_QMARK_.call(null,inst_22815);
var inst_22840 = inst_22816.call(null,inst_22822);
var inst_22841 = cljs.core.not.call(null,inst_22840);
var inst_22842 = (inst_22839) && (inst_22841);
var state_22862__$1 = state_22862;
var statearr_22912_22967 = state_22862__$1;
(statearr_22912_22967[(2)] = inst_22842);

(statearr_22912_22967[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (10))){
var inst_22768 = (state_22862[(8)]);
var inst_22788 = (state_22862[(2)]);
var inst_22789 = cljs.core.get.call(null,inst_22788,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22790 = cljs.core.get.call(null,inst_22788,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22791 = cljs.core.get.call(null,inst_22788,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22792 = inst_22768;
var state_22862__$1 = (function (){var statearr_22913 = state_22862;
(statearr_22913[(7)] = inst_22792);

(statearr_22913[(16)] = inst_22791);

(statearr_22913[(17)] = inst_22790);

(statearr_22913[(18)] = inst_22789);

return statearr_22913;
})();
var statearr_22914_22968 = state_22862__$1;
(statearr_22914_22968[(2)] = null);

(statearr_22914_22968[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (18))){
var inst_22806 = (state_22862[(2)]);
var state_22862__$1 = state_22862;
var statearr_22915_22969 = state_22862__$1;
(statearr_22915_22969[(2)] = inst_22806);

(statearr_22915_22969[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (37))){
var state_22862__$1 = state_22862;
var statearr_22916_22970 = state_22862__$1;
(statearr_22916_22970[(2)] = null);

(statearr_22916_22970[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (8))){
var inst_22768 = (state_22862[(8)]);
var inst_22785 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22768);
var state_22862__$1 = state_22862;
var statearr_22917_22971 = state_22862__$1;
(statearr_22917_22971[(2)] = inst_22785);

(statearr_22917_22971[(1)] = (10));


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
});})(c__21212__auto___22925,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21100__auto__,c__21212__auto___22925,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21101__auto__ = null;
var cljs$core$async$mix_$_state_machine__21101__auto____0 = (function (){
var statearr_22921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22921[(0)] = cljs$core$async$mix_$_state_machine__21101__auto__);

(statearr_22921[(1)] = (1));

return statearr_22921;
});
var cljs$core$async$mix_$_state_machine__21101__auto____1 = (function (state_22862){
while(true){
var ret_value__21102__auto__ = (function (){try{while(true){
var result__21103__auto__ = switch__21100__auto__.call(null,state_22862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21103__auto__;
}
break;
}
}catch (e22922){if((e22922 instanceof Object)){
var ex__21104__auto__ = e22922;
var statearr_22923_22972 = state_22862;
(statearr_22923_22972[(5)] = ex__21104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22973 = state_22862;
state_22862 = G__22973;
continue;
} else {
return ret_value__21102__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21101__auto__ = function(state_22862){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21101__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21101__auto____1.call(this,state_22862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21101__auto____0;
cljs$core$async$mix_$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21101__auto____1;
return cljs$core$async$mix_$_state_machine__21101__auto__;
})()
;})(switch__21100__auto__,c__21212__auto___22925,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21214__auto__ = (function (){var statearr_22924 = f__21213__auto__.call(null);
(statearr_22924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21212__auto___22925);

return statearr_22924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21214__auto__);
});})(c__21212__auto___22925,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19023__auto__ = (((p == null))?null:p);
var m__19024__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19023__auto__)]);
if(!((m__19024__auto__ == null))){
return m__19024__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19024__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19024__auto____$1 == null))){
return m__19024__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19023__auto__ = (((p == null))?null:p);
var m__19024__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19023__auto__)]);
if(!((m__19024__auto__ == null))){
return m__19024__auto__.call(null,p,v,ch);
} else {
var m__19024__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19024__auto____$1 == null))){
return m__19024__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22974 = [];
var len__19430__auto___22977 = arguments.length;
var i__19431__auto___22978 = (0);
while(true){
if((i__19431__auto___22978 < len__19430__auto___22977)){
args22974.push((arguments[i__19431__auto___22978]));

var G__22979 = (i__19431__auto___22978 + (1));
i__19431__auto___22978 = G__22979;
continue;
} else {
}
break;
}

var G__22976 = args22974.length;
switch (G__22976) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22974.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19023__auto__ = (((p == null))?null:p);
var m__19024__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19023__auto__)]);
if(!((m__19024__auto__ == null))){
return m__19024__auto__.call(null,p);
} else {
var m__19024__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19024__auto____$1 == null))){
return m__19024__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19023__auto__ = (((p == null))?null:p);
var m__19024__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19023__auto__)]);
if(!((m__19024__auto__ == null))){
return m__19024__auto__.call(null,p,v);
} else {
var m__19024__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19024__auto____$1 == null))){
return m__19024__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args22982 = [];
var len__19430__auto___23107 = arguments.length;
var i__19431__auto___23108 = (0);
while(true){
if((i__19431__auto___23108 < len__19430__auto___23107)){
args22982.push((arguments[i__19431__auto___23108]));

var G__23109 = (i__19431__auto___23108 + (1));
i__19431__auto___23108 = G__23109;
continue;
} else {
}
break;
}

var G__22984 = args22982.length;
switch (G__22984) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22982.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18360__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18360__auto__)){
return or__18360__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18360__auto__,mults){
return (function (p1__22981_SHARP_){
if(cljs.core.truth_(p1__22981_SHARP_.call(null,topic))){
return p1__22981_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22981_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18360__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22985 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22985 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22986){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22986 = meta22986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22987,meta22986__$1){
var self__ = this;
var _22987__$1 = this;
return (new cljs.core.async.t_cljs$core$async22985(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22986__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22985.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22987){
var self__ = this;
var _22987__$1 = this;
return self__.meta22986;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22985.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22985.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22985.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22985.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22985.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22985.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22985.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22985.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22986","meta22986",698785903,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22985.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22985";

cljs.core.async.t_cljs$core$async22985.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18966__auto__,writer__18967__auto__,opt__18968__auto__){
return cljs.core._write.call(null,writer__18967__auto__,"cljs.core.async/t_cljs$core$async22985");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22985 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22985(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22986){
return (new cljs.core.async.t_cljs$core$async22985(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22986));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22985(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21212__auto___23111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21212__auto___23111,mults,ensure_mult,p){
return (function (){
var f__21213__auto__ = (function (){var switch__21100__auto__ = ((function (c__21212__auto___23111,mults,ensure_mult,p){
return (function (state_23059){
var state_val_23060 = (state_23059[(1)]);
if((state_val_23060 === (7))){
var inst_23055 = (state_23059[(2)]);
var state_23059__$1 = state_23059;
var statearr_23061_23112 = state_23059__$1;
(statearr_23061_23112[(2)] = inst_23055);

(statearr_23061_23112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (20))){
var state_23059__$1 = state_23059;
var statearr_23062_23113 = state_23059__$1;
(statearr_23062_23113[(2)] = null);

(statearr_23062_23113[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (1))){
var state_23059__$1 = state_23059;
var statearr_23063_23114 = state_23059__$1;
(statearr_23063_23114[(2)] = null);

(statearr_23063_23114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (24))){
var inst_23038 = (state_23059[(7)]);
var inst_23047 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23038);
var state_23059__$1 = state_23059;
var statearr_23064_23115 = state_23059__$1;
(statearr_23064_23115[(2)] = inst_23047);

(statearr_23064_23115[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (4))){
var inst_22990 = (state_23059[(8)]);
var inst_22990__$1 = (state_23059[(2)]);
var inst_22991 = (inst_22990__$1 == null);
var state_23059__$1 = (function (){var statearr_23065 = state_23059;
(statearr_23065[(8)] = inst_22990__$1);

return statearr_23065;
})();
if(cljs.core.truth_(inst_22991)){
var statearr_23066_23116 = state_23059__$1;
(statearr_23066_23116[(1)] = (5));

} else {
var statearr_23067_23117 = state_23059__$1;
(statearr_23067_23117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (15))){
var inst_23032 = (state_23059[(2)]);
var state_23059__$1 = state_23059;
var statearr_23068_23118 = state_23059__$1;
(statearr_23068_23118[(2)] = inst_23032);

(statearr_23068_23118[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (21))){
var inst_23052 = (state_23059[(2)]);
var state_23059__$1 = (function (){var statearr_23069 = state_23059;
(statearr_23069[(9)] = inst_23052);

return statearr_23069;
})();
var statearr_23070_23119 = state_23059__$1;
(statearr_23070_23119[(2)] = null);

(statearr_23070_23119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (13))){
var inst_23014 = (state_23059[(10)]);
var inst_23016 = cljs.core.chunked_seq_QMARK_.call(null,inst_23014);
var state_23059__$1 = state_23059;
if(inst_23016){
var statearr_23071_23120 = state_23059__$1;
(statearr_23071_23120[(1)] = (16));

} else {
var statearr_23072_23121 = state_23059__$1;
(statearr_23072_23121[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (22))){
var inst_23044 = (state_23059[(2)]);
var state_23059__$1 = state_23059;
if(cljs.core.truth_(inst_23044)){
var statearr_23073_23122 = state_23059__$1;
(statearr_23073_23122[(1)] = (23));

} else {
var statearr_23074_23123 = state_23059__$1;
(statearr_23074_23123[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (6))){
var inst_23040 = (state_23059[(11)]);
var inst_23038 = (state_23059[(7)]);
var inst_22990 = (state_23059[(8)]);
var inst_23038__$1 = topic_fn.call(null,inst_22990);
var inst_23039 = cljs.core.deref.call(null,mults);
var inst_23040__$1 = cljs.core.get.call(null,inst_23039,inst_23038__$1);
var state_23059__$1 = (function (){var statearr_23075 = state_23059;
(statearr_23075[(11)] = inst_23040__$1);

(statearr_23075[(7)] = inst_23038__$1);

return statearr_23075;
})();
if(cljs.core.truth_(inst_23040__$1)){
var statearr_23076_23124 = state_23059__$1;
(statearr_23076_23124[(1)] = (19));

} else {
var statearr_23077_23125 = state_23059__$1;
(statearr_23077_23125[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (25))){
var inst_23049 = (state_23059[(2)]);
var state_23059__$1 = state_23059;
var statearr_23078_23126 = state_23059__$1;
(statearr_23078_23126[(2)] = inst_23049);

(statearr_23078_23126[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (17))){
var inst_23014 = (state_23059[(10)]);
var inst_23023 = cljs.core.first.call(null,inst_23014);
var inst_23024 = cljs.core.async.muxch_STAR_.call(null,inst_23023);
var inst_23025 = cljs.core.async.close_BANG_.call(null,inst_23024);
var inst_23026 = cljs.core.next.call(null,inst_23014);
var inst_23000 = inst_23026;
var inst_23001 = null;
var inst_23002 = (0);
var inst_23003 = (0);
var state_23059__$1 = (function (){var statearr_23079 = state_23059;
(statearr_23079[(12)] = inst_23000);

(statearr_23079[(13)] = inst_23002);

(statearr_23079[(14)] = inst_23001);

(statearr_23079[(15)] = inst_23025);

(statearr_23079[(16)] = inst_23003);

return statearr_23079;
})();
var statearr_23080_23127 = state_23059__$1;
(statearr_23080_23127[(2)] = null);

(statearr_23080_23127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (3))){
var inst_23057 = (state_23059[(2)]);
var state_23059__$1 = state_23059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23059__$1,inst_23057);
} else {
if((state_val_23060 === (12))){
var inst_23034 = (state_23059[(2)]);
var state_23059__$1 = state_23059;
var statearr_23081_23128 = state_23059__$1;
(statearr_23081_23128[(2)] = inst_23034);

(statearr_23081_23128[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (2))){
var state_23059__$1 = state_23059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23059__$1,(4),ch);
} else {
if((state_val_23060 === (23))){
var state_23059__$1 = state_23059;
var statearr_23082_23129 = state_23059__$1;
(statearr_23082_23129[(2)] = null);

(statearr_23082_23129[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (19))){
var inst_23040 = (state_23059[(11)]);
var inst_22990 = (state_23059[(8)]);
var inst_23042 = cljs.core.async.muxch_STAR_.call(null,inst_23040);
var state_23059__$1 = state_23059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23059__$1,(22),inst_23042,inst_22990);
} else {
if((state_val_23060 === (11))){
var inst_23000 = (state_23059[(12)]);
var inst_23014 = (state_23059[(10)]);
var inst_23014__$1 = cljs.core.seq.call(null,inst_23000);
var state_23059__$1 = (function (){var statearr_23083 = state_23059;
(statearr_23083[(10)] = inst_23014__$1);

return statearr_23083;
})();
if(inst_23014__$1){
var statearr_23084_23130 = state_23059__$1;
(statearr_23084_23130[(1)] = (13));

} else {
var statearr_23085_23131 = state_23059__$1;
(statearr_23085_23131[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (9))){
var inst_23036 = (state_23059[(2)]);
var state_23059__$1 = state_23059;
var statearr_23086_23132 = state_23059__$1;
(statearr_23086_23132[(2)] = inst_23036);

(statearr_23086_23132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (5))){
var inst_22997 = cljs.core.deref.call(null,mults);
var inst_22998 = cljs.core.vals.call(null,inst_22997);
var inst_22999 = cljs.core.seq.call(null,inst_22998);
var inst_23000 = inst_22999;
var inst_23001 = null;
var inst_23002 = (0);
var inst_23003 = (0);
var state_23059__$1 = (function (){var statearr_23087 = state_23059;
(statearr_23087[(12)] = inst_23000);

(statearr_23087[(13)] = inst_23002);

(statearr_23087[(14)] = inst_23001);

(statearr_23087[(16)] = inst_23003);

return statearr_23087;
})();
var statearr_23088_23133 = state_23059__$1;
(statearr_23088_23133[(2)] = null);

(statearr_23088_23133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (14))){
var state_23059__$1 = state_23059;
var statearr_23092_23134 = state_23059__$1;
(statearr_23092_23134[(2)] = null);

(statearr_23092_23134[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (16))){
var inst_23014 = (state_23059[(10)]);
var inst_23018 = cljs.core.chunk_first.call(null,inst_23014);
var inst_23019 = cljs.core.chunk_rest.call(null,inst_23014);
var inst_23020 = cljs.core.count.call(null,inst_23018);
var inst_23000 = inst_23019;
var inst_23001 = inst_23018;
var inst_23002 = inst_23020;
var inst_23003 = (0);
var state_23059__$1 = (function (){var statearr_23093 = state_23059;
(statearr_23093[(12)] = inst_23000);

(statearr_23093[(13)] = inst_23002);

(statearr_23093[(14)] = inst_23001);

(statearr_23093[(16)] = inst_23003);

return statearr_23093;
})();
var statearr_23094_23135 = state_23059__$1;
(statearr_23094_23135[(2)] = null);

(statearr_23094_23135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (10))){
var inst_23000 = (state_23059[(12)]);
var inst_23002 = (state_23059[(13)]);
var inst_23001 = (state_23059[(14)]);
var inst_23003 = (state_23059[(16)]);
var inst_23008 = cljs.core._nth.call(null,inst_23001,inst_23003);
var inst_23009 = cljs.core.async.muxch_STAR_.call(null,inst_23008);
var inst_23010 = cljs.core.async.close_BANG_.call(null,inst_23009);
var inst_23011 = (inst_23003 + (1));
var tmp23089 = inst_23000;
var tmp23090 = inst_23002;
var tmp23091 = inst_23001;
var inst_23000__$1 = tmp23089;
var inst_23001__$1 = tmp23091;
var inst_23002__$1 = tmp23090;
var inst_23003__$1 = inst_23011;
var state_23059__$1 = (function (){var statearr_23095 = state_23059;
(statearr_23095[(12)] = inst_23000__$1);

(statearr_23095[(13)] = inst_23002__$1);

(statearr_23095[(14)] = inst_23001__$1);

(statearr_23095[(16)] = inst_23003__$1);

(statearr_23095[(17)] = inst_23010);

return statearr_23095;
})();
var statearr_23096_23136 = state_23059__$1;
(statearr_23096_23136[(2)] = null);

(statearr_23096_23136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (18))){
var inst_23029 = (state_23059[(2)]);
var state_23059__$1 = state_23059;
var statearr_23097_23137 = state_23059__$1;
(statearr_23097_23137[(2)] = inst_23029);

(statearr_23097_23137[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (8))){
var inst_23002 = (state_23059[(13)]);
var inst_23003 = (state_23059[(16)]);
var inst_23005 = (inst_23003 < inst_23002);
var inst_23006 = inst_23005;
var state_23059__$1 = state_23059;
if(cljs.core.truth_(inst_23006)){
var statearr_23098_23138 = state_23059__$1;
(statearr_23098_23138[(1)] = (10));

} else {
var statearr_23099_23139 = state_23059__$1;
(statearr_23099_23139[(1)] = (11));

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
});})(c__21212__auto___23111,mults,ensure_mult,p))
;
return ((function (switch__21100__auto__,c__21212__auto___23111,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21101__auto__ = null;
var cljs$core$async$state_machine__21101__auto____0 = (function (){
var statearr_23103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23103[(0)] = cljs$core$async$state_machine__21101__auto__);

(statearr_23103[(1)] = (1));

return statearr_23103;
});
var cljs$core$async$state_machine__21101__auto____1 = (function (state_23059){
while(true){
var ret_value__21102__auto__ = (function (){try{while(true){
var result__21103__auto__ = switch__21100__auto__.call(null,state_23059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21103__auto__;
}
break;
}
}catch (e23104){if((e23104 instanceof Object)){
var ex__21104__auto__ = e23104;
var statearr_23105_23140 = state_23059;
(statearr_23105_23140[(5)] = ex__21104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23141 = state_23059;
state_23059 = G__23141;
continue;
} else {
return ret_value__21102__auto__;
}
break;
}
});
cljs$core$async$state_machine__21101__auto__ = function(state_23059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21101__auto____1.call(this,state_23059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21101__auto____0;
cljs$core$async$state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21101__auto____1;
return cljs$core$async$state_machine__21101__auto__;
})()
;})(switch__21100__auto__,c__21212__auto___23111,mults,ensure_mult,p))
})();
var state__21214__auto__ = (function (){var statearr_23106 = f__21213__auto__.call(null);
(statearr_23106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21212__auto___23111);

return statearr_23106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21214__auto__);
});})(c__21212__auto___23111,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args23142 = [];
var len__19430__auto___23145 = arguments.length;
var i__19431__auto___23146 = (0);
while(true){
if((i__19431__auto___23146 < len__19430__auto___23145)){
args23142.push((arguments[i__19431__auto___23146]));

var G__23147 = (i__19431__auto___23146 + (1));
i__19431__auto___23146 = G__23147;
continue;
} else {
}
break;
}

var G__23144 = args23142.length;
switch (G__23144) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23142.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args23149 = [];
var len__19430__auto___23152 = arguments.length;
var i__19431__auto___23153 = (0);
while(true){
if((i__19431__auto___23153 < len__19430__auto___23152)){
args23149.push((arguments[i__19431__auto___23153]));

var G__23154 = (i__19431__auto___23153 + (1));
i__19431__auto___23153 = G__23154;
continue;
} else {
}
break;
}

var G__23151 = args23149.length;
switch (G__23151) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23149.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args23156 = [];
var len__19430__auto___23227 = arguments.length;
var i__19431__auto___23228 = (0);
while(true){
if((i__19431__auto___23228 < len__19430__auto___23227)){
args23156.push((arguments[i__19431__auto___23228]));

var G__23229 = (i__19431__auto___23228 + (1));
i__19431__auto___23228 = G__23229;
continue;
} else {
}
break;
}

var G__23158 = args23156.length;
switch (G__23158) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23156.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21212__auto___23231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21212__auto___23231,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21213__auto__ = (function (){var switch__21100__auto__ = ((function (c__21212__auto___23231,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23197){
var state_val_23198 = (state_23197[(1)]);
if((state_val_23198 === (7))){
var state_23197__$1 = state_23197;
var statearr_23199_23232 = state_23197__$1;
(statearr_23199_23232[(2)] = null);

(statearr_23199_23232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23198 === (1))){
var state_23197__$1 = state_23197;
var statearr_23200_23233 = state_23197__$1;
(statearr_23200_23233[(2)] = null);

(statearr_23200_23233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23198 === (4))){
var inst_23161 = (state_23197[(7)]);
var inst_23163 = (inst_23161 < cnt);
var state_23197__$1 = state_23197;
if(cljs.core.truth_(inst_23163)){
var statearr_23201_23234 = state_23197__$1;
(statearr_23201_23234[(1)] = (6));

} else {
var statearr_23202_23235 = state_23197__$1;
(statearr_23202_23235[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23198 === (15))){
var inst_23193 = (state_23197[(2)]);
var state_23197__$1 = state_23197;
var statearr_23203_23236 = state_23197__$1;
(statearr_23203_23236[(2)] = inst_23193);

(statearr_23203_23236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23198 === (13))){
var inst_23186 = cljs.core.async.close_BANG_.call(null,out);
var state_23197__$1 = state_23197;
var statearr_23204_23237 = state_23197__$1;
(statearr_23204_23237[(2)] = inst_23186);

(statearr_23204_23237[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23198 === (6))){
var state_23197__$1 = state_23197;
var statearr_23205_23238 = state_23197__$1;
(statearr_23205_23238[(2)] = null);

(statearr_23205_23238[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23198 === (3))){
var inst_23195 = (state_23197[(2)]);
var state_23197__$1 = state_23197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23197__$1,inst_23195);
} else {
if((state_val_23198 === (12))){
var inst_23183 = (state_23197[(8)]);
var inst_23183__$1 = (state_23197[(2)]);
var inst_23184 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23183__$1);
var state_23197__$1 = (function (){var statearr_23206 = state_23197;
(statearr_23206[(8)] = inst_23183__$1);

return statearr_23206;
})();
if(cljs.core.truth_(inst_23184)){
var statearr_23207_23239 = state_23197__$1;
(statearr_23207_23239[(1)] = (13));

} else {
var statearr_23208_23240 = state_23197__$1;
(statearr_23208_23240[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23198 === (2))){
var inst_23160 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23161 = (0);
var state_23197__$1 = (function (){var statearr_23209 = state_23197;
(statearr_23209[(7)] = inst_23161);

(statearr_23209[(9)] = inst_23160);

return statearr_23209;
})();
var statearr_23210_23241 = state_23197__$1;
(statearr_23210_23241[(2)] = null);

(statearr_23210_23241[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23198 === (11))){
var inst_23161 = (state_23197[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23197,(10),Object,null,(9));
var inst_23170 = chs__$1.call(null,inst_23161);
var inst_23171 = done.call(null,inst_23161);
var inst_23172 = cljs.core.async.take_BANG_.call(null,inst_23170,inst_23171);
var state_23197__$1 = state_23197;
var statearr_23211_23242 = state_23197__$1;
(statearr_23211_23242[(2)] = inst_23172);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23197__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23198 === (9))){
var inst_23161 = (state_23197[(7)]);
var inst_23174 = (state_23197[(2)]);
var inst_23175 = (inst_23161 + (1));
var inst_23161__$1 = inst_23175;
var state_23197__$1 = (function (){var statearr_23212 = state_23197;
(statearr_23212[(7)] = inst_23161__$1);

(statearr_23212[(10)] = inst_23174);

return statearr_23212;
})();
var statearr_23213_23243 = state_23197__$1;
(statearr_23213_23243[(2)] = null);

(statearr_23213_23243[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23198 === (5))){
var inst_23181 = (state_23197[(2)]);
var state_23197__$1 = (function (){var statearr_23214 = state_23197;
(statearr_23214[(11)] = inst_23181);

return statearr_23214;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23197__$1,(12),dchan);
} else {
if((state_val_23198 === (14))){
var inst_23183 = (state_23197[(8)]);
var inst_23188 = cljs.core.apply.call(null,f,inst_23183);
var state_23197__$1 = state_23197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23197__$1,(16),out,inst_23188);
} else {
if((state_val_23198 === (16))){
var inst_23190 = (state_23197[(2)]);
var state_23197__$1 = (function (){var statearr_23215 = state_23197;
(statearr_23215[(12)] = inst_23190);

return statearr_23215;
})();
var statearr_23216_23244 = state_23197__$1;
(statearr_23216_23244[(2)] = null);

(statearr_23216_23244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23198 === (10))){
var inst_23165 = (state_23197[(2)]);
var inst_23166 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23197__$1 = (function (){var statearr_23217 = state_23197;
(statearr_23217[(13)] = inst_23165);

return statearr_23217;
})();
var statearr_23218_23245 = state_23197__$1;
(statearr_23218_23245[(2)] = inst_23166);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23197__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23198 === (8))){
var inst_23179 = (state_23197[(2)]);
var state_23197__$1 = state_23197;
var statearr_23219_23246 = state_23197__$1;
(statearr_23219_23246[(2)] = inst_23179);

(statearr_23219_23246[(1)] = (5));


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
});})(c__21212__auto___23231,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21100__auto__,c__21212__auto___23231,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21101__auto__ = null;
var cljs$core$async$state_machine__21101__auto____0 = (function (){
var statearr_23223 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23223[(0)] = cljs$core$async$state_machine__21101__auto__);

(statearr_23223[(1)] = (1));

return statearr_23223;
});
var cljs$core$async$state_machine__21101__auto____1 = (function (state_23197){
while(true){
var ret_value__21102__auto__ = (function (){try{while(true){
var result__21103__auto__ = switch__21100__auto__.call(null,state_23197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21103__auto__;
}
break;
}
}catch (e23224){if((e23224 instanceof Object)){
var ex__21104__auto__ = e23224;
var statearr_23225_23247 = state_23197;
(statearr_23225_23247[(5)] = ex__21104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23248 = state_23197;
state_23197 = G__23248;
continue;
} else {
return ret_value__21102__auto__;
}
break;
}
});
cljs$core$async$state_machine__21101__auto__ = function(state_23197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21101__auto____1.call(this,state_23197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21101__auto____0;
cljs$core$async$state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21101__auto____1;
return cljs$core$async$state_machine__21101__auto__;
})()
;})(switch__21100__auto__,c__21212__auto___23231,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21214__auto__ = (function (){var statearr_23226 = f__21213__auto__.call(null);
(statearr_23226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21212__auto___23231);

return statearr_23226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21214__auto__);
});})(c__21212__auto___23231,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args23250 = [];
var len__19430__auto___23306 = arguments.length;
var i__19431__auto___23307 = (0);
while(true){
if((i__19431__auto___23307 < len__19430__auto___23306)){
args23250.push((arguments[i__19431__auto___23307]));

var G__23308 = (i__19431__auto___23307 + (1));
i__19431__auto___23307 = G__23308;
continue;
} else {
}
break;
}

var G__23252 = args23250.length;
switch (G__23252) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23250.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21212__auto___23310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21212__auto___23310,out){
return (function (){
var f__21213__auto__ = (function (){var switch__21100__auto__ = ((function (c__21212__auto___23310,out){
return (function (state_23282){
var state_val_23283 = (state_23282[(1)]);
if((state_val_23283 === (7))){
var inst_23261 = (state_23282[(7)]);
var inst_23262 = (state_23282[(8)]);
var inst_23261__$1 = (state_23282[(2)]);
var inst_23262__$1 = cljs.core.nth.call(null,inst_23261__$1,(0),null);
var inst_23263 = cljs.core.nth.call(null,inst_23261__$1,(1),null);
var inst_23264 = (inst_23262__$1 == null);
var state_23282__$1 = (function (){var statearr_23284 = state_23282;
(statearr_23284[(9)] = inst_23263);

(statearr_23284[(7)] = inst_23261__$1);

(statearr_23284[(8)] = inst_23262__$1);

return statearr_23284;
})();
if(cljs.core.truth_(inst_23264)){
var statearr_23285_23311 = state_23282__$1;
(statearr_23285_23311[(1)] = (8));

} else {
var statearr_23286_23312 = state_23282__$1;
(statearr_23286_23312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23283 === (1))){
var inst_23253 = cljs.core.vec.call(null,chs);
var inst_23254 = inst_23253;
var state_23282__$1 = (function (){var statearr_23287 = state_23282;
(statearr_23287[(10)] = inst_23254);

return statearr_23287;
})();
var statearr_23288_23313 = state_23282__$1;
(statearr_23288_23313[(2)] = null);

(statearr_23288_23313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23283 === (4))){
var inst_23254 = (state_23282[(10)]);
var state_23282__$1 = state_23282;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23282__$1,(7),inst_23254);
} else {
if((state_val_23283 === (6))){
var inst_23278 = (state_23282[(2)]);
var state_23282__$1 = state_23282;
var statearr_23289_23314 = state_23282__$1;
(statearr_23289_23314[(2)] = inst_23278);

(statearr_23289_23314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23283 === (3))){
var inst_23280 = (state_23282[(2)]);
var state_23282__$1 = state_23282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23282__$1,inst_23280);
} else {
if((state_val_23283 === (2))){
var inst_23254 = (state_23282[(10)]);
var inst_23256 = cljs.core.count.call(null,inst_23254);
var inst_23257 = (inst_23256 > (0));
var state_23282__$1 = state_23282;
if(cljs.core.truth_(inst_23257)){
var statearr_23291_23315 = state_23282__$1;
(statearr_23291_23315[(1)] = (4));

} else {
var statearr_23292_23316 = state_23282__$1;
(statearr_23292_23316[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23283 === (11))){
var inst_23254 = (state_23282[(10)]);
var inst_23271 = (state_23282[(2)]);
var tmp23290 = inst_23254;
var inst_23254__$1 = tmp23290;
var state_23282__$1 = (function (){var statearr_23293 = state_23282;
(statearr_23293[(10)] = inst_23254__$1);

(statearr_23293[(11)] = inst_23271);

return statearr_23293;
})();
var statearr_23294_23317 = state_23282__$1;
(statearr_23294_23317[(2)] = null);

(statearr_23294_23317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23283 === (9))){
var inst_23262 = (state_23282[(8)]);
var state_23282__$1 = state_23282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23282__$1,(11),out,inst_23262);
} else {
if((state_val_23283 === (5))){
var inst_23276 = cljs.core.async.close_BANG_.call(null,out);
var state_23282__$1 = state_23282;
var statearr_23295_23318 = state_23282__$1;
(statearr_23295_23318[(2)] = inst_23276);

(statearr_23295_23318[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23283 === (10))){
var inst_23274 = (state_23282[(2)]);
var state_23282__$1 = state_23282;
var statearr_23296_23319 = state_23282__$1;
(statearr_23296_23319[(2)] = inst_23274);

(statearr_23296_23319[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23283 === (8))){
var inst_23263 = (state_23282[(9)]);
var inst_23254 = (state_23282[(10)]);
var inst_23261 = (state_23282[(7)]);
var inst_23262 = (state_23282[(8)]);
var inst_23266 = (function (){var cs = inst_23254;
var vec__23259 = inst_23261;
var v = inst_23262;
var c = inst_23263;
return ((function (cs,vec__23259,v,c,inst_23263,inst_23254,inst_23261,inst_23262,state_val_23283,c__21212__auto___23310,out){
return (function (p1__23249_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23249_SHARP_);
});
;})(cs,vec__23259,v,c,inst_23263,inst_23254,inst_23261,inst_23262,state_val_23283,c__21212__auto___23310,out))
})();
var inst_23267 = cljs.core.filterv.call(null,inst_23266,inst_23254);
var inst_23254__$1 = inst_23267;
var state_23282__$1 = (function (){var statearr_23297 = state_23282;
(statearr_23297[(10)] = inst_23254__$1);

return statearr_23297;
})();
var statearr_23298_23320 = state_23282__$1;
(statearr_23298_23320[(2)] = null);

(statearr_23298_23320[(1)] = (2));


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
});})(c__21212__auto___23310,out))
;
return ((function (switch__21100__auto__,c__21212__auto___23310,out){
return (function() {
var cljs$core$async$state_machine__21101__auto__ = null;
var cljs$core$async$state_machine__21101__auto____0 = (function (){
var statearr_23302 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23302[(0)] = cljs$core$async$state_machine__21101__auto__);

(statearr_23302[(1)] = (1));

return statearr_23302;
});
var cljs$core$async$state_machine__21101__auto____1 = (function (state_23282){
while(true){
var ret_value__21102__auto__ = (function (){try{while(true){
var result__21103__auto__ = switch__21100__auto__.call(null,state_23282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21103__auto__;
}
break;
}
}catch (e23303){if((e23303 instanceof Object)){
var ex__21104__auto__ = e23303;
var statearr_23304_23321 = state_23282;
(statearr_23304_23321[(5)] = ex__21104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23322 = state_23282;
state_23282 = G__23322;
continue;
} else {
return ret_value__21102__auto__;
}
break;
}
});
cljs$core$async$state_machine__21101__auto__ = function(state_23282){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21101__auto____1.call(this,state_23282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21101__auto____0;
cljs$core$async$state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21101__auto____1;
return cljs$core$async$state_machine__21101__auto__;
})()
;})(switch__21100__auto__,c__21212__auto___23310,out))
})();
var state__21214__auto__ = (function (){var statearr_23305 = f__21213__auto__.call(null);
(statearr_23305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21212__auto___23310);

return statearr_23305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21214__auto__);
});})(c__21212__auto___23310,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args23323 = [];
var len__19430__auto___23372 = arguments.length;
var i__19431__auto___23373 = (0);
while(true){
if((i__19431__auto___23373 < len__19430__auto___23372)){
args23323.push((arguments[i__19431__auto___23373]));

var G__23374 = (i__19431__auto___23373 + (1));
i__19431__auto___23373 = G__23374;
continue;
} else {
}
break;
}

var G__23325 = args23323.length;
switch (G__23325) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23323.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21212__auto___23376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21212__auto___23376,out){
return (function (){
var f__21213__auto__ = (function (){var switch__21100__auto__ = ((function (c__21212__auto___23376,out){
return (function (state_23349){
var state_val_23350 = (state_23349[(1)]);
if((state_val_23350 === (7))){
var inst_23331 = (state_23349[(7)]);
var inst_23331__$1 = (state_23349[(2)]);
var inst_23332 = (inst_23331__$1 == null);
var inst_23333 = cljs.core.not.call(null,inst_23332);
var state_23349__$1 = (function (){var statearr_23351 = state_23349;
(statearr_23351[(7)] = inst_23331__$1);

return statearr_23351;
})();
if(inst_23333){
var statearr_23352_23377 = state_23349__$1;
(statearr_23352_23377[(1)] = (8));

} else {
var statearr_23353_23378 = state_23349__$1;
(statearr_23353_23378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23350 === (1))){
var inst_23326 = (0);
var state_23349__$1 = (function (){var statearr_23354 = state_23349;
(statearr_23354[(8)] = inst_23326);

return statearr_23354;
})();
var statearr_23355_23379 = state_23349__$1;
(statearr_23355_23379[(2)] = null);

(statearr_23355_23379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23350 === (4))){
var state_23349__$1 = state_23349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23349__$1,(7),ch);
} else {
if((state_val_23350 === (6))){
var inst_23344 = (state_23349[(2)]);
var state_23349__$1 = state_23349;
var statearr_23356_23380 = state_23349__$1;
(statearr_23356_23380[(2)] = inst_23344);

(statearr_23356_23380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23350 === (3))){
var inst_23346 = (state_23349[(2)]);
var inst_23347 = cljs.core.async.close_BANG_.call(null,out);
var state_23349__$1 = (function (){var statearr_23357 = state_23349;
(statearr_23357[(9)] = inst_23346);

return statearr_23357;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23349__$1,inst_23347);
} else {
if((state_val_23350 === (2))){
var inst_23326 = (state_23349[(8)]);
var inst_23328 = (inst_23326 < n);
var state_23349__$1 = state_23349;
if(cljs.core.truth_(inst_23328)){
var statearr_23358_23381 = state_23349__$1;
(statearr_23358_23381[(1)] = (4));

} else {
var statearr_23359_23382 = state_23349__$1;
(statearr_23359_23382[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23350 === (11))){
var inst_23326 = (state_23349[(8)]);
var inst_23336 = (state_23349[(2)]);
var inst_23337 = (inst_23326 + (1));
var inst_23326__$1 = inst_23337;
var state_23349__$1 = (function (){var statearr_23360 = state_23349;
(statearr_23360[(10)] = inst_23336);

(statearr_23360[(8)] = inst_23326__$1);

return statearr_23360;
})();
var statearr_23361_23383 = state_23349__$1;
(statearr_23361_23383[(2)] = null);

(statearr_23361_23383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23350 === (9))){
var state_23349__$1 = state_23349;
var statearr_23362_23384 = state_23349__$1;
(statearr_23362_23384[(2)] = null);

(statearr_23362_23384[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23350 === (5))){
var state_23349__$1 = state_23349;
var statearr_23363_23385 = state_23349__$1;
(statearr_23363_23385[(2)] = null);

(statearr_23363_23385[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23350 === (10))){
var inst_23341 = (state_23349[(2)]);
var state_23349__$1 = state_23349;
var statearr_23364_23386 = state_23349__$1;
(statearr_23364_23386[(2)] = inst_23341);

(statearr_23364_23386[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23350 === (8))){
var inst_23331 = (state_23349[(7)]);
var state_23349__$1 = state_23349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23349__$1,(11),out,inst_23331);
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
});})(c__21212__auto___23376,out))
;
return ((function (switch__21100__auto__,c__21212__auto___23376,out){
return (function() {
var cljs$core$async$state_machine__21101__auto__ = null;
var cljs$core$async$state_machine__21101__auto____0 = (function (){
var statearr_23368 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23368[(0)] = cljs$core$async$state_machine__21101__auto__);

(statearr_23368[(1)] = (1));

return statearr_23368;
});
var cljs$core$async$state_machine__21101__auto____1 = (function (state_23349){
while(true){
var ret_value__21102__auto__ = (function (){try{while(true){
var result__21103__auto__ = switch__21100__auto__.call(null,state_23349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21103__auto__;
}
break;
}
}catch (e23369){if((e23369 instanceof Object)){
var ex__21104__auto__ = e23369;
var statearr_23370_23387 = state_23349;
(statearr_23370_23387[(5)] = ex__21104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23388 = state_23349;
state_23349 = G__23388;
continue;
} else {
return ret_value__21102__auto__;
}
break;
}
});
cljs$core$async$state_machine__21101__auto__ = function(state_23349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21101__auto____1.call(this,state_23349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21101__auto____0;
cljs$core$async$state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21101__auto____1;
return cljs$core$async$state_machine__21101__auto__;
})()
;})(switch__21100__auto__,c__21212__auto___23376,out))
})();
var state__21214__auto__ = (function (){var statearr_23371 = f__21213__auto__.call(null);
(statearr_23371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21212__auto___23376);

return statearr_23371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21214__auto__);
});})(c__21212__auto___23376,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23396 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23396 = (function (map_LT_,f,ch,meta23397){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23397 = meta23397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23398,meta23397__$1){
var self__ = this;
var _23398__$1 = this;
return (new cljs.core.async.t_cljs$core$async23396(self__.map_LT_,self__.f,self__.ch,meta23397__$1));
});

cljs.core.async.t_cljs$core$async23396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23398){
var self__ = this;
var _23398__$1 = this;
return self__.meta23397;
});

cljs.core.async.t_cljs$core$async23396.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23396.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23396.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23396.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23396.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23399 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23399 = (function (map_LT_,f,ch,meta23397,_,fn1,meta23400){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23397 = meta23397;
this._ = _;
this.fn1 = fn1;
this.meta23400 = meta23400;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23401,meta23400__$1){
var self__ = this;
var _23401__$1 = this;
return (new cljs.core.async.t_cljs$core$async23399(self__.map_LT_,self__.f,self__.ch,self__.meta23397,self__._,self__.fn1,meta23400__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23399.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23401){
var self__ = this;
var _23401__$1 = this;
return self__.meta23400;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23399.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23399.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23399.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23399.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23389_SHARP_){
return f1.call(null,(((p1__23389_SHARP_ == null))?null:self__.f.call(null,p1__23389_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23399.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23397","meta23397",2128765973,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23396","cljs.core.async/t_cljs$core$async23396",-1875715385,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23400","meta23400",-222500231,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23399.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23399.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23399";

cljs.core.async.t_cljs$core$async23399.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18966__auto__,writer__18967__auto__,opt__18968__auto__){
return cljs.core._write.call(null,writer__18967__auto__,"cljs.core.async/t_cljs$core$async23399");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23399 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23399(map_LT___$1,f__$1,ch__$1,meta23397__$1,___$2,fn1__$1,meta23400){
return (new cljs.core.async.t_cljs$core$async23399(map_LT___$1,f__$1,ch__$1,meta23397__$1,___$2,fn1__$1,meta23400));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23399(self__.map_LT_,self__.f,self__.ch,self__.meta23397,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18348__auto__ = ret;
if(cljs.core.truth_(and__18348__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18348__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23396.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23396.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23397","meta23397",2128765973,null)], null);
});

cljs.core.async.t_cljs$core$async23396.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23396.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23396";

cljs.core.async.t_cljs$core$async23396.cljs$lang$ctorPrWriter = (function (this__18966__auto__,writer__18967__auto__,opt__18968__auto__){
return cljs.core._write.call(null,writer__18967__auto__,"cljs.core.async/t_cljs$core$async23396");
});

cljs.core.async.__GT_t_cljs$core$async23396 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23396(map_LT___$1,f__$1,ch__$1,meta23397){
return (new cljs.core.async.t_cljs$core$async23396(map_LT___$1,f__$1,ch__$1,meta23397));
});

}

return (new cljs.core.async.t_cljs$core$async23396(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23405 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23405 = (function (map_GT_,f,ch,meta23406){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta23406 = meta23406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23407,meta23406__$1){
var self__ = this;
var _23407__$1 = this;
return (new cljs.core.async.t_cljs$core$async23405(self__.map_GT_,self__.f,self__.ch,meta23406__$1));
});

cljs.core.async.t_cljs$core$async23405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23407){
var self__ = this;
var _23407__$1 = this;
return self__.meta23406;
});

cljs.core.async.t_cljs$core$async23405.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23405.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23405.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23405.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23405.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23405.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23405.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23406","meta23406",-2113035819,null)], null);
});

cljs.core.async.t_cljs$core$async23405.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23405.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23405";

cljs.core.async.t_cljs$core$async23405.cljs$lang$ctorPrWriter = (function (this__18966__auto__,writer__18967__auto__,opt__18968__auto__){
return cljs.core._write.call(null,writer__18967__auto__,"cljs.core.async/t_cljs$core$async23405");
});

cljs.core.async.__GT_t_cljs$core$async23405 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23405(map_GT___$1,f__$1,ch__$1,meta23406){
return (new cljs.core.async.t_cljs$core$async23405(map_GT___$1,f__$1,ch__$1,meta23406));
});

}

return (new cljs.core.async.t_cljs$core$async23405(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23411 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23411 = (function (filter_GT_,p,ch,meta23412){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta23412 = meta23412;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23413,meta23412__$1){
var self__ = this;
var _23413__$1 = this;
return (new cljs.core.async.t_cljs$core$async23411(self__.filter_GT_,self__.p,self__.ch,meta23412__$1));
});

cljs.core.async.t_cljs$core$async23411.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23413){
var self__ = this;
var _23413__$1 = this;
return self__.meta23412;
});

cljs.core.async.t_cljs$core$async23411.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23411.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23411.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23411.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23411.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23411.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23411.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23411.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23412","meta23412",2110834805,null)], null);
});

cljs.core.async.t_cljs$core$async23411.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23411.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23411";

cljs.core.async.t_cljs$core$async23411.cljs$lang$ctorPrWriter = (function (this__18966__auto__,writer__18967__auto__,opt__18968__auto__){
return cljs.core._write.call(null,writer__18967__auto__,"cljs.core.async/t_cljs$core$async23411");
});

cljs.core.async.__GT_t_cljs$core$async23411 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23411(filter_GT___$1,p__$1,ch__$1,meta23412){
return (new cljs.core.async.t_cljs$core$async23411(filter_GT___$1,p__$1,ch__$1,meta23412));
});

}

return (new cljs.core.async.t_cljs$core$async23411(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args23414 = [];
var len__19430__auto___23458 = arguments.length;
var i__19431__auto___23459 = (0);
while(true){
if((i__19431__auto___23459 < len__19430__auto___23458)){
args23414.push((arguments[i__19431__auto___23459]));

var G__23460 = (i__19431__auto___23459 + (1));
i__19431__auto___23459 = G__23460;
continue;
} else {
}
break;
}

var G__23416 = args23414.length;
switch (G__23416) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23414.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21212__auto___23462 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21212__auto___23462,out){
return (function (){
var f__21213__auto__ = (function (){var switch__21100__auto__ = ((function (c__21212__auto___23462,out){
return (function (state_23437){
var state_val_23438 = (state_23437[(1)]);
if((state_val_23438 === (7))){
var inst_23433 = (state_23437[(2)]);
var state_23437__$1 = state_23437;
var statearr_23439_23463 = state_23437__$1;
(statearr_23439_23463[(2)] = inst_23433);

(statearr_23439_23463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (1))){
var state_23437__$1 = state_23437;
var statearr_23440_23464 = state_23437__$1;
(statearr_23440_23464[(2)] = null);

(statearr_23440_23464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (4))){
var inst_23419 = (state_23437[(7)]);
var inst_23419__$1 = (state_23437[(2)]);
var inst_23420 = (inst_23419__$1 == null);
var state_23437__$1 = (function (){var statearr_23441 = state_23437;
(statearr_23441[(7)] = inst_23419__$1);

return statearr_23441;
})();
if(cljs.core.truth_(inst_23420)){
var statearr_23442_23465 = state_23437__$1;
(statearr_23442_23465[(1)] = (5));

} else {
var statearr_23443_23466 = state_23437__$1;
(statearr_23443_23466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (6))){
var inst_23419 = (state_23437[(7)]);
var inst_23424 = p.call(null,inst_23419);
var state_23437__$1 = state_23437;
if(cljs.core.truth_(inst_23424)){
var statearr_23444_23467 = state_23437__$1;
(statearr_23444_23467[(1)] = (8));

} else {
var statearr_23445_23468 = state_23437__$1;
(statearr_23445_23468[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (3))){
var inst_23435 = (state_23437[(2)]);
var state_23437__$1 = state_23437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23437__$1,inst_23435);
} else {
if((state_val_23438 === (2))){
var state_23437__$1 = state_23437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23437__$1,(4),ch);
} else {
if((state_val_23438 === (11))){
var inst_23427 = (state_23437[(2)]);
var state_23437__$1 = state_23437;
var statearr_23446_23469 = state_23437__$1;
(statearr_23446_23469[(2)] = inst_23427);

(statearr_23446_23469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (9))){
var state_23437__$1 = state_23437;
var statearr_23447_23470 = state_23437__$1;
(statearr_23447_23470[(2)] = null);

(statearr_23447_23470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (5))){
var inst_23422 = cljs.core.async.close_BANG_.call(null,out);
var state_23437__$1 = state_23437;
var statearr_23448_23471 = state_23437__$1;
(statearr_23448_23471[(2)] = inst_23422);

(statearr_23448_23471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (10))){
var inst_23430 = (state_23437[(2)]);
var state_23437__$1 = (function (){var statearr_23449 = state_23437;
(statearr_23449[(8)] = inst_23430);

return statearr_23449;
})();
var statearr_23450_23472 = state_23437__$1;
(statearr_23450_23472[(2)] = null);

(statearr_23450_23472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (8))){
var inst_23419 = (state_23437[(7)]);
var state_23437__$1 = state_23437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23437__$1,(11),out,inst_23419);
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
});})(c__21212__auto___23462,out))
;
return ((function (switch__21100__auto__,c__21212__auto___23462,out){
return (function() {
var cljs$core$async$state_machine__21101__auto__ = null;
var cljs$core$async$state_machine__21101__auto____0 = (function (){
var statearr_23454 = [null,null,null,null,null,null,null,null,null];
(statearr_23454[(0)] = cljs$core$async$state_machine__21101__auto__);

(statearr_23454[(1)] = (1));

return statearr_23454;
});
var cljs$core$async$state_machine__21101__auto____1 = (function (state_23437){
while(true){
var ret_value__21102__auto__ = (function (){try{while(true){
var result__21103__auto__ = switch__21100__auto__.call(null,state_23437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21103__auto__;
}
break;
}
}catch (e23455){if((e23455 instanceof Object)){
var ex__21104__auto__ = e23455;
var statearr_23456_23473 = state_23437;
(statearr_23456_23473[(5)] = ex__21104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23474 = state_23437;
state_23437 = G__23474;
continue;
} else {
return ret_value__21102__auto__;
}
break;
}
});
cljs$core$async$state_machine__21101__auto__ = function(state_23437){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21101__auto____1.call(this,state_23437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21101__auto____0;
cljs$core$async$state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21101__auto____1;
return cljs$core$async$state_machine__21101__auto__;
})()
;})(switch__21100__auto__,c__21212__auto___23462,out))
})();
var state__21214__auto__ = (function (){var statearr_23457 = f__21213__auto__.call(null);
(statearr_23457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21212__auto___23462);

return statearr_23457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21214__auto__);
});})(c__21212__auto___23462,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23475 = [];
var len__19430__auto___23478 = arguments.length;
var i__19431__auto___23479 = (0);
while(true){
if((i__19431__auto___23479 < len__19430__auto___23478)){
args23475.push((arguments[i__19431__auto___23479]));

var G__23480 = (i__19431__auto___23479 + (1));
i__19431__auto___23479 = G__23480;
continue;
} else {
}
break;
}

var G__23477 = args23475.length;
switch (G__23477) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23475.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21212__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21212__auto__){
return (function (){
var f__21213__auto__ = (function (){var switch__21100__auto__ = ((function (c__21212__auto__){
return (function (state_23647){
var state_val_23648 = (state_23647[(1)]);
if((state_val_23648 === (7))){
var inst_23643 = (state_23647[(2)]);
var state_23647__$1 = state_23647;
var statearr_23649_23690 = state_23647__$1;
(statearr_23649_23690[(2)] = inst_23643);

(statearr_23649_23690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23648 === (20))){
var inst_23613 = (state_23647[(7)]);
var inst_23624 = (state_23647[(2)]);
var inst_23625 = cljs.core.next.call(null,inst_23613);
var inst_23599 = inst_23625;
var inst_23600 = null;
var inst_23601 = (0);
var inst_23602 = (0);
var state_23647__$1 = (function (){var statearr_23650 = state_23647;
(statearr_23650[(8)] = inst_23601);

(statearr_23650[(9)] = inst_23602);

(statearr_23650[(10)] = inst_23600);

(statearr_23650[(11)] = inst_23599);

(statearr_23650[(12)] = inst_23624);

return statearr_23650;
})();
var statearr_23651_23691 = state_23647__$1;
(statearr_23651_23691[(2)] = null);

(statearr_23651_23691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23648 === (1))){
var state_23647__$1 = state_23647;
var statearr_23652_23692 = state_23647__$1;
(statearr_23652_23692[(2)] = null);

(statearr_23652_23692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23648 === (4))){
var inst_23588 = (state_23647[(13)]);
var inst_23588__$1 = (state_23647[(2)]);
var inst_23589 = (inst_23588__$1 == null);
var state_23647__$1 = (function (){var statearr_23653 = state_23647;
(statearr_23653[(13)] = inst_23588__$1);

return statearr_23653;
})();
if(cljs.core.truth_(inst_23589)){
var statearr_23654_23693 = state_23647__$1;
(statearr_23654_23693[(1)] = (5));

} else {
var statearr_23655_23694 = state_23647__$1;
(statearr_23655_23694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23648 === (15))){
var state_23647__$1 = state_23647;
var statearr_23659_23695 = state_23647__$1;
(statearr_23659_23695[(2)] = null);

(statearr_23659_23695[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23648 === (21))){
var state_23647__$1 = state_23647;
var statearr_23660_23696 = state_23647__$1;
(statearr_23660_23696[(2)] = null);

(statearr_23660_23696[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23648 === (13))){
var inst_23601 = (state_23647[(8)]);
var inst_23602 = (state_23647[(9)]);
var inst_23600 = (state_23647[(10)]);
var inst_23599 = (state_23647[(11)]);
var inst_23609 = (state_23647[(2)]);
var inst_23610 = (inst_23602 + (1));
var tmp23656 = inst_23601;
var tmp23657 = inst_23600;
var tmp23658 = inst_23599;
var inst_23599__$1 = tmp23658;
var inst_23600__$1 = tmp23657;
var inst_23601__$1 = tmp23656;
var inst_23602__$1 = inst_23610;
var state_23647__$1 = (function (){var statearr_23661 = state_23647;
(statearr_23661[(14)] = inst_23609);

(statearr_23661[(8)] = inst_23601__$1);

(statearr_23661[(9)] = inst_23602__$1);

(statearr_23661[(10)] = inst_23600__$1);

(statearr_23661[(11)] = inst_23599__$1);

return statearr_23661;
})();
var statearr_23662_23697 = state_23647__$1;
(statearr_23662_23697[(2)] = null);

(statearr_23662_23697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23648 === (22))){
var state_23647__$1 = state_23647;
var statearr_23663_23698 = state_23647__$1;
(statearr_23663_23698[(2)] = null);

(statearr_23663_23698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23648 === (6))){
var inst_23588 = (state_23647[(13)]);
var inst_23597 = f.call(null,inst_23588);
var inst_23598 = cljs.core.seq.call(null,inst_23597);
var inst_23599 = inst_23598;
var inst_23600 = null;
var inst_23601 = (0);
var inst_23602 = (0);
var state_23647__$1 = (function (){var statearr_23664 = state_23647;
(statearr_23664[(8)] = inst_23601);

(statearr_23664[(9)] = inst_23602);

(statearr_23664[(10)] = inst_23600);

(statearr_23664[(11)] = inst_23599);

return statearr_23664;
})();
var statearr_23665_23699 = state_23647__$1;
(statearr_23665_23699[(2)] = null);

(statearr_23665_23699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23648 === (17))){
var inst_23613 = (state_23647[(7)]);
var inst_23617 = cljs.core.chunk_first.call(null,inst_23613);
var inst_23618 = cljs.core.chunk_rest.call(null,inst_23613);
var inst_23619 = cljs.core.count.call(null,inst_23617);
var inst_23599 = inst_23618;
var inst_23600 = inst_23617;
var inst_23601 = inst_23619;
var inst_23602 = (0);
var state_23647__$1 = (function (){var statearr_23666 = state_23647;
(statearr_23666[(8)] = inst_23601);

(statearr_23666[(9)] = inst_23602);

(statearr_23666[(10)] = inst_23600);

(statearr_23666[(11)] = inst_23599);

return statearr_23666;
})();
var statearr_23667_23700 = state_23647__$1;
(statearr_23667_23700[(2)] = null);

(statearr_23667_23700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23648 === (3))){
var inst_23645 = (state_23647[(2)]);
var state_23647__$1 = state_23647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23647__$1,inst_23645);
} else {
if((state_val_23648 === (12))){
var inst_23633 = (state_23647[(2)]);
var state_23647__$1 = state_23647;
var statearr_23668_23701 = state_23647__$1;
(statearr_23668_23701[(2)] = inst_23633);

(statearr_23668_23701[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23648 === (2))){
var state_23647__$1 = state_23647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23647__$1,(4),in$);
} else {
if((state_val_23648 === (23))){
var inst_23641 = (state_23647[(2)]);
var state_23647__$1 = state_23647;
var statearr_23669_23702 = state_23647__$1;
(statearr_23669_23702[(2)] = inst_23641);

(statearr_23669_23702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23648 === (19))){
var inst_23628 = (state_23647[(2)]);
var state_23647__$1 = state_23647;
var statearr_23670_23703 = state_23647__$1;
(statearr_23670_23703[(2)] = inst_23628);

(statearr_23670_23703[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23648 === (11))){
var inst_23613 = (state_23647[(7)]);
var inst_23599 = (state_23647[(11)]);
var inst_23613__$1 = cljs.core.seq.call(null,inst_23599);
var state_23647__$1 = (function (){var statearr_23671 = state_23647;
(statearr_23671[(7)] = inst_23613__$1);

return statearr_23671;
})();
if(inst_23613__$1){
var statearr_23672_23704 = state_23647__$1;
(statearr_23672_23704[(1)] = (14));

} else {
var statearr_23673_23705 = state_23647__$1;
(statearr_23673_23705[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23648 === (9))){
var inst_23635 = (state_23647[(2)]);
var inst_23636 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23647__$1 = (function (){var statearr_23674 = state_23647;
(statearr_23674[(15)] = inst_23635);

return statearr_23674;
})();
if(cljs.core.truth_(inst_23636)){
var statearr_23675_23706 = state_23647__$1;
(statearr_23675_23706[(1)] = (21));

} else {
var statearr_23676_23707 = state_23647__$1;
(statearr_23676_23707[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23648 === (5))){
var inst_23591 = cljs.core.async.close_BANG_.call(null,out);
var state_23647__$1 = state_23647;
var statearr_23677_23708 = state_23647__$1;
(statearr_23677_23708[(2)] = inst_23591);

(statearr_23677_23708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23648 === (14))){
var inst_23613 = (state_23647[(7)]);
var inst_23615 = cljs.core.chunked_seq_QMARK_.call(null,inst_23613);
var state_23647__$1 = state_23647;
if(inst_23615){
var statearr_23678_23709 = state_23647__$1;
(statearr_23678_23709[(1)] = (17));

} else {
var statearr_23679_23710 = state_23647__$1;
(statearr_23679_23710[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23648 === (16))){
var inst_23631 = (state_23647[(2)]);
var state_23647__$1 = state_23647;
var statearr_23680_23711 = state_23647__$1;
(statearr_23680_23711[(2)] = inst_23631);

(statearr_23680_23711[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23648 === (10))){
var inst_23602 = (state_23647[(9)]);
var inst_23600 = (state_23647[(10)]);
var inst_23607 = cljs.core._nth.call(null,inst_23600,inst_23602);
var state_23647__$1 = state_23647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23647__$1,(13),out,inst_23607);
} else {
if((state_val_23648 === (18))){
var inst_23613 = (state_23647[(7)]);
var inst_23622 = cljs.core.first.call(null,inst_23613);
var state_23647__$1 = state_23647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23647__$1,(20),out,inst_23622);
} else {
if((state_val_23648 === (8))){
var inst_23601 = (state_23647[(8)]);
var inst_23602 = (state_23647[(9)]);
var inst_23604 = (inst_23602 < inst_23601);
var inst_23605 = inst_23604;
var state_23647__$1 = state_23647;
if(cljs.core.truth_(inst_23605)){
var statearr_23681_23712 = state_23647__$1;
(statearr_23681_23712[(1)] = (10));

} else {
var statearr_23682_23713 = state_23647__$1;
(statearr_23682_23713[(1)] = (11));

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
});})(c__21212__auto__))
;
return ((function (switch__21100__auto__,c__21212__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21101__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21101__auto____0 = (function (){
var statearr_23686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23686[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21101__auto__);

(statearr_23686[(1)] = (1));

return statearr_23686;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21101__auto____1 = (function (state_23647){
while(true){
var ret_value__21102__auto__ = (function (){try{while(true){
var result__21103__auto__ = switch__21100__auto__.call(null,state_23647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21103__auto__;
}
break;
}
}catch (e23687){if((e23687 instanceof Object)){
var ex__21104__auto__ = e23687;
var statearr_23688_23714 = state_23647;
(statearr_23688_23714[(5)] = ex__21104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23715 = state_23647;
state_23647 = G__23715;
continue;
} else {
return ret_value__21102__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21101__auto__ = function(state_23647){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21101__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21101__auto____1.call(this,state_23647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21101__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21101__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21101__auto__;
})()
;})(switch__21100__auto__,c__21212__auto__))
})();
var state__21214__auto__ = (function (){var statearr_23689 = f__21213__auto__.call(null);
(statearr_23689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21212__auto__);

return statearr_23689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21214__auto__);
});})(c__21212__auto__))
);

return c__21212__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23716 = [];
var len__19430__auto___23719 = arguments.length;
var i__19431__auto___23720 = (0);
while(true){
if((i__19431__auto___23720 < len__19430__auto___23719)){
args23716.push((arguments[i__19431__auto___23720]));

var G__23721 = (i__19431__auto___23720 + (1));
i__19431__auto___23720 = G__23721;
continue;
} else {
}
break;
}

var G__23718 = args23716.length;
switch (G__23718) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23716.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args23723 = [];
var len__19430__auto___23726 = arguments.length;
var i__19431__auto___23727 = (0);
while(true){
if((i__19431__auto___23727 < len__19430__auto___23726)){
args23723.push((arguments[i__19431__auto___23727]));

var G__23728 = (i__19431__auto___23727 + (1));
i__19431__auto___23727 = G__23728;
continue;
} else {
}
break;
}

var G__23725 = args23723.length;
switch (G__23725) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23723.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args23730 = [];
var len__19430__auto___23781 = arguments.length;
var i__19431__auto___23782 = (0);
while(true){
if((i__19431__auto___23782 < len__19430__auto___23781)){
args23730.push((arguments[i__19431__auto___23782]));

var G__23783 = (i__19431__auto___23782 + (1));
i__19431__auto___23782 = G__23783;
continue;
} else {
}
break;
}

var G__23732 = args23730.length;
switch (G__23732) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23730.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21212__auto___23785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21212__auto___23785,out){
return (function (){
var f__21213__auto__ = (function (){var switch__21100__auto__ = ((function (c__21212__auto___23785,out){
return (function (state_23756){
var state_val_23757 = (state_23756[(1)]);
if((state_val_23757 === (7))){
var inst_23751 = (state_23756[(2)]);
var state_23756__$1 = state_23756;
var statearr_23758_23786 = state_23756__$1;
(statearr_23758_23786[(2)] = inst_23751);

(statearr_23758_23786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23757 === (1))){
var inst_23733 = null;
var state_23756__$1 = (function (){var statearr_23759 = state_23756;
(statearr_23759[(7)] = inst_23733);

return statearr_23759;
})();
var statearr_23760_23787 = state_23756__$1;
(statearr_23760_23787[(2)] = null);

(statearr_23760_23787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23757 === (4))){
var inst_23736 = (state_23756[(8)]);
var inst_23736__$1 = (state_23756[(2)]);
var inst_23737 = (inst_23736__$1 == null);
var inst_23738 = cljs.core.not.call(null,inst_23737);
var state_23756__$1 = (function (){var statearr_23761 = state_23756;
(statearr_23761[(8)] = inst_23736__$1);

return statearr_23761;
})();
if(inst_23738){
var statearr_23762_23788 = state_23756__$1;
(statearr_23762_23788[(1)] = (5));

} else {
var statearr_23763_23789 = state_23756__$1;
(statearr_23763_23789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23757 === (6))){
var state_23756__$1 = state_23756;
var statearr_23764_23790 = state_23756__$1;
(statearr_23764_23790[(2)] = null);

(statearr_23764_23790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23757 === (3))){
var inst_23753 = (state_23756[(2)]);
var inst_23754 = cljs.core.async.close_BANG_.call(null,out);
var state_23756__$1 = (function (){var statearr_23765 = state_23756;
(statearr_23765[(9)] = inst_23753);

return statearr_23765;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23756__$1,inst_23754);
} else {
if((state_val_23757 === (2))){
var state_23756__$1 = state_23756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23756__$1,(4),ch);
} else {
if((state_val_23757 === (11))){
var inst_23736 = (state_23756[(8)]);
var inst_23745 = (state_23756[(2)]);
var inst_23733 = inst_23736;
var state_23756__$1 = (function (){var statearr_23766 = state_23756;
(statearr_23766[(7)] = inst_23733);

(statearr_23766[(10)] = inst_23745);

return statearr_23766;
})();
var statearr_23767_23791 = state_23756__$1;
(statearr_23767_23791[(2)] = null);

(statearr_23767_23791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23757 === (9))){
var inst_23736 = (state_23756[(8)]);
var state_23756__$1 = state_23756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23756__$1,(11),out,inst_23736);
} else {
if((state_val_23757 === (5))){
var inst_23733 = (state_23756[(7)]);
var inst_23736 = (state_23756[(8)]);
var inst_23740 = cljs.core._EQ_.call(null,inst_23736,inst_23733);
var state_23756__$1 = state_23756;
if(inst_23740){
var statearr_23769_23792 = state_23756__$1;
(statearr_23769_23792[(1)] = (8));

} else {
var statearr_23770_23793 = state_23756__$1;
(statearr_23770_23793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23757 === (10))){
var inst_23748 = (state_23756[(2)]);
var state_23756__$1 = state_23756;
var statearr_23771_23794 = state_23756__$1;
(statearr_23771_23794[(2)] = inst_23748);

(statearr_23771_23794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23757 === (8))){
var inst_23733 = (state_23756[(7)]);
var tmp23768 = inst_23733;
var inst_23733__$1 = tmp23768;
var state_23756__$1 = (function (){var statearr_23772 = state_23756;
(statearr_23772[(7)] = inst_23733__$1);

return statearr_23772;
})();
var statearr_23773_23795 = state_23756__$1;
(statearr_23773_23795[(2)] = null);

(statearr_23773_23795[(1)] = (2));


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
});})(c__21212__auto___23785,out))
;
return ((function (switch__21100__auto__,c__21212__auto___23785,out){
return (function() {
var cljs$core$async$state_machine__21101__auto__ = null;
var cljs$core$async$state_machine__21101__auto____0 = (function (){
var statearr_23777 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23777[(0)] = cljs$core$async$state_machine__21101__auto__);

(statearr_23777[(1)] = (1));

return statearr_23777;
});
var cljs$core$async$state_machine__21101__auto____1 = (function (state_23756){
while(true){
var ret_value__21102__auto__ = (function (){try{while(true){
var result__21103__auto__ = switch__21100__auto__.call(null,state_23756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21103__auto__;
}
break;
}
}catch (e23778){if((e23778 instanceof Object)){
var ex__21104__auto__ = e23778;
var statearr_23779_23796 = state_23756;
(statearr_23779_23796[(5)] = ex__21104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23797 = state_23756;
state_23756 = G__23797;
continue;
} else {
return ret_value__21102__auto__;
}
break;
}
});
cljs$core$async$state_machine__21101__auto__ = function(state_23756){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21101__auto____1.call(this,state_23756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21101__auto____0;
cljs$core$async$state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21101__auto____1;
return cljs$core$async$state_machine__21101__auto__;
})()
;})(switch__21100__auto__,c__21212__auto___23785,out))
})();
var state__21214__auto__ = (function (){var statearr_23780 = f__21213__auto__.call(null);
(statearr_23780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21212__auto___23785);

return statearr_23780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21214__auto__);
});})(c__21212__auto___23785,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23798 = [];
var len__19430__auto___23868 = arguments.length;
var i__19431__auto___23869 = (0);
while(true){
if((i__19431__auto___23869 < len__19430__auto___23868)){
args23798.push((arguments[i__19431__auto___23869]));

var G__23870 = (i__19431__auto___23869 + (1));
i__19431__auto___23869 = G__23870;
continue;
} else {
}
break;
}

var G__23800 = args23798.length;
switch (G__23800) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23798.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21212__auto___23872 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21212__auto___23872,out){
return (function (){
var f__21213__auto__ = (function (){var switch__21100__auto__ = ((function (c__21212__auto___23872,out){
return (function (state_23838){
var state_val_23839 = (state_23838[(1)]);
if((state_val_23839 === (7))){
var inst_23834 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
var statearr_23840_23873 = state_23838__$1;
(statearr_23840_23873[(2)] = inst_23834);

(statearr_23840_23873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (1))){
var inst_23801 = (new Array(n));
var inst_23802 = inst_23801;
var inst_23803 = (0);
var state_23838__$1 = (function (){var statearr_23841 = state_23838;
(statearr_23841[(7)] = inst_23802);

(statearr_23841[(8)] = inst_23803);

return statearr_23841;
})();
var statearr_23842_23874 = state_23838__$1;
(statearr_23842_23874[(2)] = null);

(statearr_23842_23874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (4))){
var inst_23806 = (state_23838[(9)]);
var inst_23806__$1 = (state_23838[(2)]);
var inst_23807 = (inst_23806__$1 == null);
var inst_23808 = cljs.core.not.call(null,inst_23807);
var state_23838__$1 = (function (){var statearr_23843 = state_23838;
(statearr_23843[(9)] = inst_23806__$1);

return statearr_23843;
})();
if(inst_23808){
var statearr_23844_23875 = state_23838__$1;
(statearr_23844_23875[(1)] = (5));

} else {
var statearr_23845_23876 = state_23838__$1;
(statearr_23845_23876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (15))){
var inst_23828 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
var statearr_23846_23877 = state_23838__$1;
(statearr_23846_23877[(2)] = inst_23828);

(statearr_23846_23877[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (13))){
var state_23838__$1 = state_23838;
var statearr_23847_23878 = state_23838__$1;
(statearr_23847_23878[(2)] = null);

(statearr_23847_23878[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (6))){
var inst_23803 = (state_23838[(8)]);
var inst_23824 = (inst_23803 > (0));
var state_23838__$1 = state_23838;
if(cljs.core.truth_(inst_23824)){
var statearr_23848_23879 = state_23838__$1;
(statearr_23848_23879[(1)] = (12));

} else {
var statearr_23849_23880 = state_23838__$1;
(statearr_23849_23880[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (3))){
var inst_23836 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23838__$1,inst_23836);
} else {
if((state_val_23839 === (12))){
var inst_23802 = (state_23838[(7)]);
var inst_23826 = cljs.core.vec.call(null,inst_23802);
var state_23838__$1 = state_23838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23838__$1,(15),out,inst_23826);
} else {
if((state_val_23839 === (2))){
var state_23838__$1 = state_23838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23838__$1,(4),ch);
} else {
if((state_val_23839 === (11))){
var inst_23818 = (state_23838[(2)]);
var inst_23819 = (new Array(n));
var inst_23802 = inst_23819;
var inst_23803 = (0);
var state_23838__$1 = (function (){var statearr_23850 = state_23838;
(statearr_23850[(7)] = inst_23802);

(statearr_23850[(8)] = inst_23803);

(statearr_23850[(10)] = inst_23818);

return statearr_23850;
})();
var statearr_23851_23881 = state_23838__$1;
(statearr_23851_23881[(2)] = null);

(statearr_23851_23881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (9))){
var inst_23802 = (state_23838[(7)]);
var inst_23816 = cljs.core.vec.call(null,inst_23802);
var state_23838__$1 = state_23838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23838__$1,(11),out,inst_23816);
} else {
if((state_val_23839 === (5))){
var inst_23802 = (state_23838[(7)]);
var inst_23806 = (state_23838[(9)]);
var inst_23803 = (state_23838[(8)]);
var inst_23811 = (state_23838[(11)]);
var inst_23810 = (inst_23802[inst_23803] = inst_23806);
var inst_23811__$1 = (inst_23803 + (1));
var inst_23812 = (inst_23811__$1 < n);
var state_23838__$1 = (function (){var statearr_23852 = state_23838;
(statearr_23852[(12)] = inst_23810);

(statearr_23852[(11)] = inst_23811__$1);

return statearr_23852;
})();
if(cljs.core.truth_(inst_23812)){
var statearr_23853_23882 = state_23838__$1;
(statearr_23853_23882[(1)] = (8));

} else {
var statearr_23854_23883 = state_23838__$1;
(statearr_23854_23883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (14))){
var inst_23831 = (state_23838[(2)]);
var inst_23832 = cljs.core.async.close_BANG_.call(null,out);
var state_23838__$1 = (function (){var statearr_23856 = state_23838;
(statearr_23856[(13)] = inst_23831);

return statearr_23856;
})();
var statearr_23857_23884 = state_23838__$1;
(statearr_23857_23884[(2)] = inst_23832);

(statearr_23857_23884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (10))){
var inst_23822 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
var statearr_23858_23885 = state_23838__$1;
(statearr_23858_23885[(2)] = inst_23822);

(statearr_23858_23885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (8))){
var inst_23802 = (state_23838[(7)]);
var inst_23811 = (state_23838[(11)]);
var tmp23855 = inst_23802;
var inst_23802__$1 = tmp23855;
var inst_23803 = inst_23811;
var state_23838__$1 = (function (){var statearr_23859 = state_23838;
(statearr_23859[(7)] = inst_23802__$1);

(statearr_23859[(8)] = inst_23803);

return statearr_23859;
})();
var statearr_23860_23886 = state_23838__$1;
(statearr_23860_23886[(2)] = null);

(statearr_23860_23886[(1)] = (2));


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
});})(c__21212__auto___23872,out))
;
return ((function (switch__21100__auto__,c__21212__auto___23872,out){
return (function() {
var cljs$core$async$state_machine__21101__auto__ = null;
var cljs$core$async$state_machine__21101__auto____0 = (function (){
var statearr_23864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23864[(0)] = cljs$core$async$state_machine__21101__auto__);

(statearr_23864[(1)] = (1));

return statearr_23864;
});
var cljs$core$async$state_machine__21101__auto____1 = (function (state_23838){
while(true){
var ret_value__21102__auto__ = (function (){try{while(true){
var result__21103__auto__ = switch__21100__auto__.call(null,state_23838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21103__auto__;
}
break;
}
}catch (e23865){if((e23865 instanceof Object)){
var ex__21104__auto__ = e23865;
var statearr_23866_23887 = state_23838;
(statearr_23866_23887[(5)] = ex__21104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23888 = state_23838;
state_23838 = G__23888;
continue;
} else {
return ret_value__21102__auto__;
}
break;
}
});
cljs$core$async$state_machine__21101__auto__ = function(state_23838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21101__auto____1.call(this,state_23838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21101__auto____0;
cljs$core$async$state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21101__auto____1;
return cljs$core$async$state_machine__21101__auto__;
})()
;})(switch__21100__auto__,c__21212__auto___23872,out))
})();
var state__21214__auto__ = (function (){var statearr_23867 = f__21213__auto__.call(null);
(statearr_23867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21212__auto___23872);

return statearr_23867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21214__auto__);
});})(c__21212__auto___23872,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23889 = [];
var len__19430__auto___23963 = arguments.length;
var i__19431__auto___23964 = (0);
while(true){
if((i__19431__auto___23964 < len__19430__auto___23963)){
args23889.push((arguments[i__19431__auto___23964]));

var G__23965 = (i__19431__auto___23964 + (1));
i__19431__auto___23964 = G__23965;
continue;
} else {
}
break;
}

var G__23891 = args23889.length;
switch (G__23891) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23889.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21212__auto___23967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21212__auto___23967,out){
return (function (){
var f__21213__auto__ = (function (){var switch__21100__auto__ = ((function (c__21212__auto___23967,out){
return (function (state_23933){
var state_val_23934 = (state_23933[(1)]);
if((state_val_23934 === (7))){
var inst_23929 = (state_23933[(2)]);
var state_23933__$1 = state_23933;
var statearr_23935_23968 = state_23933__$1;
(statearr_23935_23968[(2)] = inst_23929);

(statearr_23935_23968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23934 === (1))){
var inst_23892 = [];
var inst_23893 = inst_23892;
var inst_23894 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23933__$1 = (function (){var statearr_23936 = state_23933;
(statearr_23936[(7)] = inst_23894);

(statearr_23936[(8)] = inst_23893);

return statearr_23936;
})();
var statearr_23937_23969 = state_23933__$1;
(statearr_23937_23969[(2)] = null);

(statearr_23937_23969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23934 === (4))){
var inst_23897 = (state_23933[(9)]);
var inst_23897__$1 = (state_23933[(2)]);
var inst_23898 = (inst_23897__$1 == null);
var inst_23899 = cljs.core.not.call(null,inst_23898);
var state_23933__$1 = (function (){var statearr_23938 = state_23933;
(statearr_23938[(9)] = inst_23897__$1);

return statearr_23938;
})();
if(inst_23899){
var statearr_23939_23970 = state_23933__$1;
(statearr_23939_23970[(1)] = (5));

} else {
var statearr_23940_23971 = state_23933__$1;
(statearr_23940_23971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23934 === (15))){
var inst_23923 = (state_23933[(2)]);
var state_23933__$1 = state_23933;
var statearr_23941_23972 = state_23933__$1;
(statearr_23941_23972[(2)] = inst_23923);

(statearr_23941_23972[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23934 === (13))){
var state_23933__$1 = state_23933;
var statearr_23942_23973 = state_23933__$1;
(statearr_23942_23973[(2)] = null);

(statearr_23942_23973[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23934 === (6))){
var inst_23893 = (state_23933[(8)]);
var inst_23918 = inst_23893.length;
var inst_23919 = (inst_23918 > (0));
var state_23933__$1 = state_23933;
if(cljs.core.truth_(inst_23919)){
var statearr_23943_23974 = state_23933__$1;
(statearr_23943_23974[(1)] = (12));

} else {
var statearr_23944_23975 = state_23933__$1;
(statearr_23944_23975[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23934 === (3))){
var inst_23931 = (state_23933[(2)]);
var state_23933__$1 = state_23933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23933__$1,inst_23931);
} else {
if((state_val_23934 === (12))){
var inst_23893 = (state_23933[(8)]);
var inst_23921 = cljs.core.vec.call(null,inst_23893);
var state_23933__$1 = state_23933;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23933__$1,(15),out,inst_23921);
} else {
if((state_val_23934 === (2))){
var state_23933__$1 = state_23933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23933__$1,(4),ch);
} else {
if((state_val_23934 === (11))){
var inst_23897 = (state_23933[(9)]);
var inst_23901 = (state_23933[(10)]);
var inst_23911 = (state_23933[(2)]);
var inst_23912 = [];
var inst_23913 = inst_23912.push(inst_23897);
var inst_23893 = inst_23912;
var inst_23894 = inst_23901;
var state_23933__$1 = (function (){var statearr_23945 = state_23933;
(statearr_23945[(11)] = inst_23913);

(statearr_23945[(7)] = inst_23894);

(statearr_23945[(12)] = inst_23911);

(statearr_23945[(8)] = inst_23893);

return statearr_23945;
})();
var statearr_23946_23976 = state_23933__$1;
(statearr_23946_23976[(2)] = null);

(statearr_23946_23976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23934 === (9))){
var inst_23893 = (state_23933[(8)]);
var inst_23909 = cljs.core.vec.call(null,inst_23893);
var state_23933__$1 = state_23933;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23933__$1,(11),out,inst_23909);
} else {
if((state_val_23934 === (5))){
var inst_23897 = (state_23933[(9)]);
var inst_23894 = (state_23933[(7)]);
var inst_23901 = (state_23933[(10)]);
var inst_23901__$1 = f.call(null,inst_23897);
var inst_23902 = cljs.core._EQ_.call(null,inst_23901__$1,inst_23894);
var inst_23903 = cljs.core.keyword_identical_QMARK_.call(null,inst_23894,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23904 = (inst_23902) || (inst_23903);
var state_23933__$1 = (function (){var statearr_23947 = state_23933;
(statearr_23947[(10)] = inst_23901__$1);

return statearr_23947;
})();
if(cljs.core.truth_(inst_23904)){
var statearr_23948_23977 = state_23933__$1;
(statearr_23948_23977[(1)] = (8));

} else {
var statearr_23949_23978 = state_23933__$1;
(statearr_23949_23978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23934 === (14))){
var inst_23926 = (state_23933[(2)]);
var inst_23927 = cljs.core.async.close_BANG_.call(null,out);
var state_23933__$1 = (function (){var statearr_23951 = state_23933;
(statearr_23951[(13)] = inst_23926);

return statearr_23951;
})();
var statearr_23952_23979 = state_23933__$1;
(statearr_23952_23979[(2)] = inst_23927);

(statearr_23952_23979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23934 === (10))){
var inst_23916 = (state_23933[(2)]);
var state_23933__$1 = state_23933;
var statearr_23953_23980 = state_23933__$1;
(statearr_23953_23980[(2)] = inst_23916);

(statearr_23953_23980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23934 === (8))){
var inst_23897 = (state_23933[(9)]);
var inst_23901 = (state_23933[(10)]);
var inst_23893 = (state_23933[(8)]);
var inst_23906 = inst_23893.push(inst_23897);
var tmp23950 = inst_23893;
var inst_23893__$1 = tmp23950;
var inst_23894 = inst_23901;
var state_23933__$1 = (function (){var statearr_23954 = state_23933;
(statearr_23954[(7)] = inst_23894);

(statearr_23954[(14)] = inst_23906);

(statearr_23954[(8)] = inst_23893__$1);

return statearr_23954;
})();
var statearr_23955_23981 = state_23933__$1;
(statearr_23955_23981[(2)] = null);

(statearr_23955_23981[(1)] = (2));


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
});})(c__21212__auto___23967,out))
;
return ((function (switch__21100__auto__,c__21212__auto___23967,out){
return (function() {
var cljs$core$async$state_machine__21101__auto__ = null;
var cljs$core$async$state_machine__21101__auto____0 = (function (){
var statearr_23959 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23959[(0)] = cljs$core$async$state_machine__21101__auto__);

(statearr_23959[(1)] = (1));

return statearr_23959;
});
var cljs$core$async$state_machine__21101__auto____1 = (function (state_23933){
while(true){
var ret_value__21102__auto__ = (function (){try{while(true){
var result__21103__auto__ = switch__21100__auto__.call(null,state_23933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21103__auto__;
}
break;
}
}catch (e23960){if((e23960 instanceof Object)){
var ex__21104__auto__ = e23960;
var statearr_23961_23982 = state_23933;
(statearr_23961_23982[(5)] = ex__21104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23983 = state_23933;
state_23933 = G__23983;
continue;
} else {
return ret_value__21102__auto__;
}
break;
}
});
cljs$core$async$state_machine__21101__auto__ = function(state_23933){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21101__auto____1.call(this,state_23933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21101__auto____0;
cljs$core$async$state_machine__21101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21101__auto____1;
return cljs$core$async$state_machine__21101__auto__;
})()
;})(switch__21100__auto__,c__21212__auto___23967,out))
})();
var state__21214__auto__ = (function (){var statearr_23962 = f__21213__auto__.call(null);
(statearr_23962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21212__auto___23967);

return statearr_23962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21214__auto__);
});})(c__21212__auto___23967,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1464365888723