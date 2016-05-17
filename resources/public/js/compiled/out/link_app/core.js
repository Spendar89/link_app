// Compiled by ClojureScript 0.0-3211 {}
goog.provide('link_app.core');
goog.require('cljs.core');
goog.require('link_app.views');
goog.require('reagent.core');
goog.require('link_app.handlers');
goog.require('link_app.routes');
goog.require('link_app.subs');
goog.require('re_frame.core');
link_app.core.mount_app_layout = (function link_app$core$mount_app_layout(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [link_app.views.app_layout], null),document.getElementById("app"));
});
link_app.core.init = (function link_app$core$init(){
link_app.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return link_app.core.mount_app_layout.call(null);
});
goog.exportSymbol('link_app.core.init', link_app.core.init);

//# sourceMappingURL=core.js.map?rel=1435004891160