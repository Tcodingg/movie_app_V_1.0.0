export function getMovie(state = '', action) {
	switch (action.type) {
		case 'MOVIE_NAME':
			return action.payload;
		default:
			return state;
	}
}
