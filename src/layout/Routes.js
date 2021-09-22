import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../dashboard/NotFound';
import Help from '../dashboard/Help';
import Dashboard from '../dashboard/Dashboard';
import Privacy from '../dashboard/Privacy';
import About from '../dashboard/About';
import Faq from '../components/Faq';

function Routes({ rotations, setRotations }) {
	return (
		<Switch>
			<Route exact={true} path='/'>
				<Dashboard rotations={rotations} setRotations={setRotations} />
			</Route>
			<Route path='/faq'>
				<Faq />
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
	);
}
export default Routes;
