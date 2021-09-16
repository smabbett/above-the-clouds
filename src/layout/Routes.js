import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../dashboard/NotFound';
import Help from '../dashboard/Help';
import Dashboard from '../dashboard/Dashboard';
import About from '../dashboard/About';
import Privacy from '../dashboard/Privacy';
import FileReader from '../dashboard/FileReader';
import AboutModal from '../dashboard/AboutModal';

function Routes() {
	return (
		// <div className='container-fluid'>
		<Switch>
			<Route exact={true} path='/'>
				<Dashboard />
			</Route>
			<Route path='/reader'>
				<FileReader />
			</Route>
			<Route path='/help'>
				<Help />
			</Route>
			<Route path='/about'>
				<AboutModal />
			</Route>
			<Route path='/privacy'>
				<Privacy />
			</Route>
			<Route>
				<NotFound />
			</Route>
		</Switch>
		// </div>
	);
}
export default Routes;
