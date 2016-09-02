"use strict";
import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {

	render() {
		if(!this.props.user) {
			return (
				<h2> No Selected user</h2>
			)
		}
		return (

			<div>
				<h2>name: {this.props.user.name}</h2>
				<h2>description: {this.props.user.description}</h2>
			</div>

		)
	}
}


function mapStateToProps(state) {
	return {
		user: state.activeUser
	}
}


export default connect(mapStateToProps)(UserDetail);