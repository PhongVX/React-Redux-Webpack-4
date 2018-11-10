import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Note extends React.Component{
 
	delete(){
		var {index,dispatch}= this.props;
		dispatch({type:'REMOVE_ITEM',index:index});
	}
	render(){
		return (
			<div className='div-note'>
				<p>{this.props.children}</p>
				<button className="btn btn-danger" onClick={this.delete.bind(this)}>Delete</button>
			</div>
		);
	}
}


Note.propTypes = {
	dispatch:PropTypes.func,
	index:PropTypes.number,
	children:PropTypes.any

};

export default connect()(Note);