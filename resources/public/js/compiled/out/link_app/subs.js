// Compiled by ClojureScript 0.0-3211 {}
goog.provide('link_app.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"links","links",-654507394),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"link-id","link-id",-101480658),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"link-id","link-id",-101480658).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"link","link",-1769163468),(function (db){
var link_id = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link-id","link-id",-101480658)], null));
var links = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"links","links",-654507394)], null));
var link = cljs.core.first.call(null,cljs.core.filter.call(null,((function (link_id,links){
return (function (p1__21406_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__21406_SHARP_),cljs.core.deref.call(null,link_id));
});})(link_id,links))
,cljs.core.deref.call(null,links)));
return reagent.ratom.make_reaction.call(null,((function (link_id,links,link){
return (function (){
return link;
});})(link_id,links,link))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));

//# sourceMappingURL=subs.js.map?rel=1434776335984