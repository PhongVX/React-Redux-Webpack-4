
import mangstate from '../states/mang.js';

var mangReducer=function(state=mangstate,action){
	switch(action.type){
	case 'ADD':
		return [...state,action.item];
	case 'REMOVE_ITEM':
		return state.filter((e,i)=>i!==action.index);
	default:
		return state;
	}
    
};
export default mangReducer;