var redux=require('redux');

import mangreducer from './reducers/mangreducer.js';
import isaddingreducer from './reducers/isaddingreducer.js';

var reducer=redux.combineReducers({mang:mangreducer,isAdding:isaddingreducer});
var store=redux.createStore(reducer);

//store.dispatch({type:'ADD',item:'Hello'});

export default store;


