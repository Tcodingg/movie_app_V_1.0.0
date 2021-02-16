import React from 'react';
import Popular from './Popular';
import Toprated from './Toprated';
import Upcoming from './Upcoming';
import './App.css';
import tv from './images/tv.png';

export default function Home() {
	return (
		<div>
			<div className='home-banner'>
				<div className='enjoy-your-tv'>
					<h1>Enjoy Your TV.</h1>
					<p>
						Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
						players, and more.
					</p>
				</div>
				<div className='img-container'>
					<img src={tv} />
				</div>
			</div>
			<Popular />
			<Toprated />
			<Upcoming />
		</div>
	);
}
