// Compiled by ClojureScript 1.8.51 {}
goog.provide('carry.core');
goog.require('cljs.core');
/**
 * Returns `true` if atom `a` is read-only.
 */
carry.core.read_only_QMARK_ = (function carry$core$read_only_QMARK_(a){
return new cljs.core.Keyword("carry.core","read-only-atom?","carry.core/read-only-atom?",753225102).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,a));
});
carry.core._throw_read_only_atom_error = (function carry$core$_throw_read_only_atom_error(new_state){
throw (new Error([cljs.core.str("read-only atom was set to "),cljs.core.str(cljs.core.pr_str.call(null,new_state))].join('')));
});
/**
 * Makes the specified atom read-only: an excpetion will be raised after atom value is changed.
 *   Returns the updated atom.
 */
carry.core.set_read_only_BANG_ = (function carry$core$set_read_only_BANG_(a){
cljs.core.alter_meta_BANG_.call(null,a,cljs.core.assoc,new cljs.core.Keyword("carry.core","read-only-atom?","carry.core/read-only-atom?",753225102),true);

return cljs.core.add_watch.call(null,a,new cljs.core.Keyword("carry.core","read-only-watch","carry.core/read-only-watch",1566000000),(function carry$core$set_read_only_BANG__$_read_only_watch(_key,_atom,old_state,new_state){
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
return carry.core._throw_read_only_atom_error.call(null,new_state);
} else {
return null;
}
}));
});
/**
 * Allows swap!/reset! only to the specified value. Returns the updated atom.
 */
carry.core._set_can_be_set_only_to_value_BANG_ = (function carry$core$_set_can_be_set_only_to_value_BANG_(a,v){
return cljs.core.add_watch.call(null,a,new cljs.core.Keyword("carry.core","can-be-reset-only-to-value-watch","carry.core/can-be-reset-only-to-value-watch",-515296965),(function carry$core$_set_can_be_set_only_to_value_BANG__$_can_be_reset_only_to_value_watch(_key,_atom,_old_state,new_state){
if(cljs.core.not_EQ_.call(null,new_state,v)){
return carry.core._throw_read_only_atom_error.call(null,new_state);
} else {
return null;
}
}));
});
/**
 * Bypasses write protection of the specified read-only atom.
 */
carry.core._reset_read_only_atom_BANG_ = (function carry$core$_reset_read_only_atom_BANG_(a,new_value){
if(cljs.core.truth_(carry.core.read_only_QMARK_.call(null,a))){
} else {
throw (new Error("Assert failed: (read-only? a)"));
}

cljs.core.remove_watch.call(null,a,new cljs.core.Keyword("carry.core","read-only-watch","carry.core/read-only-watch",1566000000));

carry.core._set_can_be_set_only_to_value_BANG_.call(null,a,new_value);

cljs.core.reset_BANG_.call(null,a,new_value);

cljs.core.remove_watch.call(null,a,new cljs.core.Keyword("carry.core","can-be-reset-only-to-value-watch","carry.core/can-be-reset-only-to-value-watch",-515296965));

return carry.core.set_read_only_BANG_.call(null,a);
});
/**
 * Constructs an app from a spec map with keys:
 * 
 *   * `:initial-model` - Initial model value, must be a map.
 *   * `:control` - Function of args: `[model signal dispatch-signal dispatch-action]`.
 *   It performs side effects, can dispatch actions and new signals.
 *   By convention, it must be able to handle `:on-start` and `:on-stop` signals in order to be wrappable by middleware.
 *   Read-only model atom is useful for reading actual model values in async code and to subscribe to model changes.
 *   Functions `dispatch-signal` and `dispatch-action` always return `nil`.
 *   * `:reconcile` - Pure function of args: `[model action]`.
 *   Given an action and current model value, it must return the new model value.
 * 
 *   Returns a map with keys:
 * 
 *   * `:model` - A read-only model atom.
 *   * `:dispatch-signal` - Function with a single arg: a signal to be sent to an app. Returns `nil`.
 */
carry.core.app = (function carry$core$app(p__19484){
var map__19487 = p__19484;
var map__19487__$1 = ((((!((map__19487 == null)))?((((map__19487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19487):map__19487);
var _spec = map__19487__$1;
var initial_model = cljs.core.get.call(null,map__19487__$1,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487));
var control = cljs.core.get.call(null,map__19487__$1,new cljs.core.Keyword(null,"control","control",1892578036));
var reconcile = cljs.core.get.call(null,map__19487__$1,new cljs.core.Keyword(null,"reconcile","reconcile",-728661830));
if(cljs.core.map_QMARK_.call(null,initial_model)){
} else {
throw (new Error("Assert failed: (map? initial-model)"));
}

if(cljs.core.fn_QMARK_.call(null,control)){
} else {
throw (new Error("Assert failed: (fn? control)"));
}

if(cljs.core.fn_QMARK_.call(null,reconcile)){
} else {
throw (new Error("Assert failed: (fn? reconcile)"));
}

var model_atom = carry.core.set_read_only_BANG_.call(null,cljs.core.atom.call(null,initial_model));
var dispatch_action = ((function (model_atom,map__19487,map__19487__$1,_spec,initial_model,control,reconcile){
return (function carry$core$app_$_dispatch_action(action){
carry.core._reset_read_only_atom_BANG_.call(null,model_atom,reconcile.call(null,cljs.core.deref.call(null,model_atom),action));

return null;
});})(model_atom,map__19487,map__19487__$1,_spec,initial_model,control,reconcile))
;
var dispatch_signal = ((function (model_atom,map__19487,map__19487__$1,_spec,initial_model,control,reconcile){
return (function carry$core$app_$_dispatch_signal(signal){
control.call(null,model_atom,signal,carry$core$app_$_dispatch_signal,dispatch_action);

return null;
});})(model_atom,map__19487,map__19487__$1,_spec,initial_model,control,reconcile))
;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"model","model",331153215),model_atom,new cljs.core.Keyword(null,"dispatch-signal","dispatch-signal",205544591),dispatch_signal], null);
});
/**
 * Returns a read-only atom which automatically syncs its value from `(f @a)`.
 * Arguments:
 * 
 * * `f` - pure function
 * * `a` - atom
 * * `contructor` - atom contructor, default value: `atom`
 */
carry.core.entangle = (function carry$core$entangle(var_args){
var args19489 = [];
var len__19430__auto___19492 = arguments.length;
var i__19431__auto___19493 = (0);
while(true){
if((i__19431__auto___19493 < len__19430__auto___19492)){
args19489.push((arguments[i__19431__auto___19493]));

var G__19494 = (i__19431__auto___19493 + (1));
i__19431__auto___19493 = G__19494;
continue;
} else {
}
break;
}

var G__19491 = args19489.length;
switch (G__19491) {
case 2:
return carry.core.entangle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return carry.core.entangle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19489.length)].join('')));

}
});

carry.core.entangle.cljs$core$IFn$_invoke$arity$2 = (function (a,f){
return carry.core.entangle.call(null,a,f,cljs.core.atom);
});

carry.core.entangle.cljs$core$IFn$_invoke$arity$3 = (function (a,f,constructor$){
var entangled_atom = carry.core.set_read_only_BANG_.call(null,constructor$.call(null,f.call(null,cljs.core.deref.call(null,a))));
cljs.core.add_watch.call(null,a,entangled_atom,((function (entangled_atom){
return (function (_key,_atom,_old_state,new_state){
return carry.core._reset_read_only_atom_BANG_.call(null,entangled_atom,f.call(null,new_state));
});})(entangled_atom))
);

return entangled_atom;
});

carry.core.entangle.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=core.js.map?rel=1464365884443