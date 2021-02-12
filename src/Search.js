import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function Search() {
	const url = 'https://api.themoviedb.org/3/search/movie?';
	const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;

	const [movieSearch, setMovieSearch] = useState([]);
	const queryInput = useSelector((state) => state.getMovie);
	const images = 'https://image.tmdb.org/t/p/w500';

	// function handleClick() {
	// 	console.log(movie);
	// }

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
			setMovieSearch(results);
		};
		fetchsearch();
		console.log(movieSearch);
	}, [queryInput]);
	return (
		<div>
			{movieSearch.map((details) => {
				return (
					<div key={details.id}>
						<h1>{details.title}</h1>
						<img src={`${images}${details.poster_path}`} />
						<p>{details.overview}</p>
					</div>
				);
			})}
		</div>
	);
}
