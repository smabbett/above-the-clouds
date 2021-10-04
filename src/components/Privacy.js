import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Privacy() {
	return (
		<div className='container my-4'>
			<h1 className='w-50 mx-auto'>Privacy Notice </h1>
			<div className='row'>
				<div className='col-md-6 mx-auto mt-4'>
					<p>
						This privacy notice discloses the privacy practices for In The
						Clouds. This privacy notice applies solely to information collected
						by this website.
					</p>
					<h3>Information Collection and Use</h3>
					<p>
						When you upload your CSV file to our website, that data is used to
						create data visualizations. However, that data is not being stored
						in a database. Upon refresh, your data is no longer available.
					</p>

					<p>
						If you have any questions about this privacy policy contact us{' '}
						<NavLink to='/about'>here</NavLink>.
					</p>
				</div>
			</div>
		</div>
	);
}
