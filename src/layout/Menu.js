import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {
	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<NavLink className='navbar-brand' to='/'>
					Travel Log
				</NavLink>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNavAltMarkup'
					aria-controls='navbarNavAltMarkup'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
					<div className='navbar-nav'>
						{/* <NavLink
							className='nav-item nav-link'
							to='/'
							activeStyle={{
								fontWeight: 'bold',
								color: 'red',
								textDecoration: 'underline',
							}}
						>
							Home
						</NavLink> */}
						<NavLink
							className='nav-item nav-link'
							to='/about'
							activeStyle={{
								fontWeight: 'bold',
								textDecoration: 'underline',
								textUnderlineOffset: '3px',
							}}
						>
							About
						</NavLink>
						<NavLink
							className='nav-item nav-link'
							to='/help'
							activeStyle={{
								fontWeight: 'bold',
								textDecoration: 'underline',
								textUnderlineOffset: '3px',
							}}
						>
							FAQs
						</NavLink>
						<a
							className='nav-item nav-link'
							href='https://www.buymeacoffee.com/smabbett'
							target='blank'
						>
							Donate
						</a>
					</div>
				</div>

				<NavLink className='btn btn-primary' to={'/reader'}>
					Upload Schedule Log
				</NavLink>
			</nav>
		</>
	);
}

export default Menu;
