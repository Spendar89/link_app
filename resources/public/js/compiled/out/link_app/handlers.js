// Compiled by ClojureScript 0.0-3211 {}
goog.provide('link_app.handlers');
goog.require('cljs.core');
goog.require('link_app.db');
goog.require('re_frame.core');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return link_app.db.default_db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-current-page","set-current-page",-1047328569),(function (db,p__21280){
var vec__21281 = p__21280;
var _ = cljs.core.nth.call(null,vec__21281,(0),null);
var current_page = cljs.core.nth.call(null,vec__21281,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-page","current-page",-101294180),current_page);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-link-id","set-link-id",-2104756025),(function (db,p__21282){
var vec__21283 = p__21282;
var _ = cljs.core.nth.call(null,vec__21283,(0),null);
var link_id = cljs.core.nth.call(null,vec__21283,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"link-id","link-id",-101480658),link_id);
}));

//# sourceMappingURL=handlers.js.map?rel=1435004696539