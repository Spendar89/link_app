// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29625_29637 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29626_29638 = null;
var count__29627_29639 = (0);
var i__29628_29640 = (0);
while(true){
if((i__29628_29640 < count__29627_29639)){
var f_29641 = cljs.core._nth.call(null,chunk__29626_29638,i__29628_29640);
cljs.core.println.call(null,"  ",f_29641);

var G__29642 = seq__29625_29637;
var G__29643 = chunk__29626_29638;
var G__29644 = count__29627_29639;
var G__29645 = (i__29628_29640 + (1));
seq__29625_29637 = G__29642;
chunk__29626_29638 = G__29643;
count__29627_29639 = G__29644;
i__29628_29640 = G__29645;
continue;
} else {
var temp__4126__auto___29646 = cljs.core.seq.call(null,seq__29625_29637);
if(temp__4126__auto___29646){
var seq__29625_29647__$1 = temp__4126__auto___29646;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29625_29647__$1)){
var c__18959__auto___29648 = cljs.core.chunk_first.call(null,seq__29625_29647__$1);
var G__29649 = cljs.core.chunk_rest.call(null,seq__29625_29647__$1);
var G__29650 = c__18959__auto___29648;
var G__29651 = cljs.core.count.call(null,c__18959__auto___29648);
var G__29652 = (0);
seq__29625_29637 = G__29649;
chunk__29626_29638 = G__29650;
count__29627_29639 = G__29651;
i__29628_29640 = G__29652;
continue;
} else {
var f_29653 = cljs.core.first.call(null,seq__29625_29647__$1);
cljs.core.println.call(null,"  ",f_29653);

var G__29654 = cljs.core.next.call(null,seq__29625_29647__$1);
var G__29655 = null;
var G__29656 = (0);
var G__29657 = (0);
seq__29625_29637 = G__29654;
chunk__29626_29638 = G__29655;
count__29627_29639 = G__29656;
i__29628_29640 = G__29657;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__18174__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18174__auto__)){
return or__18174__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29629 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29630 = null;
var count__29631 = (0);
var i__29632 = (0);
while(true){
if((i__29632 < count__29631)){
var vec__29633 = cljs.core._nth.call(null,chunk__29630,i__29632);
var name = cljs.core.nth.call(null,vec__29633,(0),null);
var map__29634 = cljs.core.nth.call(null,vec__29633,(1),null);
var map__29634__$1 = ((cljs.core.seq_QMARK_.call(null,map__29634))?cljs.core.apply.call(null,cljs.core.hash_map,map__29634):map__29634);
var arglists = cljs.core.get.call(null,map__29634__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__29634__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29658 = seq__29629;
var G__29659 = chunk__29630;
var G__29660 = count__29631;
var G__29661 = (i__29632 + (1));
seq__29629 = G__29658;
chunk__29630 = G__29659;
count__29631 = G__29660;
i__29632 = G__29661;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__29629);
if(temp__4126__auto__){
var seq__29629__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29629__$1)){
var c__18959__auto__ = cljs.core.chunk_first.call(null,seq__29629__$1);
var G__29662 = cljs.core.chunk_rest.call(null,seq__29629__$1);
var G__29663 = c__18959__auto__;
var G__29664 = cljs.core.count.call(null,c__18959__auto__);
var G__29665 = (0);
seq__29629 = G__29662;
chunk__29630 = G__29663;
count__29631 = G__29664;
i__29632 = G__29665;
continue;
} else {
var vec__29635 = cljs.core.first.call(null,seq__29629__$1);
var name = cljs.core.nth.call(null,vec__29635,(0),null);
var map__29636 = cljs.core.nth.call(null,vec__29635,(1),null);
var map__29636__$1 = ((cljs.core.seq_QMARK_.call(null,map__29636))?cljs.core.apply.call(null,cljs.core.hash_map,map__29636):map__29636);
var arglists = cljs.core.get.call(null,map__29636__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__29636__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29666 = cljs.core.next.call(null,seq__29629__$1);
var G__29667 = null;
var G__29668 = (0);
var G__29669 = (0);
seq__29629 = G__29666;
chunk__29630 = G__29667;
count__29631 = G__29668;
i__29632 = G__29669;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1434750195695