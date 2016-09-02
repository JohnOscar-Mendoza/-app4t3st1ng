"use strict"
import React from 'react';
import UsersList from '../containers/user-list'
import UserDetail from '../containers/user-details';
import MoviesList from '../containers/movie-list'
// require('../../scss/style.css');

const App = () => (
	<div>
		<h1>Users</h1>
		<UsersList />
		<hr />
		<h2>User Details</h2>
		<UserDetail />
		<hr />
		<h1>Movies</h1>
		<MoviesList />
		<hr />
		<h2>Movies Details</h2>
	</div>
	);

// class App extends React.Component {

// 	constructor(props) {
// 		super(props);
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<h1>Users</h1>
// 				<UsersList />
// 				<hr />
// 				<h2>User Details</h2>
// 				<hr />
// 				<h1>Movies</h1>
// 				<MoviesList />
// 				<hr />
// 				<h2>Movies Details</h2>
// 			</div>
// 			);
// 	}
// }
export default App;