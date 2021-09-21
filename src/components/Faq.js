import React from 'react';
import { Link } from 'react-router-dom';

export default function Faq() {
	return (
		<div className='row mx-auto w-50' style={{ height: '80vh' }}>
			<h2>Frequently Asked Questions (FAQs)</h2>
			<p>
				I have never worked at Delta Airlines. Can I still upload my data from
				American Airlines or another flight carrier?
			</p>
			<p>
				Unfortunately, no. This is for Delta flight attendants only. I created
				this website to take your Schedule Leg Data that you find in iCrew and
				create a summary of your flight data.{' '}
			</p>
			<p>
				What do you do with the Schedule Leg Data that is uploaded to the
				website? Is it saved?
			</p>
			<p>
				Where do I download my Schedule Leg Data from Delta? How do I upload it
				to the website?
			</p>
			<p>
				Please follow the instructions, found <Link to='/help'>here</Link>, with
				helpful images.
			</p>
		</div>
	);
}
