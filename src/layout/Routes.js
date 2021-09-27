import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import Dashboard from '../dashboard/Dashboard';
import About from '../components/About';
import Faq from '../components/Faq';

function Routes({ rotations, setRotations }) {
	return (
		<div className='container-sm'>
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
				<Route>
					<NotFound />
				</Route>
			</Switch>
		</div>
	);
}
export default Routes;
