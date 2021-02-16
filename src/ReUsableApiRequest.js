import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ReUsableApiRequest = (props) => {
	const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;

	// const pagesUrl = `https://api.themoviedb.org/3/search/movie?query=Avengers&api_key=${API_KEY}&page=1`;

	const [movieInfo, setMovieInfo] = useState([]);
	const images = 'https://image.tmdb.org/t/p/w500';
	let url = props.url;

	useEffect(() => {
		async function fetch() {
			const {
				data: { results },
			} = await axios.get(url);
			setMovieInfo(() => results.filter((img) => img.poster_path !== null));
		}
		fetch();
		// console.log(movieInfo);
	}, []);

	return (
		<div className='movieContent'>
			{movieInfo.map((movie) => {
				return (
					<Link key={movie.id} to={`/details/${movie.id}`}>
						<img
							className='images'
							src={`${images}${movie.poster_path}`}
							alt=''
						></img>
					</Link>
				);
			})}
		</div>
	);
};

export default ReUsableApiRequest;
