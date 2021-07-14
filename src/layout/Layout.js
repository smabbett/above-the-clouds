import React from 'react';
import Routes from './Routes';
import Header from './Header';
import Menu from './Menu';

function Layout() {
	return (
		<div>
			<Header />
			<Menu />
			<Routes />
		</div>
	);
}

export default Layout;
