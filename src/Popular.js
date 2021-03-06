import React from 'react';
import ReUsableApiRequest from './ReUsableApiRequest';
const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;

const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

export default function Popular() {
	return (
		<div className='movie-content'>
			<h1>Popular</h1>
			<div className='content-wrapper'>
				<ReUsableApiRequest url={popularUrl} />
			</div>
		</div>
	);
}
