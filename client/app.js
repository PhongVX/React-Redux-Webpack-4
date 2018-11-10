import  React from 'react';
import ReactDOM from 'react-dom';
import List  from './components/List.js';
import store from './store/store.js';

var {Provider}=require('react-redux');

ReactDOM.render(
	<Provider store={store}>
		<List/>
	</Provider>,
	document.getElementById('root')
);

