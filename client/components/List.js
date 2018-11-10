import React from 'react';
import Note from './Note.js';
import NoteForm from './NoteForm.js';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class List extends React.Component{
 
	// deleteNote(index){
	//     this.props.mang.splice(index,1);
	//     this.setState(this.props);
	// }
	// addNote(value){
	//     this.state.notes.push(value);
	//     this.setState(this.state);
	// }
	render(){
		// var list=this;
		// handleAdd={list.addNote.bind(this)}
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<br/>
						<NoteForm/>
						{

							this.props.mang.map(function(n,i){
								return  <Note  index={i} key={i}>{n}</Note>;
							})
						}
					</div>
				</div>
			</div>
		);
	}
}


List.propTypes = {
	mang: PropTypes.array,
};


export default connect(function(state){
	return {mang:state.mang};
})(List);