import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Main';

import Detail from './Detail';
import Search from './Search';
import Home from './Home';

function App() {
	return (
		<div className='App'>
			<Router>
				<Main />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/search' component={Search} />
					<Route path='/details/:id' component={Detail} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
