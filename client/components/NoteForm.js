import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class NoteForm extends React.Component{

	constructor(props) {
		super(props);
		this.txt = React.createRef();
	}

	add(){
		var dispatch=this.props.dispatch;
		dispatch({type:'ADD',item:this.txt.current});
	}
	toggle(){
		var dispatch=this.props.dispatch;
		dispatch({type:'IS_ADDING'});
	}
	render(){
		if(this.props.isAdding){
			return (
				<div>
					<input className="form-control" placeholder="Node name" ref={this.txt} type="text"/>
					<br/>
					<button  className="btn btn-primary" onClick={this.add.bind(this)}>Lưu</button> &nbsp;
					<button  className="btn btn-danger"onClick={this.toggle.bind(this)}>Hủy</button>
					<br/>
				</div>
			);
		}
		else{
			return (
				<div>
					<button  className="btn btn-primary" onClick={this.toggle.bind(this)}>Add</button>
					<br/>
				</div>
			);
		}
	}
}

NoteForm.propTypes = {
	isAdding: PropTypes.bool,
	dispatch:PropTypes.func
};

export default connect(function(state){
	return {isAdding:state.isAdding,mang:state.mang};
})(NoteForm);