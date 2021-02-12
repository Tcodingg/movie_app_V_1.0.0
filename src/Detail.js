import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

export default function Detail({ match }) {
	const images = 'https://image.tmdb.org/t/p/w500';

	const [movieDetals, setMovieDetails] = useState([]);
	const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;
	useEffect(() => {
		fetchMovie();
	}, []);

	const fetchMovie = async () => {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${API_KEY}`
		);
		setMovieDetails(data);
		console.log(data);
	};

	return (
		<div key={movieDetals.id}>
			<h1>{movieDetals.title}</h1>
			<p>{movieDetals.overview}</p>
			<img src={`${images}${movieDetals.poster_path}`}></img>
		</div>
	);
}
