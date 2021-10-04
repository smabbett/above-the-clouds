import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import Dashboard from '../dashboard/Dashboard';
import About from '../components/About';
import Faq from '../components/Faq';
import Privacy from '../components/Privacy';

function Routes({ rotations, setRotations }) {
	return (
		<Switch>
			<Route exact={true} path='/'>
				<Dashboard rotations={rotations} setRotations={setRotations} />
			</Route>
			<Route path='/faq'>
				<Faq />
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
