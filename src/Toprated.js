import ReUsableApiRequest from './ReUsableApiRequest';

export default function Nowplaying() {
	const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;
	const Top_Rated = ` https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

	return (
		<div className='movie-content'>
			<h1>Top Rated</h1>
			<div className='content-wrapper'>
				<ReUsableApiRequest url={Top_Rated} />
			</div>
		</div>
	);
}
