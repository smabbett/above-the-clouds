import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import Help from '../Help';
import Dashboard from '../dashboard/Dashboard';
import About from '../About';
import Privacy from '../Privacy';

function Routes() {
	return (
		<div className='container-fluid'>
			<Switch>
				<Route exact={true} path='/'>
					<Dashboard />
				</Route>
				<Route path='/help'>
					<Help />
				</Route>
				<Route path='/about'>
					<About />
				</Route>
				<Route path='/privacy'>
					<Privacy />
				</Route>
				<Route>
					<NotFound />
				</Route>
			</Switch>
		</div>
	);
}
export default Routes;
