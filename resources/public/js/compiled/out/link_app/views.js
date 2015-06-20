// Compiled by ClojureScript 0.0-3211 {}
goog.provide('link_app.views');
goog.require('cljs.core');
goog.require('link_app.pages.links');
goog.require('re_frame.core');
link_app.views.page_not_found = (function link_app$views$page_not_found(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Im a default page!!!! :)"], null);
});
if(typeof link_app.views.pages !== 'undefined'){
} else {
link_app.views.pages = (function (){var method_table__19069__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19070__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19071__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19072__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19073__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"link-app.views","pages"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19073__auto__,method_table__19069__auto__,prefer_table__19070__auto__,method_cache__19071__auto__,cached_hierarchy__19072__auto__));
})();
}
cljs.core._add_method.call(null,link_app.views.pages,new cljs.core.Keyword("links","show","links/show",-749774246),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [link_app.pages.links.show], null);
}));
cljs.core._add_method.call(null,link_app.views.pages,new cljs.core.Keyword("links","index","links/index",-1143822944),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [link_app.pages.links.index], null);
}));
cljs.core._add_method.call(null,link_app.views.pages,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [link_app.views.page_not_found], null);
}));
link_app.views.app_layout = (function link_app$views$app_layout(){
var current_page = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null));
return ((function (current_page){
return (function (){
return link_app.views.pages.call(null,cljs.core.deref.call(null,current_page));
});
;})(current_page))
});

//# sourceMappingURL=views.js.map?rel=1434842738486