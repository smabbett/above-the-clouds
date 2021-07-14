import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import Help from '../Help';
import Dashboard from '../dashboard/Dashboard';
//import Demo from '../Demo';

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
				{/* <Route path='/demo'>
				<Demo />
			</Route> */}
				<Route>
					<NotFound />
				</Route>
			</Switch>
		</div>
	);
}
export default Routes;
