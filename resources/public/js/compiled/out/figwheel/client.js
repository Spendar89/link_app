// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
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
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28618__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28618 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28619__i = 0, G__28619__a = new Array(arguments.length -  0);
while (G__28619__i < G__28619__a.length) {G__28619__a[G__28619__i] = arguments[G__28619__i + 0]; ++G__28619__i;}
  args = new cljs.core.IndexedSeq(G__28619__a,0);
} 
return G__28618__delegate.call(this,args);};
G__28618.cljs$lang$maxFixedArity = 0;
G__28618.cljs$lang$applyTo = (function (arglist__28620){
var args = cljs.core.seq(arglist__28620);
return G__28618__delegate(args);
});
G__28618.cljs$core$IFn$_invoke$arity$variadic = G__28618__delegate;
return G__28618;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28621){
var map__28623 = p__28621;
var map__28623__$1 = ((cljs.core.seq_QMARK_.call(null,map__28623))?cljs.core.apply.call(null,cljs.core.hash_map,map__28623):map__28623);
var class$ = cljs.core.get.call(null,map__28623__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__28623__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18174__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18174__auto__)){
return or__18174__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18162__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18162__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18162__auto__;
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
var c__21398__auto___28752 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21398__auto___28752,ch){
return (function (){
var f__21399__auto__ = (function (){var switch__21336__auto__ = ((function (c__21398__auto___28752,ch){
return (function (state_28726){
var state_val_28727 = (state_28726[(1)]);
if((state_val_28727 === (7))){
var inst_28722 = (state_28726[(2)]);
var state_28726__$1 = state_28726;
var statearr_28728_28753 = state_28726__$1;
(statearr_28728_28753[(2)] = inst_28722);

(statearr_28728_28753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28727 === (1))){
var state_28726__$1 = state_28726;
var statearr_28729_28754 = state_28726__$1;
(statearr_28729_28754[(2)] = null);

(statearr_28729_28754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28727 === (4))){
var inst_28690 = (state_28726[(7)]);
var inst_28690__$1 = (state_28726[(2)]);
var state_28726__$1 = (function (){var statearr_28730 = state_28726;
(statearr_28730[(7)] = inst_28690__$1);

return statearr_28730;
})();
if(cljs.core.truth_(inst_28690__$1)){
var statearr_28731_28755 = state_28726__$1;
(statearr_28731_28755[(1)] = (5));

} else {
var statearr_28732_28756 = state_28726__$1;
(statearr_28732_28756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28727 === (13))){
var state_28726__$1 = state_28726;
var statearr_28733_28757 = state_28726__$1;
(statearr_28733_28757[(2)] = null);

(statearr_28733_28757[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28727 === (6))){
var state_28726__$1 = state_28726;
var statearr_28734_28758 = state_28726__$1;
(statearr_28734_28758[(2)] = null);

(statearr_28734_28758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28727 === (3))){
var inst_28724 = (state_28726[(2)]);
var state_28726__$1 = state_28726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28726__$1,inst_28724);
} else {
if((state_val_28727 === (12))){
var inst_28697 = (state_28726[(8)]);
var inst_28710 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28697);
var inst_28711 = cljs.core.first.call(null,inst_28710);
var inst_28712 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28711);
var inst_28713 = console.warn("Figwheel: Not loading code with warnings - ",inst_28712);
var state_28726__$1 = state_28726;
var statearr_28735_28759 = state_28726__$1;
(statearr_28735_28759[(2)] = inst_28713);

(statearr_28735_28759[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28727 === (2))){
var state_28726__$1 = state_28726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28726__$1,(4),ch);
} else {
if((state_val_28727 === (11))){
var inst_28706 = (state_28726[(2)]);
var state_28726__$1 = state_28726;
var statearr_28736_28760 = state_28726__$1;
(statearr_28736_28760[(2)] = inst_28706);

(statearr_28736_28760[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28727 === (9))){
var inst_28696 = (state_28726[(9)]);
var inst_28708 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28696,opts);
var state_28726__$1 = state_28726;
if(cljs.core.truth_(inst_28708)){
var statearr_28737_28761 = state_28726__$1;
(statearr_28737_28761[(1)] = (12));

} else {
var statearr_28738_28762 = state_28726__$1;
(statearr_28738_28762[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28727 === (5))){
var inst_28690 = (state_28726[(7)]);
var inst_28696 = (state_28726[(9)]);
var inst_28692 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28693 = (new cljs.core.PersistentArrayMap(null,2,inst_28692,null));
var inst_28694 = (new cljs.core.PersistentHashSet(null,inst_28693,null));
var inst_28695 = figwheel.client.focus_msgs.call(null,inst_28694,inst_28690);
var inst_28696__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28695);
var inst_28697 = cljs.core.first.call(null,inst_28695);
var inst_28698 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28696__$1,opts);
var state_28726__$1 = (function (){var statearr_28739 = state_28726;
(statearr_28739[(9)] = inst_28696__$1);

(statearr_28739[(8)] = inst_28697);

return statearr_28739;
})();
if(cljs.core.truth_(inst_28698)){
var statearr_28740_28763 = state_28726__$1;
(statearr_28740_28763[(1)] = (8));

} else {
var statearr_28741_28764 = state_28726__$1;
(statearr_28741_28764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28727 === (14))){
var inst_28716 = (state_28726[(2)]);
var state_28726__$1 = state_28726;
var statearr_28742_28765 = state_28726__$1;
(statearr_28742_28765[(2)] = inst_28716);

(statearr_28742_28765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28727 === (10))){
var inst_28718 = (state_28726[(2)]);
var state_28726__$1 = (function (){var statearr_28743 = state_28726;
(statearr_28743[(10)] = inst_28718);

return statearr_28743;
})();
var statearr_28744_28766 = state_28726__$1;
(statearr_28744_28766[(2)] = null);

(statearr_28744_28766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28727 === (8))){
var inst_28697 = (state_28726[(8)]);
var inst_28700 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28701 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28697);
var inst_28702 = cljs.core.async.timeout.call(null,(1000));
var inst_28703 = [inst_28701,inst_28702];
var inst_28704 = (new cljs.core.PersistentVector(null,2,(5),inst_28700,inst_28703,null));
var state_28726__$1 = state_28726;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28726__$1,(11),inst_28704);
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
});})(c__21398__auto___28752,ch))
;
return ((function (switch__21336__auto__,c__21398__auto___28752,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21337__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21337__auto____0 = (function (){
var statearr_28748 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28748[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21337__auto__);

(statearr_28748[(1)] = (1));

return statearr_28748;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21337__auto____1 = (function (state_28726){
while(true){
var ret_value__21338__auto__ = (function (){try{while(true){
var result__21339__auto__ = switch__21336__auto__.call(null,state_28726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21339__auto__;
}
break;
}
}catch (e28749){if((e28749 instanceof Object)){
var ex__21340__auto__ = e28749;
var statearr_28750_28767 = state_28726;
(statearr_28750_28767[(5)] = ex__21340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28768 = state_28726;
state_28726 = G__28768;
continue;
} else {
return ret_value__21338__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21337__auto__ = function(state_28726){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21337__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21337__auto____1.call(this,state_28726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21337__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21337__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21337__auto__;
})()
;})(switch__21336__auto__,c__21398__auto___28752,ch))
})();
var state__21400__auto__ = (function (){var statearr_28751 = f__21399__auto__.call(null);
(statearr_28751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21398__auto___28752);

return statearr_28751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21400__auto__);
});})(c__21398__auto___28752,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28769_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28769_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_28776 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28776){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_28774 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28775 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28774,_STAR_print_newline_STAR_28775,base_path_28776){
return (function() { 
var G__28777__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28777 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28778__i = 0, G__28778__a = new Array(arguments.length -  0);
while (G__28778__i < G__28778__a.length) {G__28778__a[G__28778__i] = arguments[G__28778__i + 0]; ++G__28778__i;}
  args = new cljs.core.IndexedSeq(G__28778__a,0);
} 
return G__28777__delegate.call(this,args);};
G__28777.cljs$lang$maxFixedArity = 0;
G__28777.cljs$lang$applyTo = (function (arglist__28779){
var args = cljs.core.seq(arglist__28779);
return G__28777__delegate(args);
});
G__28777.cljs$core$IFn$_invoke$arity$variadic = G__28777__delegate;
return G__28777;
})()
;})(_STAR_print_fn_STAR_28774,_STAR_print_newline_STAR_28775,base_path_28776))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28775;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28774;
}}catch (e28773){if((e28773 instanceof Error)){
var e = e28773;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28776], null));
} else {
var e = e28773;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28776))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28780){
var map__28785 = p__28780;
var map__28785__$1 = ((cljs.core.seq_QMARK_.call(null,map__28785))?cljs.core.apply.call(null,cljs.core.hash_map,map__28785):map__28785);
var opts = map__28785__$1;
var build_id = cljs.core.get.call(null,map__28785__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28785,map__28785__$1,opts,build_id){
return (function (p__28786){
var vec__28787 = p__28786;
var map__28788 = cljs.core.nth.call(null,vec__28787,(0),null);
var map__28788__$1 = ((cljs.core.seq_QMARK_.call(null,map__28788))?cljs.core.apply.call(null,cljs.core.hash_map,map__28788):map__28788);
var msg = map__28788__$1;
var msg_name = cljs.core.get.call(null,map__28788__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28787,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__28787,map__28788,map__28788__$1,msg,msg_name,_,map__28785,map__28785__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28787,map__28788,map__28788__$1,msg,msg_name,_,map__28785,map__28785__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28785,map__28785__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28792){
var vec__28793 = p__28792;
var map__28794 = cljs.core.nth.call(null,vec__28793,(0),null);
var map__28794__$1 = ((cljs.core.seq_QMARK_.call(null,map__28794))?cljs.core.apply.call(null,cljs.core.hash_map,map__28794):map__28794);
var msg = map__28794__$1;
var msg_name = cljs.core.get.call(null,map__28794__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28793,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28795){
var map__28803 = p__28795;
var map__28803__$1 = ((cljs.core.seq_QMARK_.call(null,map__28803))?cljs.core.apply.call(null,cljs.core.hash_map,map__28803):map__28803);
var on_compile_fail = cljs.core.get.call(null,map__28803__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__28803__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__28803,map__28803__$1,on_compile_fail,on_compile_warning){
return (function (p__28804){
var vec__28805 = p__28804;
var map__28806 = cljs.core.nth.call(null,vec__28805,(0),null);
var map__28806__$1 = ((cljs.core.seq_QMARK_.call(null,map__28806))?cljs.core.apply.call(null,cljs.core.hash_map,map__28806):map__28806);
var msg = map__28806__$1;
var msg_name = cljs.core.get.call(null,map__28806__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28805,(1));
var pred__28807 = cljs.core._EQ_;
var expr__28808 = msg_name;
if(cljs.core.truth_(pred__28807.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28808))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28807.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28808))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28803,map__28803__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21398__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21399__auto__ = (function (){var switch__21336__auto__ = ((function (c__21398__auto__,msg_hist,msg_names,msg){
return (function (state_29009){
var state_val_29010 = (state_29009[(1)]);
if((state_val_29010 === (7))){
var inst_28943 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
var statearr_29011_29052 = state_29009__$1;
(statearr_29011_29052[(2)] = inst_28943);

(statearr_29011_29052[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (20))){
var inst_28971 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29009__$1 = state_29009;
if(cljs.core.truth_(inst_28971)){
var statearr_29012_29053 = state_29009__$1;
(statearr_29012_29053[(1)] = (22));

} else {
var statearr_29013_29054 = state_29009__$1;
(statearr_29013_29054[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (27))){
var inst_28983 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28984 = figwheel.client.heads_up.display_warning.call(null,inst_28983);
var state_29009__$1 = state_29009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29009__$1,(30),inst_28984);
} else {
if((state_val_29010 === (1))){
var inst_28931 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29009__$1 = state_29009;
if(cljs.core.truth_(inst_28931)){
var statearr_29014_29055 = state_29009__$1;
(statearr_29014_29055[(1)] = (2));

} else {
var statearr_29015_29056 = state_29009__$1;
(statearr_29015_29056[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (24))){
var inst_28999 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
var statearr_29016_29057 = state_29009__$1;
(statearr_29016_29057[(2)] = inst_28999);

(statearr_29016_29057[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (4))){
var inst_29007 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29009__$1,inst_29007);
} else {
if((state_val_29010 === (15))){
var inst_28959 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28960 = figwheel.client.format_messages.call(null,inst_28959);
var inst_28961 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28962 = figwheel.client.heads_up.display_error.call(null,inst_28960,inst_28961);
var state_29009__$1 = state_29009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29009__$1,(18),inst_28962);
} else {
if((state_val_29010 === (21))){
var inst_29001 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
var statearr_29017_29058 = state_29009__$1;
(statearr_29017_29058[(2)] = inst_29001);

(statearr_29017_29058[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (31))){
var inst_28990 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29009__$1 = state_29009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29009__$1,(34),inst_28990);
} else {
if((state_val_29010 === (32))){
var state_29009__$1 = state_29009;
var statearr_29018_29059 = state_29009__$1;
(statearr_29018_29059[(2)] = null);

(statearr_29018_29059[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (33))){
var inst_28995 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
var statearr_29019_29060 = state_29009__$1;
(statearr_29019_29060[(2)] = inst_28995);

(statearr_29019_29060[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (13))){
var inst_28949 = (state_29009[(2)]);
var inst_28950 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28951 = figwheel.client.format_messages.call(null,inst_28950);
var inst_28952 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28953 = figwheel.client.heads_up.display_error.call(null,inst_28951,inst_28952);
var state_29009__$1 = (function (){var statearr_29020 = state_29009;
(statearr_29020[(7)] = inst_28949);

return statearr_29020;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29009__$1,(14),inst_28953);
} else {
if((state_val_29010 === (22))){
var inst_28973 = figwheel.client.heads_up.clear.call(null);
var state_29009__$1 = state_29009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29009__$1,(25),inst_28973);
} else {
if((state_val_29010 === (29))){
var inst_28997 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
var statearr_29021_29061 = state_29009__$1;
(statearr_29021_29061[(2)] = inst_28997);

(statearr_29021_29061[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (6))){
var inst_28939 = figwheel.client.heads_up.clear.call(null);
var state_29009__$1 = state_29009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29009__$1,(9),inst_28939);
} else {
if((state_val_29010 === (28))){
var inst_28988 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29009__$1 = state_29009;
if(cljs.core.truth_(inst_28988)){
var statearr_29022_29062 = state_29009__$1;
(statearr_29022_29062[(1)] = (31));

} else {
var statearr_29023_29063 = state_29009__$1;
(statearr_29023_29063[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (25))){
var inst_28975 = (state_29009[(2)]);
var inst_28976 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28977 = figwheel.client.heads_up.display_warning.call(null,inst_28976);
var state_29009__$1 = (function (){var statearr_29024 = state_29009;
(statearr_29024[(8)] = inst_28975);

return statearr_29024;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29009__$1,(26),inst_28977);
} else {
if((state_val_29010 === (34))){
var inst_28992 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
var statearr_29025_29064 = state_29009__$1;
(statearr_29025_29064[(2)] = inst_28992);

(statearr_29025_29064[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (17))){
var inst_29003 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
var statearr_29026_29065 = state_29009__$1;
(statearr_29026_29065[(2)] = inst_29003);

(statearr_29026_29065[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (3))){
var inst_28945 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29009__$1 = state_29009;
if(cljs.core.truth_(inst_28945)){
var statearr_29027_29066 = state_29009__$1;
(statearr_29027_29066[(1)] = (10));

} else {
var statearr_29028_29067 = state_29009__$1;
(statearr_29028_29067[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (12))){
var inst_29005 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
var statearr_29029_29068 = state_29009__$1;
(statearr_29029_29068[(2)] = inst_29005);

(statearr_29029_29068[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (2))){
var inst_28933 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29009__$1 = state_29009;
if(cljs.core.truth_(inst_28933)){
var statearr_29030_29069 = state_29009__$1;
(statearr_29030_29069[(1)] = (5));

} else {
var statearr_29031_29070 = state_29009__$1;
(statearr_29031_29070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (23))){
var inst_28981 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29009__$1 = state_29009;
if(cljs.core.truth_(inst_28981)){
var statearr_29032_29071 = state_29009__$1;
(statearr_29032_29071[(1)] = (27));

} else {
var statearr_29033_29072 = state_29009__$1;
(statearr_29033_29072[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (19))){
var inst_28968 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28969 = figwheel.client.heads_up.append_message.call(null,inst_28968);
var state_29009__$1 = state_29009;
var statearr_29034_29073 = state_29009__$1;
(statearr_29034_29073[(2)] = inst_28969);

(statearr_29034_29073[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (11))){
var inst_28957 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29009__$1 = state_29009;
if(cljs.core.truth_(inst_28957)){
var statearr_29035_29074 = state_29009__$1;
(statearr_29035_29074[(1)] = (15));

} else {
var statearr_29036_29075 = state_29009__$1;
(statearr_29036_29075[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (9))){
var inst_28941 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
var statearr_29037_29076 = state_29009__$1;
(statearr_29037_29076[(2)] = inst_28941);

(statearr_29037_29076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (5))){
var inst_28935 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29009__$1 = state_29009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29009__$1,(8),inst_28935);
} else {
if((state_val_29010 === (14))){
var inst_28955 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
var statearr_29038_29077 = state_29009__$1;
(statearr_29038_29077[(2)] = inst_28955);

(statearr_29038_29077[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (26))){
var inst_28979 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
var statearr_29039_29078 = state_29009__$1;
(statearr_29039_29078[(2)] = inst_28979);

(statearr_29039_29078[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (16))){
var inst_28966 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29009__$1 = state_29009;
if(cljs.core.truth_(inst_28966)){
var statearr_29040_29079 = state_29009__$1;
(statearr_29040_29079[(1)] = (19));

} else {
var statearr_29041_29080 = state_29009__$1;
(statearr_29041_29080[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (30))){
var inst_28986 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
var statearr_29042_29081 = state_29009__$1;
(statearr_29042_29081[(2)] = inst_28986);

(statearr_29042_29081[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (10))){
var inst_28947 = figwheel.client.heads_up.clear.call(null);
var state_29009__$1 = state_29009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29009__$1,(13),inst_28947);
} else {
if((state_val_29010 === (18))){
var inst_28964 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
var statearr_29043_29082 = state_29009__$1;
(statearr_29043_29082[(2)] = inst_28964);

(statearr_29043_29082[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (8))){
var inst_28937 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
var statearr_29044_29083 = state_29009__$1;
(statearr_29044_29083[(2)] = inst_28937);

(statearr_29044_29083[(1)] = (7));


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
});})(c__21398__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21336__auto__,c__21398__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21337__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21337__auto____0 = (function (){
var statearr_29048 = [null,null,null,null,null,null,null,null,null];
(statearr_29048[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21337__auto__);

(statearr_29048[(1)] = (1));

return statearr_29048;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21337__auto____1 = (function (state_29009){
while(true){
var ret_value__21338__auto__ = (function (){try{while(true){
var result__21339__auto__ = switch__21336__auto__.call(null,state_29009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21339__auto__;
}
break;
}
}catch (e29049){if((e29049 instanceof Object)){
var ex__21340__auto__ = e29049;
var statearr_29050_29084 = state_29009;
(statearr_29050_29084[(5)] = ex__21340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29085 = state_29009;
state_29009 = G__29085;
continue;
} else {
return ret_value__21338__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21337__auto__ = function(state_29009){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21337__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21337__auto____1.call(this,state_29009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21337__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21337__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21337__auto__;
})()
;})(switch__21336__auto__,c__21398__auto__,msg_hist,msg_names,msg))
})();
var state__21400__auto__ = (function (){var statearr_29051 = f__21399__auto__.call(null);
(statearr_29051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21398__auto__);

return statearr_29051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21400__auto__);
});})(c__21398__auto__,msg_hist,msg_names,msg))
);

return c__21398__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21398__auto___29148 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21398__auto___29148,ch){
return (function (){
var f__21399__auto__ = (function (){var switch__21336__auto__ = ((function (c__21398__auto___29148,ch){
return (function (state_29131){
var state_val_29132 = (state_29131[(1)]);
if((state_val_29132 === (8))){
var inst_29123 = (state_29131[(2)]);
var state_29131__$1 = (function (){var statearr_29133 = state_29131;
(statearr_29133[(7)] = inst_29123);

return statearr_29133;
})();
var statearr_29134_29149 = state_29131__$1;
(statearr_29134_29149[(2)] = null);

(statearr_29134_29149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (7))){
var inst_29127 = (state_29131[(2)]);
var state_29131__$1 = state_29131;
var statearr_29135_29150 = state_29131__$1;
(statearr_29135_29150[(2)] = inst_29127);

(statearr_29135_29150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (6))){
var state_29131__$1 = state_29131;
var statearr_29136_29151 = state_29131__$1;
(statearr_29136_29151[(2)] = null);

(statearr_29136_29151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (5))){
var inst_29119 = (state_29131[(8)]);
var inst_29121 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29119);
var state_29131__$1 = state_29131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29131__$1,(8),inst_29121);
} else {
if((state_val_29132 === (4))){
var inst_29119 = (state_29131[(8)]);
var inst_29119__$1 = (state_29131[(2)]);
var state_29131__$1 = (function (){var statearr_29137 = state_29131;
(statearr_29137[(8)] = inst_29119__$1);

return statearr_29137;
})();
if(cljs.core.truth_(inst_29119__$1)){
var statearr_29138_29152 = state_29131__$1;
(statearr_29138_29152[(1)] = (5));

} else {
var statearr_29139_29153 = state_29131__$1;
(statearr_29139_29153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (3))){
var inst_29129 = (state_29131[(2)]);
var state_29131__$1 = state_29131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29131__$1,inst_29129);
} else {
if((state_val_29132 === (2))){
var state_29131__$1 = state_29131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29131__$1,(4),ch);
} else {
if((state_val_29132 === (1))){
var state_29131__$1 = state_29131;
var statearr_29140_29154 = state_29131__$1;
(statearr_29140_29154[(2)] = null);

(statearr_29140_29154[(1)] = (2));


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
});})(c__21398__auto___29148,ch))
;
return ((function (switch__21336__auto__,c__21398__auto___29148,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21337__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21337__auto____0 = (function (){
var statearr_29144 = [null,null,null,null,null,null,null,null,null];
(statearr_29144[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21337__auto__);

(statearr_29144[(1)] = (1));

return statearr_29144;
});
var figwheel$client$heads_up_plugin_$_state_machine__21337__auto____1 = (function (state_29131){
while(true){
var ret_value__21338__auto__ = (function (){try{while(true){
var result__21339__auto__ = switch__21336__auto__.call(null,state_29131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21339__auto__;
}
break;
}
}catch (e29145){if((e29145 instanceof Object)){
var ex__21340__auto__ = e29145;
var statearr_29146_29155 = state_29131;
(statearr_29146_29155[(5)] = ex__21340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29156 = state_29131;
state_29131 = G__29156;
continue;
} else {
return ret_value__21338__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21337__auto__ = function(state_29131){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21337__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21337__auto____1.call(this,state_29131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21337__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21337__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21337__auto__;
})()
;})(switch__21336__auto__,c__21398__auto___29148,ch))
})();
var state__21400__auto__ = (function (){var statearr_29147 = f__21399__auto__.call(null);
(statearr_29147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21398__auto___29148);

return statearr_29147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21400__auto__);
});})(c__21398__auto___29148,ch))
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
var c__21398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21398__auto__){
return (function (){
var f__21399__auto__ = (function (){var switch__21336__auto__ = ((function (c__21398__auto__){
return (function (state_29177){
var state_val_29178 = (state_29177[(1)]);
if((state_val_29178 === (2))){
var inst_29174 = (state_29177[(2)]);
var inst_29175 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29177__$1 = (function (){var statearr_29179 = state_29177;
(statearr_29179[(7)] = inst_29174);

return statearr_29179;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29177__$1,inst_29175);
} else {
if((state_val_29178 === (1))){
var inst_29172 = cljs.core.async.timeout.call(null,(3000));
var state_29177__$1 = state_29177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29177__$1,(2),inst_29172);
} else {
return null;
}
}
});})(c__21398__auto__))
;
return ((function (switch__21336__auto__,c__21398__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21337__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21337__auto____0 = (function (){
var statearr_29183 = [null,null,null,null,null,null,null,null];
(statearr_29183[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21337__auto__);

(statearr_29183[(1)] = (1));

return statearr_29183;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21337__auto____1 = (function (state_29177){
while(true){
var ret_value__21338__auto__ = (function (){try{while(true){
var result__21339__auto__ = switch__21336__auto__.call(null,state_29177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21339__auto__;
}
break;
}
}catch (e29184){if((e29184 instanceof Object)){
var ex__21340__auto__ = e29184;
var statearr_29185_29187 = state_29177;
(statearr_29185_29187[(5)] = ex__21340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29188 = state_29177;
state_29177 = G__29188;
continue;
} else {
return ret_value__21338__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21337__auto__ = function(state_29177){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21337__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21337__auto____1.call(this,state_29177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21337__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21337__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21337__auto__;
})()
;})(switch__21336__auto__,c__21398__auto__))
})();
var state__21400__auto__ = (function (){var statearr_29186 = f__21399__auto__.call(null);
(statearr_29186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21398__auto__);

return statearr_29186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21400__auto__);
});})(c__21398__auto__))
);

return c__21398__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29189){
var map__29195 = p__29189;
var map__29195__$1 = ((cljs.core.seq_QMARK_.call(null,map__29195))?cljs.core.apply.call(null,cljs.core.hash_map,map__29195):map__29195);
var ed = map__29195__$1;
var cause = cljs.core.get.call(null,map__29195__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__29195__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__29195__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29196_29200 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29197_29201 = null;
var count__29198_29202 = (0);
var i__29199_29203 = (0);
while(true){
if((i__29199_29203 < count__29198_29202)){
var msg_29204 = cljs.core._nth.call(null,chunk__29197_29201,i__29199_29203);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29204);

var G__29205 = seq__29196_29200;
var G__29206 = chunk__29197_29201;
var G__29207 = count__29198_29202;
var G__29208 = (i__29199_29203 + (1));
seq__29196_29200 = G__29205;
chunk__29197_29201 = G__29206;
count__29198_29202 = G__29207;
i__29199_29203 = G__29208;
continue;
} else {
var temp__4126__auto___29209 = cljs.core.seq.call(null,seq__29196_29200);
if(temp__4126__auto___29209){
var seq__29196_29210__$1 = temp__4126__auto___29209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29196_29210__$1)){
var c__18959__auto___29211 = cljs.core.chunk_first.call(null,seq__29196_29210__$1);
var G__29212 = cljs.core.chunk_rest.call(null,seq__29196_29210__$1);
var G__29213 = c__18959__auto___29211;
var G__29214 = cljs.core.count.call(null,c__18959__auto___29211);
var G__29215 = (0);
seq__29196_29200 = G__29212;
chunk__29197_29201 = G__29213;
count__29198_29202 = G__29214;
i__29199_29203 = G__29215;
continue;
} else {
var msg_29216 = cljs.core.first.call(null,seq__29196_29210__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29216);

var G__29217 = cljs.core.next.call(null,seq__29196_29210__$1);
var G__29218 = null;
var G__29219 = (0);
var G__29220 = (0);
seq__29196_29200 = G__29217;
chunk__29197_29201 = G__29218;
count__29198_29202 = G__29219;
i__29199_29203 = G__29220;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29221){
var map__29223 = p__29221;
var map__29223__$1 = ((cljs.core.seq_QMARK_.call(null,map__29223))?cljs.core.apply.call(null,cljs.core.hash_map,map__29223):map__29223);
var w = map__29223__$1;
var message = cljs.core.get.call(null,map__29223__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_((function (){var and__18162__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18162__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18162__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29230 = cljs.core.seq.call(null,plugins);
var chunk__29231 = null;
var count__29232 = (0);
var i__29233 = (0);
while(true){
if((i__29233 < count__29232)){
var vec__29234 = cljs.core._nth.call(null,chunk__29231,i__29233);
var k = cljs.core.nth.call(null,vec__29234,(0),null);
var plugin = cljs.core.nth.call(null,vec__29234,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29236 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29230,chunk__29231,count__29232,i__29233,pl_29236,vec__29234,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29236.call(null,msg_hist);
});})(seq__29230,chunk__29231,count__29232,i__29233,pl_29236,vec__29234,k,plugin))
);
} else {
}

var G__29237 = seq__29230;
var G__29238 = chunk__29231;
var G__29239 = count__29232;
var G__29240 = (i__29233 + (1));
seq__29230 = G__29237;
chunk__29231 = G__29238;
count__29232 = G__29239;
i__29233 = G__29240;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__29230);
if(temp__4126__auto__){
var seq__29230__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29230__$1)){
var c__18959__auto__ = cljs.core.chunk_first.call(null,seq__29230__$1);
var G__29241 = cljs.core.chunk_rest.call(null,seq__29230__$1);
var G__29242 = c__18959__auto__;
var G__29243 = cljs.core.count.call(null,c__18959__auto__);
var G__29244 = (0);
seq__29230 = G__29241;
chunk__29231 = G__29242;
count__29232 = G__29243;
i__29233 = G__29244;
continue;
} else {
var vec__29235 = cljs.core.first.call(null,seq__29230__$1);
var k = cljs.core.nth.call(null,vec__29235,(0),null);
var plugin = cljs.core.nth.call(null,vec__29235,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29245 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29230,chunk__29231,count__29232,i__29233,pl_29245,vec__29235,k,plugin,seq__29230__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29245.call(null,msg_hist);
});})(seq__29230,chunk__29231,count__29232,i__29233,pl_29245,vec__29235,k,plugin,seq__29230__$1,temp__4126__auto__))
);
} else {
}

var G__29246 = cljs.core.next.call(null,seq__29230__$1);
var G__29247 = null;
var G__29248 = (0);
var G__29249 = (0);
seq__29230 = G__29246;
chunk__29231 = G__29247;
count__29232 = G__29248;
i__29233 = G__29249;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__29251 = arguments.length;
switch (G__29251) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__19214__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19214__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29254){
var map__29255 = p__29254;
var map__29255__$1 = ((cljs.core.seq_QMARK_.call(null,map__29255))?cljs.core.apply.call(null,cljs.core.hash_map,map__29255):map__29255);
var opts = map__29255__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29253){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29253));
});

//# sourceMappingURL=client.js.map?rel=1434750195344