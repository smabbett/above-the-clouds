import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='d-flex justify-content-between'>
					<a
						href='https://abbett-resume.vercel.app/'
						target='_blank'
						rel='noreferrer'
					>
						&copy; 2021 Sarah Abbett
					</a>
					<Link to='/privacy'>Privacy Policy</Link>
				</div>
			</div>
		</footer>
	);
}
