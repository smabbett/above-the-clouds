import React from 'react';
import { NavLink } from 'react-router-dom';
import FileReader from '../components/FileReader';

function Menu({ setRotations }) {
	return (
		<>
			<nav className='navbar sticky-top navbar-expand-lg navbar-light bg-light shadow'>
				<NavLink className='navbar-brand' to='/'>
					In The Clouds
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
							to='/faq'
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

				{/* <NavLink className='btn btn-primary' to={'/reader'}>
					Upload Schedule Log
				</NavLink> */}
				<FileReader setRotations={setRotations} />
			</nav>
		</>
	);
}

export default Menu;
