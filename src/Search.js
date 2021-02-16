import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import './App.css';

export default function Search() {
	const url = 'https://api.themoviedb.org/3/search/movie?';
	const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;

	const [movieSearch, setMovieSearch] = useState([]);
	const queryInput = useSelector((state) => state.getMovie);
	const images = 'https://image.tmdb.org/t/p/w500';

	useEffect(() => {
		const fetchsearch = async () => {
			const {
				data: { results },
			} = await axios.get(url, {
				params: {
					api_key: API_KEY,
					query: queryInput,
				},
			});
			setMovieSearch(() => results.filter((img) => img.poster_path !== null));
		};
		fetchsearch();
		console.log(movieSearch);
	}, [queryInput]);
	return (
		<div className='details-container'>
			{movieSearch.map((details) => {
				return (
					<div className='details-wrapper' key={details.id}>
						<h2>{details.title}</h2>
						<div className='img-description'>
							<img src={`${images}${details.poster_path}`} />
							<div className='year-rating'>
								<p>Rating: {details.vote_average}</p>
								<p>Year: {details.release_date}</p>
							</div>
							<p>{details.overview}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}
