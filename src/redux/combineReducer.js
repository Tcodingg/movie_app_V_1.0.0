import { getMovie } from './reducer';
import { combineReducers } from 'redux';

export const allReducers = combineReducers({
	getMovie,
});
