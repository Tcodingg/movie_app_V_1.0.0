import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { movieName } from './redux/action';
import { useDispatch, useSelector } from 'react-redux';

function Main() {
	const history = useHistory();
	const [inputVal, setInputVal] = useState('');

	function handleInput(e) {
		const query = e.target.value;
		setInputVal(query);
	}

	function handleKeydown(e) {
		if (e.key === 'Enter' && inputVal.length > 0) {
			disptch(movieName(inputVal));
			history.push('/movie_app_V_1.0.0/search');
			console.log(inputVal);
		}
	}

	const disptch = useDispatch();

	return (
		<div className='header'>
			{/* <h1>
				<a href='/'>
					<span style={{ color: 'red' }}>Your</span> Home Theatre
				</a>
			</h1> */}
			<input
				placeholder='Search...'
				onKeyDown={handleKeydown}
				onChange={handleInput}
			/>
		</div>
	);
}

export default Main;
