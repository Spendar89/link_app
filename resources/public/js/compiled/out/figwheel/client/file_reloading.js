// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__29672_SHARP_,p2__29673_SHARP_){
var and__18162__auto__ = p1__29672_SHARP_;
if(cljs.core.truth_(and__18162__auto__)){
return p2__29673_SHARP_;
} else {
return and__18162__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18174__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18174__auto__){
return or__18174__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18174__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18174__auto__){
return or__18174__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18174__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18174__auto__)){
return or__18174__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__19069__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19070__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19071__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19072__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19073__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19073__auto__,method_table__19069__auto__,prefer_table__19070__auto__,method_cache__19071__auto__,cached_hierarchy__19072__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29674){
var map__29675 = p__29674;
var map__29675__$1 = ((cljs.core.seq_QMARK_.call(null,map__29675))?cljs.core.apply.call(null,cljs.core.hash_map,map__29675):map__29675);
var file = cljs.core.get.call(null,map__29675__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__29676){
var map__29677 = p__29676;
var map__29677__$1 = ((cljs.core.seq_QMARK_.call(null,map__29677))?cljs.core.apply.call(null,cljs.core.hash_map,map__29677):map__29677);
var namespace = cljs.core.get.call(null,map__29677__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__19069__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19070__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19071__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19072__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19073__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19073__auto__,method_table__19069__auto__,prefer_table__19070__auto__,method_cache__19071__auto__,cached_hierarchy__19072__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e29678){if((e29678 instanceof Error)){
var e = e29678;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29678;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__29680 = arguments.length;
switch (G__29680) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29682,callback){
var map__29684 = p__29682;
var map__29684__$1 = ((cljs.core.seq_QMARK_.call(null,map__29684))?cljs.core.apply.call(null,cljs.core.hash_map,map__29684):map__29684);
var file_msg = map__29684__$1;
var request_url = cljs.core.get.call(null,map__29684__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29684,map__29684__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29684,map__29684__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29685){
var map__29687 = p__29685;
var map__29687__$1 = ((cljs.core.seq_QMARK_.call(null,map__29687))?cljs.core.apply.call(null,cljs.core.hash_map,map__29687):map__29687);
var file_msg = map__29687__$1;
var meta_data = cljs.core.get.call(null,map__29687__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__29687__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__18174__auto__ = meta_data;
if(cljs.core.truth_(or__18174__auto__)){
return or__18174__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18162__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18162__auto__){
var or__18174__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18174__auto__)){
return or__18174__auto__;
} else {
var or__18174__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18174__auto____$1)){
return or__18174__auto____$1;
} else {
var and__18162__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18162__auto____$1){
var or__18174__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18174__auto____$2){
return or__18174__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18162__auto____$1;
}
}
}
} else {
return and__18162__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29688,callback){
var map__29690 = p__29688;
var map__29690__$1 = ((cljs.core.seq_QMARK_.call(null,map__29690))?cljs.core.apply.call(null,cljs.core.hash_map,map__29690):map__29690);
var file_msg = map__29690__$1;
var namespace = cljs.core.get.call(null,map__29690__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__29690__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21398__auto___29777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21398__auto___29777,out){
return (function (){
var f__21399__auto__ = (function (){var switch__21336__auto__ = ((function (c__21398__auto___29777,out){
return (function (state_29759){
var state_val_29760 = (state_29759[(1)]);
if((state_val_29760 === (7))){
var inst_29743 = (state_29759[(7)]);
var inst_29749 = (state_29759[(2)]);
var inst_29750 = cljs.core.async.put_BANG_.call(null,out,inst_29749);
var inst_29739 = inst_29743;
var state_29759__$1 = (function (){var statearr_29761 = state_29759;
(statearr_29761[(8)] = inst_29739);

(statearr_29761[(9)] = inst_29750);

return statearr_29761;
})();
var statearr_29762_29778 = state_29759__$1;
(statearr_29762_29778[(2)] = null);

(statearr_29762_29778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29760 === (6))){
var inst_29755 = (state_29759[(2)]);
var state_29759__$1 = state_29759;
var statearr_29763_29779 = state_29759__$1;
(statearr_29763_29779[(2)] = inst_29755);

(statearr_29763_29779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29760 === (5))){
var inst_29753 = cljs.core.async.close_BANG_.call(null,out);
var state_29759__$1 = state_29759;
var statearr_29764_29780 = state_29759__$1;
(statearr_29764_29780[(2)] = inst_29753);

(statearr_29764_29780[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29760 === (4))){
var inst_29742 = (state_29759[(10)]);
var inst_29747 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29742);
var state_29759__$1 = state_29759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29759__$1,(7),inst_29747);
} else {
if((state_val_29760 === (3))){
var inst_29757 = (state_29759[(2)]);
var state_29759__$1 = state_29759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29759__$1,inst_29757);
} else {
if((state_val_29760 === (2))){
var inst_29739 = (state_29759[(8)]);
var inst_29742 = (state_29759[(10)]);
var inst_29742__$1 = cljs.core.nth.call(null,inst_29739,(0),null);
var inst_29743 = cljs.core.nthnext.call(null,inst_29739,(1));
var inst_29744 = (inst_29742__$1 == null);
var inst_29745 = cljs.core.not.call(null,inst_29744);
var state_29759__$1 = (function (){var statearr_29765 = state_29759;
(statearr_29765[(7)] = inst_29743);

(statearr_29765[(10)] = inst_29742__$1);

return statearr_29765;
})();
if(inst_29745){
var statearr_29766_29781 = state_29759__$1;
(statearr_29766_29781[(1)] = (4));

} else {
var statearr_29767_29782 = state_29759__$1;
(statearr_29767_29782[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29760 === (1))){
var inst_29737 = cljs.core.nth.call(null,files,(0),null);
var inst_29738 = cljs.core.nthnext.call(null,files,(1));
var inst_29739 = files;
var state_29759__$1 = (function (){var statearr_29768 = state_29759;
(statearr_29768[(8)] = inst_29739);

(statearr_29768[(11)] = inst_29737);

(statearr_29768[(12)] = inst_29738);

return statearr_29768;
})();
var statearr_29769_29783 = state_29759__$1;
(statearr_29769_29783[(2)] = null);

(statearr_29769_29783[(1)] = (2));


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
});})(c__21398__auto___29777,out))
;
return ((function (switch__21336__auto__,c__21398__auto___29777,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21337__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21337__auto____0 = (function (){
var statearr_29773 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29773[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21337__auto__);

(statearr_29773[(1)] = (1));

return statearr_29773;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21337__auto____1 = (function (state_29759){
while(true){
var ret_value__21338__auto__ = (function (){try{while(true){
var result__21339__auto__ = switch__21336__auto__.call(null,state_29759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21339__auto__;
}
break;
}
}catch (e29774){if((e29774 instanceof Object)){
var ex__21340__auto__ = e29774;
var statearr_29775_29784 = state_29759;
(statearr_29775_29784[(5)] = ex__21340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29785 = state_29759;
state_29759 = G__29785;
continue;
} else {
return ret_value__21338__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21337__auto__ = function(state_29759){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21337__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21337__auto____1.call(this,state_29759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21337__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21337__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21337__auto__;
})()
;})(switch__21336__auto__,c__21398__auto___29777,out))
})();
var state__21400__auto__ = (function (){var statearr_29776 = f__21399__auto__.call(null);
(statearr_29776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21398__auto___29777);

return statearr_29776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21400__auto__);
});})(c__21398__auto___29777,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__29786,p__29787){
var map__29790 = p__29786;
var map__29790__$1 = ((cljs.core.seq_QMARK_.call(null,map__29790))?cljs.core.apply.call(null,cljs.core.hash_map,map__29790):map__29790);
var opts = map__29790__$1;
var url_rewriter = cljs.core.get.call(null,map__29790__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__29791 = p__29787;
var map__29791__$1 = ((cljs.core.seq_QMARK_.call(null,map__29791))?cljs.core.apply.call(null,cljs.core.hash_map,map__29791):map__29791);
var file_msg = map__29791__$1;
var file = cljs.core.get.call(null,map__29791__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29792){
var map__29795 = p__29792;
var map__29795__$1 = ((cljs.core.seq_QMARK_.call(null,map__29795))?cljs.core.apply.call(null,cljs.core.hash_map,map__29795):map__29795);
var file = cljs.core.get.call(null,map__29795__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__29795__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__18162__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18162__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18162__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e29796){var e = e29796;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29801,p__29802){
var map__30004 = p__29801;
var map__30004__$1 = ((cljs.core.seq_QMARK_.call(null,map__30004))?cljs.core.apply.call(null,cljs.core.hash_map,map__30004):map__30004);
var opts = map__30004__$1;
var load_unchanged_files = cljs.core.get.call(null,map__30004__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__30004__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__30004__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__30005 = p__29802;
var map__30005__$1 = ((cljs.core.seq_QMARK_.call(null,map__30005))?cljs.core.apply.call(null,cljs.core.hash_map,map__30005):map__30005);
var msg = map__30005__$1;
var files = cljs.core.get.call(null,map__30005__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21398__auto__,map__30004,map__30004__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30005,map__30005__$1,msg,files){
return (function (){
var f__21399__auto__ = (function (){var switch__21336__auto__ = ((function (c__21398__auto__,map__30004,map__30004__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30005,map__30005__$1,msg,files){
return (function (state_30130){
var state_val_30131 = (state_30130[(1)]);
if((state_val_30131 === (7))){
var inst_30018 = (state_30130[(7)]);
var inst_30020 = (state_30130[(8)]);
var inst_30017 = (state_30130[(9)]);
var inst_30019 = (state_30130[(10)]);
var inst_30025 = cljs.core._nth.call(null,inst_30018,inst_30020);
var inst_30026 = figwheel.client.file_reloading.eval_body.call(null,inst_30025);
var inst_30027 = (inst_30020 + (1));
var tmp30132 = inst_30018;
var tmp30133 = inst_30017;
var tmp30134 = inst_30019;
var inst_30017__$1 = tmp30133;
var inst_30018__$1 = tmp30132;
var inst_30019__$1 = tmp30134;
var inst_30020__$1 = inst_30027;
var state_30130__$1 = (function (){var statearr_30135 = state_30130;
(statearr_30135[(7)] = inst_30018__$1);

(statearr_30135[(11)] = inst_30026);

(statearr_30135[(8)] = inst_30020__$1);

(statearr_30135[(9)] = inst_30017__$1);

(statearr_30135[(10)] = inst_30019__$1);

return statearr_30135;
})();
var statearr_30136_30205 = state_30130__$1;
(statearr_30136_30205[(2)] = null);

(statearr_30136_30205[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (20))){
var inst_30066 = (state_30130[(12)]);
var inst_30063 = (state_30130[(13)]);
var inst_30067 = (state_30130[(14)]);
var inst_30062 = (state_30130[(15)]);
var inst_30069 = (state_30130[(16)]);
var inst_30072 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30074 = (function (){var files_not_loaded = inst_30069;
var res = inst_30067;
var res_SINGLEQUOTE_ = inst_30066;
var files_SINGLEQUOTE_ = inst_30063;
var all_files = inst_30062;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30066,inst_30063,inst_30067,inst_30062,inst_30069,inst_30072,state_val_30131,c__21398__auto__,map__30004,map__30004__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30005,map__30005__$1,msg,files){
return (function (p__30073){
var map__30137 = p__30073;
var map__30137__$1 = ((cljs.core.seq_QMARK_.call(null,map__30137))?cljs.core.apply.call(null,cljs.core.hash_map,map__30137):map__30137);
var file = cljs.core.get.call(null,map__30137__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__30137__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30066,inst_30063,inst_30067,inst_30062,inst_30069,inst_30072,state_val_30131,c__21398__auto__,map__30004,map__30004__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30005,map__30005__$1,msg,files))
})();
var inst_30075 = cljs.core.map.call(null,inst_30074,inst_30067);
var inst_30076 = cljs.core.pr_str.call(null,inst_30075);
var inst_30077 = figwheel.client.utils.log.call(null,inst_30076);
var inst_30078 = (function (){var files_not_loaded = inst_30069;
var res = inst_30067;
var res_SINGLEQUOTE_ = inst_30066;
var files_SINGLEQUOTE_ = inst_30063;
var all_files = inst_30062;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30066,inst_30063,inst_30067,inst_30062,inst_30069,inst_30072,inst_30074,inst_30075,inst_30076,inst_30077,state_val_30131,c__21398__auto__,map__30004,map__30004__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30005,map__30005__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30066,inst_30063,inst_30067,inst_30062,inst_30069,inst_30072,inst_30074,inst_30075,inst_30076,inst_30077,state_val_30131,c__21398__auto__,map__30004,map__30004__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30005,map__30005__$1,msg,files))
})();
var inst_30079 = setTimeout(inst_30078,(10));
var state_30130__$1 = (function (){var statearr_30138 = state_30130;
(statearr_30138[(17)] = inst_30072);

(statearr_30138[(18)] = inst_30077);

return statearr_30138;
})();
var statearr_30139_30206 = state_30130__$1;
(statearr_30139_30206[(2)] = inst_30079);

(statearr_30139_30206[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (27))){
var inst_30089 = (state_30130[(19)]);
var state_30130__$1 = state_30130;
var statearr_30140_30207 = state_30130__$1;
(statearr_30140_30207[(2)] = inst_30089);

(statearr_30140_30207[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (1))){
var inst_30009 = (state_30130[(20)]);
var inst_30006 = before_jsload.call(null,files);
var inst_30007 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30008 = (function (){return ((function (inst_30009,inst_30006,inst_30007,state_val_30131,c__21398__auto__,map__30004,map__30004__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30005,map__30005__$1,msg,files){
return (function (p1__29797_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29797_SHARP_);
});
;})(inst_30009,inst_30006,inst_30007,state_val_30131,c__21398__auto__,map__30004,map__30004__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30005,map__30005__$1,msg,files))
})();
var inst_30009__$1 = cljs.core.filter.call(null,inst_30008,files);
var inst_30010 = cljs.core.not_empty.call(null,inst_30009__$1);
var state_30130__$1 = (function (){var statearr_30141 = state_30130;
(statearr_30141[(21)] = inst_30006);

(statearr_30141[(20)] = inst_30009__$1);

(statearr_30141[(22)] = inst_30007);

return statearr_30141;
})();
if(cljs.core.truth_(inst_30010)){
var statearr_30142_30208 = state_30130__$1;
(statearr_30142_30208[(1)] = (2));

} else {
var statearr_30143_30209 = state_30130__$1;
(statearr_30143_30209[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (24))){
var state_30130__$1 = state_30130;
var statearr_30144_30210 = state_30130__$1;
(statearr_30144_30210[(2)] = null);

(statearr_30144_30210[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (4))){
var inst_30054 = (state_30130[(2)]);
var inst_30055 = (function (){return ((function (inst_30054,state_val_30131,c__21398__auto__,map__30004,map__30004__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30005,map__30005__$1,msg,files){
return (function (p1__29798_SHARP_){
var and__18162__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29798_SHARP_);
if(cljs.core.truth_(and__18162__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29798_SHARP_));
} else {
return and__18162__auto__;
}
});
;})(inst_30054,state_val_30131,c__21398__auto__,map__30004,map__30004__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30005,map__30005__$1,msg,files))
})();
var inst_30056 = cljs.core.filter.call(null,inst_30055,files);
var state_30130__$1 = (function (){var statearr_30145 = state_30130;
(statearr_30145[(23)] = inst_30056);

(statearr_30145[(24)] = inst_30054);

return statearr_30145;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_30146_30211 = state_30130__$1;
(statearr_30146_30211[(1)] = (16));

} else {
var statearr_30147_30212 = state_30130__$1;
(statearr_30147_30212[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (15))){
var inst_30044 = (state_30130[(2)]);
var state_30130__$1 = state_30130;
var statearr_30148_30213 = state_30130__$1;
(statearr_30148_30213[(2)] = inst_30044);

(statearr_30148_30213[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (21))){
var state_30130__$1 = state_30130;
var statearr_30149_30214 = state_30130__$1;
(statearr_30149_30214[(2)] = null);

(statearr_30149_30214[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (31))){
var inst_30097 = (state_30130[(25)]);
var inst_30107 = (state_30130[(2)]);
var inst_30108 = cljs.core.not_empty.call(null,inst_30097);
var state_30130__$1 = (function (){var statearr_30150 = state_30130;
(statearr_30150[(26)] = inst_30107);

return statearr_30150;
})();
if(cljs.core.truth_(inst_30108)){
var statearr_30151_30215 = state_30130__$1;
(statearr_30151_30215[(1)] = (32));

} else {
var statearr_30152_30216 = state_30130__$1;
(statearr_30152_30216[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (32))){
var inst_30097 = (state_30130[(25)]);
var inst_30110 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30097);
var inst_30111 = cljs.core.pr_str.call(null,inst_30110);
var inst_30112 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_30111)].join('');
var inst_30113 = figwheel.client.utils.log.call(null,inst_30112);
var state_30130__$1 = state_30130;
var statearr_30153_30217 = state_30130__$1;
(statearr_30153_30217[(2)] = inst_30113);

(statearr_30153_30217[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (33))){
var state_30130__$1 = state_30130;
var statearr_30154_30218 = state_30130__$1;
(statearr_30154_30218[(2)] = null);

(statearr_30154_30218[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (13))){
var inst_30030 = (state_30130[(27)]);
var inst_30034 = cljs.core.chunk_first.call(null,inst_30030);
var inst_30035 = cljs.core.chunk_rest.call(null,inst_30030);
var inst_30036 = cljs.core.count.call(null,inst_30034);
var inst_30017 = inst_30035;
var inst_30018 = inst_30034;
var inst_30019 = inst_30036;
var inst_30020 = (0);
var state_30130__$1 = (function (){var statearr_30155 = state_30130;
(statearr_30155[(7)] = inst_30018);

(statearr_30155[(8)] = inst_30020);

(statearr_30155[(9)] = inst_30017);

(statearr_30155[(10)] = inst_30019);

return statearr_30155;
})();
var statearr_30156_30219 = state_30130__$1;
(statearr_30156_30219[(2)] = null);

(statearr_30156_30219[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (22))){
var inst_30069 = (state_30130[(16)]);
var inst_30082 = (state_30130[(2)]);
var inst_30083 = cljs.core.not_empty.call(null,inst_30069);
var state_30130__$1 = (function (){var statearr_30157 = state_30130;
(statearr_30157[(28)] = inst_30082);

return statearr_30157;
})();
if(cljs.core.truth_(inst_30083)){
var statearr_30158_30220 = state_30130__$1;
(statearr_30158_30220[(1)] = (23));

} else {
var statearr_30159_30221 = state_30130__$1;
(statearr_30159_30221[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (36))){
var state_30130__$1 = state_30130;
var statearr_30160_30222 = state_30130__$1;
(statearr_30160_30222[(2)] = null);

(statearr_30160_30222[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (29))){
var inst_30098 = (state_30130[(29)]);
var inst_30101 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30098);
var inst_30102 = cljs.core.pr_str.call(null,inst_30101);
var inst_30103 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30102)].join('');
var inst_30104 = figwheel.client.utils.log.call(null,inst_30103);
var state_30130__$1 = state_30130;
var statearr_30161_30223 = state_30130__$1;
(statearr_30161_30223[(2)] = inst_30104);

(statearr_30161_30223[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (6))){
var inst_30051 = (state_30130[(2)]);
var state_30130__$1 = state_30130;
var statearr_30162_30224 = state_30130__$1;
(statearr_30162_30224[(2)] = inst_30051);

(statearr_30162_30224[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (28))){
var inst_30098 = (state_30130[(29)]);
var inst_30095 = (state_30130[(2)]);
var inst_30096 = cljs.core.get.call(null,inst_30095,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30097 = cljs.core.get.call(null,inst_30095,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_30098__$1 = cljs.core.get.call(null,inst_30095,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30099 = cljs.core.not_empty.call(null,inst_30098__$1);
var state_30130__$1 = (function (){var statearr_30163 = state_30130;
(statearr_30163[(30)] = inst_30096);

(statearr_30163[(25)] = inst_30097);

(statearr_30163[(29)] = inst_30098__$1);

return statearr_30163;
})();
if(cljs.core.truth_(inst_30099)){
var statearr_30164_30225 = state_30130__$1;
(statearr_30164_30225[(1)] = (29));

} else {
var statearr_30165_30226 = state_30130__$1;
(statearr_30165_30226[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (25))){
var inst_30128 = (state_30130[(2)]);
var state_30130__$1 = state_30130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30130__$1,inst_30128);
} else {
if((state_val_30131 === (34))){
var inst_30096 = (state_30130[(30)]);
var inst_30116 = (state_30130[(2)]);
var inst_30117 = cljs.core.not_empty.call(null,inst_30096);
var state_30130__$1 = (function (){var statearr_30166 = state_30130;
(statearr_30166[(31)] = inst_30116);

return statearr_30166;
})();
if(cljs.core.truth_(inst_30117)){
var statearr_30167_30227 = state_30130__$1;
(statearr_30167_30227[(1)] = (35));

} else {
var statearr_30168_30228 = state_30130__$1;
(statearr_30168_30228[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (17))){
var inst_30056 = (state_30130[(23)]);
var state_30130__$1 = state_30130;
var statearr_30169_30229 = state_30130__$1;
(statearr_30169_30229[(2)] = inst_30056);

(statearr_30169_30229[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (3))){
var state_30130__$1 = state_30130;
var statearr_30170_30230 = state_30130__$1;
(statearr_30170_30230[(2)] = null);

(statearr_30170_30230[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (12))){
var inst_30047 = (state_30130[(2)]);
var state_30130__$1 = state_30130;
var statearr_30171_30231 = state_30130__$1;
(statearr_30171_30231[(2)] = inst_30047);

(statearr_30171_30231[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (2))){
var inst_30009 = (state_30130[(20)]);
var inst_30016 = cljs.core.seq.call(null,inst_30009);
var inst_30017 = inst_30016;
var inst_30018 = null;
var inst_30019 = (0);
var inst_30020 = (0);
var state_30130__$1 = (function (){var statearr_30172 = state_30130;
(statearr_30172[(7)] = inst_30018);

(statearr_30172[(8)] = inst_30020);

(statearr_30172[(9)] = inst_30017);

(statearr_30172[(10)] = inst_30019);

return statearr_30172;
})();
var statearr_30173_30232 = state_30130__$1;
(statearr_30173_30232[(2)] = null);

(statearr_30173_30232[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (23))){
var inst_30066 = (state_30130[(12)]);
var inst_30063 = (state_30130[(13)]);
var inst_30089 = (state_30130[(19)]);
var inst_30067 = (state_30130[(14)]);
var inst_30062 = (state_30130[(15)]);
var inst_30069 = (state_30130[(16)]);
var inst_30085 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30088 = (function (){var files_not_loaded = inst_30069;
var res = inst_30067;
var res_SINGLEQUOTE_ = inst_30066;
var files_SINGLEQUOTE_ = inst_30063;
var all_files = inst_30062;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30066,inst_30063,inst_30089,inst_30067,inst_30062,inst_30069,inst_30085,state_val_30131,c__21398__auto__,map__30004,map__30004__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30005,map__30005__$1,msg,files){
return (function (p__30087){
var map__30174 = p__30087;
var map__30174__$1 = ((cljs.core.seq_QMARK_.call(null,map__30174))?cljs.core.apply.call(null,cljs.core.hash_map,map__30174):map__30174);
var meta_data = cljs.core.get.call(null,map__30174__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30066,inst_30063,inst_30089,inst_30067,inst_30062,inst_30069,inst_30085,state_val_30131,c__21398__auto__,map__30004,map__30004__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30005,map__30005__$1,msg,files))
})();
var inst_30089__$1 = cljs.core.group_by.call(null,inst_30088,inst_30069);
var inst_30090 = cljs.core.seq_QMARK_.call(null,inst_30089__$1);
var state_30130__$1 = (function (){var statearr_30175 = state_30130;
(statearr_30175[(32)] = inst_30085);

(statearr_30175[(19)] = inst_30089__$1);

return statearr_30175;
})();
if(inst_30090){
var statearr_30176_30233 = state_30130__$1;
(statearr_30176_30233[(1)] = (26));

} else {
var statearr_30177_30234 = state_30130__$1;
(statearr_30177_30234[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (35))){
var inst_30096 = (state_30130[(30)]);
var inst_30119 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30096);
var inst_30120 = cljs.core.pr_str.call(null,inst_30119);
var inst_30121 = [cljs.core.str("not required: "),cljs.core.str(inst_30120)].join('');
var inst_30122 = figwheel.client.utils.log.call(null,inst_30121);
var state_30130__$1 = state_30130;
var statearr_30178_30235 = state_30130__$1;
(statearr_30178_30235[(2)] = inst_30122);

(statearr_30178_30235[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (19))){
var inst_30066 = (state_30130[(12)]);
var inst_30063 = (state_30130[(13)]);
var inst_30067 = (state_30130[(14)]);
var inst_30062 = (state_30130[(15)]);
var inst_30066__$1 = (state_30130[(2)]);
var inst_30067__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30066__$1);
var inst_30068 = (function (){var res = inst_30067__$1;
var res_SINGLEQUOTE_ = inst_30066__$1;
var files_SINGLEQUOTE_ = inst_30063;
var all_files = inst_30062;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30066,inst_30063,inst_30067,inst_30062,inst_30066__$1,inst_30067__$1,state_val_30131,c__21398__auto__,map__30004,map__30004__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30005,map__30005__$1,msg,files){
return (function (p1__29800_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29800_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30066,inst_30063,inst_30067,inst_30062,inst_30066__$1,inst_30067__$1,state_val_30131,c__21398__auto__,map__30004,map__30004__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30005,map__30005__$1,msg,files))
})();
var inst_30069 = cljs.core.filter.call(null,inst_30068,inst_30066__$1);
var inst_30070 = cljs.core.not_empty.call(null,inst_30067__$1);
var state_30130__$1 = (function (){var statearr_30179 = state_30130;
(statearr_30179[(12)] = inst_30066__$1);

(statearr_30179[(14)] = inst_30067__$1);

(statearr_30179[(16)] = inst_30069);

return statearr_30179;
})();
if(cljs.core.truth_(inst_30070)){
var statearr_30180_30236 = state_30130__$1;
(statearr_30180_30236[(1)] = (20));

} else {
var statearr_30181_30237 = state_30130__$1;
(statearr_30181_30237[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (11))){
var state_30130__$1 = state_30130;
var statearr_30182_30238 = state_30130__$1;
(statearr_30182_30238[(2)] = null);

(statearr_30182_30238[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (9))){
var inst_30049 = (state_30130[(2)]);
var state_30130__$1 = state_30130;
var statearr_30183_30239 = state_30130__$1;
(statearr_30183_30239[(2)] = inst_30049);

(statearr_30183_30239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (5))){
var inst_30020 = (state_30130[(8)]);
var inst_30019 = (state_30130[(10)]);
var inst_30022 = (inst_30020 < inst_30019);
var inst_30023 = inst_30022;
var state_30130__$1 = state_30130;
if(cljs.core.truth_(inst_30023)){
var statearr_30184_30240 = state_30130__$1;
(statearr_30184_30240[(1)] = (7));

} else {
var statearr_30185_30241 = state_30130__$1;
(statearr_30185_30241[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (14))){
var inst_30030 = (state_30130[(27)]);
var inst_30039 = cljs.core.first.call(null,inst_30030);
var inst_30040 = figwheel.client.file_reloading.eval_body.call(null,inst_30039);
var inst_30041 = cljs.core.next.call(null,inst_30030);
var inst_30017 = inst_30041;
var inst_30018 = null;
var inst_30019 = (0);
var inst_30020 = (0);
var state_30130__$1 = (function (){var statearr_30186 = state_30130;
(statearr_30186[(7)] = inst_30018);

(statearr_30186[(8)] = inst_30020);

(statearr_30186[(33)] = inst_30040);

(statearr_30186[(9)] = inst_30017);

(statearr_30186[(10)] = inst_30019);

return statearr_30186;
})();
var statearr_30187_30242 = state_30130__$1;
(statearr_30187_30242[(2)] = null);

(statearr_30187_30242[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (26))){
var inst_30089 = (state_30130[(19)]);
var inst_30092 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30089);
var state_30130__$1 = state_30130;
var statearr_30188_30243 = state_30130__$1;
(statearr_30188_30243[(2)] = inst_30092);

(statearr_30188_30243[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (16))){
var inst_30056 = (state_30130[(23)]);
var inst_30058 = (function (){var all_files = inst_30056;
return ((function (all_files,inst_30056,state_val_30131,c__21398__auto__,map__30004,map__30004__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30005,map__30005__$1,msg,files){
return (function (p1__29799_SHARP_){
return cljs.core.update_in.call(null,p1__29799_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_30056,state_val_30131,c__21398__auto__,map__30004,map__30004__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30005,map__30005__$1,msg,files))
})();
var inst_30059 = cljs.core.map.call(null,inst_30058,inst_30056);
var state_30130__$1 = state_30130;
var statearr_30189_30244 = state_30130__$1;
(statearr_30189_30244[(2)] = inst_30059);

(statearr_30189_30244[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (30))){
var state_30130__$1 = state_30130;
var statearr_30190_30245 = state_30130__$1;
(statearr_30190_30245[(2)] = null);

(statearr_30190_30245[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (10))){
var inst_30030 = (state_30130[(27)]);
var inst_30032 = cljs.core.chunked_seq_QMARK_.call(null,inst_30030);
var state_30130__$1 = state_30130;
if(inst_30032){
var statearr_30191_30246 = state_30130__$1;
(statearr_30191_30246[(1)] = (13));

} else {
var statearr_30192_30247 = state_30130__$1;
(statearr_30192_30247[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (18))){
var inst_30063 = (state_30130[(13)]);
var inst_30062 = (state_30130[(15)]);
var inst_30062__$1 = (state_30130[(2)]);
var inst_30063__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_30062__$1);
var inst_30064 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30063__$1);
var state_30130__$1 = (function (){var statearr_30193 = state_30130;
(statearr_30193[(13)] = inst_30063__$1);

(statearr_30193[(15)] = inst_30062__$1);

return statearr_30193;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30130__$1,(19),inst_30064);
} else {
if((state_val_30131 === (37))){
var inst_30125 = (state_30130[(2)]);
var state_30130__$1 = state_30130;
var statearr_30194_30248 = state_30130__$1;
(statearr_30194_30248[(2)] = inst_30125);

(statearr_30194_30248[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (8))){
var inst_30030 = (state_30130[(27)]);
var inst_30017 = (state_30130[(9)]);
var inst_30030__$1 = cljs.core.seq.call(null,inst_30017);
var state_30130__$1 = (function (){var statearr_30195 = state_30130;
(statearr_30195[(27)] = inst_30030__$1);

return statearr_30195;
})();
if(inst_30030__$1){
var statearr_30196_30249 = state_30130__$1;
(statearr_30196_30249[(1)] = (10));

} else {
var statearr_30197_30250 = state_30130__$1;
(statearr_30197_30250[(1)] = (11));

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
});})(c__21398__auto__,map__30004,map__30004__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30005,map__30005__$1,msg,files))
;
return ((function (switch__21336__auto__,c__21398__auto__,map__30004,map__30004__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30005,map__30005__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21337__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21337__auto____0 = (function (){
var statearr_30201 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30201[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21337__auto__);

(statearr_30201[(1)] = (1));

return statearr_30201;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21337__auto____1 = (function (state_30130){
while(true){
var ret_value__21338__auto__ = (function (){try{while(true){
var result__21339__auto__ = switch__21336__auto__.call(null,state_30130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21339__auto__;
}
break;
}
}catch (e30202){if((e30202 instanceof Object)){
var ex__21340__auto__ = e30202;
var statearr_30203_30251 = state_30130;
(statearr_30203_30251[(5)] = ex__21340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30252 = state_30130;
state_30130 = G__30252;
continue;
} else {
return ret_value__21338__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21337__auto__ = function(state_30130){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21337__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21337__auto____1.call(this,state_30130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21337__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21337__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21337__auto__;
})()
;})(switch__21336__auto__,c__21398__auto__,map__30004,map__30004__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30005,map__30005__$1,msg,files))
})();
var state__21400__auto__ = (function (){var statearr_30204 = f__21399__auto__.call(null);
(statearr_30204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21398__auto__);

return statearr_30204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21400__auto__);
});})(c__21398__auto__,map__30004,map__30004__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30005,map__30005__$1,msg,files))
);

return c__21398__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30255,link){
var map__30257 = p__30255;
var map__30257__$1 = ((cljs.core.seq_QMARK_.call(null,map__30257))?cljs.core.apply.call(null,cljs.core.hash_map,map__30257):map__30257);
var file = cljs.core.get.call(null,map__30257__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__30257,map__30257__$1,file){
return (function (p1__30253_SHARP_,p2__30254_SHARP_){
if(cljs.core._EQ_.call(null,p1__30253_SHARP_,p2__30254_SHARP_)){
return p1__30253_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__30257,map__30257__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30261){
var map__30262 = p__30261;
var map__30262__$1 = ((cljs.core.seq_QMARK_.call(null,map__30262))?cljs.core.apply.call(null,cljs.core.hash_map,map__30262):map__30262);
var current_url_length = cljs.core.get.call(null,map__30262__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__30262__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30258_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30258_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__30264 = arguments.length;
switch (G__30264) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30266){
var map__30268 = p__30266;
var map__30268__$1 = ((cljs.core.seq_QMARK_.call(null,map__30268))?cljs.core.apply.call(null,cljs.core.hash_map,map__30268):map__30268);
var f_data = map__30268__$1;
var request_url = cljs.core.get.call(null,map__30268__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__30268__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18174__auto__ = request_url;
if(cljs.core.truth_(or__18174__auto__)){
return or__18174__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30269,files_msg){
var map__30291 = p__30269;
var map__30291__$1 = ((cljs.core.seq_QMARK_.call(null,map__30291))?cljs.core.apply.call(null,cljs.core.hash_map,map__30291):map__30291);
var opts = map__30291__$1;
var on_cssload = cljs.core.get.call(null,map__30291__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30292_30312 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30293_30313 = null;
var count__30294_30314 = (0);
var i__30295_30315 = (0);
while(true){
if((i__30295_30315 < count__30294_30314)){
var f_30316 = cljs.core._nth.call(null,chunk__30293_30313,i__30295_30315);
figwheel.client.file_reloading.reload_css_file.call(null,f_30316);

var G__30317 = seq__30292_30312;
var G__30318 = chunk__30293_30313;
var G__30319 = count__30294_30314;
var G__30320 = (i__30295_30315 + (1));
seq__30292_30312 = G__30317;
chunk__30293_30313 = G__30318;
count__30294_30314 = G__30319;
i__30295_30315 = G__30320;
continue;
} else {
var temp__4126__auto___30321 = cljs.core.seq.call(null,seq__30292_30312);
if(temp__4126__auto___30321){
var seq__30292_30322__$1 = temp__4126__auto___30321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30292_30322__$1)){
var c__18959__auto___30323 = cljs.core.chunk_first.call(null,seq__30292_30322__$1);
var G__30324 = cljs.core.chunk_rest.call(null,seq__30292_30322__$1);
var G__30325 = c__18959__auto___30323;
var G__30326 = cljs.core.count.call(null,c__18959__auto___30323);
var G__30327 = (0);
seq__30292_30312 = G__30324;
chunk__30293_30313 = G__30325;
count__30294_30314 = G__30326;
i__30295_30315 = G__30327;
continue;
} else {
var f_30328 = cljs.core.first.call(null,seq__30292_30322__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30328);

var G__30329 = cljs.core.next.call(null,seq__30292_30322__$1);
var G__30330 = null;
var G__30331 = (0);
var G__30332 = (0);
seq__30292_30312 = G__30329;
chunk__30293_30313 = G__30330;
count__30294_30314 = G__30331;
i__30295_30315 = G__30332;
continue;
}
} else {
}
}
break;
}

var c__21398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21398__auto__,map__30291,map__30291__$1,opts,on_cssload){
return (function (){
var f__21399__auto__ = (function (){var switch__21336__auto__ = ((function (c__21398__auto__,map__30291,map__30291__$1,opts,on_cssload){
return (function (state_30302){
var state_val_30303 = (state_30302[(1)]);
if((state_val_30303 === (2))){
var inst_30298 = (state_30302[(2)]);
var inst_30299 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_30300 = on_cssload.call(null,inst_30299);
var state_30302__$1 = (function (){var statearr_30304 = state_30302;
(statearr_30304[(7)] = inst_30298);

return statearr_30304;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30302__$1,inst_30300);
} else {
if((state_val_30303 === (1))){
var inst_30296 = cljs.core.async.timeout.call(null,(100));
var state_30302__$1 = state_30302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30302__$1,(2),inst_30296);
} else {
return null;
}
}
});})(c__21398__auto__,map__30291,map__30291__$1,opts,on_cssload))
;
return ((function (switch__21336__auto__,c__21398__auto__,map__30291,map__30291__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21337__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21337__auto____0 = (function (){
var statearr_30308 = [null,null,null,null,null,null,null,null];
(statearr_30308[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21337__auto__);

(statearr_30308[(1)] = (1));

return statearr_30308;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21337__auto____1 = (function (state_30302){
while(true){
var ret_value__21338__auto__ = (function (){try{while(true){
var result__21339__auto__ = switch__21336__auto__.call(null,state_30302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21339__auto__;
}
break;
}
}catch (e30309){if((e30309 instanceof Object)){
var ex__21340__auto__ = e30309;
var statearr_30310_30333 = state_30302;
(statearr_30310_30333[(5)] = ex__21340__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30334 = state_30302;
state_30302 = G__30334;
continue;
} else {
return ret_value__21338__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21337__auto__ = function(state_30302){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21337__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21337__auto____1.call(this,state_30302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21337__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21337__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21337__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21337__auto__;
})()
;})(switch__21336__auto__,c__21398__auto__,map__30291,map__30291__$1,opts,on_cssload))
})();
var state__21400__auto__ = (function (){var statearr_30311 = f__21399__auto__.call(null);
(statearr_30311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21398__auto__);

return statearr_30311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21400__auto__);
});})(c__21398__auto__,map__30291,map__30291__$1,opts,on_cssload))
);

return c__21398__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1434750195907