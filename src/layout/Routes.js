import React from 'react';

import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import Dashboard from '../dashboard/Dashboard';
import Help from '../Help';

function Routes() {
	return (
		<Switch>
			<Route exact={true} path='/'>
				<Dashboard />
			</Route>
			<Route path='/help'>
				<Help />
			</Route>
			<Route>
				<NotFound />
			</Route>
		</Switch>
	);
}
export default Routes;
