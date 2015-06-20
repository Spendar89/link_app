// Compiled by ClojureScript 0.0-3211 {}
goog.provide('link_app.handlers');
goog.require('cljs.core');
goog.require('link_app.db');
goog.require('re_frame.core');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return link_app.db.default_db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-current-page","set-current-page",-1047328569),(function (db,p__21431){
var vec__21432 = p__21431;
var _ = cljs.core.nth.call(null,vec__21432,(0),null);
var current_page = cljs.core.nth.call(null,vec__21432,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-page","current-page",-101294180),current_page);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-link-id","set-link-id",-2104756025),(function (db,p__21433){
var vec__21434 = p__21433;
var _ = cljs.core.nth.call(null,vec__21434,(0),null);
var link_id = cljs.core.nth.call(null,vec__21434,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"link-id","link-id",-101480658),link_id);
}));

//# sourceMappingURL=handlers.js.map?rel=1434777592087