"use strict";

import { combineReducers } from 'redux';
import UserReducers from './reducer-users';
import MovieReducers from './reducer-movies'
import ActiveUserReducer from './reducer-active-user';

const allReducers = combineReducers({
	users: UserReducers,
	movies: MovieReducers,
	activeUser: ActiveUserReducer
});

export default allReducers;