"use strict";
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class MoviesList extends Component {

	renderList() {
		return this.props.movies.map((movie) => {
			return (
				<li key={movie.id} >{movie.id}. {movie.artist}</li>
			)
		});
	}

	render() {
		return (
			<ul>
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	return {
		movies: state.movies
	}
}

export default connect(mapStateToProps)(MoviesList);