// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t25971 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25971 = (function (f,fn_handler,meta25972){
this.f = f;
this.fn_handler = fn_handler;
this.meta25972 = meta25972;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25971.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25971.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t25971.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t25971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25973){
var self__ = this;
var _25973__$1 = this;
return self__.meta25972;
});

cljs.core.async.t25971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25973,meta25972__$1){
var self__ = this;
var _25973__$1 = this;
return (new cljs.core.async.t25971(self__.f,self__.fn_handler,meta25972__$1));
});

cljs.core.async.t25971.cljs$lang$type = true;

cljs.core.async.t25971.cljs$lang$ctorStr = "cljs.core.async/t25971";

cljs.core.async.t25971.cljs$lang$ctorPrWriter = (function (this__18753__auto__,writer__18754__auto__,opt__18755__auto__){
return cljs.core._write.call(null,writer__18754__auto__,"cljs.core.async/t25971");
});

cljs.core.async.__GT_t25971 = (function cljs$core$async$fn_handler_$___GT_t25971(f__$1,fn_handler__$1,meta25972){
return (new cljs.core.async.t25971(f__$1,fn_handler__$1,meta25972));
});

}

return (new cljs.core.async.t25971(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__25975 = buff;
if(G__25975){
var bit__18848__auto__ = null;
if(cljs.core.truth_((function (){var or__18174__auto__ = bit__18848__auto__;
if(cljs.core.truth_(or__18174__auto__)){
return or__18174__auto__;
} else {
return G__25975.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__25975.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25975);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25975);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__25977 = arguments.length;
switch (G__25977) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__25980 = arguments.length;
switch (G__25980) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25982 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25982);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25982,ret){
return (function (){
return fn1.call(null,val_25982);
});})(val_25982,ret))
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
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__25984 = arguments.length;
switch (G__25984) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
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
var n__19059__auto___25986 = n;
var x_25987 = (0);
while(true){
if((x_25987 < n__19059__auto___25986)){
(a[x_25987] = (0));

var G__25988 = (x_25987 + (1));
x_25987 = G__25988;
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

var G__25989 = (i + (1));
i = G__25989;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t25993 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25993 = (function (flag,alt_flag,meta25994){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25994 = meta25994;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25993.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25993.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t25993.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t25993.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25995){
var self__ = this;
var _25995__$1 = this;
return self__.meta25994;
});})(flag))
;

cljs.core.async.t25993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25995,meta25994__$1){
var self__ = this;
var _25995__$1 = this;
return (new cljs.core.async.t25993(self__.flag,self__.alt_flag,meta25994__$1));
});})(flag))
;

cljs.core.async.t25993.cljs$lang$type = true;

cljs.core.async.t25993.cljs$lang$ctorStr = "cljs.core.async/t25993";

cljs.core.async.t25993.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18753__auto__,writer__18754__auto__,opt__18755__auto__){
return cljs.core._write.call(null,writer__18754__auto__,"cljs.core.async/t25993");
});})(flag))
;

cljs.core.async.__GT_t25993 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t25993(flag__$1,alt_flag__$1,meta25994){
return (new cljs.core.async.t25993(flag__$1,alt_flag__$1,meta25994));
});})(flag))
;

}

return (new cljs.core.async.t25993(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t25999 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25999 = (function (cb,flag,alt_handler,meta26000){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta26000 = meta26000;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25999.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25999.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t25999.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t25999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26001){
var self__ = this;
var _26001__$1 = this;
return self__.meta26000;
});

cljs.core.async.t25999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26001,meta26000__$1){
var self__ = this;
var _26001__$1 = this;
return (new cljs.core.async.t25999(self__.cb,self__.flag,self__.alt_handler,meta26000__$1));
});

cljs.core.async.t25999.cljs$lang$type = true;

cljs.core.async.t25999.cljs$lang$ctorStr = "cljs.core.async/t25999";

cljs.core.async.t25999.cljs$lang$ctorPrWriter = (function (this__18753__auto__,writer__18754__auto__,opt__18755__auto__){
return cljs.core._write.call(null,writer__18754__auto__,"cljs.core.async/t25999");
});

cljs.core.async.__GT_t25999 = (function cljs$core$async$alt_handler_$___GT_t25999(cb__$1,flag__$1,alt_handler__$1,meta26000){
return (new cljs.core.async.t25999(cb__$1,flag__$1,alt_handler__$1,meta26000));
});

}

return (new cljs.core.async.t25999(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26002_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26002_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26003_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26003_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18174__auto__ = wport;
if(cljs.core.truth_(or__18174__auto__)){
return or__18174__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26004 = (i + (1));
i = G__26004;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18174__auto__ = ret;
if(cljs.core.truth_(or__18174__auto__)){
return or__18174__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__18162__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18162__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18162__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
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
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__19214__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19214__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26007){
var map__26008 = p__26007;
var map__26008__$1 = ((cljs.core.seq_QMARK_.call(null,map__26008))?cljs.core.apply.call(null,cljs.core.hash_map,map__26008):map__26008);
var opts = map__26008__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26005){
var G__26006 = cljs.core.first.call(null,seq26005);
var seq26005__$1 = cljs.core.next.call(null,seq26005);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26006,seq26005__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__26010 = arguments.length;
switch (G__26010) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21398__auto___26059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21398__auto___26059){
return (function (){
var f__21399__auto__ = (function (){var switch__21336__auto__ = ((function (c__21398__auto___26059){
return (function (state_26034){
var state_val_26035 = (state_26034[(1)]);
if((state_val_26035 === (7))){
var inst_26030 = (state_26034[(2)]);
var state_26034__$1 = state_26034;
var statearr_26036_26060 = state_26034__$1;
(statearr_26036_26060[(2)] = inst_26030);

(statearr_26036_26060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (1))){
var state_26034__$1 = state_26034;
var statearr_26037_26061 = state_26034__$1;
(statearr_26037_26061[(2)] = null);

(statearr_26037_26061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (4))){
var inst_26013 = (state_26034[(7)]);
var inst_26013__$1 = (state_26034[(2)]);
var inst_26014 = (inst_26013__$1 == null);
var state_26034__$1 = (function (){var statearr_26038 = state_26034;
(statearr_26038[(7)] = inst_26013__$1);

return statearr_26038;
})();
if(cljs.core.truth_(inst_26014)){
var statearr_26039_26062 = state_26034__$1;
(statearr_26039_26062[(1)] = (5));

} else {
var statearr_26040_26063 = state_26034__$1;
(statearr_26040_26063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (13))){
var state_26034__$1 = state_26034;
var statearr_26041_26064 = state_26034__$1;
(statearr_26041_26064[(2)] = null);

(statearr_26041_26064[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (6))){
var inst_26013 = (state_26034[(7)]);
var state_26034__$1 = state_26034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26034__$1,(11),to,inst_26013);
} else {
if((state_val_26035 === (3))){
var inst_26032 = (state_26034[(2)]);
var state_26034__$1 = state_26034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26034__$1,inst_26032);
} else {
if((state_val_26035 === (12))){
var state_26034__$1 = state_26034;
var statearr_26042_26065 = state_26034__$1;
(statearr_26042_26065[(2)] = null);

(statearr_26042_26065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (2))){
var state_26034__$1 = state_26034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26034__$1,(4),from);
} else {
if((state_val_26035 === (11))){
var inst_26023 = (state_26034[(2)]);
var state_26034__$1 = state_26034;
if(cljs.core.truth_(inst_26023)){
var statearr_26043_26066 = state_26034__$1;
(statearr_26043_26066[(1)] = (12));

} else {
var statearr_26044_26067 = state_26034__$1;
(statearr_26044_26067[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (9))){
var state_26034__$1 = state_26034;
var statearr_26045_26068 = state_26034__$1;
(statearr_26045_26068[(2)] = null);

(statearr_26045_26068[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (5))){
var state_26034__$1 = state_26034;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26046_26069 = state_26034__$1;
(statearr_26046_26069[(1)] = (8));

} else {
var statearr_26047_26070 = state_26034__$1;
(statearr_26047_26070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (14))){
var inst_26028 = (state_26034[(2)]);
var state_26034__$1 = state_26034;
var statearr_26048_26071 = state_26034__$1;
(statearr_26048_26071[(2)] = inst_26028);

(statearr_26048_26071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (10))){
var inst_26020 = (state_26034[(2)]);
var state_26034__$1 = state_26034;
var statearr_26049_26072 = state_26034__$1;
(statearr_26049_26072[(2)] = inst_26020);

(statearr_26049_26072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (8))){
var inst_26017 = cljs.core.async.close_BANG_.call(null,to);
var state_26034__$1 = state_26034;
var statearr_26050_26073 = state_26034__$1;
(statearr_26050_26073[(2)] = inst_26017);

(statearr_26050_26073[(1)] = (10));


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
});})(c__21398__auto___26059))
;
return ((function (switch__21336__auto__,c__21398__auto___26059){
return (function() {
var cljs$core$async$state_machine__21337__auto__ = null;
var cljs$core$async$state_machine__21337__auto____0 = (function (){
var statearr_26054 = [null,null,null,null,null,null,null,null];
(statearr_26054[(0)] = cljs$core$async$state_machine__21337__auto__);

(statearr_26054[(1)] = (1));

return statearr_26054;
});
var cljs$core$async$state_machine__21337__auto____1 = (function (state_26034){
while(true){
var ret_value__21338__auto__ = (function (){try{while(true){
var result__21339__auto__ = switch__21336__auto__.call(null,state_26034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21339__auto__;
}
break;
}
}catch (e26055){if((e26055 instanceof Object)){
var ex__21340__auto__ = e26055;
var statearr_26056_26074 = state_26034;
(statearr_26056_26074[(5)] = ex__21340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26075 = state_26034;
state_26034 = G__26075;
continue;
} else {
return ret_value__21338__auto__;
}
break;
}
});
cljs$core$async$state_machine__21337__auto__ = function(state_26034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21337__auto____1.call(this,state_26034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21337__auto____0;
cljs$core$async$state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21337__auto____1;
return cljs$core$async$state_machine__21337__auto__;
})()
;})(switch__21336__auto__,c__21398__auto___26059))
})();
var state__21400__auto__ = (function (){var statearr_26057 = f__21399__auto__.call(null);
(statearr_26057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21398__auto___26059);

return statearr_26057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21400__auto__);
});})(c__21398__auto___26059))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26259){
var vec__26260 = p__26259;
var v = cljs.core.nth.call(null,vec__26260,(0),null);
var p = cljs.core.nth.call(null,vec__26260,(1),null);
var job = vec__26260;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21398__auto___26442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21398__auto___26442,res,vec__26260,v,p,job,jobs,results){
return (function (){
var f__21399__auto__ = (function (){var switch__21336__auto__ = ((function (c__21398__auto___26442,res,vec__26260,v,p,job,jobs,results){
return (function (state_26265){
var state_val_26266 = (state_26265[(1)]);
if((state_val_26266 === (2))){
var inst_26262 = (state_26265[(2)]);
var inst_26263 = cljs.core.async.close_BANG_.call(null,res);
var state_26265__$1 = (function (){var statearr_26267 = state_26265;
(statearr_26267[(7)] = inst_26262);

return statearr_26267;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26265__$1,inst_26263);
} else {
if((state_val_26266 === (1))){
var state_26265__$1 = state_26265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26265__$1,(2),res,v);
} else {
return null;
}
}
});})(c__21398__auto___26442,res,vec__26260,v,p,job,jobs,results))
;
return ((function (switch__21336__auto__,c__21398__auto___26442,res,vec__26260,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21337__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21337__auto____0 = (function (){
var statearr_26271 = [null,null,null,null,null,null,null,null];
(statearr_26271[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21337__auto__);

(statearr_26271[(1)] = (1));

return statearr_26271;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21337__auto____1 = (function (state_26265){
while(true){
var ret_value__21338__auto__ = (function (){try{while(true){
var result__21339__auto__ = switch__21336__auto__.call(null,state_26265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21339__auto__;
}
break;
}
}catch (e26272){if((e26272 instanceof Object)){
var ex__21340__auto__ = e26272;
var statearr_26273_26443 = state_26265;
(statearr_26273_26443[(5)] = ex__21340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26444 = state_26265;
state_26265 = G__26444;
continue;
} else {
return ret_value__21338__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21337__auto__ = function(state_26265){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21337__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21337__auto____1.call(this,state_26265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21337__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21337__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21337__auto__;
})()
;})(switch__21336__auto__,c__21398__auto___26442,res,vec__26260,v,p,job,jobs,results))
})();
var state__21400__auto__ = (function (){var statearr_26274 = f__21399__auto__.call(null);
(statearr_26274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21398__auto___26442);

return statearr_26274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21400__auto__);
});})(c__21398__auto___26442,res,vec__26260,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26275){
var vec__26276 = p__26275;
var v = cljs.core.nth.call(null,vec__26276,(0),null);
var p = cljs.core.nth.call(null,vec__26276,(1),null);
var job = vec__26276;
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
var n__19059__auto___26445 = n;
var __26446 = (0);
while(true){
if((__26446 < n__19059__auto___26445)){
var G__26277_26447 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26277_26447) {
case "async":
var c__21398__auto___26449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26446,c__21398__auto___26449,G__26277_26447,n__19059__auto___26445,jobs,results,process,async){
return (function (){
var f__21399__auto__ = (function (){var switch__21336__auto__ = ((function (__26446,c__21398__auto___26449,G__26277_26447,n__19059__auto___26445,jobs,results,process,async){
return (function (state_26290){
var state_val_26291 = (state_26290[(1)]);
if((state_val_26291 === (7))){
var inst_26286 = (state_26290[(2)]);
var state_26290__$1 = state_26290;
var statearr_26292_26450 = state_26290__$1;
(statearr_26292_26450[(2)] = inst_26286);

(statearr_26292_26450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26291 === (6))){
var state_26290__$1 = state_26290;
var statearr_26293_26451 = state_26290__$1;
(statearr_26293_26451[(2)] = null);

(statearr_26293_26451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26291 === (5))){
var state_26290__$1 = state_26290;
var statearr_26294_26452 = state_26290__$1;
(statearr_26294_26452[(2)] = null);

(statearr_26294_26452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26291 === (4))){
var inst_26280 = (state_26290[(2)]);
var inst_26281 = async.call(null,inst_26280);
var state_26290__$1 = state_26290;
if(cljs.core.truth_(inst_26281)){
var statearr_26295_26453 = state_26290__$1;
(statearr_26295_26453[(1)] = (5));

} else {
var statearr_26296_26454 = state_26290__$1;
(statearr_26296_26454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26291 === (3))){
var inst_26288 = (state_26290[(2)]);
var state_26290__$1 = state_26290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26290__$1,inst_26288);
} else {
if((state_val_26291 === (2))){
var state_26290__$1 = state_26290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26290__$1,(4),jobs);
} else {
if((state_val_26291 === (1))){
var state_26290__$1 = state_26290;
var statearr_26297_26455 = state_26290__$1;
(statearr_26297_26455[(2)] = null);

(statearr_26297_26455[(1)] = (2));


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
});})(__26446,c__21398__auto___26449,G__26277_26447,n__19059__auto___26445,jobs,results,process,async))
;
return ((function (__26446,switch__21336__auto__,c__21398__auto___26449,G__26277_26447,n__19059__auto___26445,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21337__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21337__auto____0 = (function (){
var statearr_26301 = [null,null,null,null,null,null,null];
(statearr_26301[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21337__auto__);

(statearr_26301[(1)] = (1));

return statearr_26301;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21337__auto____1 = (function (state_26290){
while(true){
var ret_value__21338__auto__ = (function (){try{while(true){
var result__21339__auto__ = switch__21336__auto__.call(null,state_26290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21339__auto__;
}
break;
}
}catch (e26302){if((e26302 instanceof Object)){
var ex__21340__auto__ = e26302;
var statearr_26303_26456 = state_26290;
(statearr_26303_26456[(5)] = ex__21340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26457 = state_26290;
state_26290 = G__26457;
continue;
} else {
return ret_value__21338__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21337__auto__ = function(state_26290){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21337__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21337__auto____1.call(this,state_26290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21337__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21337__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21337__auto__;
})()
;})(__26446,switch__21336__auto__,c__21398__auto___26449,G__26277_26447,n__19059__auto___26445,jobs,results,process,async))
})();
var state__21400__auto__ = (function (){var statearr_26304 = f__21399__auto__.call(null);
(statearr_26304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21398__auto___26449);

return statearr_26304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21400__auto__);
});})(__26446,c__21398__auto___26449,G__26277_26447,n__19059__auto___26445,jobs,results,process,async))
);


break;
case "compute":
var c__21398__auto___26458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26446,c__21398__auto___26458,G__26277_26447,n__19059__auto___26445,jobs,results,process,async){
return (function (){
var f__21399__auto__ = (function (){var switch__21336__auto__ = ((function (__26446,c__21398__auto___26458,G__26277_26447,n__19059__auto___26445,jobs,results,process,async){
return (function (state_26317){
var state_val_26318 = (state_26317[(1)]);
if((state_val_26318 === (7))){
var inst_26313 = (state_26317[(2)]);
var state_26317__$1 = state_26317;
var statearr_26319_26459 = state_26317__$1;
(statearr_26319_26459[(2)] = inst_26313);

(statearr_26319_26459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (6))){
var state_26317__$1 = state_26317;
var statearr_26320_26460 = state_26317__$1;
(statearr_26320_26460[(2)] = null);

(statearr_26320_26460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (5))){
var state_26317__$1 = state_26317;
var statearr_26321_26461 = state_26317__$1;
(statearr_26321_26461[(2)] = null);

(statearr_26321_26461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (4))){
var inst_26307 = (state_26317[(2)]);
var inst_26308 = process.call(null,inst_26307);
var state_26317__$1 = state_26317;
if(cljs.core.truth_(inst_26308)){
var statearr_26322_26462 = state_26317__$1;
(statearr_26322_26462[(1)] = (5));

} else {
var statearr_26323_26463 = state_26317__$1;
(statearr_26323_26463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (3))){
var inst_26315 = (state_26317[(2)]);
var state_26317__$1 = state_26317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26317__$1,inst_26315);
} else {
if((state_val_26318 === (2))){
var state_26317__$1 = state_26317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26317__$1,(4),jobs);
} else {
if((state_val_26318 === (1))){
var state_26317__$1 = state_26317;
var statearr_26324_26464 = state_26317__$1;
(statearr_26324_26464[(2)] = null);

(statearr_26324_26464[(1)] = (2));


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
});})(__26446,c__21398__auto___26458,G__26277_26447,n__19059__auto___26445,jobs,results,process,async))
;
return ((function (__26446,switch__21336__auto__,c__21398__auto___26458,G__26277_26447,n__19059__auto___26445,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21337__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21337__auto____0 = (function (){
var statearr_26328 = [null,null,null,null,null,null,null];
(statearr_26328[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21337__auto__);

(statearr_26328[(1)] = (1));

return statearr_26328;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21337__auto____1 = (function (state_26317){
while(true){
var ret_value__21338__auto__ = (function (){try{while(true){
var result__21339__auto__ = switch__21336__auto__.call(null,state_26317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21339__auto__;
}
break;
}
}catch (e26329){if((e26329 instanceof Object)){
var ex__21340__auto__ = e26329;
var statearr_26330_26465 = state_26317;
(statearr_26330_26465[(5)] = ex__21340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26466 = state_26317;
state_26317 = G__26466;
continue;
} else {
return ret_value__21338__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21337__auto__ = function(state_26317){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21337__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21337__auto____1.call(this,state_26317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21337__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21337__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21337__auto__;
})()
;})(__26446,switch__21336__auto__,c__21398__auto___26458,G__26277_26447,n__19059__auto___26445,jobs,results,process,async))
})();
var state__21400__auto__ = (function (){var statearr_26331 = f__21399__auto__.call(null);
(statearr_26331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21398__auto___26458);

return statearr_26331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21400__auto__);
});})(__26446,c__21398__auto___26458,G__26277_26447,n__19059__auto___26445,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26467 = (__26446 + (1));
__26446 = G__26467;
continue;
} else {
}
break;
}

var c__21398__auto___26468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21398__auto___26468,jobs,results,process,async){
return (function (){
var f__21399__auto__ = (function (){var switch__21336__auto__ = ((function (c__21398__auto___26468,jobs,results,process,async){
return (function (state_26353){
var state_val_26354 = (state_26353[(1)]);
if((state_val_26354 === (9))){
var inst_26346 = (state_26353[(2)]);
var state_26353__$1 = (function (){var statearr_26355 = state_26353;
(statearr_26355[(7)] = inst_26346);

return statearr_26355;
})();
var statearr_26356_26469 = state_26353__$1;
(statearr_26356_26469[(2)] = null);

(statearr_26356_26469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26354 === (8))){
var inst_26339 = (state_26353[(8)]);
var inst_26344 = (state_26353[(2)]);
var state_26353__$1 = (function (){var statearr_26357 = state_26353;
(statearr_26357[(9)] = inst_26344);

return statearr_26357;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26353__$1,(9),results,inst_26339);
} else {
if((state_val_26354 === (7))){
var inst_26349 = (state_26353[(2)]);
var state_26353__$1 = state_26353;
var statearr_26358_26470 = state_26353__$1;
(statearr_26358_26470[(2)] = inst_26349);

(statearr_26358_26470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26354 === (6))){
var inst_26334 = (state_26353[(10)]);
var inst_26339 = (state_26353[(8)]);
var inst_26339__$1 = cljs.core.async.chan.call(null,(1));
var inst_26340 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26341 = [inst_26334,inst_26339__$1];
var inst_26342 = (new cljs.core.PersistentVector(null,2,(5),inst_26340,inst_26341,null));
var state_26353__$1 = (function (){var statearr_26359 = state_26353;
(statearr_26359[(8)] = inst_26339__$1);

return statearr_26359;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26353__$1,(8),jobs,inst_26342);
} else {
if((state_val_26354 === (5))){
var inst_26337 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26353__$1 = state_26353;
var statearr_26360_26471 = state_26353__$1;
(statearr_26360_26471[(2)] = inst_26337);

(statearr_26360_26471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26354 === (4))){
var inst_26334 = (state_26353[(10)]);
var inst_26334__$1 = (state_26353[(2)]);
var inst_26335 = (inst_26334__$1 == null);
var state_26353__$1 = (function (){var statearr_26361 = state_26353;
(statearr_26361[(10)] = inst_26334__$1);

return statearr_26361;
})();
if(cljs.core.truth_(inst_26335)){
var statearr_26362_26472 = state_26353__$1;
(statearr_26362_26472[(1)] = (5));

} else {
var statearr_26363_26473 = state_26353__$1;
(statearr_26363_26473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26354 === (3))){
var inst_26351 = (state_26353[(2)]);
var state_26353__$1 = state_26353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26353__$1,inst_26351);
} else {
if((state_val_26354 === (2))){
var state_26353__$1 = state_26353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26353__$1,(4),from);
} else {
if((state_val_26354 === (1))){
var state_26353__$1 = state_26353;
var statearr_26364_26474 = state_26353__$1;
(statearr_26364_26474[(2)] = null);

(statearr_26364_26474[(1)] = (2));


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
});})(c__21398__auto___26468,jobs,results,process,async))
;
return ((function (switch__21336__auto__,c__21398__auto___26468,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21337__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21337__auto____0 = (function (){
var statearr_26368 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26368[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21337__auto__);

(statearr_26368[(1)] = (1));

return statearr_26368;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21337__auto____1 = (function (state_26353){
while(true){
var ret_value__21338__auto__ = (function (){try{while(true){
var result__21339__auto__ = switch__21336__auto__.call(null,state_26353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21339__auto__;
}
break;
}
}catch (e26369){if((e26369 instanceof Object)){
var ex__21340__auto__ = e26369;
var statearr_26370_26475 = state_26353;
(statearr_26370_26475[(5)] = ex__21340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26476 = state_26353;
state_26353 = G__26476;
continue;
} else {
return ret_value__21338__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21337__auto__ = function(state_26353){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21337__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21337__auto____1.call(this,state_26353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21337__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21337__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21337__auto__;
})()
;})(switch__21336__auto__,c__21398__auto___26468,jobs,results,process,async))
})();
var state__21400__auto__ = (function (){var statearr_26371 = f__21399__auto__.call(null);
(statearr_26371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21398__auto___26468);

return statearr_26371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21400__auto__);
});})(c__21398__auto___26468,jobs,results,process,async))
);


var c__21398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21398__auto__,jobs,results,process,async){
return (function (){
var f__21399__auto__ = (function (){var switch__21336__auto__ = ((function (c__21398__auto__,jobs,results,process,async){
return (function (state_26409){
var state_val_26410 = (state_26409[(1)]);
if((state_val_26410 === (7))){
var inst_26405 = (state_26409[(2)]);
var state_26409__$1 = state_26409;
var statearr_26411_26477 = state_26409__$1;
(statearr_26411_26477[(2)] = inst_26405);

(statearr_26411_26477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (20))){
var state_26409__$1 = state_26409;
var statearr_26412_26478 = state_26409__$1;
(statearr_26412_26478[(2)] = null);

(statearr_26412_26478[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (1))){
var state_26409__$1 = state_26409;
var statearr_26413_26479 = state_26409__$1;
(statearr_26413_26479[(2)] = null);

(statearr_26413_26479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (4))){
var inst_26374 = (state_26409[(7)]);
var inst_26374__$1 = (state_26409[(2)]);
var inst_26375 = (inst_26374__$1 == null);
var state_26409__$1 = (function (){var statearr_26414 = state_26409;
(statearr_26414[(7)] = inst_26374__$1);

return statearr_26414;
})();
if(cljs.core.truth_(inst_26375)){
var statearr_26415_26480 = state_26409__$1;
(statearr_26415_26480[(1)] = (5));

} else {
var statearr_26416_26481 = state_26409__$1;
(statearr_26416_26481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (15))){
var inst_26387 = (state_26409[(8)]);
var state_26409__$1 = state_26409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26409__$1,(18),to,inst_26387);
} else {
if((state_val_26410 === (21))){
var inst_26400 = (state_26409[(2)]);
var state_26409__$1 = state_26409;
var statearr_26417_26482 = state_26409__$1;
(statearr_26417_26482[(2)] = inst_26400);

(statearr_26417_26482[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (13))){
var inst_26402 = (state_26409[(2)]);
var state_26409__$1 = (function (){var statearr_26418 = state_26409;
(statearr_26418[(9)] = inst_26402);

return statearr_26418;
})();
var statearr_26419_26483 = state_26409__$1;
(statearr_26419_26483[(2)] = null);

(statearr_26419_26483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (6))){
var inst_26374 = (state_26409[(7)]);
var state_26409__$1 = state_26409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26409__$1,(11),inst_26374);
} else {
if((state_val_26410 === (17))){
var inst_26395 = (state_26409[(2)]);
var state_26409__$1 = state_26409;
if(cljs.core.truth_(inst_26395)){
var statearr_26420_26484 = state_26409__$1;
(statearr_26420_26484[(1)] = (19));

} else {
var statearr_26421_26485 = state_26409__$1;
(statearr_26421_26485[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (3))){
var inst_26407 = (state_26409[(2)]);
var state_26409__$1 = state_26409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26409__$1,inst_26407);
} else {
if((state_val_26410 === (12))){
var inst_26384 = (state_26409[(10)]);
var state_26409__$1 = state_26409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26409__$1,(14),inst_26384);
} else {
if((state_val_26410 === (2))){
var state_26409__$1 = state_26409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26409__$1,(4),results);
} else {
if((state_val_26410 === (19))){
var state_26409__$1 = state_26409;
var statearr_26422_26486 = state_26409__$1;
(statearr_26422_26486[(2)] = null);

(statearr_26422_26486[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (11))){
var inst_26384 = (state_26409[(2)]);
var state_26409__$1 = (function (){var statearr_26423 = state_26409;
(statearr_26423[(10)] = inst_26384);

return statearr_26423;
})();
var statearr_26424_26487 = state_26409__$1;
(statearr_26424_26487[(2)] = null);

(statearr_26424_26487[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (9))){
var state_26409__$1 = state_26409;
var statearr_26425_26488 = state_26409__$1;
(statearr_26425_26488[(2)] = null);

(statearr_26425_26488[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (5))){
var state_26409__$1 = state_26409;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26426_26489 = state_26409__$1;
(statearr_26426_26489[(1)] = (8));

} else {
var statearr_26427_26490 = state_26409__$1;
(statearr_26427_26490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (14))){
var inst_26387 = (state_26409[(8)]);
var inst_26389 = (state_26409[(11)]);
var inst_26387__$1 = (state_26409[(2)]);
var inst_26388 = (inst_26387__$1 == null);
var inst_26389__$1 = cljs.core.not.call(null,inst_26388);
var state_26409__$1 = (function (){var statearr_26428 = state_26409;
(statearr_26428[(8)] = inst_26387__$1);

(statearr_26428[(11)] = inst_26389__$1);

return statearr_26428;
})();
if(inst_26389__$1){
var statearr_26429_26491 = state_26409__$1;
(statearr_26429_26491[(1)] = (15));

} else {
var statearr_26430_26492 = state_26409__$1;
(statearr_26430_26492[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (16))){
var inst_26389 = (state_26409[(11)]);
var state_26409__$1 = state_26409;
var statearr_26431_26493 = state_26409__$1;
(statearr_26431_26493[(2)] = inst_26389);

(statearr_26431_26493[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (10))){
var inst_26381 = (state_26409[(2)]);
var state_26409__$1 = state_26409;
var statearr_26432_26494 = state_26409__$1;
(statearr_26432_26494[(2)] = inst_26381);

(statearr_26432_26494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (18))){
var inst_26392 = (state_26409[(2)]);
var state_26409__$1 = state_26409;
var statearr_26433_26495 = state_26409__$1;
(statearr_26433_26495[(2)] = inst_26392);

(statearr_26433_26495[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (8))){
var inst_26378 = cljs.core.async.close_BANG_.call(null,to);
var state_26409__$1 = state_26409;
var statearr_26434_26496 = state_26409__$1;
(statearr_26434_26496[(2)] = inst_26378);

(statearr_26434_26496[(1)] = (10));


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
});})(c__21398__auto__,jobs,results,process,async))
;
return ((function (switch__21336__auto__,c__21398__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21337__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21337__auto____0 = (function (){
var statearr_26438 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26438[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21337__auto__);

(statearr_26438[(1)] = (1));

return statearr_26438;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21337__auto____1 = (function (state_26409){
while(true){
var ret_value__21338__auto__ = (function (){try{while(true){
var result__21339__auto__ = switch__21336__auto__.call(null,state_26409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21339__auto__;
}
break;
}
}catch (e26439){if((e26439 instanceof Object)){
var ex__21340__auto__ = e26439;
var statearr_26440_26497 = state_26409;
(statearr_26440_26497[(5)] = ex__21340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26498 = state_26409;
state_26409 = G__26498;
continue;
} else {
return ret_value__21338__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21337__auto__ = function(state_26409){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21337__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21337__auto____1.call(this,state_26409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21337__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21337__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21337__auto__;
})()
;})(switch__21336__auto__,c__21398__auto__,jobs,results,process,async))
})();
var state__21400__auto__ = (function (){var statearr_26441 = f__21399__auto__.call(null);
(statearr_26441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21398__auto__);

return statearr_26441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21400__auto__);
});})(c__21398__auto__,jobs,results,process,async))
);

return c__21398__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__26500 = arguments.length;
switch (G__26500) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__26503 = arguments.length;
switch (G__26503) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__26506 = arguments.length;
switch (G__26506) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21398__auto___26558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21398__auto___26558,tc,fc){
return (function (){
var f__21399__auto__ = (function (){var switch__21336__auto__ = ((function (c__21398__auto___26558,tc,fc){
return (function (state_26532){
var state_val_26533 = (state_26532[(1)]);
if((state_val_26533 === (7))){
var inst_26528 = (state_26532[(2)]);
var state_26532__$1 = state_26532;
var statearr_26534_26559 = state_26532__$1;
(statearr_26534_26559[(2)] = inst_26528);

(statearr_26534_26559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26533 === (1))){
var state_26532__$1 = state_26532;
var statearr_26535_26560 = state_26532__$1;
(statearr_26535_26560[(2)] = null);

(statearr_26535_26560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26533 === (4))){
var inst_26509 = (state_26532[(7)]);
var inst_26509__$1 = (state_26532[(2)]);
var inst_26510 = (inst_26509__$1 == null);
var state_26532__$1 = (function (){var statearr_26536 = state_26532;
(statearr_26536[(7)] = inst_26509__$1);

return statearr_26536;
})();
if(cljs.core.truth_(inst_26510)){
var statearr_26537_26561 = state_26532__$1;
(statearr_26537_26561[(1)] = (5));

} else {
var statearr_26538_26562 = state_26532__$1;
(statearr_26538_26562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26533 === (13))){
var state_26532__$1 = state_26532;
var statearr_26539_26563 = state_26532__$1;
(statearr_26539_26563[(2)] = null);

(statearr_26539_26563[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26533 === (6))){
var inst_26509 = (state_26532[(7)]);
var inst_26515 = p.call(null,inst_26509);
var state_26532__$1 = state_26532;
if(cljs.core.truth_(inst_26515)){
var statearr_26540_26564 = state_26532__$1;
(statearr_26540_26564[(1)] = (9));

} else {
var statearr_26541_26565 = state_26532__$1;
(statearr_26541_26565[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26533 === (3))){
var inst_26530 = (state_26532[(2)]);
var state_26532__$1 = state_26532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26532__$1,inst_26530);
} else {
if((state_val_26533 === (12))){
var state_26532__$1 = state_26532;
var statearr_26542_26566 = state_26532__$1;
(statearr_26542_26566[(2)] = null);

(statearr_26542_26566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26533 === (2))){
var state_26532__$1 = state_26532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26532__$1,(4),ch);
} else {
if((state_val_26533 === (11))){
var inst_26509 = (state_26532[(7)]);
var inst_26519 = (state_26532[(2)]);
var state_26532__$1 = state_26532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26532__$1,(8),inst_26519,inst_26509);
} else {
if((state_val_26533 === (9))){
var state_26532__$1 = state_26532;
var statearr_26543_26567 = state_26532__$1;
(statearr_26543_26567[(2)] = tc);

(statearr_26543_26567[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26533 === (5))){
var inst_26512 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26513 = cljs.core.async.close_BANG_.call(null,fc);
var state_26532__$1 = (function (){var statearr_26544 = state_26532;
(statearr_26544[(8)] = inst_26512);

return statearr_26544;
})();
var statearr_26545_26568 = state_26532__$1;
(statearr_26545_26568[(2)] = inst_26513);

(statearr_26545_26568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26533 === (14))){
var inst_26526 = (state_26532[(2)]);
var state_26532__$1 = state_26532;
var statearr_26546_26569 = state_26532__$1;
(statearr_26546_26569[(2)] = inst_26526);

(statearr_26546_26569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26533 === (10))){
var state_26532__$1 = state_26532;
var statearr_26547_26570 = state_26532__$1;
(statearr_26547_26570[(2)] = fc);

(statearr_26547_26570[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26533 === (8))){
var inst_26521 = (state_26532[(2)]);
var state_26532__$1 = state_26532;
if(cljs.core.truth_(inst_26521)){
var statearr_26548_26571 = state_26532__$1;
(statearr_26548_26571[(1)] = (12));

} else {
var statearr_26549_26572 = state_26532__$1;
(statearr_26549_26572[(1)] = (13));

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
});})(c__21398__auto___26558,tc,fc))
;
return ((function (switch__21336__auto__,c__21398__auto___26558,tc,fc){
return (function() {
var cljs$core$async$state_machine__21337__auto__ = null;
var cljs$core$async$state_machine__21337__auto____0 = (function (){
var statearr_26553 = [null,null,null,null,null,null,null,null,null];
(statearr_26553[(0)] = cljs$core$async$state_machine__21337__auto__);

(statearr_26553[(1)] = (1));

return statearr_26553;
});
var cljs$core$async$state_machine__21337__auto____1 = (function (state_26532){
while(true){
var ret_value__21338__auto__ = (function (){try{while(true){
var result__21339__auto__ = switch__21336__auto__.call(null,state_26532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21339__auto__;
}
break;
}
}catch (e26554){if((e26554 instanceof Object)){
var ex__21340__auto__ = e26554;
var statearr_26555_26573 = state_26532;
(statearr_26555_26573[(5)] = ex__21340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26574 = state_26532;
state_26532 = G__26574;
continue;
} else {
return ret_value__21338__auto__;
}
break;
}
});
cljs$core$async$state_machine__21337__auto__ = function(state_26532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21337__auto____1.call(this,state_26532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21337__auto____0;
cljs$core$async$state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21337__auto____1;
return cljs$core$async$state_machine__21337__auto__;
})()
;})(switch__21336__auto__,c__21398__auto___26558,tc,fc))
})();
var state__21400__auto__ = (function (){var statearr_26556 = f__21399__auto__.call(null);
(statearr_26556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21398__auto___26558);

return statearr_26556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21400__auto__);
});})(c__21398__auto___26558,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21398__auto__){
return (function (){
var f__21399__auto__ = (function (){var switch__21336__auto__ = ((function (c__21398__auto__){
return (function (state_26621){
var state_val_26622 = (state_26621[(1)]);
if((state_val_26622 === (7))){
var inst_26617 = (state_26621[(2)]);
var state_26621__$1 = state_26621;
var statearr_26623_26639 = state_26621__$1;
(statearr_26623_26639[(2)] = inst_26617);

(statearr_26623_26639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26622 === (6))){
var inst_26607 = (state_26621[(7)]);
var inst_26610 = (state_26621[(8)]);
var inst_26614 = f.call(null,inst_26607,inst_26610);
var inst_26607__$1 = inst_26614;
var state_26621__$1 = (function (){var statearr_26624 = state_26621;
(statearr_26624[(7)] = inst_26607__$1);

return statearr_26624;
})();
var statearr_26625_26640 = state_26621__$1;
(statearr_26625_26640[(2)] = null);

(statearr_26625_26640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26622 === (5))){
var inst_26607 = (state_26621[(7)]);
var state_26621__$1 = state_26621;
var statearr_26626_26641 = state_26621__$1;
(statearr_26626_26641[(2)] = inst_26607);

(statearr_26626_26641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26622 === (4))){
var inst_26610 = (state_26621[(8)]);
var inst_26610__$1 = (state_26621[(2)]);
var inst_26611 = (inst_26610__$1 == null);
var state_26621__$1 = (function (){var statearr_26627 = state_26621;
(statearr_26627[(8)] = inst_26610__$1);

return statearr_26627;
})();
if(cljs.core.truth_(inst_26611)){
var statearr_26628_26642 = state_26621__$1;
(statearr_26628_26642[(1)] = (5));

} else {
var statearr_26629_26643 = state_26621__$1;
(statearr_26629_26643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26622 === (3))){
var inst_26619 = (state_26621[(2)]);
var state_26621__$1 = state_26621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26621__$1,inst_26619);
} else {
if((state_val_26622 === (2))){
var state_26621__$1 = state_26621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26621__$1,(4),ch);
} else {
if((state_val_26622 === (1))){
var inst_26607 = init;
var state_26621__$1 = (function (){var statearr_26630 = state_26621;
(statearr_26630[(7)] = inst_26607);

return statearr_26630;
})();
var statearr_26631_26644 = state_26621__$1;
(statearr_26631_26644[(2)] = null);

(statearr_26631_26644[(1)] = (2));


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
});})(c__21398__auto__))
;
return ((function (switch__21336__auto__,c__21398__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21337__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21337__auto____0 = (function (){
var statearr_26635 = [null,null,null,null,null,null,null,null,null];
(statearr_26635[(0)] = cljs$core$async$reduce_$_state_machine__21337__auto__);

(statearr_26635[(1)] = (1));

return statearr_26635;
});
var cljs$core$async$reduce_$_state_machine__21337__auto____1 = (function (state_26621){
while(true){
var ret_value__21338__auto__ = (function (){try{while(true){
var result__21339__auto__ = switch__21336__auto__.call(null,state_26621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21339__auto__;
}
break;
}
}catch (e26636){if((e26636 instanceof Object)){
var ex__21340__auto__ = e26636;
var statearr_26637_26645 = state_26621;
(statearr_26637_26645[(5)] = ex__21340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26646 = state_26621;
state_26621 = G__26646;
continue;
} else {
return ret_value__21338__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21337__auto__ = function(state_26621){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21337__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21337__auto____1.call(this,state_26621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21337__auto____0;
cljs$core$async$reduce_$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21337__auto____1;
return cljs$core$async$reduce_$_state_machine__21337__auto__;
})()
;})(switch__21336__auto__,c__21398__auto__))
})();
var state__21400__auto__ = (function (){var statearr_26638 = f__21399__auto__.call(null);
(statearr_26638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21398__auto__);

return statearr_26638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21400__auto__);
});})(c__21398__auto__))
);

return c__21398__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__26648 = arguments.length;
switch (G__26648) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21398__auto__){
return (function (){
var f__21399__auto__ = (function (){var switch__21336__auto__ = ((function (c__21398__auto__){
return (function (state_26673){
var state_val_26674 = (state_26673[(1)]);
if((state_val_26674 === (7))){
var inst_26655 = (state_26673[(2)]);
var state_26673__$1 = state_26673;
var statearr_26675_26699 = state_26673__$1;
(statearr_26675_26699[(2)] = inst_26655);

(statearr_26675_26699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (1))){
var inst_26649 = cljs.core.seq.call(null,coll);
var inst_26650 = inst_26649;
var state_26673__$1 = (function (){var statearr_26676 = state_26673;
(statearr_26676[(7)] = inst_26650);

return statearr_26676;
})();
var statearr_26677_26700 = state_26673__$1;
(statearr_26677_26700[(2)] = null);

(statearr_26677_26700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (4))){
var inst_26650 = (state_26673[(7)]);
var inst_26653 = cljs.core.first.call(null,inst_26650);
var state_26673__$1 = state_26673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26673__$1,(7),ch,inst_26653);
} else {
if((state_val_26674 === (13))){
var inst_26667 = (state_26673[(2)]);
var state_26673__$1 = state_26673;
var statearr_26678_26701 = state_26673__$1;
(statearr_26678_26701[(2)] = inst_26667);

(statearr_26678_26701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (6))){
var inst_26658 = (state_26673[(2)]);
var state_26673__$1 = state_26673;
if(cljs.core.truth_(inst_26658)){
var statearr_26679_26702 = state_26673__$1;
(statearr_26679_26702[(1)] = (8));

} else {
var statearr_26680_26703 = state_26673__$1;
(statearr_26680_26703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (3))){
var inst_26671 = (state_26673[(2)]);
var state_26673__$1 = state_26673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26673__$1,inst_26671);
} else {
if((state_val_26674 === (12))){
var state_26673__$1 = state_26673;
var statearr_26681_26704 = state_26673__$1;
(statearr_26681_26704[(2)] = null);

(statearr_26681_26704[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (2))){
var inst_26650 = (state_26673[(7)]);
var state_26673__$1 = state_26673;
if(cljs.core.truth_(inst_26650)){
var statearr_26682_26705 = state_26673__$1;
(statearr_26682_26705[(1)] = (4));

} else {
var statearr_26683_26706 = state_26673__$1;
(statearr_26683_26706[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (11))){
var inst_26664 = cljs.core.async.close_BANG_.call(null,ch);
var state_26673__$1 = state_26673;
var statearr_26684_26707 = state_26673__$1;
(statearr_26684_26707[(2)] = inst_26664);

(statearr_26684_26707[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (9))){
var state_26673__$1 = state_26673;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26685_26708 = state_26673__$1;
(statearr_26685_26708[(1)] = (11));

} else {
var statearr_26686_26709 = state_26673__$1;
(statearr_26686_26709[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (5))){
var inst_26650 = (state_26673[(7)]);
var state_26673__$1 = state_26673;
var statearr_26687_26710 = state_26673__$1;
(statearr_26687_26710[(2)] = inst_26650);

(statearr_26687_26710[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (10))){
var inst_26669 = (state_26673[(2)]);
var state_26673__$1 = state_26673;
var statearr_26688_26711 = state_26673__$1;
(statearr_26688_26711[(2)] = inst_26669);

(statearr_26688_26711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (8))){
var inst_26650 = (state_26673[(7)]);
var inst_26660 = cljs.core.next.call(null,inst_26650);
var inst_26650__$1 = inst_26660;
var state_26673__$1 = (function (){var statearr_26689 = state_26673;
(statearr_26689[(7)] = inst_26650__$1);

return statearr_26689;
})();
var statearr_26690_26712 = state_26673__$1;
(statearr_26690_26712[(2)] = null);

(statearr_26690_26712[(1)] = (2));


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
});})(c__21398__auto__))
;
return ((function (switch__21336__auto__,c__21398__auto__){
return (function() {
var cljs$core$async$state_machine__21337__auto__ = null;
var cljs$core$async$state_machine__21337__auto____0 = (function (){
var statearr_26694 = [null,null,null,null,null,null,null,null];
(statearr_26694[(0)] = cljs$core$async$state_machine__21337__auto__);

(statearr_26694[(1)] = (1));

return statearr_26694;
});
var cljs$core$async$state_machine__21337__auto____1 = (function (state_26673){
while(true){
var ret_value__21338__auto__ = (function (){try{while(true){
var result__21339__auto__ = switch__21336__auto__.call(null,state_26673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21339__auto__;
}
break;
}
}catch (e26695){if((e26695 instanceof Object)){
var ex__21340__auto__ = e26695;
var statearr_26696_26713 = state_26673;
(statearr_26696_26713[(5)] = ex__21340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26714 = state_26673;
state_26673 = G__26714;
continue;
} else {
return ret_value__21338__auto__;
}
break;
}
});
cljs$core$async$state_machine__21337__auto__ = function(state_26673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21337__auto____1.call(this,state_26673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21337__auto____0;
cljs$core$async$state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21337__auto____1;
return cljs$core$async$state_machine__21337__auto__;
})()
;})(switch__21336__auto__,c__21398__auto__))
})();
var state__21400__auto__ = (function (){var statearr_26697 = f__21399__auto__.call(null);
(statearr_26697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21398__auto__);

return statearr_26697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21400__auto__);
});})(c__21398__auto__))
);

return c__21398__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj26716 = {};
return obj26716;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__18162__auto__ = _;
if(and__18162__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__18162__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18810__auto__ = (((_ == null))?null:_);
return (function (){var or__18174__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18810__auto__)]);
if(or__18174__auto__){
return or__18174__auto__;
} else {
var or__18174__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__18174__auto____$1){
return or__18174__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj26718 = {};
return obj26718;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__18162__auto__ = m;
if(and__18162__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__18162__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18810__auto__ = (((m == null))?null:m);
return (function (){var or__18174__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18810__auto__)]);
if(or__18174__auto__){
return or__18174__auto__;
} else {
var or__18174__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__18174__auto____$1){
return or__18174__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__18162__auto__ = m;
if(and__18162__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__18162__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18810__auto__ = (((m == null))?null:m);
return (function (){var or__18174__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18810__auto__)]);
if(or__18174__auto__){
return or__18174__auto__;
} else {
var or__18174__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__18174__auto____$1){
return or__18174__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__18162__auto__ = m;
if(and__18162__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__18162__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18810__auto__ = (((m == null))?null:m);
return (function (){var or__18174__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18810__auto__)]);
if(or__18174__auto__){
return or__18174__auto__;
} else {
var or__18174__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__18174__auto____$1){
return or__18174__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t26940 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26940 = (function (cs,ch,mult,meta26941){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26941 = meta26941;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26940.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t26940.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t26940.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t26940.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t26940.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26940.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t26940.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26942){
var self__ = this;
var _26942__$1 = this;
return self__.meta26941;
});})(cs))
;

cljs.core.async.t26940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26942,meta26941__$1){
var self__ = this;
var _26942__$1 = this;
return (new cljs.core.async.t26940(self__.cs,self__.ch,self__.mult,meta26941__$1));
});})(cs))
;

cljs.core.async.t26940.cljs$lang$type = true;

cljs.core.async.t26940.cljs$lang$ctorStr = "cljs.core.async/t26940";

cljs.core.async.t26940.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18753__auto__,writer__18754__auto__,opt__18755__auto__){
return cljs.core._write.call(null,writer__18754__auto__,"cljs.core.async/t26940");
});})(cs))
;

cljs.core.async.__GT_t26940 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t26940(cs__$1,ch__$1,mult__$1,meta26941){
return (new cljs.core.async.t26940(cs__$1,ch__$1,mult__$1,meta26941));
});})(cs))
;

}

return (new cljs.core.async.t26940(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21398__auto___27161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21398__auto___27161,cs,m,dchan,dctr,done){
return (function (){
var f__21399__auto__ = (function (){var switch__21336__auto__ = ((function (c__21398__auto___27161,cs,m,dchan,dctr,done){
return (function (state_27073){
var state_val_27074 = (state_27073[(1)]);
if((state_val_27074 === (7))){
var inst_27069 = (state_27073[(2)]);
var state_27073__$1 = state_27073;
var statearr_27075_27162 = state_27073__$1;
(statearr_27075_27162[(2)] = inst_27069);

(statearr_27075_27162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (20))){
var inst_26974 = (state_27073[(7)]);
var inst_26984 = cljs.core.first.call(null,inst_26974);
var inst_26985 = cljs.core.nth.call(null,inst_26984,(0),null);
var inst_26986 = cljs.core.nth.call(null,inst_26984,(1),null);
var state_27073__$1 = (function (){var statearr_27076 = state_27073;
(statearr_27076[(8)] = inst_26985);

return statearr_27076;
})();
if(cljs.core.truth_(inst_26986)){
var statearr_27077_27163 = state_27073__$1;
(statearr_27077_27163[(1)] = (22));

} else {
var statearr_27078_27164 = state_27073__$1;
(statearr_27078_27164[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (27))){
var inst_27014 = (state_27073[(9)]);
var inst_27016 = (state_27073[(10)]);
var inst_27021 = (state_27073[(11)]);
var inst_26945 = (state_27073[(12)]);
var inst_27021__$1 = cljs.core._nth.call(null,inst_27014,inst_27016);
var inst_27022 = cljs.core.async.put_BANG_.call(null,inst_27021__$1,inst_26945,done);
var state_27073__$1 = (function (){var statearr_27079 = state_27073;
(statearr_27079[(11)] = inst_27021__$1);

return statearr_27079;
})();
if(cljs.core.truth_(inst_27022)){
var statearr_27080_27165 = state_27073__$1;
(statearr_27080_27165[(1)] = (30));

} else {
var statearr_27081_27166 = state_27073__$1;
(statearr_27081_27166[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (1))){
var state_27073__$1 = state_27073;
var statearr_27082_27167 = state_27073__$1;
(statearr_27082_27167[(2)] = null);

(statearr_27082_27167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (24))){
var inst_26974 = (state_27073[(7)]);
var inst_26991 = (state_27073[(2)]);
var inst_26992 = cljs.core.next.call(null,inst_26974);
var inst_26954 = inst_26992;
var inst_26955 = null;
var inst_26956 = (0);
var inst_26957 = (0);
var state_27073__$1 = (function (){var statearr_27083 = state_27073;
(statearr_27083[(13)] = inst_26954);

(statearr_27083[(14)] = inst_26991);

(statearr_27083[(15)] = inst_26956);

(statearr_27083[(16)] = inst_26955);

(statearr_27083[(17)] = inst_26957);

return statearr_27083;
})();
var statearr_27084_27168 = state_27073__$1;
(statearr_27084_27168[(2)] = null);

(statearr_27084_27168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (39))){
var state_27073__$1 = state_27073;
var statearr_27088_27169 = state_27073__$1;
(statearr_27088_27169[(2)] = null);

(statearr_27088_27169[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (4))){
var inst_26945 = (state_27073[(12)]);
var inst_26945__$1 = (state_27073[(2)]);
var inst_26946 = (inst_26945__$1 == null);
var state_27073__$1 = (function (){var statearr_27089 = state_27073;
(statearr_27089[(12)] = inst_26945__$1);

return statearr_27089;
})();
if(cljs.core.truth_(inst_26946)){
var statearr_27090_27170 = state_27073__$1;
(statearr_27090_27170[(1)] = (5));

} else {
var statearr_27091_27171 = state_27073__$1;
(statearr_27091_27171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (15))){
var inst_26954 = (state_27073[(13)]);
var inst_26956 = (state_27073[(15)]);
var inst_26955 = (state_27073[(16)]);
var inst_26957 = (state_27073[(17)]);
var inst_26970 = (state_27073[(2)]);
var inst_26971 = (inst_26957 + (1));
var tmp27085 = inst_26954;
var tmp27086 = inst_26956;
var tmp27087 = inst_26955;
var inst_26954__$1 = tmp27085;
var inst_26955__$1 = tmp27087;
var inst_26956__$1 = tmp27086;
var inst_26957__$1 = inst_26971;
var state_27073__$1 = (function (){var statearr_27092 = state_27073;
(statearr_27092[(13)] = inst_26954__$1);

(statearr_27092[(18)] = inst_26970);

(statearr_27092[(15)] = inst_26956__$1);

(statearr_27092[(16)] = inst_26955__$1);

(statearr_27092[(17)] = inst_26957__$1);

return statearr_27092;
})();
var statearr_27093_27172 = state_27073__$1;
(statearr_27093_27172[(2)] = null);

(statearr_27093_27172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (21))){
var inst_26995 = (state_27073[(2)]);
var state_27073__$1 = state_27073;
var statearr_27097_27173 = state_27073__$1;
(statearr_27097_27173[(2)] = inst_26995);

(statearr_27097_27173[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (31))){
var inst_27021 = (state_27073[(11)]);
var inst_27025 = done.call(null,null);
var inst_27026 = cljs.core.async.untap_STAR_.call(null,m,inst_27021);
var state_27073__$1 = (function (){var statearr_27098 = state_27073;
(statearr_27098[(19)] = inst_27025);

return statearr_27098;
})();
var statearr_27099_27174 = state_27073__$1;
(statearr_27099_27174[(2)] = inst_27026);

(statearr_27099_27174[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (32))){
var inst_27015 = (state_27073[(20)]);
var inst_27013 = (state_27073[(21)]);
var inst_27014 = (state_27073[(9)]);
var inst_27016 = (state_27073[(10)]);
var inst_27028 = (state_27073[(2)]);
var inst_27029 = (inst_27016 + (1));
var tmp27094 = inst_27015;
var tmp27095 = inst_27013;
var tmp27096 = inst_27014;
var inst_27013__$1 = tmp27095;
var inst_27014__$1 = tmp27096;
var inst_27015__$1 = tmp27094;
var inst_27016__$1 = inst_27029;
var state_27073__$1 = (function (){var statearr_27100 = state_27073;
(statearr_27100[(20)] = inst_27015__$1);

(statearr_27100[(21)] = inst_27013__$1);

(statearr_27100[(22)] = inst_27028);

(statearr_27100[(9)] = inst_27014__$1);

(statearr_27100[(10)] = inst_27016__$1);

return statearr_27100;
})();
var statearr_27101_27175 = state_27073__$1;
(statearr_27101_27175[(2)] = null);

(statearr_27101_27175[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (40))){
var inst_27041 = (state_27073[(23)]);
var inst_27045 = done.call(null,null);
var inst_27046 = cljs.core.async.untap_STAR_.call(null,m,inst_27041);
var state_27073__$1 = (function (){var statearr_27102 = state_27073;
(statearr_27102[(24)] = inst_27045);

return statearr_27102;
})();
var statearr_27103_27176 = state_27073__$1;
(statearr_27103_27176[(2)] = inst_27046);

(statearr_27103_27176[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (33))){
var inst_27032 = (state_27073[(25)]);
var inst_27034 = cljs.core.chunked_seq_QMARK_.call(null,inst_27032);
var state_27073__$1 = state_27073;
if(inst_27034){
var statearr_27104_27177 = state_27073__$1;
(statearr_27104_27177[(1)] = (36));

} else {
var statearr_27105_27178 = state_27073__$1;
(statearr_27105_27178[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (13))){
var inst_26964 = (state_27073[(26)]);
var inst_26967 = cljs.core.async.close_BANG_.call(null,inst_26964);
var state_27073__$1 = state_27073;
var statearr_27106_27179 = state_27073__$1;
(statearr_27106_27179[(2)] = inst_26967);

(statearr_27106_27179[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (22))){
var inst_26985 = (state_27073[(8)]);
var inst_26988 = cljs.core.async.close_BANG_.call(null,inst_26985);
var state_27073__$1 = state_27073;
var statearr_27107_27180 = state_27073__$1;
(statearr_27107_27180[(2)] = inst_26988);

(statearr_27107_27180[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (36))){
var inst_27032 = (state_27073[(25)]);
var inst_27036 = cljs.core.chunk_first.call(null,inst_27032);
var inst_27037 = cljs.core.chunk_rest.call(null,inst_27032);
var inst_27038 = cljs.core.count.call(null,inst_27036);
var inst_27013 = inst_27037;
var inst_27014 = inst_27036;
var inst_27015 = inst_27038;
var inst_27016 = (0);
var state_27073__$1 = (function (){var statearr_27108 = state_27073;
(statearr_27108[(20)] = inst_27015);

(statearr_27108[(21)] = inst_27013);

(statearr_27108[(9)] = inst_27014);

(statearr_27108[(10)] = inst_27016);

return statearr_27108;
})();
var statearr_27109_27181 = state_27073__$1;
(statearr_27109_27181[(2)] = null);

(statearr_27109_27181[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (41))){
var inst_27032 = (state_27073[(25)]);
var inst_27048 = (state_27073[(2)]);
var inst_27049 = cljs.core.next.call(null,inst_27032);
var inst_27013 = inst_27049;
var inst_27014 = null;
var inst_27015 = (0);
var inst_27016 = (0);
var state_27073__$1 = (function (){var statearr_27110 = state_27073;
(statearr_27110[(20)] = inst_27015);

(statearr_27110[(21)] = inst_27013);

(statearr_27110[(9)] = inst_27014);

(statearr_27110[(10)] = inst_27016);

(statearr_27110[(27)] = inst_27048);

return statearr_27110;
})();
var statearr_27111_27182 = state_27073__$1;
(statearr_27111_27182[(2)] = null);

(statearr_27111_27182[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (43))){
var state_27073__$1 = state_27073;
var statearr_27112_27183 = state_27073__$1;
(statearr_27112_27183[(2)] = null);

(statearr_27112_27183[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (29))){
var inst_27057 = (state_27073[(2)]);
var state_27073__$1 = state_27073;
var statearr_27113_27184 = state_27073__$1;
(statearr_27113_27184[(2)] = inst_27057);

(statearr_27113_27184[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (44))){
var inst_27066 = (state_27073[(2)]);
var state_27073__$1 = (function (){var statearr_27114 = state_27073;
(statearr_27114[(28)] = inst_27066);

return statearr_27114;
})();
var statearr_27115_27185 = state_27073__$1;
(statearr_27115_27185[(2)] = null);

(statearr_27115_27185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (6))){
var inst_27005 = (state_27073[(29)]);
var inst_27004 = cljs.core.deref.call(null,cs);
var inst_27005__$1 = cljs.core.keys.call(null,inst_27004);
var inst_27006 = cljs.core.count.call(null,inst_27005__$1);
var inst_27007 = cljs.core.reset_BANG_.call(null,dctr,inst_27006);
var inst_27012 = cljs.core.seq.call(null,inst_27005__$1);
var inst_27013 = inst_27012;
var inst_27014 = null;
var inst_27015 = (0);
var inst_27016 = (0);
var state_27073__$1 = (function (){var statearr_27116 = state_27073;
(statearr_27116[(20)] = inst_27015);

(statearr_27116[(21)] = inst_27013);

(statearr_27116[(9)] = inst_27014);

(statearr_27116[(10)] = inst_27016);

(statearr_27116[(29)] = inst_27005__$1);

(statearr_27116[(30)] = inst_27007);

return statearr_27116;
})();
var statearr_27117_27186 = state_27073__$1;
(statearr_27117_27186[(2)] = null);

(statearr_27117_27186[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (28))){
var inst_27032 = (state_27073[(25)]);
var inst_27013 = (state_27073[(21)]);
var inst_27032__$1 = cljs.core.seq.call(null,inst_27013);
var state_27073__$1 = (function (){var statearr_27118 = state_27073;
(statearr_27118[(25)] = inst_27032__$1);

return statearr_27118;
})();
if(inst_27032__$1){
var statearr_27119_27187 = state_27073__$1;
(statearr_27119_27187[(1)] = (33));

} else {
var statearr_27120_27188 = state_27073__$1;
(statearr_27120_27188[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (25))){
var inst_27015 = (state_27073[(20)]);
var inst_27016 = (state_27073[(10)]);
var inst_27018 = (inst_27016 < inst_27015);
var inst_27019 = inst_27018;
var state_27073__$1 = state_27073;
if(cljs.core.truth_(inst_27019)){
var statearr_27121_27189 = state_27073__$1;
(statearr_27121_27189[(1)] = (27));

} else {
var statearr_27122_27190 = state_27073__$1;
(statearr_27122_27190[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (34))){
var state_27073__$1 = state_27073;
var statearr_27123_27191 = state_27073__$1;
(statearr_27123_27191[(2)] = null);

(statearr_27123_27191[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (17))){
var state_27073__$1 = state_27073;
var statearr_27124_27192 = state_27073__$1;
(statearr_27124_27192[(2)] = null);

(statearr_27124_27192[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (3))){
var inst_27071 = (state_27073[(2)]);
var state_27073__$1 = state_27073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27073__$1,inst_27071);
} else {
if((state_val_27074 === (12))){
var inst_27000 = (state_27073[(2)]);
var state_27073__$1 = state_27073;
var statearr_27125_27193 = state_27073__$1;
(statearr_27125_27193[(2)] = inst_27000);

(statearr_27125_27193[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (2))){
var state_27073__$1 = state_27073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27073__$1,(4),ch);
} else {
if((state_val_27074 === (23))){
var state_27073__$1 = state_27073;
var statearr_27126_27194 = state_27073__$1;
(statearr_27126_27194[(2)] = null);

(statearr_27126_27194[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (35))){
var inst_27055 = (state_27073[(2)]);
var state_27073__$1 = state_27073;
var statearr_27127_27195 = state_27073__$1;
(statearr_27127_27195[(2)] = inst_27055);

(statearr_27127_27195[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (19))){
var inst_26974 = (state_27073[(7)]);
var inst_26978 = cljs.core.chunk_first.call(null,inst_26974);
var inst_26979 = cljs.core.chunk_rest.call(null,inst_26974);
var inst_26980 = cljs.core.count.call(null,inst_26978);
var inst_26954 = inst_26979;
var inst_26955 = inst_26978;
var inst_26956 = inst_26980;
var inst_26957 = (0);
var state_27073__$1 = (function (){var statearr_27128 = state_27073;
(statearr_27128[(13)] = inst_26954);

(statearr_27128[(15)] = inst_26956);

(statearr_27128[(16)] = inst_26955);

(statearr_27128[(17)] = inst_26957);

return statearr_27128;
})();
var statearr_27129_27196 = state_27073__$1;
(statearr_27129_27196[(2)] = null);

(statearr_27129_27196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (11))){
var inst_26974 = (state_27073[(7)]);
var inst_26954 = (state_27073[(13)]);
var inst_26974__$1 = cljs.core.seq.call(null,inst_26954);
var state_27073__$1 = (function (){var statearr_27130 = state_27073;
(statearr_27130[(7)] = inst_26974__$1);

return statearr_27130;
})();
if(inst_26974__$1){
var statearr_27131_27197 = state_27073__$1;
(statearr_27131_27197[(1)] = (16));

} else {
var statearr_27132_27198 = state_27073__$1;
(statearr_27132_27198[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (9))){
var inst_27002 = (state_27073[(2)]);
var state_27073__$1 = state_27073;
var statearr_27133_27199 = state_27073__$1;
(statearr_27133_27199[(2)] = inst_27002);

(statearr_27133_27199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (5))){
var inst_26952 = cljs.core.deref.call(null,cs);
var inst_26953 = cljs.core.seq.call(null,inst_26952);
var inst_26954 = inst_26953;
var inst_26955 = null;
var inst_26956 = (0);
var inst_26957 = (0);
var state_27073__$1 = (function (){var statearr_27134 = state_27073;
(statearr_27134[(13)] = inst_26954);

(statearr_27134[(15)] = inst_26956);

(statearr_27134[(16)] = inst_26955);

(statearr_27134[(17)] = inst_26957);

return statearr_27134;
})();
var statearr_27135_27200 = state_27073__$1;
(statearr_27135_27200[(2)] = null);

(statearr_27135_27200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (14))){
var state_27073__$1 = state_27073;
var statearr_27136_27201 = state_27073__$1;
(statearr_27136_27201[(2)] = null);

(statearr_27136_27201[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (45))){
var inst_27063 = (state_27073[(2)]);
var state_27073__$1 = state_27073;
var statearr_27137_27202 = state_27073__$1;
(statearr_27137_27202[(2)] = inst_27063);

(statearr_27137_27202[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (26))){
var inst_27005 = (state_27073[(29)]);
var inst_27059 = (state_27073[(2)]);
var inst_27060 = cljs.core.seq.call(null,inst_27005);
var state_27073__$1 = (function (){var statearr_27138 = state_27073;
(statearr_27138[(31)] = inst_27059);

return statearr_27138;
})();
if(inst_27060){
var statearr_27139_27203 = state_27073__$1;
(statearr_27139_27203[(1)] = (42));

} else {
var statearr_27140_27204 = state_27073__$1;
(statearr_27140_27204[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (16))){
var inst_26974 = (state_27073[(7)]);
var inst_26976 = cljs.core.chunked_seq_QMARK_.call(null,inst_26974);
var state_27073__$1 = state_27073;
if(inst_26976){
var statearr_27141_27205 = state_27073__$1;
(statearr_27141_27205[(1)] = (19));

} else {
var statearr_27142_27206 = state_27073__$1;
(statearr_27142_27206[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (38))){
var inst_27052 = (state_27073[(2)]);
var state_27073__$1 = state_27073;
var statearr_27143_27207 = state_27073__$1;
(statearr_27143_27207[(2)] = inst_27052);

(statearr_27143_27207[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (30))){
var state_27073__$1 = state_27073;
var statearr_27144_27208 = state_27073__$1;
(statearr_27144_27208[(2)] = null);

(statearr_27144_27208[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (10))){
var inst_26955 = (state_27073[(16)]);
var inst_26957 = (state_27073[(17)]);
var inst_26963 = cljs.core._nth.call(null,inst_26955,inst_26957);
var inst_26964 = cljs.core.nth.call(null,inst_26963,(0),null);
var inst_26965 = cljs.core.nth.call(null,inst_26963,(1),null);
var state_27073__$1 = (function (){var statearr_27145 = state_27073;
(statearr_27145[(26)] = inst_26964);

return statearr_27145;
})();
if(cljs.core.truth_(inst_26965)){
var statearr_27146_27209 = state_27073__$1;
(statearr_27146_27209[(1)] = (13));

} else {
var statearr_27147_27210 = state_27073__$1;
(statearr_27147_27210[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (18))){
var inst_26998 = (state_27073[(2)]);
var state_27073__$1 = state_27073;
var statearr_27148_27211 = state_27073__$1;
(statearr_27148_27211[(2)] = inst_26998);

(statearr_27148_27211[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (42))){
var state_27073__$1 = state_27073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27073__$1,(45),dchan);
} else {
if((state_val_27074 === (37))){
var inst_27032 = (state_27073[(25)]);
var inst_26945 = (state_27073[(12)]);
var inst_27041 = (state_27073[(23)]);
var inst_27041__$1 = cljs.core.first.call(null,inst_27032);
var inst_27042 = cljs.core.async.put_BANG_.call(null,inst_27041__$1,inst_26945,done);
var state_27073__$1 = (function (){var statearr_27149 = state_27073;
(statearr_27149[(23)] = inst_27041__$1);

return statearr_27149;
})();
if(cljs.core.truth_(inst_27042)){
var statearr_27150_27212 = state_27073__$1;
(statearr_27150_27212[(1)] = (39));

} else {
var statearr_27151_27213 = state_27073__$1;
(statearr_27151_27213[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (8))){
var inst_26956 = (state_27073[(15)]);
var inst_26957 = (state_27073[(17)]);
var inst_26959 = (inst_26957 < inst_26956);
var inst_26960 = inst_26959;
var state_27073__$1 = state_27073;
if(cljs.core.truth_(inst_26960)){
var statearr_27152_27214 = state_27073__$1;
(statearr_27152_27214[(1)] = (10));

} else {
var statearr_27153_27215 = state_27073__$1;
(statearr_27153_27215[(1)] = (11));

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
});})(c__21398__auto___27161,cs,m,dchan,dctr,done))
;
return ((function (switch__21336__auto__,c__21398__auto___27161,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21337__auto__ = null;
var cljs$core$async$mult_$_state_machine__21337__auto____0 = (function (){
var statearr_27157 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27157[(0)] = cljs$core$async$mult_$_state_machine__21337__auto__);

(statearr_27157[(1)] = (1));

return statearr_27157;
});
var cljs$core$async$mult_$_state_machine__21337__auto____1 = (function (state_27073){
while(true){
var ret_value__21338__auto__ = (function (){try{while(true){
var result__21339__auto__ = switch__21336__auto__.call(null,state_27073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21339__auto__;
}
break;
}
}catch (e27158){if((e27158 instanceof Object)){
var ex__21340__auto__ = e27158;
var statearr_27159_27216 = state_27073;
(statearr_27159_27216[(5)] = ex__21340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27217 = state_27073;
state_27073 = G__27217;
continue;
} else {
return ret_value__21338__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21337__auto__ = function(state_27073){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21337__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21337__auto____1.call(this,state_27073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21337__auto____0;
cljs$core$async$mult_$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21337__auto____1;
return cljs$core$async$mult_$_state_machine__21337__auto__;
})()
;})(switch__21336__auto__,c__21398__auto___27161,cs,m,dchan,dctr,done))
})();
var state__21400__auto__ = (function (){var statearr_27160 = f__21399__auto__.call(null);
(statearr_27160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21398__auto___27161);

return statearr_27160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21400__auto__);
});})(c__21398__auto___27161,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__27219 = arguments.length;
switch (G__27219) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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

cljs.core.async.Mix = (function (){var obj27222 = {};
return obj27222;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__18162__auto__ = m;
if(and__18162__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__18162__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18810__auto__ = (((m == null))?null:m);
return (function (){var or__18174__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18810__auto__)]);
if(or__18174__auto__){
return or__18174__auto__;
} else {
var or__18174__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__18174__auto____$1){
return or__18174__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__18162__auto__ = m;
if(and__18162__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__18162__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18810__auto__ = (((m == null))?null:m);
return (function (){var or__18174__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18810__auto__)]);
if(or__18174__auto__){
return or__18174__auto__;
} else {
var or__18174__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__18174__auto____$1){
return or__18174__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__18162__auto__ = m;
if(and__18162__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__18162__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18810__auto__ = (((m == null))?null:m);
return (function (){var or__18174__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18810__auto__)]);
if(or__18174__auto__){
return or__18174__auto__;
} else {
var or__18174__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__18174__auto____$1){
return or__18174__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__18162__auto__ = m;
if(and__18162__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__18162__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18810__auto__ = (((m == null))?null:m);
return (function (){var or__18174__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18810__auto__)]);
if(or__18174__auto__){
return or__18174__auto__;
} else {
var or__18174__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__18174__auto____$1){
return or__18174__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__18162__auto__ = m;
if(and__18162__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__18162__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18810__auto__ = (((m == null))?null:m);
return (function (){var or__18174__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18810__auto__)]);
if(or__18174__auto__){
return or__18174__auto__;
} else {
var or__18174__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__18174__auto____$1){
return or__18174__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__19214__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19214__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27227){
var map__27228 = p__27227;
var map__27228__$1 = ((cljs.core.seq_QMARK_.call(null,map__27228))?cljs.core.apply.call(null,cljs.core.hash_map,map__27228):map__27228);
var opts = map__27228__$1;
var statearr_27229_27232 = state;
(statearr_27229_27232[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__27228,map__27228__$1,opts){
return (function (val){
var statearr_27230_27233 = state;
(statearr_27230_27233[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27228,map__27228__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_27231_27234 = state;
(statearr_27231_27234[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27223){
var G__27224 = cljs.core.first.call(null,seq27223);
var seq27223__$1 = cljs.core.next.call(null,seq27223);
var G__27225 = cljs.core.first.call(null,seq27223__$1);
var seq27223__$2 = cljs.core.next.call(null,seq27223__$1);
var G__27226 = cljs.core.first.call(null,seq27223__$2);
var seq27223__$3 = cljs.core.next.call(null,seq27223__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27224,G__27225,G__27226,seq27223__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
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
if(typeof cljs.core.async.t27354 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27354 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27355){
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
this.meta27355 = meta27355;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27354.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t27354.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27354.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27354.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27354.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27354.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27354.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27354.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27354.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27356){
var self__ = this;
var _27356__$1 = this;
return self__.meta27355;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27356,meta27355__$1){
var self__ = this;
var _27356__$1 = this;
return (new cljs.core.async.t27354(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27355__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27354.cljs$lang$type = true;

cljs.core.async.t27354.cljs$lang$ctorStr = "cljs.core.async/t27354";

cljs.core.async.t27354.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18753__auto__,writer__18754__auto__,opt__18755__auto__){
return cljs.core._write.call(null,writer__18754__auto__,"cljs.core.async/t27354");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t27354 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t27354(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27355){
return (new cljs.core.async.t27354(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27355));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t27354(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21398__auto___27473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21398__auto___27473,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21399__auto__ = (function (){var switch__21336__auto__ = ((function (c__21398__auto___27473,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27426){
var state_val_27427 = (state_27426[(1)]);
if((state_val_27427 === (7))){
var inst_27370 = (state_27426[(7)]);
var inst_27375 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27370);
var state_27426__$1 = state_27426;
var statearr_27428_27474 = state_27426__$1;
(statearr_27428_27474[(2)] = inst_27375);

(statearr_27428_27474[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27427 === (20))){
var inst_27385 = (state_27426[(8)]);
var state_27426__$1 = state_27426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27426__$1,(23),out,inst_27385);
} else {
if((state_val_27427 === (1))){
var inst_27360 = (state_27426[(9)]);
var inst_27360__$1 = calc_state.call(null);
var inst_27361 = cljs.core.seq_QMARK_.call(null,inst_27360__$1);
var state_27426__$1 = (function (){var statearr_27429 = state_27426;
(statearr_27429[(9)] = inst_27360__$1);

return statearr_27429;
})();
if(inst_27361){
var statearr_27430_27475 = state_27426__$1;
(statearr_27430_27475[(1)] = (2));

} else {
var statearr_27431_27476 = state_27426__$1;
(statearr_27431_27476[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27427 === (24))){
var inst_27378 = (state_27426[(10)]);
var inst_27370 = inst_27378;
var state_27426__$1 = (function (){var statearr_27432 = state_27426;
(statearr_27432[(7)] = inst_27370);

return statearr_27432;
})();
var statearr_27433_27477 = state_27426__$1;
(statearr_27433_27477[(2)] = null);

(statearr_27433_27477[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27427 === (4))){
var inst_27360 = (state_27426[(9)]);
var inst_27366 = (state_27426[(2)]);
var inst_27367 = cljs.core.get.call(null,inst_27366,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27368 = cljs.core.get.call(null,inst_27366,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27369 = cljs.core.get.call(null,inst_27366,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27370 = inst_27360;
var state_27426__$1 = (function (){var statearr_27434 = state_27426;
(statearr_27434[(11)] = inst_27367);

(statearr_27434[(12)] = inst_27368);

(statearr_27434[(7)] = inst_27370);

(statearr_27434[(13)] = inst_27369);

return statearr_27434;
})();
var statearr_27435_27478 = state_27426__$1;
(statearr_27435_27478[(2)] = null);

(statearr_27435_27478[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27427 === (15))){
var state_27426__$1 = state_27426;
var statearr_27436_27479 = state_27426__$1;
(statearr_27436_27479[(2)] = null);

(statearr_27436_27479[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27427 === (21))){
var inst_27378 = (state_27426[(10)]);
var inst_27370 = inst_27378;
var state_27426__$1 = (function (){var statearr_27437 = state_27426;
(statearr_27437[(7)] = inst_27370);

return statearr_27437;
})();
var statearr_27438_27480 = state_27426__$1;
(statearr_27438_27480[(2)] = null);

(statearr_27438_27480[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27427 === (13))){
var inst_27422 = (state_27426[(2)]);
var state_27426__$1 = state_27426;
var statearr_27439_27481 = state_27426__$1;
(statearr_27439_27481[(2)] = inst_27422);

(statearr_27439_27481[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27427 === (22))){
var inst_27420 = (state_27426[(2)]);
var state_27426__$1 = state_27426;
var statearr_27440_27482 = state_27426__$1;
(statearr_27440_27482[(2)] = inst_27420);

(statearr_27440_27482[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27427 === (6))){
var inst_27424 = (state_27426[(2)]);
var state_27426__$1 = state_27426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27426__$1,inst_27424);
} else {
if((state_val_27427 === (25))){
var state_27426__$1 = state_27426;
var statearr_27441_27483 = state_27426__$1;
(statearr_27441_27483[(2)] = null);

(statearr_27441_27483[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27427 === (17))){
var inst_27400 = (state_27426[(14)]);
var state_27426__$1 = state_27426;
var statearr_27442_27484 = state_27426__$1;
(statearr_27442_27484[(2)] = inst_27400);

(statearr_27442_27484[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27427 === (3))){
var inst_27360 = (state_27426[(9)]);
var state_27426__$1 = state_27426;
var statearr_27443_27485 = state_27426__$1;
(statearr_27443_27485[(2)] = inst_27360);

(statearr_27443_27485[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27427 === (12))){
var inst_27381 = (state_27426[(15)]);
var inst_27386 = (state_27426[(16)]);
var inst_27400 = (state_27426[(14)]);
var inst_27400__$1 = inst_27381.call(null,inst_27386);
var state_27426__$1 = (function (){var statearr_27444 = state_27426;
(statearr_27444[(14)] = inst_27400__$1);

return statearr_27444;
})();
if(cljs.core.truth_(inst_27400__$1)){
var statearr_27445_27486 = state_27426__$1;
(statearr_27445_27486[(1)] = (17));

} else {
var statearr_27446_27487 = state_27426__$1;
(statearr_27446_27487[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27427 === (2))){
var inst_27360 = (state_27426[(9)]);
var inst_27363 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27360);
var state_27426__$1 = state_27426;
var statearr_27447_27488 = state_27426__$1;
(statearr_27447_27488[(2)] = inst_27363);

(statearr_27447_27488[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27427 === (23))){
var inst_27411 = (state_27426[(2)]);
var state_27426__$1 = state_27426;
if(cljs.core.truth_(inst_27411)){
var statearr_27448_27489 = state_27426__$1;
(statearr_27448_27489[(1)] = (24));

} else {
var statearr_27449_27490 = state_27426__$1;
(statearr_27449_27490[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27427 === (19))){
var inst_27408 = (state_27426[(2)]);
var state_27426__$1 = state_27426;
if(cljs.core.truth_(inst_27408)){
var statearr_27450_27491 = state_27426__$1;
(statearr_27450_27491[(1)] = (20));

} else {
var statearr_27451_27492 = state_27426__$1;
(statearr_27451_27492[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27427 === (11))){
var inst_27385 = (state_27426[(8)]);
var inst_27391 = (inst_27385 == null);
var state_27426__$1 = state_27426;
if(cljs.core.truth_(inst_27391)){
var statearr_27452_27493 = state_27426__$1;
(statearr_27452_27493[(1)] = (14));

} else {
var statearr_27453_27494 = state_27426__$1;
(statearr_27453_27494[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27427 === (9))){
var inst_27378 = (state_27426[(10)]);
var inst_27378__$1 = (state_27426[(2)]);
var inst_27379 = cljs.core.get.call(null,inst_27378__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27380 = cljs.core.get.call(null,inst_27378__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27381 = cljs.core.get.call(null,inst_27378__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_27426__$1 = (function (){var statearr_27454 = state_27426;
(statearr_27454[(15)] = inst_27381);

(statearr_27454[(17)] = inst_27380);

(statearr_27454[(10)] = inst_27378__$1);

return statearr_27454;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27426__$1,(10),inst_27379);
} else {
if((state_val_27427 === (5))){
var inst_27370 = (state_27426[(7)]);
var inst_27373 = cljs.core.seq_QMARK_.call(null,inst_27370);
var state_27426__$1 = state_27426;
if(inst_27373){
var statearr_27455_27495 = state_27426__$1;
(statearr_27455_27495[(1)] = (7));

} else {
var statearr_27456_27496 = state_27426__$1;
(statearr_27456_27496[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27427 === (14))){
var inst_27386 = (state_27426[(16)]);
var inst_27393 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27386);
var state_27426__$1 = state_27426;
var statearr_27457_27497 = state_27426__$1;
(statearr_27457_27497[(2)] = inst_27393);

(statearr_27457_27497[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27427 === (26))){
var inst_27416 = (state_27426[(2)]);
var state_27426__$1 = state_27426;
var statearr_27458_27498 = state_27426__$1;
(statearr_27458_27498[(2)] = inst_27416);

(statearr_27458_27498[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27427 === (16))){
var inst_27396 = (state_27426[(2)]);
var inst_27397 = calc_state.call(null);
var inst_27370 = inst_27397;
var state_27426__$1 = (function (){var statearr_27459 = state_27426;
(statearr_27459[(18)] = inst_27396);

(statearr_27459[(7)] = inst_27370);

return statearr_27459;
})();
var statearr_27460_27499 = state_27426__$1;
(statearr_27460_27499[(2)] = null);

(statearr_27460_27499[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27427 === (10))){
var inst_27386 = (state_27426[(16)]);
var inst_27385 = (state_27426[(8)]);
var inst_27384 = (state_27426[(2)]);
var inst_27385__$1 = cljs.core.nth.call(null,inst_27384,(0),null);
var inst_27386__$1 = cljs.core.nth.call(null,inst_27384,(1),null);
var inst_27387 = (inst_27385__$1 == null);
var inst_27388 = cljs.core._EQ_.call(null,inst_27386__$1,change);
var inst_27389 = (inst_27387) || (inst_27388);
var state_27426__$1 = (function (){var statearr_27461 = state_27426;
(statearr_27461[(16)] = inst_27386__$1);

(statearr_27461[(8)] = inst_27385__$1);

return statearr_27461;
})();
if(cljs.core.truth_(inst_27389)){
var statearr_27462_27500 = state_27426__$1;
(statearr_27462_27500[(1)] = (11));

} else {
var statearr_27463_27501 = state_27426__$1;
(statearr_27463_27501[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27427 === (18))){
var inst_27381 = (state_27426[(15)]);
var inst_27386 = (state_27426[(16)]);
var inst_27380 = (state_27426[(17)]);
var inst_27403 = cljs.core.empty_QMARK_.call(null,inst_27381);
var inst_27404 = inst_27380.call(null,inst_27386);
var inst_27405 = cljs.core.not.call(null,inst_27404);
var inst_27406 = (inst_27403) && (inst_27405);
var state_27426__$1 = state_27426;
var statearr_27464_27502 = state_27426__$1;
(statearr_27464_27502[(2)] = inst_27406);

(statearr_27464_27502[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27427 === (8))){
var inst_27370 = (state_27426[(7)]);
var state_27426__$1 = state_27426;
var statearr_27465_27503 = state_27426__$1;
(statearr_27465_27503[(2)] = inst_27370);

(statearr_27465_27503[(1)] = (9));


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
});})(c__21398__auto___27473,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21336__auto__,c__21398__auto___27473,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21337__auto__ = null;
var cljs$core$async$mix_$_state_machine__21337__auto____0 = (function (){
var statearr_27469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27469[(0)] = cljs$core$async$mix_$_state_machine__21337__auto__);

(statearr_27469[(1)] = (1));

return statearr_27469;
});
var cljs$core$async$mix_$_state_machine__21337__auto____1 = (function (state_27426){
while(true){
var ret_value__21338__auto__ = (function (){try{while(true){
var result__21339__auto__ = switch__21336__auto__.call(null,state_27426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21339__auto__;
}
break;
}
}catch (e27470){if((e27470 instanceof Object)){
var ex__21340__auto__ = e27470;
var statearr_27471_27504 = state_27426;
(statearr_27471_27504[(5)] = ex__21340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27505 = state_27426;
state_27426 = G__27505;
continue;
} else {
return ret_value__21338__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21337__auto__ = function(state_27426){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21337__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21337__auto____1.call(this,state_27426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21337__auto____0;
cljs$core$async$mix_$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21337__auto____1;
return cljs$core$async$mix_$_state_machine__21337__auto__;
})()
;})(switch__21336__auto__,c__21398__auto___27473,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21400__auto__ = (function (){var statearr_27472 = f__21399__auto__.call(null);
(statearr_27472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21398__auto___27473);

return statearr_27472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21400__auto__);
});})(c__21398__auto___27473,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
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

cljs.core.async.Pub = (function (){var obj27507 = {};
return obj27507;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__18162__auto__ = p;
if(and__18162__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__18162__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18810__auto__ = (((p == null))?null:p);
return (function (){var or__18174__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18810__auto__)]);
if(or__18174__auto__){
return or__18174__auto__;
} else {
var or__18174__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__18174__auto____$1){
return or__18174__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__18162__auto__ = p;
if(and__18162__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__18162__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18810__auto__ = (((p == null))?null:p);
return (function (){var or__18174__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18810__auto__)]);
if(or__18174__auto__){
return or__18174__auto__;
} else {
var or__18174__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__18174__auto____$1){
return or__18174__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__27509 = arguments.length;
switch (G__27509) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__18162__auto__ = p;
if(and__18162__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__18162__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18810__auto__ = (((p == null))?null:p);
return (function (){var or__18174__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18810__auto__)]);
if(or__18174__auto__){
return or__18174__auto__;
} else {
var or__18174__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18174__auto____$1){
return or__18174__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__18162__auto__ = p;
if(and__18162__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__18162__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18810__auto__ = (((p == null))?null:p);
return (function (){var or__18174__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18810__auto__)]);
if(or__18174__auto__){
return or__18174__auto__;
} else {
var or__18174__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18174__auto____$1){
return or__18174__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__27513 = arguments.length;
switch (G__27513) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18174__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18174__auto__)){
return or__18174__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18174__auto__,mults){
return (function (p1__27511_SHARP_){
if(cljs.core.truth_(p1__27511_SHARP_.call(null,topic))){
return p1__27511_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27511_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18174__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t27514 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27514 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta27515){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta27515 = meta27515;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27514.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t27514.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t27514.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t27514.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t27514.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t27514.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27514.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t27514.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27516){
var self__ = this;
var _27516__$1 = this;
return self__.meta27515;
});})(mults,ensure_mult))
;

cljs.core.async.t27514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27516,meta27515__$1){
var self__ = this;
var _27516__$1 = this;
return (new cljs.core.async.t27514(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta27515__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t27514.cljs$lang$type = true;

cljs.core.async.t27514.cljs$lang$ctorStr = "cljs.core.async/t27514";

cljs.core.async.t27514.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18753__auto__,writer__18754__auto__,opt__18755__auto__){
return cljs.core._write.call(null,writer__18754__auto__,"cljs.core.async/t27514");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t27514 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t27514(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta27515){
return (new cljs.core.async.t27514(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta27515));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t27514(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21398__auto___27637 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21398__auto___27637,mults,ensure_mult,p){
return (function (){
var f__21399__auto__ = (function (){var switch__21336__auto__ = ((function (c__21398__auto___27637,mults,ensure_mult,p){
return (function (state_27588){
var state_val_27589 = (state_27588[(1)]);
if((state_val_27589 === (7))){
var inst_27584 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
var statearr_27590_27638 = state_27588__$1;
(statearr_27590_27638[(2)] = inst_27584);

(statearr_27590_27638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (20))){
var state_27588__$1 = state_27588;
var statearr_27591_27639 = state_27588__$1;
(statearr_27591_27639[(2)] = null);

(statearr_27591_27639[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (1))){
var state_27588__$1 = state_27588;
var statearr_27592_27640 = state_27588__$1;
(statearr_27592_27640[(2)] = null);

(statearr_27592_27640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (24))){
var inst_27567 = (state_27588[(7)]);
var inst_27576 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27567);
var state_27588__$1 = state_27588;
var statearr_27593_27641 = state_27588__$1;
(statearr_27593_27641[(2)] = inst_27576);

(statearr_27593_27641[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (4))){
var inst_27519 = (state_27588[(8)]);
var inst_27519__$1 = (state_27588[(2)]);
var inst_27520 = (inst_27519__$1 == null);
var state_27588__$1 = (function (){var statearr_27594 = state_27588;
(statearr_27594[(8)] = inst_27519__$1);

return statearr_27594;
})();
if(cljs.core.truth_(inst_27520)){
var statearr_27595_27642 = state_27588__$1;
(statearr_27595_27642[(1)] = (5));

} else {
var statearr_27596_27643 = state_27588__$1;
(statearr_27596_27643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (15))){
var inst_27561 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
var statearr_27597_27644 = state_27588__$1;
(statearr_27597_27644[(2)] = inst_27561);

(statearr_27597_27644[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (21))){
var inst_27581 = (state_27588[(2)]);
var state_27588__$1 = (function (){var statearr_27598 = state_27588;
(statearr_27598[(9)] = inst_27581);

return statearr_27598;
})();
var statearr_27599_27645 = state_27588__$1;
(statearr_27599_27645[(2)] = null);

(statearr_27599_27645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (13))){
var inst_27543 = (state_27588[(10)]);
var inst_27545 = cljs.core.chunked_seq_QMARK_.call(null,inst_27543);
var state_27588__$1 = state_27588;
if(inst_27545){
var statearr_27600_27646 = state_27588__$1;
(statearr_27600_27646[(1)] = (16));

} else {
var statearr_27601_27647 = state_27588__$1;
(statearr_27601_27647[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (22))){
var inst_27573 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
if(cljs.core.truth_(inst_27573)){
var statearr_27602_27648 = state_27588__$1;
(statearr_27602_27648[(1)] = (23));

} else {
var statearr_27603_27649 = state_27588__$1;
(statearr_27603_27649[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (6))){
var inst_27519 = (state_27588[(8)]);
var inst_27567 = (state_27588[(7)]);
var inst_27569 = (state_27588[(11)]);
var inst_27567__$1 = topic_fn.call(null,inst_27519);
var inst_27568 = cljs.core.deref.call(null,mults);
var inst_27569__$1 = cljs.core.get.call(null,inst_27568,inst_27567__$1);
var state_27588__$1 = (function (){var statearr_27604 = state_27588;
(statearr_27604[(7)] = inst_27567__$1);

(statearr_27604[(11)] = inst_27569__$1);

return statearr_27604;
})();
if(cljs.core.truth_(inst_27569__$1)){
var statearr_27605_27650 = state_27588__$1;
(statearr_27605_27650[(1)] = (19));

} else {
var statearr_27606_27651 = state_27588__$1;
(statearr_27606_27651[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (25))){
var inst_27578 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
var statearr_27607_27652 = state_27588__$1;
(statearr_27607_27652[(2)] = inst_27578);

(statearr_27607_27652[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (17))){
var inst_27543 = (state_27588[(10)]);
var inst_27552 = cljs.core.first.call(null,inst_27543);
var inst_27553 = cljs.core.async.muxch_STAR_.call(null,inst_27552);
var inst_27554 = cljs.core.async.close_BANG_.call(null,inst_27553);
var inst_27555 = cljs.core.next.call(null,inst_27543);
var inst_27529 = inst_27555;
var inst_27530 = null;
var inst_27531 = (0);
var inst_27532 = (0);
var state_27588__$1 = (function (){var statearr_27608 = state_27588;
(statearr_27608[(12)] = inst_27529);

(statearr_27608[(13)] = inst_27530);

(statearr_27608[(14)] = inst_27531);

(statearr_27608[(15)] = inst_27554);

(statearr_27608[(16)] = inst_27532);

return statearr_27608;
})();
var statearr_27609_27653 = state_27588__$1;
(statearr_27609_27653[(2)] = null);

(statearr_27609_27653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (3))){
var inst_27586 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27588__$1,inst_27586);
} else {
if((state_val_27589 === (12))){
var inst_27563 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
var statearr_27610_27654 = state_27588__$1;
(statearr_27610_27654[(2)] = inst_27563);

(statearr_27610_27654[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (2))){
var state_27588__$1 = state_27588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27588__$1,(4),ch);
} else {
if((state_val_27589 === (23))){
var state_27588__$1 = state_27588;
var statearr_27611_27655 = state_27588__$1;
(statearr_27611_27655[(2)] = null);

(statearr_27611_27655[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (19))){
var inst_27519 = (state_27588[(8)]);
var inst_27569 = (state_27588[(11)]);
var inst_27571 = cljs.core.async.muxch_STAR_.call(null,inst_27569);
var state_27588__$1 = state_27588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27588__$1,(22),inst_27571,inst_27519);
} else {
if((state_val_27589 === (11))){
var inst_27529 = (state_27588[(12)]);
var inst_27543 = (state_27588[(10)]);
var inst_27543__$1 = cljs.core.seq.call(null,inst_27529);
var state_27588__$1 = (function (){var statearr_27612 = state_27588;
(statearr_27612[(10)] = inst_27543__$1);

return statearr_27612;
})();
if(inst_27543__$1){
var statearr_27613_27656 = state_27588__$1;
(statearr_27613_27656[(1)] = (13));

} else {
var statearr_27614_27657 = state_27588__$1;
(statearr_27614_27657[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (9))){
var inst_27565 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
var statearr_27615_27658 = state_27588__$1;
(statearr_27615_27658[(2)] = inst_27565);

(statearr_27615_27658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (5))){
var inst_27526 = cljs.core.deref.call(null,mults);
var inst_27527 = cljs.core.vals.call(null,inst_27526);
var inst_27528 = cljs.core.seq.call(null,inst_27527);
var inst_27529 = inst_27528;
var inst_27530 = null;
var inst_27531 = (0);
var inst_27532 = (0);
var state_27588__$1 = (function (){var statearr_27616 = state_27588;
(statearr_27616[(12)] = inst_27529);

(statearr_27616[(13)] = inst_27530);

(statearr_27616[(14)] = inst_27531);

(statearr_27616[(16)] = inst_27532);

return statearr_27616;
})();
var statearr_27617_27659 = state_27588__$1;
(statearr_27617_27659[(2)] = null);

(statearr_27617_27659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (14))){
var state_27588__$1 = state_27588;
var statearr_27621_27660 = state_27588__$1;
(statearr_27621_27660[(2)] = null);

(statearr_27621_27660[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (16))){
var inst_27543 = (state_27588[(10)]);
var inst_27547 = cljs.core.chunk_first.call(null,inst_27543);
var inst_27548 = cljs.core.chunk_rest.call(null,inst_27543);
var inst_27549 = cljs.core.count.call(null,inst_27547);
var inst_27529 = inst_27548;
var inst_27530 = inst_27547;
var inst_27531 = inst_27549;
var inst_27532 = (0);
var state_27588__$1 = (function (){var statearr_27622 = state_27588;
(statearr_27622[(12)] = inst_27529);

(statearr_27622[(13)] = inst_27530);

(statearr_27622[(14)] = inst_27531);

(statearr_27622[(16)] = inst_27532);

return statearr_27622;
})();
var statearr_27623_27661 = state_27588__$1;
(statearr_27623_27661[(2)] = null);

(statearr_27623_27661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (10))){
var inst_27529 = (state_27588[(12)]);
var inst_27530 = (state_27588[(13)]);
var inst_27531 = (state_27588[(14)]);
var inst_27532 = (state_27588[(16)]);
var inst_27537 = cljs.core._nth.call(null,inst_27530,inst_27532);
var inst_27538 = cljs.core.async.muxch_STAR_.call(null,inst_27537);
var inst_27539 = cljs.core.async.close_BANG_.call(null,inst_27538);
var inst_27540 = (inst_27532 + (1));
var tmp27618 = inst_27529;
var tmp27619 = inst_27530;
var tmp27620 = inst_27531;
var inst_27529__$1 = tmp27618;
var inst_27530__$1 = tmp27619;
var inst_27531__$1 = tmp27620;
var inst_27532__$1 = inst_27540;
var state_27588__$1 = (function (){var statearr_27624 = state_27588;
(statearr_27624[(12)] = inst_27529__$1);

(statearr_27624[(13)] = inst_27530__$1);

(statearr_27624[(14)] = inst_27531__$1);

(statearr_27624[(17)] = inst_27539);

(statearr_27624[(16)] = inst_27532__$1);

return statearr_27624;
})();
var statearr_27625_27662 = state_27588__$1;
(statearr_27625_27662[(2)] = null);

(statearr_27625_27662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (18))){
var inst_27558 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
var statearr_27626_27663 = state_27588__$1;
(statearr_27626_27663[(2)] = inst_27558);

(statearr_27626_27663[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (8))){
var inst_27531 = (state_27588[(14)]);
var inst_27532 = (state_27588[(16)]);
var inst_27534 = (inst_27532 < inst_27531);
var inst_27535 = inst_27534;
var state_27588__$1 = state_27588;
if(cljs.core.truth_(inst_27535)){
var statearr_27627_27664 = state_27588__$1;
(statearr_27627_27664[(1)] = (10));

} else {
var statearr_27628_27665 = state_27588__$1;
(statearr_27628_27665[(1)] = (11));

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
});})(c__21398__auto___27637,mults,ensure_mult,p))
;
return ((function (switch__21336__auto__,c__21398__auto___27637,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21337__auto__ = null;
var cljs$core$async$state_machine__21337__auto____0 = (function (){
var statearr_27632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27632[(0)] = cljs$core$async$state_machine__21337__auto__);

(statearr_27632[(1)] = (1));

return statearr_27632;
});
var cljs$core$async$state_machine__21337__auto____1 = (function (state_27588){
while(true){
var ret_value__21338__auto__ = (function (){try{while(true){
var result__21339__auto__ = switch__21336__auto__.call(null,state_27588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21339__auto__;
}
break;
}
}catch (e27633){if((e27633 instanceof Object)){
var ex__21340__auto__ = e27633;
var statearr_27634_27666 = state_27588;
(statearr_27634_27666[(5)] = ex__21340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27667 = state_27588;
state_27588 = G__27667;
continue;
} else {
return ret_value__21338__auto__;
}
break;
}
});
cljs$core$async$state_machine__21337__auto__ = function(state_27588){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21337__auto____1.call(this,state_27588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21337__auto____0;
cljs$core$async$state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21337__auto____1;
return cljs$core$async$state_machine__21337__auto__;
})()
;})(switch__21336__auto__,c__21398__auto___27637,mults,ensure_mult,p))
})();
var state__21400__auto__ = (function (){var statearr_27635 = f__21399__auto__.call(null);
(statearr_27635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21398__auto___27637);

return statearr_27635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21400__auto__);
});})(c__21398__auto___27637,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__27669 = arguments.length;
switch (G__27669) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__27672 = arguments.length;
switch (G__27672) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__27675 = arguments.length;
switch (G__27675) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var c__21398__auto___27745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21398__auto___27745,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21399__auto__ = (function (){var switch__21336__auto__ = ((function (c__21398__auto___27745,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27714){
var state_val_27715 = (state_27714[(1)]);
if((state_val_27715 === (7))){
var state_27714__$1 = state_27714;
var statearr_27716_27746 = state_27714__$1;
(statearr_27716_27746[(2)] = null);

(statearr_27716_27746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27715 === (1))){
var state_27714__$1 = state_27714;
var statearr_27717_27747 = state_27714__$1;
(statearr_27717_27747[(2)] = null);

(statearr_27717_27747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27715 === (4))){
var inst_27678 = (state_27714[(7)]);
var inst_27680 = (inst_27678 < cnt);
var state_27714__$1 = state_27714;
if(cljs.core.truth_(inst_27680)){
var statearr_27718_27748 = state_27714__$1;
(statearr_27718_27748[(1)] = (6));

} else {
var statearr_27719_27749 = state_27714__$1;
(statearr_27719_27749[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27715 === (15))){
var inst_27710 = (state_27714[(2)]);
var state_27714__$1 = state_27714;
var statearr_27720_27750 = state_27714__$1;
(statearr_27720_27750[(2)] = inst_27710);

(statearr_27720_27750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27715 === (13))){
var inst_27703 = cljs.core.async.close_BANG_.call(null,out);
var state_27714__$1 = state_27714;
var statearr_27721_27751 = state_27714__$1;
(statearr_27721_27751[(2)] = inst_27703);

(statearr_27721_27751[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27715 === (6))){
var state_27714__$1 = state_27714;
var statearr_27722_27752 = state_27714__$1;
(statearr_27722_27752[(2)] = null);

(statearr_27722_27752[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27715 === (3))){
var inst_27712 = (state_27714[(2)]);
var state_27714__$1 = state_27714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27714__$1,inst_27712);
} else {
if((state_val_27715 === (12))){
var inst_27700 = (state_27714[(8)]);
var inst_27700__$1 = (state_27714[(2)]);
var inst_27701 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27700__$1);
var state_27714__$1 = (function (){var statearr_27723 = state_27714;
(statearr_27723[(8)] = inst_27700__$1);

return statearr_27723;
})();
if(cljs.core.truth_(inst_27701)){
var statearr_27724_27753 = state_27714__$1;
(statearr_27724_27753[(1)] = (13));

} else {
var statearr_27725_27754 = state_27714__$1;
(statearr_27725_27754[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27715 === (2))){
var inst_27677 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27678 = (0);
var state_27714__$1 = (function (){var statearr_27726 = state_27714;
(statearr_27726[(9)] = inst_27677);

(statearr_27726[(7)] = inst_27678);

return statearr_27726;
})();
var statearr_27727_27755 = state_27714__$1;
(statearr_27727_27755[(2)] = null);

(statearr_27727_27755[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27715 === (11))){
var inst_27678 = (state_27714[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27714,(10),Object,null,(9));
var inst_27687 = chs__$1.call(null,inst_27678);
var inst_27688 = done.call(null,inst_27678);
var inst_27689 = cljs.core.async.take_BANG_.call(null,inst_27687,inst_27688);
var state_27714__$1 = state_27714;
var statearr_27728_27756 = state_27714__$1;
(statearr_27728_27756[(2)] = inst_27689);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27714__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27715 === (9))){
var inst_27678 = (state_27714[(7)]);
var inst_27691 = (state_27714[(2)]);
var inst_27692 = (inst_27678 + (1));
var inst_27678__$1 = inst_27692;
var state_27714__$1 = (function (){var statearr_27729 = state_27714;
(statearr_27729[(10)] = inst_27691);

(statearr_27729[(7)] = inst_27678__$1);

return statearr_27729;
})();
var statearr_27730_27757 = state_27714__$1;
(statearr_27730_27757[(2)] = null);

(statearr_27730_27757[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27715 === (5))){
var inst_27698 = (state_27714[(2)]);
var state_27714__$1 = (function (){var statearr_27731 = state_27714;
(statearr_27731[(11)] = inst_27698);

return statearr_27731;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27714__$1,(12),dchan);
} else {
if((state_val_27715 === (14))){
var inst_27700 = (state_27714[(8)]);
var inst_27705 = cljs.core.apply.call(null,f,inst_27700);
var state_27714__$1 = state_27714;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27714__$1,(16),out,inst_27705);
} else {
if((state_val_27715 === (16))){
var inst_27707 = (state_27714[(2)]);
var state_27714__$1 = (function (){var statearr_27732 = state_27714;
(statearr_27732[(12)] = inst_27707);

return statearr_27732;
})();
var statearr_27733_27758 = state_27714__$1;
(statearr_27733_27758[(2)] = null);

(statearr_27733_27758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27715 === (10))){
var inst_27682 = (state_27714[(2)]);
var inst_27683 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27714__$1 = (function (){var statearr_27734 = state_27714;
(statearr_27734[(13)] = inst_27682);

return statearr_27734;
})();
var statearr_27735_27759 = state_27714__$1;
(statearr_27735_27759[(2)] = inst_27683);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27714__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27715 === (8))){
var inst_27696 = (state_27714[(2)]);
var state_27714__$1 = state_27714;
var statearr_27736_27760 = state_27714__$1;
(statearr_27736_27760[(2)] = inst_27696);

(statearr_27736_27760[(1)] = (5));


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
});})(c__21398__auto___27745,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21336__auto__,c__21398__auto___27745,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21337__auto__ = null;
var cljs$core$async$state_machine__21337__auto____0 = (function (){
var statearr_27740 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27740[(0)] = cljs$core$async$state_machine__21337__auto__);

(statearr_27740[(1)] = (1));

return statearr_27740;
});
var cljs$core$async$state_machine__21337__auto____1 = (function (state_27714){
while(true){
var ret_value__21338__auto__ = (function (){try{while(true){
var result__21339__auto__ = switch__21336__auto__.call(null,state_27714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21339__auto__;
}
break;
}
}catch (e27741){if((e27741 instanceof Object)){
var ex__21340__auto__ = e27741;
var statearr_27742_27761 = state_27714;
(statearr_27742_27761[(5)] = ex__21340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27762 = state_27714;
state_27714 = G__27762;
continue;
} else {
return ret_value__21338__auto__;
}
break;
}
});
cljs$core$async$state_machine__21337__auto__ = function(state_27714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21337__auto____1.call(this,state_27714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21337__auto____0;
cljs$core$async$state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21337__auto____1;
return cljs$core$async$state_machine__21337__auto__;
})()
;})(switch__21336__auto__,c__21398__auto___27745,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21400__auto__ = (function (){var statearr_27743 = f__21399__auto__.call(null);
(statearr_27743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21398__auto___27745);

return statearr_27743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21400__auto__);
});})(c__21398__auto___27745,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__27765 = arguments.length;
switch (G__27765) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21398__auto___27820 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21398__auto___27820,out){
return (function (){
var f__21399__auto__ = (function (){var switch__21336__auto__ = ((function (c__21398__auto___27820,out){
return (function (state_27795){
var state_val_27796 = (state_27795[(1)]);
if((state_val_27796 === (7))){
var inst_27774 = (state_27795[(7)]);
var inst_27775 = (state_27795[(8)]);
var inst_27774__$1 = (state_27795[(2)]);
var inst_27775__$1 = cljs.core.nth.call(null,inst_27774__$1,(0),null);
var inst_27776 = cljs.core.nth.call(null,inst_27774__$1,(1),null);
var inst_27777 = (inst_27775__$1 == null);
var state_27795__$1 = (function (){var statearr_27797 = state_27795;
(statearr_27797[(7)] = inst_27774__$1);

(statearr_27797[(8)] = inst_27775__$1);

(statearr_27797[(9)] = inst_27776);

return statearr_27797;
})();
if(cljs.core.truth_(inst_27777)){
var statearr_27798_27821 = state_27795__$1;
(statearr_27798_27821[(1)] = (8));

} else {
var statearr_27799_27822 = state_27795__$1;
(statearr_27799_27822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (1))){
var inst_27766 = cljs.core.vec.call(null,chs);
var inst_27767 = inst_27766;
var state_27795__$1 = (function (){var statearr_27800 = state_27795;
(statearr_27800[(10)] = inst_27767);

return statearr_27800;
})();
var statearr_27801_27823 = state_27795__$1;
(statearr_27801_27823[(2)] = null);

(statearr_27801_27823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (4))){
var inst_27767 = (state_27795[(10)]);
var state_27795__$1 = state_27795;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27795__$1,(7),inst_27767);
} else {
if((state_val_27796 === (6))){
var inst_27791 = (state_27795[(2)]);
var state_27795__$1 = state_27795;
var statearr_27802_27824 = state_27795__$1;
(statearr_27802_27824[(2)] = inst_27791);

(statearr_27802_27824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (3))){
var inst_27793 = (state_27795[(2)]);
var state_27795__$1 = state_27795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27795__$1,inst_27793);
} else {
if((state_val_27796 === (2))){
var inst_27767 = (state_27795[(10)]);
var inst_27769 = cljs.core.count.call(null,inst_27767);
var inst_27770 = (inst_27769 > (0));
var state_27795__$1 = state_27795;
if(cljs.core.truth_(inst_27770)){
var statearr_27804_27825 = state_27795__$1;
(statearr_27804_27825[(1)] = (4));

} else {
var statearr_27805_27826 = state_27795__$1;
(statearr_27805_27826[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (11))){
var inst_27767 = (state_27795[(10)]);
var inst_27784 = (state_27795[(2)]);
var tmp27803 = inst_27767;
var inst_27767__$1 = tmp27803;
var state_27795__$1 = (function (){var statearr_27806 = state_27795;
(statearr_27806[(11)] = inst_27784);

(statearr_27806[(10)] = inst_27767__$1);

return statearr_27806;
})();
var statearr_27807_27827 = state_27795__$1;
(statearr_27807_27827[(2)] = null);

(statearr_27807_27827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (9))){
var inst_27775 = (state_27795[(8)]);
var state_27795__$1 = state_27795;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27795__$1,(11),out,inst_27775);
} else {
if((state_val_27796 === (5))){
var inst_27789 = cljs.core.async.close_BANG_.call(null,out);
var state_27795__$1 = state_27795;
var statearr_27808_27828 = state_27795__$1;
(statearr_27808_27828[(2)] = inst_27789);

(statearr_27808_27828[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (10))){
var inst_27787 = (state_27795[(2)]);
var state_27795__$1 = state_27795;
var statearr_27809_27829 = state_27795__$1;
(statearr_27809_27829[(2)] = inst_27787);

(statearr_27809_27829[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (8))){
var inst_27774 = (state_27795[(7)]);
var inst_27775 = (state_27795[(8)]);
var inst_27767 = (state_27795[(10)]);
var inst_27776 = (state_27795[(9)]);
var inst_27779 = (function (){var c = inst_27776;
var v = inst_27775;
var vec__27772 = inst_27774;
var cs = inst_27767;
return ((function (c,v,vec__27772,cs,inst_27774,inst_27775,inst_27767,inst_27776,state_val_27796,c__21398__auto___27820,out){
return (function (p1__27763_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27763_SHARP_);
});
;})(c,v,vec__27772,cs,inst_27774,inst_27775,inst_27767,inst_27776,state_val_27796,c__21398__auto___27820,out))
})();
var inst_27780 = cljs.core.filterv.call(null,inst_27779,inst_27767);
var inst_27767__$1 = inst_27780;
var state_27795__$1 = (function (){var statearr_27810 = state_27795;
(statearr_27810[(10)] = inst_27767__$1);

return statearr_27810;
})();
var statearr_27811_27830 = state_27795__$1;
(statearr_27811_27830[(2)] = null);

(statearr_27811_27830[(1)] = (2));


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
});})(c__21398__auto___27820,out))
;
return ((function (switch__21336__auto__,c__21398__auto___27820,out){
return (function() {
var cljs$core$async$state_machine__21337__auto__ = null;
var cljs$core$async$state_machine__21337__auto____0 = (function (){
var statearr_27815 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27815[(0)] = cljs$core$async$state_machine__21337__auto__);

(statearr_27815[(1)] = (1));

return statearr_27815;
});
var cljs$core$async$state_machine__21337__auto____1 = (function (state_27795){
while(true){
var ret_value__21338__auto__ = (function (){try{while(true){
var result__21339__auto__ = switch__21336__auto__.call(null,state_27795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21339__auto__;
}
break;
}
}catch (e27816){if((e27816 instanceof Object)){
var ex__21340__auto__ = e27816;
var statearr_27817_27831 = state_27795;
(statearr_27817_27831[(5)] = ex__21340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27832 = state_27795;
state_27795 = G__27832;
continue;
} else {
return ret_value__21338__auto__;
}
break;
}
});
cljs$core$async$state_machine__21337__auto__ = function(state_27795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21337__auto____1.call(this,state_27795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21337__auto____0;
cljs$core$async$state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21337__auto____1;
return cljs$core$async$state_machine__21337__auto__;
})()
;})(switch__21336__auto__,c__21398__auto___27820,out))
})();
var state__21400__auto__ = (function (){var statearr_27818 = f__21399__auto__.call(null);
(statearr_27818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21398__auto___27820);

return statearr_27818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21400__auto__);
});})(c__21398__auto___27820,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__27834 = arguments.length;
switch (G__27834) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21398__auto___27882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21398__auto___27882,out){
return (function (){
var f__21399__auto__ = (function (){var switch__21336__auto__ = ((function (c__21398__auto___27882,out){
return (function (state_27858){
var state_val_27859 = (state_27858[(1)]);
if((state_val_27859 === (7))){
var inst_27840 = (state_27858[(7)]);
var inst_27840__$1 = (state_27858[(2)]);
var inst_27841 = (inst_27840__$1 == null);
var inst_27842 = cljs.core.not.call(null,inst_27841);
var state_27858__$1 = (function (){var statearr_27860 = state_27858;
(statearr_27860[(7)] = inst_27840__$1);

return statearr_27860;
})();
if(inst_27842){
var statearr_27861_27883 = state_27858__$1;
(statearr_27861_27883[(1)] = (8));

} else {
var statearr_27862_27884 = state_27858__$1;
(statearr_27862_27884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (1))){
var inst_27835 = (0);
var state_27858__$1 = (function (){var statearr_27863 = state_27858;
(statearr_27863[(8)] = inst_27835);

return statearr_27863;
})();
var statearr_27864_27885 = state_27858__$1;
(statearr_27864_27885[(2)] = null);

(statearr_27864_27885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (4))){
var state_27858__$1 = state_27858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27858__$1,(7),ch);
} else {
if((state_val_27859 === (6))){
var inst_27853 = (state_27858[(2)]);
var state_27858__$1 = state_27858;
var statearr_27865_27886 = state_27858__$1;
(statearr_27865_27886[(2)] = inst_27853);

(statearr_27865_27886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (3))){
var inst_27855 = (state_27858[(2)]);
var inst_27856 = cljs.core.async.close_BANG_.call(null,out);
var state_27858__$1 = (function (){var statearr_27866 = state_27858;
(statearr_27866[(9)] = inst_27855);

return statearr_27866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27858__$1,inst_27856);
} else {
if((state_val_27859 === (2))){
var inst_27835 = (state_27858[(8)]);
var inst_27837 = (inst_27835 < n);
var state_27858__$1 = state_27858;
if(cljs.core.truth_(inst_27837)){
var statearr_27867_27887 = state_27858__$1;
(statearr_27867_27887[(1)] = (4));

} else {
var statearr_27868_27888 = state_27858__$1;
(statearr_27868_27888[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (11))){
var inst_27835 = (state_27858[(8)]);
var inst_27845 = (state_27858[(2)]);
var inst_27846 = (inst_27835 + (1));
var inst_27835__$1 = inst_27846;
var state_27858__$1 = (function (){var statearr_27869 = state_27858;
(statearr_27869[(10)] = inst_27845);

(statearr_27869[(8)] = inst_27835__$1);

return statearr_27869;
})();
var statearr_27870_27889 = state_27858__$1;
(statearr_27870_27889[(2)] = null);

(statearr_27870_27889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (9))){
var state_27858__$1 = state_27858;
var statearr_27871_27890 = state_27858__$1;
(statearr_27871_27890[(2)] = null);

(statearr_27871_27890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (5))){
var state_27858__$1 = state_27858;
var statearr_27872_27891 = state_27858__$1;
(statearr_27872_27891[(2)] = null);

(statearr_27872_27891[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (10))){
var inst_27850 = (state_27858[(2)]);
var state_27858__$1 = state_27858;
var statearr_27873_27892 = state_27858__$1;
(statearr_27873_27892[(2)] = inst_27850);

(statearr_27873_27892[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (8))){
var inst_27840 = (state_27858[(7)]);
var state_27858__$1 = state_27858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27858__$1,(11),out,inst_27840);
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
});})(c__21398__auto___27882,out))
;
return ((function (switch__21336__auto__,c__21398__auto___27882,out){
return (function() {
var cljs$core$async$state_machine__21337__auto__ = null;
var cljs$core$async$state_machine__21337__auto____0 = (function (){
var statearr_27877 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27877[(0)] = cljs$core$async$state_machine__21337__auto__);

(statearr_27877[(1)] = (1));

return statearr_27877;
});
var cljs$core$async$state_machine__21337__auto____1 = (function (state_27858){
while(true){
var ret_value__21338__auto__ = (function (){try{while(true){
var result__21339__auto__ = switch__21336__auto__.call(null,state_27858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21339__auto__;
}
break;
}
}catch (e27878){if((e27878 instanceof Object)){
var ex__21340__auto__ = e27878;
var statearr_27879_27893 = state_27858;
(statearr_27879_27893[(5)] = ex__21340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27894 = state_27858;
state_27858 = G__27894;
continue;
} else {
return ret_value__21338__auto__;
}
break;
}
});
cljs$core$async$state_machine__21337__auto__ = function(state_27858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21337__auto____1.call(this,state_27858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21337__auto____0;
cljs$core$async$state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21337__auto____1;
return cljs$core$async$state_machine__21337__auto__;
})()
;})(switch__21336__auto__,c__21398__auto___27882,out))
})();
var state__21400__auto__ = (function (){var statearr_27880 = f__21399__auto__.call(null);
(statearr_27880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21398__auto___27882);

return statearr_27880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21400__auto__);
});})(c__21398__auto___27882,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t27902 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27902 = (function (ch,f,map_LT_,meta27903){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27903 = meta27903;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27902.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27902.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t27902.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27902.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t27905 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27905 = (function (fn1,_,meta27903,map_LT_,f,ch,meta27906){
this.fn1 = fn1;
this._ = _;
this.meta27903 = meta27903;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27906 = meta27906;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27905.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27905.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t27905.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27895_SHARP_){
return f1.call(null,(((p1__27895_SHARP_ == null))?null:self__.f.call(null,p1__27895_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27905.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27907){
var self__ = this;
var _27907__$1 = this;
return self__.meta27906;
});})(___$1))
;

cljs.core.async.t27905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27907,meta27906__$1){
var self__ = this;
var _27907__$1 = this;
return (new cljs.core.async.t27905(self__.fn1,self__._,self__.meta27903,self__.map_LT_,self__.f,self__.ch,meta27906__$1));
});})(___$1))
;

cljs.core.async.t27905.cljs$lang$type = true;

cljs.core.async.t27905.cljs$lang$ctorStr = "cljs.core.async/t27905";

cljs.core.async.t27905.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18753__auto__,writer__18754__auto__,opt__18755__auto__){
return cljs.core._write.call(null,writer__18754__auto__,"cljs.core.async/t27905");
});})(___$1))
;

cljs.core.async.__GT_t27905 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t27905(fn1__$1,___$2,meta27903__$1,map_LT___$1,f__$1,ch__$1,meta27906){
return (new cljs.core.async.t27905(fn1__$1,___$2,meta27903__$1,map_LT___$1,f__$1,ch__$1,meta27906));
});})(___$1))
;

}

return (new cljs.core.async.t27905(fn1,___$1,self__.meta27903,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18162__auto__ = ret;
if(cljs.core.truth_(and__18162__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18162__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t27902.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27902.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27902.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27904){
var self__ = this;
var _27904__$1 = this;
return self__.meta27903;
});

cljs.core.async.t27902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27904,meta27903__$1){
var self__ = this;
var _27904__$1 = this;
return (new cljs.core.async.t27902(self__.ch,self__.f,self__.map_LT_,meta27903__$1));
});

cljs.core.async.t27902.cljs$lang$type = true;

cljs.core.async.t27902.cljs$lang$ctorStr = "cljs.core.async/t27902";

cljs.core.async.t27902.cljs$lang$ctorPrWriter = (function (this__18753__auto__,writer__18754__auto__,opt__18755__auto__){
return cljs.core._write.call(null,writer__18754__auto__,"cljs.core.async/t27902");
});

cljs.core.async.__GT_t27902 = (function cljs$core$async$map_LT__$___GT_t27902(ch__$1,f__$1,map_LT___$1,meta27903){
return (new cljs.core.async.t27902(ch__$1,f__$1,map_LT___$1,meta27903));
});

}

return (new cljs.core.async.t27902(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t27911 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27911 = (function (ch,f,map_GT_,meta27912){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27912 = meta27912;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27911.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27911.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t27911.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27911.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27911.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27911.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27913){
var self__ = this;
var _27913__$1 = this;
return self__.meta27912;
});

cljs.core.async.t27911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27913,meta27912__$1){
var self__ = this;
var _27913__$1 = this;
return (new cljs.core.async.t27911(self__.ch,self__.f,self__.map_GT_,meta27912__$1));
});

cljs.core.async.t27911.cljs$lang$type = true;

cljs.core.async.t27911.cljs$lang$ctorStr = "cljs.core.async/t27911";

cljs.core.async.t27911.cljs$lang$ctorPrWriter = (function (this__18753__auto__,writer__18754__auto__,opt__18755__auto__){
return cljs.core._write.call(null,writer__18754__auto__,"cljs.core.async/t27911");
});

cljs.core.async.__GT_t27911 = (function cljs$core$async$map_GT__$___GT_t27911(ch__$1,f__$1,map_GT___$1,meta27912){
return (new cljs.core.async.t27911(ch__$1,f__$1,map_GT___$1,meta27912));
});

}

return (new cljs.core.async.t27911(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t27917 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27917 = (function (ch,p,filter_GT_,meta27918){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27918 = meta27918;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27917.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27917.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t27917.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27917.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27917.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27917.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27917.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27919){
var self__ = this;
var _27919__$1 = this;
return self__.meta27918;
});

cljs.core.async.t27917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27919,meta27918__$1){
var self__ = this;
var _27919__$1 = this;
return (new cljs.core.async.t27917(self__.ch,self__.p,self__.filter_GT_,meta27918__$1));
});

cljs.core.async.t27917.cljs$lang$type = true;

cljs.core.async.t27917.cljs$lang$ctorStr = "cljs.core.async/t27917";

cljs.core.async.t27917.cljs$lang$ctorPrWriter = (function (this__18753__auto__,writer__18754__auto__,opt__18755__auto__){
return cljs.core._write.call(null,writer__18754__auto__,"cljs.core.async/t27917");
});

cljs.core.async.__GT_t27917 = (function cljs$core$async$filter_GT__$___GT_t27917(ch__$1,p__$1,filter_GT___$1,meta27918){
return (new cljs.core.async.t27917(ch__$1,p__$1,filter_GT___$1,meta27918));
});

}

return (new cljs.core.async.t27917(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__27921 = arguments.length;
switch (G__27921) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21398__auto___27964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21398__auto___27964,out){
return (function (){
var f__21399__auto__ = (function (){var switch__21336__auto__ = ((function (c__21398__auto___27964,out){
return (function (state_27942){
var state_val_27943 = (state_27942[(1)]);
if((state_val_27943 === (7))){
var inst_27938 = (state_27942[(2)]);
var state_27942__$1 = state_27942;
var statearr_27944_27965 = state_27942__$1;
(statearr_27944_27965[(2)] = inst_27938);

(statearr_27944_27965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27943 === (1))){
var state_27942__$1 = state_27942;
var statearr_27945_27966 = state_27942__$1;
(statearr_27945_27966[(2)] = null);

(statearr_27945_27966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27943 === (4))){
var inst_27924 = (state_27942[(7)]);
var inst_27924__$1 = (state_27942[(2)]);
var inst_27925 = (inst_27924__$1 == null);
var state_27942__$1 = (function (){var statearr_27946 = state_27942;
(statearr_27946[(7)] = inst_27924__$1);

return statearr_27946;
})();
if(cljs.core.truth_(inst_27925)){
var statearr_27947_27967 = state_27942__$1;
(statearr_27947_27967[(1)] = (5));

} else {
var statearr_27948_27968 = state_27942__$1;
(statearr_27948_27968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27943 === (6))){
var inst_27924 = (state_27942[(7)]);
var inst_27929 = p.call(null,inst_27924);
var state_27942__$1 = state_27942;
if(cljs.core.truth_(inst_27929)){
var statearr_27949_27969 = state_27942__$1;
(statearr_27949_27969[(1)] = (8));

} else {
var statearr_27950_27970 = state_27942__$1;
(statearr_27950_27970[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27943 === (3))){
var inst_27940 = (state_27942[(2)]);
var state_27942__$1 = state_27942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27942__$1,inst_27940);
} else {
if((state_val_27943 === (2))){
var state_27942__$1 = state_27942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27942__$1,(4),ch);
} else {
if((state_val_27943 === (11))){
var inst_27932 = (state_27942[(2)]);
var state_27942__$1 = state_27942;
var statearr_27951_27971 = state_27942__$1;
(statearr_27951_27971[(2)] = inst_27932);

(statearr_27951_27971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27943 === (9))){
var state_27942__$1 = state_27942;
var statearr_27952_27972 = state_27942__$1;
(statearr_27952_27972[(2)] = null);

(statearr_27952_27972[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27943 === (5))){
var inst_27927 = cljs.core.async.close_BANG_.call(null,out);
var state_27942__$1 = state_27942;
var statearr_27953_27973 = state_27942__$1;
(statearr_27953_27973[(2)] = inst_27927);

(statearr_27953_27973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27943 === (10))){
var inst_27935 = (state_27942[(2)]);
var state_27942__$1 = (function (){var statearr_27954 = state_27942;
(statearr_27954[(8)] = inst_27935);

return statearr_27954;
})();
var statearr_27955_27974 = state_27942__$1;
(statearr_27955_27974[(2)] = null);

(statearr_27955_27974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27943 === (8))){
var inst_27924 = (state_27942[(7)]);
var state_27942__$1 = state_27942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27942__$1,(11),out,inst_27924);
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
});})(c__21398__auto___27964,out))
;
return ((function (switch__21336__auto__,c__21398__auto___27964,out){
return (function() {
var cljs$core$async$state_machine__21337__auto__ = null;
var cljs$core$async$state_machine__21337__auto____0 = (function (){
var statearr_27959 = [null,null,null,null,null,null,null,null,null];
(statearr_27959[(0)] = cljs$core$async$state_machine__21337__auto__);

(statearr_27959[(1)] = (1));

return statearr_27959;
});
var cljs$core$async$state_machine__21337__auto____1 = (function (state_27942){
while(true){
var ret_value__21338__auto__ = (function (){try{while(true){
var result__21339__auto__ = switch__21336__auto__.call(null,state_27942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21339__auto__;
}
break;
}
}catch (e27960){if((e27960 instanceof Object)){
var ex__21340__auto__ = e27960;
var statearr_27961_27975 = state_27942;
(statearr_27961_27975[(5)] = ex__21340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27976 = state_27942;
state_27942 = G__27976;
continue;
} else {
return ret_value__21338__auto__;
}
break;
}
});
cljs$core$async$state_machine__21337__auto__ = function(state_27942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21337__auto____1.call(this,state_27942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21337__auto____0;
cljs$core$async$state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21337__auto____1;
return cljs$core$async$state_machine__21337__auto__;
})()
;})(switch__21336__auto__,c__21398__auto___27964,out))
})();
var state__21400__auto__ = (function (){var statearr_27962 = f__21399__auto__.call(null);
(statearr_27962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21398__auto___27964);

return statearr_27962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21400__auto__);
});})(c__21398__auto___27964,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__27978 = arguments.length;
switch (G__27978) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var c__21398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21398__auto__){
return (function (){
var f__21399__auto__ = (function (){var switch__21336__auto__ = ((function (c__21398__auto__){
return (function (state_28145){
var state_val_28146 = (state_28145[(1)]);
if((state_val_28146 === (7))){
var inst_28141 = (state_28145[(2)]);
var state_28145__$1 = state_28145;
var statearr_28147_28188 = state_28145__$1;
(statearr_28147_28188[(2)] = inst_28141);

(statearr_28147_28188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (20))){
var inst_28111 = (state_28145[(7)]);
var inst_28122 = (state_28145[(2)]);
var inst_28123 = cljs.core.next.call(null,inst_28111);
var inst_28097 = inst_28123;
var inst_28098 = null;
var inst_28099 = (0);
var inst_28100 = (0);
var state_28145__$1 = (function (){var statearr_28148 = state_28145;
(statearr_28148[(8)] = inst_28099);

(statearr_28148[(9)] = inst_28097);

(statearr_28148[(10)] = inst_28098);

(statearr_28148[(11)] = inst_28100);

(statearr_28148[(12)] = inst_28122);

return statearr_28148;
})();
var statearr_28149_28189 = state_28145__$1;
(statearr_28149_28189[(2)] = null);

(statearr_28149_28189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (1))){
var state_28145__$1 = state_28145;
var statearr_28150_28190 = state_28145__$1;
(statearr_28150_28190[(2)] = null);

(statearr_28150_28190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (4))){
var inst_28086 = (state_28145[(13)]);
var inst_28086__$1 = (state_28145[(2)]);
var inst_28087 = (inst_28086__$1 == null);
var state_28145__$1 = (function (){var statearr_28151 = state_28145;
(statearr_28151[(13)] = inst_28086__$1);

return statearr_28151;
})();
if(cljs.core.truth_(inst_28087)){
var statearr_28152_28191 = state_28145__$1;
(statearr_28152_28191[(1)] = (5));

} else {
var statearr_28153_28192 = state_28145__$1;
(statearr_28153_28192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (15))){
var state_28145__$1 = state_28145;
var statearr_28157_28193 = state_28145__$1;
(statearr_28157_28193[(2)] = null);

(statearr_28157_28193[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (21))){
var state_28145__$1 = state_28145;
var statearr_28158_28194 = state_28145__$1;
(statearr_28158_28194[(2)] = null);

(statearr_28158_28194[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (13))){
var inst_28099 = (state_28145[(8)]);
var inst_28097 = (state_28145[(9)]);
var inst_28098 = (state_28145[(10)]);
var inst_28100 = (state_28145[(11)]);
var inst_28107 = (state_28145[(2)]);
var inst_28108 = (inst_28100 + (1));
var tmp28154 = inst_28099;
var tmp28155 = inst_28097;
var tmp28156 = inst_28098;
var inst_28097__$1 = tmp28155;
var inst_28098__$1 = tmp28156;
var inst_28099__$1 = tmp28154;
var inst_28100__$1 = inst_28108;
var state_28145__$1 = (function (){var statearr_28159 = state_28145;
(statearr_28159[(8)] = inst_28099__$1);

(statearr_28159[(9)] = inst_28097__$1);

(statearr_28159[(14)] = inst_28107);

(statearr_28159[(10)] = inst_28098__$1);

(statearr_28159[(11)] = inst_28100__$1);

return statearr_28159;
})();
var statearr_28160_28195 = state_28145__$1;
(statearr_28160_28195[(2)] = null);

(statearr_28160_28195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (22))){
var state_28145__$1 = state_28145;
var statearr_28161_28196 = state_28145__$1;
(statearr_28161_28196[(2)] = null);

(statearr_28161_28196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (6))){
var inst_28086 = (state_28145[(13)]);
var inst_28095 = f.call(null,inst_28086);
var inst_28096 = cljs.core.seq.call(null,inst_28095);
var inst_28097 = inst_28096;
var inst_28098 = null;
var inst_28099 = (0);
var inst_28100 = (0);
var state_28145__$1 = (function (){var statearr_28162 = state_28145;
(statearr_28162[(8)] = inst_28099);

(statearr_28162[(9)] = inst_28097);

(statearr_28162[(10)] = inst_28098);

(statearr_28162[(11)] = inst_28100);

return statearr_28162;
})();
var statearr_28163_28197 = state_28145__$1;
(statearr_28163_28197[(2)] = null);

(statearr_28163_28197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (17))){
var inst_28111 = (state_28145[(7)]);
var inst_28115 = cljs.core.chunk_first.call(null,inst_28111);
var inst_28116 = cljs.core.chunk_rest.call(null,inst_28111);
var inst_28117 = cljs.core.count.call(null,inst_28115);
var inst_28097 = inst_28116;
var inst_28098 = inst_28115;
var inst_28099 = inst_28117;
var inst_28100 = (0);
var state_28145__$1 = (function (){var statearr_28164 = state_28145;
(statearr_28164[(8)] = inst_28099);

(statearr_28164[(9)] = inst_28097);

(statearr_28164[(10)] = inst_28098);

(statearr_28164[(11)] = inst_28100);

return statearr_28164;
})();
var statearr_28165_28198 = state_28145__$1;
(statearr_28165_28198[(2)] = null);

(statearr_28165_28198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (3))){
var inst_28143 = (state_28145[(2)]);
var state_28145__$1 = state_28145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28145__$1,inst_28143);
} else {
if((state_val_28146 === (12))){
var inst_28131 = (state_28145[(2)]);
var state_28145__$1 = state_28145;
var statearr_28166_28199 = state_28145__$1;
(statearr_28166_28199[(2)] = inst_28131);

(statearr_28166_28199[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (2))){
var state_28145__$1 = state_28145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28145__$1,(4),in$);
} else {
if((state_val_28146 === (23))){
var inst_28139 = (state_28145[(2)]);
var state_28145__$1 = state_28145;
var statearr_28167_28200 = state_28145__$1;
(statearr_28167_28200[(2)] = inst_28139);

(statearr_28167_28200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (19))){
var inst_28126 = (state_28145[(2)]);
var state_28145__$1 = state_28145;
var statearr_28168_28201 = state_28145__$1;
(statearr_28168_28201[(2)] = inst_28126);

(statearr_28168_28201[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (11))){
var inst_28111 = (state_28145[(7)]);
var inst_28097 = (state_28145[(9)]);
var inst_28111__$1 = cljs.core.seq.call(null,inst_28097);
var state_28145__$1 = (function (){var statearr_28169 = state_28145;
(statearr_28169[(7)] = inst_28111__$1);

return statearr_28169;
})();
if(inst_28111__$1){
var statearr_28170_28202 = state_28145__$1;
(statearr_28170_28202[(1)] = (14));

} else {
var statearr_28171_28203 = state_28145__$1;
(statearr_28171_28203[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (9))){
var inst_28133 = (state_28145[(2)]);
var inst_28134 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28145__$1 = (function (){var statearr_28172 = state_28145;
(statearr_28172[(15)] = inst_28133);

return statearr_28172;
})();
if(cljs.core.truth_(inst_28134)){
var statearr_28173_28204 = state_28145__$1;
(statearr_28173_28204[(1)] = (21));

} else {
var statearr_28174_28205 = state_28145__$1;
(statearr_28174_28205[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (5))){
var inst_28089 = cljs.core.async.close_BANG_.call(null,out);
var state_28145__$1 = state_28145;
var statearr_28175_28206 = state_28145__$1;
(statearr_28175_28206[(2)] = inst_28089);

(statearr_28175_28206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (14))){
var inst_28111 = (state_28145[(7)]);
var inst_28113 = cljs.core.chunked_seq_QMARK_.call(null,inst_28111);
var state_28145__$1 = state_28145;
if(inst_28113){
var statearr_28176_28207 = state_28145__$1;
(statearr_28176_28207[(1)] = (17));

} else {
var statearr_28177_28208 = state_28145__$1;
(statearr_28177_28208[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (16))){
var inst_28129 = (state_28145[(2)]);
var state_28145__$1 = state_28145;
var statearr_28178_28209 = state_28145__$1;
(statearr_28178_28209[(2)] = inst_28129);

(statearr_28178_28209[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (10))){
var inst_28098 = (state_28145[(10)]);
var inst_28100 = (state_28145[(11)]);
var inst_28105 = cljs.core._nth.call(null,inst_28098,inst_28100);
var state_28145__$1 = state_28145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28145__$1,(13),out,inst_28105);
} else {
if((state_val_28146 === (18))){
var inst_28111 = (state_28145[(7)]);
var inst_28120 = cljs.core.first.call(null,inst_28111);
var state_28145__$1 = state_28145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28145__$1,(20),out,inst_28120);
} else {
if((state_val_28146 === (8))){
var inst_28099 = (state_28145[(8)]);
var inst_28100 = (state_28145[(11)]);
var inst_28102 = (inst_28100 < inst_28099);
var inst_28103 = inst_28102;
var state_28145__$1 = state_28145;
if(cljs.core.truth_(inst_28103)){
var statearr_28179_28210 = state_28145__$1;
(statearr_28179_28210[(1)] = (10));

} else {
var statearr_28180_28211 = state_28145__$1;
(statearr_28180_28211[(1)] = (11));

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
});})(c__21398__auto__))
;
return ((function (switch__21336__auto__,c__21398__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21337__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21337__auto____0 = (function (){
var statearr_28184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28184[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21337__auto__);

(statearr_28184[(1)] = (1));

return statearr_28184;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21337__auto____1 = (function (state_28145){
while(true){
var ret_value__21338__auto__ = (function (){try{while(true){
var result__21339__auto__ = switch__21336__auto__.call(null,state_28145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21339__auto__;
}
break;
}
}catch (e28185){if((e28185 instanceof Object)){
var ex__21340__auto__ = e28185;
var statearr_28186_28212 = state_28145;
(statearr_28186_28212[(5)] = ex__21340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28213 = state_28145;
state_28145 = G__28213;
continue;
} else {
return ret_value__21338__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21337__auto__ = function(state_28145){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21337__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21337__auto____1.call(this,state_28145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21337__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21337__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21337__auto__;
})()
;})(switch__21336__auto__,c__21398__auto__))
})();
var state__21400__auto__ = (function (){var statearr_28187 = f__21399__auto__.call(null);
(statearr_28187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21398__auto__);

return statearr_28187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21400__auto__);
});})(c__21398__auto__))
);

return c__21398__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__28215 = arguments.length;
switch (G__28215) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__28218 = arguments.length;
switch (G__28218) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__28221 = arguments.length;
switch (G__28221) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21398__auto___28271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21398__auto___28271,out){
return (function (){
var f__21399__auto__ = (function (){var switch__21336__auto__ = ((function (c__21398__auto___28271,out){
return (function (state_28245){
var state_val_28246 = (state_28245[(1)]);
if((state_val_28246 === (7))){
var inst_28240 = (state_28245[(2)]);
var state_28245__$1 = state_28245;
var statearr_28247_28272 = state_28245__$1;
(statearr_28247_28272[(2)] = inst_28240);

(statearr_28247_28272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (1))){
var inst_28222 = null;
var state_28245__$1 = (function (){var statearr_28248 = state_28245;
(statearr_28248[(7)] = inst_28222);

return statearr_28248;
})();
var statearr_28249_28273 = state_28245__$1;
(statearr_28249_28273[(2)] = null);

(statearr_28249_28273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (4))){
var inst_28225 = (state_28245[(8)]);
var inst_28225__$1 = (state_28245[(2)]);
var inst_28226 = (inst_28225__$1 == null);
var inst_28227 = cljs.core.not.call(null,inst_28226);
var state_28245__$1 = (function (){var statearr_28250 = state_28245;
(statearr_28250[(8)] = inst_28225__$1);

return statearr_28250;
})();
if(inst_28227){
var statearr_28251_28274 = state_28245__$1;
(statearr_28251_28274[(1)] = (5));

} else {
var statearr_28252_28275 = state_28245__$1;
(statearr_28252_28275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (6))){
var state_28245__$1 = state_28245;
var statearr_28253_28276 = state_28245__$1;
(statearr_28253_28276[(2)] = null);

(statearr_28253_28276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (3))){
var inst_28242 = (state_28245[(2)]);
var inst_28243 = cljs.core.async.close_BANG_.call(null,out);
var state_28245__$1 = (function (){var statearr_28254 = state_28245;
(statearr_28254[(9)] = inst_28242);

return statearr_28254;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28245__$1,inst_28243);
} else {
if((state_val_28246 === (2))){
var state_28245__$1 = state_28245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28245__$1,(4),ch);
} else {
if((state_val_28246 === (11))){
var inst_28225 = (state_28245[(8)]);
var inst_28234 = (state_28245[(2)]);
var inst_28222 = inst_28225;
var state_28245__$1 = (function (){var statearr_28255 = state_28245;
(statearr_28255[(10)] = inst_28234);

(statearr_28255[(7)] = inst_28222);

return statearr_28255;
})();
var statearr_28256_28277 = state_28245__$1;
(statearr_28256_28277[(2)] = null);

(statearr_28256_28277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (9))){
var inst_28225 = (state_28245[(8)]);
var state_28245__$1 = state_28245;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28245__$1,(11),out,inst_28225);
} else {
if((state_val_28246 === (5))){
var inst_28222 = (state_28245[(7)]);
var inst_28225 = (state_28245[(8)]);
var inst_28229 = cljs.core._EQ_.call(null,inst_28225,inst_28222);
var state_28245__$1 = state_28245;
if(inst_28229){
var statearr_28258_28278 = state_28245__$1;
(statearr_28258_28278[(1)] = (8));

} else {
var statearr_28259_28279 = state_28245__$1;
(statearr_28259_28279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (10))){
var inst_28237 = (state_28245[(2)]);
var state_28245__$1 = state_28245;
var statearr_28260_28280 = state_28245__$1;
(statearr_28260_28280[(2)] = inst_28237);

(statearr_28260_28280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (8))){
var inst_28222 = (state_28245[(7)]);
var tmp28257 = inst_28222;
var inst_28222__$1 = tmp28257;
var state_28245__$1 = (function (){var statearr_28261 = state_28245;
(statearr_28261[(7)] = inst_28222__$1);

return statearr_28261;
})();
var statearr_28262_28281 = state_28245__$1;
(statearr_28262_28281[(2)] = null);

(statearr_28262_28281[(1)] = (2));


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
});})(c__21398__auto___28271,out))
;
return ((function (switch__21336__auto__,c__21398__auto___28271,out){
return (function() {
var cljs$core$async$state_machine__21337__auto__ = null;
var cljs$core$async$state_machine__21337__auto____0 = (function (){
var statearr_28266 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28266[(0)] = cljs$core$async$state_machine__21337__auto__);

(statearr_28266[(1)] = (1));

return statearr_28266;
});
var cljs$core$async$state_machine__21337__auto____1 = (function (state_28245){
while(true){
var ret_value__21338__auto__ = (function (){try{while(true){
var result__21339__auto__ = switch__21336__auto__.call(null,state_28245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21339__auto__;
}
break;
}
}catch (e28267){if((e28267 instanceof Object)){
var ex__21340__auto__ = e28267;
var statearr_28268_28282 = state_28245;
(statearr_28268_28282[(5)] = ex__21340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28283 = state_28245;
state_28245 = G__28283;
continue;
} else {
return ret_value__21338__auto__;
}
break;
}
});
cljs$core$async$state_machine__21337__auto__ = function(state_28245){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21337__auto____1.call(this,state_28245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21337__auto____0;
cljs$core$async$state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21337__auto____1;
return cljs$core$async$state_machine__21337__auto__;
})()
;})(switch__21336__auto__,c__21398__auto___28271,out))
})();
var state__21400__auto__ = (function (){var statearr_28269 = f__21399__auto__.call(null);
(statearr_28269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21398__auto___28271);

return statearr_28269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21400__auto__);
});})(c__21398__auto___28271,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__28285 = arguments.length;
switch (G__28285) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21398__auto___28354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21398__auto___28354,out){
return (function (){
var f__21399__auto__ = (function (){var switch__21336__auto__ = ((function (c__21398__auto___28354,out){
return (function (state_28323){
var state_val_28324 = (state_28323[(1)]);
if((state_val_28324 === (7))){
var inst_28319 = (state_28323[(2)]);
var state_28323__$1 = state_28323;
var statearr_28325_28355 = state_28323__$1;
(statearr_28325_28355[(2)] = inst_28319);

(statearr_28325_28355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (1))){
var inst_28286 = (new Array(n));
var inst_28287 = inst_28286;
var inst_28288 = (0);
var state_28323__$1 = (function (){var statearr_28326 = state_28323;
(statearr_28326[(7)] = inst_28287);

(statearr_28326[(8)] = inst_28288);

return statearr_28326;
})();
var statearr_28327_28356 = state_28323__$1;
(statearr_28327_28356[(2)] = null);

(statearr_28327_28356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (4))){
var inst_28291 = (state_28323[(9)]);
var inst_28291__$1 = (state_28323[(2)]);
var inst_28292 = (inst_28291__$1 == null);
var inst_28293 = cljs.core.not.call(null,inst_28292);
var state_28323__$1 = (function (){var statearr_28328 = state_28323;
(statearr_28328[(9)] = inst_28291__$1);

return statearr_28328;
})();
if(inst_28293){
var statearr_28329_28357 = state_28323__$1;
(statearr_28329_28357[(1)] = (5));

} else {
var statearr_28330_28358 = state_28323__$1;
(statearr_28330_28358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (15))){
var inst_28313 = (state_28323[(2)]);
var state_28323__$1 = state_28323;
var statearr_28331_28359 = state_28323__$1;
(statearr_28331_28359[(2)] = inst_28313);

(statearr_28331_28359[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (13))){
var state_28323__$1 = state_28323;
var statearr_28332_28360 = state_28323__$1;
(statearr_28332_28360[(2)] = null);

(statearr_28332_28360[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (6))){
var inst_28288 = (state_28323[(8)]);
var inst_28309 = (inst_28288 > (0));
var state_28323__$1 = state_28323;
if(cljs.core.truth_(inst_28309)){
var statearr_28333_28361 = state_28323__$1;
(statearr_28333_28361[(1)] = (12));

} else {
var statearr_28334_28362 = state_28323__$1;
(statearr_28334_28362[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (3))){
var inst_28321 = (state_28323[(2)]);
var state_28323__$1 = state_28323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28323__$1,inst_28321);
} else {
if((state_val_28324 === (12))){
var inst_28287 = (state_28323[(7)]);
var inst_28311 = cljs.core.vec.call(null,inst_28287);
var state_28323__$1 = state_28323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28323__$1,(15),out,inst_28311);
} else {
if((state_val_28324 === (2))){
var state_28323__$1 = state_28323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28323__$1,(4),ch);
} else {
if((state_val_28324 === (11))){
var inst_28303 = (state_28323[(2)]);
var inst_28304 = (new Array(n));
var inst_28287 = inst_28304;
var inst_28288 = (0);
var state_28323__$1 = (function (){var statearr_28335 = state_28323;
(statearr_28335[(7)] = inst_28287);

(statearr_28335[(10)] = inst_28303);

(statearr_28335[(8)] = inst_28288);

return statearr_28335;
})();
var statearr_28336_28363 = state_28323__$1;
(statearr_28336_28363[(2)] = null);

(statearr_28336_28363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (9))){
var inst_28287 = (state_28323[(7)]);
var inst_28301 = cljs.core.vec.call(null,inst_28287);
var state_28323__$1 = state_28323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28323__$1,(11),out,inst_28301);
} else {
if((state_val_28324 === (5))){
var inst_28296 = (state_28323[(11)]);
var inst_28287 = (state_28323[(7)]);
var inst_28288 = (state_28323[(8)]);
var inst_28291 = (state_28323[(9)]);
var inst_28295 = (inst_28287[inst_28288] = inst_28291);
var inst_28296__$1 = (inst_28288 + (1));
var inst_28297 = (inst_28296__$1 < n);
var state_28323__$1 = (function (){var statearr_28337 = state_28323;
(statearr_28337[(11)] = inst_28296__$1);

(statearr_28337[(12)] = inst_28295);

return statearr_28337;
})();
if(cljs.core.truth_(inst_28297)){
var statearr_28338_28364 = state_28323__$1;
(statearr_28338_28364[(1)] = (8));

} else {
var statearr_28339_28365 = state_28323__$1;
(statearr_28339_28365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (14))){
var inst_28316 = (state_28323[(2)]);
var inst_28317 = cljs.core.async.close_BANG_.call(null,out);
var state_28323__$1 = (function (){var statearr_28341 = state_28323;
(statearr_28341[(13)] = inst_28316);

return statearr_28341;
})();
var statearr_28342_28366 = state_28323__$1;
(statearr_28342_28366[(2)] = inst_28317);

(statearr_28342_28366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (10))){
var inst_28307 = (state_28323[(2)]);
var state_28323__$1 = state_28323;
var statearr_28343_28367 = state_28323__$1;
(statearr_28343_28367[(2)] = inst_28307);

(statearr_28343_28367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (8))){
var inst_28296 = (state_28323[(11)]);
var inst_28287 = (state_28323[(7)]);
var tmp28340 = inst_28287;
var inst_28287__$1 = tmp28340;
var inst_28288 = inst_28296;
var state_28323__$1 = (function (){var statearr_28344 = state_28323;
(statearr_28344[(7)] = inst_28287__$1);

(statearr_28344[(8)] = inst_28288);

return statearr_28344;
})();
var statearr_28345_28368 = state_28323__$1;
(statearr_28345_28368[(2)] = null);

(statearr_28345_28368[(1)] = (2));


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
});})(c__21398__auto___28354,out))
;
return ((function (switch__21336__auto__,c__21398__auto___28354,out){
return (function() {
var cljs$core$async$state_machine__21337__auto__ = null;
var cljs$core$async$state_machine__21337__auto____0 = (function (){
var statearr_28349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28349[(0)] = cljs$core$async$state_machine__21337__auto__);

(statearr_28349[(1)] = (1));

return statearr_28349;
});
var cljs$core$async$state_machine__21337__auto____1 = (function (state_28323){
while(true){
var ret_value__21338__auto__ = (function (){try{while(true){
var result__21339__auto__ = switch__21336__auto__.call(null,state_28323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21339__auto__;
}
break;
}
}catch (e28350){if((e28350 instanceof Object)){
var ex__21340__auto__ = e28350;
var statearr_28351_28369 = state_28323;
(statearr_28351_28369[(5)] = ex__21340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28370 = state_28323;
state_28323 = G__28370;
continue;
} else {
return ret_value__21338__auto__;
}
break;
}
});
cljs$core$async$state_machine__21337__auto__ = function(state_28323){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21337__auto____1.call(this,state_28323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21337__auto____0;
cljs$core$async$state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21337__auto____1;
return cljs$core$async$state_machine__21337__auto__;
})()
;})(switch__21336__auto__,c__21398__auto___28354,out))
})();
var state__21400__auto__ = (function (){var statearr_28352 = f__21399__auto__.call(null);
(statearr_28352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21398__auto___28354);

return statearr_28352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21400__auto__);
});})(c__21398__auto___28354,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__28372 = arguments.length;
switch (G__28372) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21398__auto___28445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21398__auto___28445,out){
return (function (){
var f__21399__auto__ = (function (){var switch__21336__auto__ = ((function (c__21398__auto___28445,out){
return (function (state_28414){
var state_val_28415 = (state_28414[(1)]);
if((state_val_28415 === (7))){
var inst_28410 = (state_28414[(2)]);
var state_28414__$1 = state_28414;
var statearr_28416_28446 = state_28414__$1;
(statearr_28416_28446[(2)] = inst_28410);

(statearr_28416_28446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28415 === (1))){
var inst_28373 = [];
var inst_28374 = inst_28373;
var inst_28375 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28414__$1 = (function (){var statearr_28417 = state_28414;
(statearr_28417[(7)] = inst_28375);

(statearr_28417[(8)] = inst_28374);

return statearr_28417;
})();
var statearr_28418_28447 = state_28414__$1;
(statearr_28418_28447[(2)] = null);

(statearr_28418_28447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28415 === (4))){
var inst_28378 = (state_28414[(9)]);
var inst_28378__$1 = (state_28414[(2)]);
var inst_28379 = (inst_28378__$1 == null);
var inst_28380 = cljs.core.not.call(null,inst_28379);
var state_28414__$1 = (function (){var statearr_28419 = state_28414;
(statearr_28419[(9)] = inst_28378__$1);

return statearr_28419;
})();
if(inst_28380){
var statearr_28420_28448 = state_28414__$1;
(statearr_28420_28448[(1)] = (5));

} else {
var statearr_28421_28449 = state_28414__$1;
(statearr_28421_28449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28415 === (15))){
var inst_28404 = (state_28414[(2)]);
var state_28414__$1 = state_28414;
var statearr_28422_28450 = state_28414__$1;
(statearr_28422_28450[(2)] = inst_28404);

(statearr_28422_28450[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28415 === (13))){
var state_28414__$1 = state_28414;
var statearr_28423_28451 = state_28414__$1;
(statearr_28423_28451[(2)] = null);

(statearr_28423_28451[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28415 === (6))){
var inst_28374 = (state_28414[(8)]);
var inst_28399 = inst_28374.length;
var inst_28400 = (inst_28399 > (0));
var state_28414__$1 = state_28414;
if(cljs.core.truth_(inst_28400)){
var statearr_28424_28452 = state_28414__$1;
(statearr_28424_28452[(1)] = (12));

} else {
var statearr_28425_28453 = state_28414__$1;
(statearr_28425_28453[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28415 === (3))){
var inst_28412 = (state_28414[(2)]);
var state_28414__$1 = state_28414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28414__$1,inst_28412);
} else {
if((state_val_28415 === (12))){
var inst_28374 = (state_28414[(8)]);
var inst_28402 = cljs.core.vec.call(null,inst_28374);
var state_28414__$1 = state_28414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28414__$1,(15),out,inst_28402);
} else {
if((state_val_28415 === (2))){
var state_28414__$1 = state_28414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28414__$1,(4),ch);
} else {
if((state_val_28415 === (11))){
var inst_28382 = (state_28414[(10)]);
var inst_28378 = (state_28414[(9)]);
var inst_28392 = (state_28414[(2)]);
var inst_28393 = [];
var inst_28394 = inst_28393.push(inst_28378);
var inst_28374 = inst_28393;
var inst_28375 = inst_28382;
var state_28414__$1 = (function (){var statearr_28426 = state_28414;
(statearr_28426[(7)] = inst_28375);

(statearr_28426[(8)] = inst_28374);

(statearr_28426[(11)] = inst_28394);

(statearr_28426[(12)] = inst_28392);

return statearr_28426;
})();
var statearr_28427_28454 = state_28414__$1;
(statearr_28427_28454[(2)] = null);

(statearr_28427_28454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28415 === (9))){
var inst_28374 = (state_28414[(8)]);
var inst_28390 = cljs.core.vec.call(null,inst_28374);
var state_28414__$1 = state_28414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28414__$1,(11),out,inst_28390);
} else {
if((state_val_28415 === (5))){
var inst_28375 = (state_28414[(7)]);
var inst_28382 = (state_28414[(10)]);
var inst_28378 = (state_28414[(9)]);
var inst_28382__$1 = f.call(null,inst_28378);
var inst_28383 = cljs.core._EQ_.call(null,inst_28382__$1,inst_28375);
var inst_28384 = cljs.core.keyword_identical_QMARK_.call(null,inst_28375,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28385 = (inst_28383) || (inst_28384);
var state_28414__$1 = (function (){var statearr_28428 = state_28414;
(statearr_28428[(10)] = inst_28382__$1);

return statearr_28428;
})();
if(cljs.core.truth_(inst_28385)){
var statearr_28429_28455 = state_28414__$1;
(statearr_28429_28455[(1)] = (8));

} else {
var statearr_28430_28456 = state_28414__$1;
(statearr_28430_28456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28415 === (14))){
var inst_28407 = (state_28414[(2)]);
var inst_28408 = cljs.core.async.close_BANG_.call(null,out);
var state_28414__$1 = (function (){var statearr_28432 = state_28414;
(statearr_28432[(13)] = inst_28407);

return statearr_28432;
})();
var statearr_28433_28457 = state_28414__$1;
(statearr_28433_28457[(2)] = inst_28408);

(statearr_28433_28457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28415 === (10))){
var inst_28397 = (state_28414[(2)]);
var state_28414__$1 = state_28414;
var statearr_28434_28458 = state_28414__$1;
(statearr_28434_28458[(2)] = inst_28397);

(statearr_28434_28458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28415 === (8))){
var inst_28382 = (state_28414[(10)]);
var inst_28374 = (state_28414[(8)]);
var inst_28378 = (state_28414[(9)]);
var inst_28387 = inst_28374.push(inst_28378);
var tmp28431 = inst_28374;
var inst_28374__$1 = tmp28431;
var inst_28375 = inst_28382;
var state_28414__$1 = (function (){var statearr_28435 = state_28414;
(statearr_28435[(7)] = inst_28375);

(statearr_28435[(8)] = inst_28374__$1);

(statearr_28435[(14)] = inst_28387);

return statearr_28435;
})();
var statearr_28436_28459 = state_28414__$1;
(statearr_28436_28459[(2)] = null);

(statearr_28436_28459[(1)] = (2));


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
});})(c__21398__auto___28445,out))
;
return ((function (switch__21336__auto__,c__21398__auto___28445,out){
return (function() {
var cljs$core$async$state_machine__21337__auto__ = null;
var cljs$core$async$state_machine__21337__auto____0 = (function (){
var statearr_28440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28440[(0)] = cljs$core$async$state_machine__21337__auto__);

(statearr_28440[(1)] = (1));

return statearr_28440;
});
var cljs$core$async$state_machine__21337__auto____1 = (function (state_28414){
while(true){
var ret_value__21338__auto__ = (function (){try{while(true){
var result__21339__auto__ = switch__21336__auto__.call(null,state_28414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21339__auto__;
}
break;
}
}catch (e28441){if((e28441 instanceof Object)){
var ex__21340__auto__ = e28441;
var statearr_28442_28460 = state_28414;
(statearr_28442_28460[(5)] = ex__21340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28461 = state_28414;
state_28414 = G__28461;
continue;
} else {
return ret_value__21338__auto__;
}
break;
}
});
cljs$core$async$state_machine__21337__auto__ = function(state_28414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21337__auto____1.call(this,state_28414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21337__auto____0;
cljs$core$async$state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21337__auto____1;
return cljs$core$async$state_machine__21337__auto__;
})()
;})(switch__21336__auto__,c__21398__auto___28445,out))
})();
var state__21400__auto__ = (function (){var statearr_28443 = f__21399__auto__.call(null);
(statearr_28443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21398__auto___28445);

return statearr_28443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21400__auto__);
});})(c__21398__auto___28445,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1434750194684