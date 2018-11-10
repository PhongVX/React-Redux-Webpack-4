import defaultStateIsAdding from '../states/isadding.js';

var reducerIsAdding=(state=defaultStateIsAdding,action)=>{
	switch(action.type){
	case 'IS_ADDING':
		return !state;
	default:
		return state;
	}
};

export default reducerIsAdding;