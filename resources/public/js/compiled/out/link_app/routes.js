// Compiled by ClojureScript 0.0-3211 {}
goog.provide('link_app.routes');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('goog.history.EventType');
goog.require('goog.events');
goog.require('secretary.core');
goog.require('goog.History');
link_app.routes.hook_browser_navigation_BANG_ = (function link_app$routes$hook_browser_navigation_BANG_(){
var G__21849 = (new goog.History());
goog.events.listen(G__21849,goog.history.EventType.NAVIGATE,((function (G__21849){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__21849))
);

G__21849.setEnabled(true);

return G__21849;
});
link_app.routes.app_routes = (function link_app$routes$app_routes(){
var action__21259__auto___21858 = (function (params__21260__auto__){
if(cljs.core.map_QMARK_.call(null,params__21260__auto__)){
var map__21854 = params__21260__auto__;
var map__21854__$1 = ((cljs.core.seq_QMARK_.call(null,map__21854))?cljs.core.apply.call(null,cljs.core.hash_map,map__21854):map__21854);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-current-page","set-current-page",-1047328569),new cljs.core.Keyword("links","show","links/show",-749774246)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21260__auto__)){
var vec__21855 = params__21260__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-current-page","set-current-page",-1047328569),new cljs.core.Keyword("links","show","links/show",-749774246)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/link",action__21259__auto___21858);


var action__21259__auto___21859 = (function (params__21260__auto__){
if(cljs.core.map_QMARK_.call(null,params__21260__auto__)){
var map__21856 = params__21260__auto__;
var map__21856__$1 = ((cljs.core.seq_QMARK_.call(null,map__21856))?cljs.core.apply.call(null,cljs.core.hash_map,map__21856):map__21856);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-current-page","set-current-page",-1047328569),new cljs.core.Keyword("links","index","links/index",-1143822944)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21260__auto__)){
var vec__21857 = params__21260__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-current-page","set-current-page",-1047328569),new cljs.core.Keyword("links","index","links/index",-1143822944)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/links",action__21259__auto___21859);


return link_app.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1434842214730