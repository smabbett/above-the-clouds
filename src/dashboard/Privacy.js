import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Privacy() {
	return (
		<div className='card'>
			<div className='card-header'>Privacy Policy</div>
			<div className='card-body'>
				<div className='card-text'>
					<h1>Privacy Notice </h1>
					<p>
						This privacy notice discloses the privacy practices for
						my-travel-log. This privacy notice applies solely to information
						collected by this website. It will notify you of the following:
						<ul>
							<li>
								What personally identifiable information is collected from you
								through the website, how it is used and with whom it may be
								shared.
							</li>
							<li>
								What choices are available to you regarding the use of your
								data.
							</li>
							<li>
								The security procedures in place to protect the misuse of your
								information.
							</li>
							<li>How you can correct any inaccuracies in the information.</li>
						</ul>
					</p>
					<h1>Information Collection and Use</h1>
					<p>
						We are the sole owners of the information collected on this site. We
						only have access to/collect information that you voluntarily give us
						via email or other direct contact from you. We will use your
						information to respond to you, regarding the reason you contacted
						us. We will not share your information with any third party outside
						of our organization, other than as necessary to fulfill requests
						from you, and we will not sell your information to anyone.
					</p>
					<h1>Your Access to and Control Over Information</h1>
					<p>
						You may opt out of any future contacts from us at any time by
						terminating your account. You can do the following at any time by
						contacting us via the email address given on our website: See what
						data we have about you, if any. Change/correct any data we have
						about you. Express any concern you have about our use of your data.
					</p>
					<h1>Security</h1>
					<p>
						We take precautions to protect your information. When you submit
						sensitive information via the website, your information is protected
						both online and offline.
					</p>
					<p>
						Wherever we collect information it is encrypted and transmitted to
						us in a secure way. You can verify this by looking for a lock icon
						in the address bar and looking for “https” at the beginning of the
						address of the Web page.
					</p>
					<p>
						While we use encryption to protect sensitive information transmitted
						online, we also protect your information offline. Only staff members
						who need the information to perform a specific job (for example,
						processing support tickets) are granted access to personally
						identifiable information.
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
