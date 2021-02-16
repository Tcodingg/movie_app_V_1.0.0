import React from 'react';
import ReUsableApiRequest from './ReUsableApiRequest';
const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;

const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;

export default function New() {
	return (
		<div className='movie-content'>
			<h1>Upcoming</h1>
			<div className='content-wrapper'>
				<ReUsableApiRequest url={upcomingUrl} />
			</div>
		</div>
	);
}
