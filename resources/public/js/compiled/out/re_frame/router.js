// Compiled by ClojureScript 0.0-3211 {}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.utils');
goog.require('re_frame.handlers');
goog.require('reagent.core');
re_frame.router.event_chan = cljs.core.async.chan.call(null);
/**
 * read all pending events from the channel and drop them on the floor
 */
re_frame.router.purge_chan = (function re_frame$router$purge_chan(){
return null;
});
re_frame.router.router_loop = (function re_frame$router$router_loop(){
var c__21398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21398__auto__){
return (function (){
var f__21399__auto__ = (function (){var switch__21336__auto__ = ((function (c__21398__auto__){
return (function (state_25932){
var state_val_25933 = (state_25932[(1)]);
if((state_val_25933 === (7))){
var inst_25917 = (state_25932[(2)]);
var state_25932__$1 = (function (){var statearr_25934 = state_25932;
(statearr_25934[(7)] = inst_25917);

return statearr_25934;
})();
var statearr_25935_25955 = state_25932__$1;
(statearr_25935_25955[(2)] = null);

(statearr_25935_25955[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25933 === (1))){
var state_25932__$1 = state_25932;
var statearr_25936_25956 = state_25932__$1;
(statearr_25936_25956[(2)] = null);

(statearr_25936_25956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25933 === (4))){
var inst_25904 = (state_25932[(8)]);
var inst_25904__$1 = (state_25932[(2)]);
var inst_25905 = cljs.core.meta.call(null,inst_25904__$1);
var inst_25906 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_25905);
var state_25932__$1 = (function (){var statearr_25937 = state_25932;
(statearr_25937[(8)] = inst_25904__$1);

return statearr_25937;
})();
if(cljs.core.truth_(inst_25906)){
var statearr_25938_25957 = state_25932__$1;
(statearr_25938_25957[(1)] = (5));

} else {
var statearr_25939_25958 = state_25932__$1;
(statearr_25939_25958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25933 === (6))){
var inst_25913 = cljs.core.async.timeout.call(null,(0));
var state_25932__$1 = state_25932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25932__$1,(9),inst_25913);
} else {
if((state_val_25933 === (3))){
var inst_25930 = (state_25932[(2)]);
var state_25932__$1 = state_25932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25932__$1,inst_25930);
} else {
if((state_val_25933 === (12))){
var inst_25904 = (state_25932[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25932,(11),Object,null,(10));
var inst_25925 = re_frame.handlers.handle.call(null,inst_25904);
var state_25932__$1 = state_25932;
var statearr_25940_25959 = state_25932__$1;
(statearr_25940_25959[(2)] = inst_25925);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25932__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25933 === (2))){
var state_25932__$1 = state_25932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25932__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_25933 === (11))){
var inst_25918 = (state_25932[(2)]);
var inst_25919 = re_frame.router.purge_chan.call(null);
var inst_25920 = re_frame$router$router_loop.call(null);
var inst_25921 = (function(){throw inst_25918})();
var state_25932__$1 = (function (){var statearr_25941 = state_25932;
(statearr_25941[(9)] = inst_25920);

(statearr_25941[(10)] = inst_25919);

return statearr_25941;
})();
var statearr_25942_25960 = state_25932__$1;
(statearr_25942_25960[(2)] = inst_25921);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25932__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25933 === (9))){
var inst_25915 = (state_25932[(2)]);
var state_25932__$1 = state_25932;
var statearr_25943_25961 = state_25932__$1;
(statearr_25943_25961[(2)] = inst_25915);

(statearr_25943_25961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25933 === (5))){
var inst_25908 = reagent.core.flush.call(null);
var inst_25909 = cljs.core.async.timeout.call(null,(20));
var state_25932__$1 = (function (){var statearr_25944 = state_25932;
(statearr_25944[(11)] = inst_25908);

return statearr_25944;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25932__$1,(8),inst_25909);
} else {
if((state_val_25933 === (10))){
var inst_25927 = (state_25932[(2)]);
var state_25932__$1 = (function (){var statearr_25945 = state_25932;
(statearr_25945[(12)] = inst_25927);

return statearr_25945;
})();
var statearr_25946_25962 = state_25932__$1;
(statearr_25946_25962[(2)] = null);

(statearr_25946_25962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25933 === (8))){
var inst_25911 = (state_25932[(2)]);
var state_25932__$1 = state_25932;
var statearr_25947_25963 = state_25932__$1;
(statearr_25947_25963[(2)] = inst_25911);

(statearr_25947_25963[(1)] = (7));


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
});})(c__21398__auto__))
;
return ((function (switch__21336__auto__,c__21398__auto__){
return (function() {
var re_frame$router$router_loop_$_state_machine__21337__auto__ = null;
var re_frame$router$router_loop_$_state_machine__21337__auto____0 = (function (){
var statearr_25951 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25951[(0)] = re_frame$router$router_loop_$_state_machine__21337__auto__);

(statearr_25951[(1)] = (1));

return statearr_25951;
});
var re_frame$router$router_loop_$_state_machine__21337__auto____1 = (function (state_25932){
while(true){
var ret_value__21338__auto__ = (function (){try{while(true){
var result__21339__auto__ = switch__21336__auto__.call(null,state_25932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21339__auto__;
}
break;
}
}catch (e25952){if((e25952 instanceof Object)){
var ex__21340__auto__ = e25952;
var statearr_25953_25964 = state_25932;
(statearr_25953_25964[(5)] = ex__21340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25965 = state_25932;
state_25932 = G__25965;
continue;
} else {
return ret_value__21338__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__21337__auto__ = function(state_25932){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__21337__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__21337__auto____1.call(this,state_25932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__21337__auto____0;
re_frame$router$router_loop_$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__21337__auto____1;
return re_frame$router$router_loop_$_state_machine__21337__auto__;
})()
;})(switch__21336__auto__,c__21398__auto__))
})();
var state__21400__auto__ = (function (){var statearr_25954 = f__21399__auto__.call(null);
(statearr_25954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21398__auto__);

return statearr_25954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21400__auto__);
});})(c__21398__auto__))
);

return c__21398__auto__;
});
re_frame.router.router_loop.call(null);
/**
 * Send an event to be processed by the registered handler.
 * 
 * Usage example:
 * (dispatch [:delete-item 42])
 * 
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event_v){
if((event_v == null)){
re_frame.utils.error.call(null,"re-frame: \"dispatch\" is ignoring a nil event.");
} else {
cljs.core.async.put_BANG_.call(null,re_frame.router.event_chan,event_v);
}

return null;
});
/**
 * Send an event to be processed by the registered handler, but avoid the async-inducing
 * use of core.async/chan.
 * 
 * Usage example:
 * (dispatch-sync [:delete-item 42])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.handlers.handle.call(null,event_v);

return null;
});

//# sourceMappingURL=router.js.map?rel=1434750193810