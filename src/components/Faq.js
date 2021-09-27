import React from 'react';
import { Link } from 'react-router-dom';
import './Faq.css';
import screenshot1 from '../images/screenshot1.png';
import screenshot2 from '../images/screenshot2.png';
import screenshot3 from '../images/screenshot3.png';

import QuestionDetail from './QuestionDetail';

export default function Faq() {
	const questions = [
		{
			question: (
				<>
					I have never worked at Delta Airlines. Can I still upload my data from
					American Airlines or another flight carrier?
				</>
			),
			answer: (
				<>
					Unfortunately, no. This is for Delta flight attendants only. I created
					this website to take your Schedule Leg Data that you find in iCrew and
					create a summary of your flight data.
				</>
			),
		},
		{
			question: (
				<>
					What do you do with the Schedule Leg Data that is uploaded to the
					website? Is it saved?
				</>
			),
			answer: (
				<>
					Your data is not saved. It is only stored temporarily while you access
					the page. Upon refresh, your data is cleared from memory. In the
					future, I would like to add a database to store data so you can easily
					access your data again, and compare your flying year to year. If you
					have any questions about the privacy policy contact us{' '}
					<Link to='/about'>here</Link>.
				</>
			),
		},
		{
			question: (
				<>
					Where do I download my Schedule Leg Data from Delta? How do I upload
					it to the website?
				</>
			),
			answer: (
				<>
					<div className='card shadow mb-3'>
						<img
							className='card-img-top'
							src={screenshot1}
							alt={'iCrew Home Page'}
						/>
						<div className='card-body'>
							<ul>
								<li className='card-text'>Log in to iCrew</li>

								<li className='card-text'>
									Select <b>F/A Preference</b> under the <b>Schedules</b> Menu
									on the far left.
								</li>
							</ul>
						</div>
					</div>
					<div className='card shadow mb-3'>
						<img
							className='card-img-top'
							src={screenshot2}
							alt={'selection page'}
						/>
						<div className='card-body'>
							<ul>
								<li className='card-text'>
									Select <b>Schedule Leg Data Extract</b>, the first item on the
									page.
								</li>
							</ul>
						</div>
					</div>
					<div className='card shadow mb-3'>
						<img
							className='card-img-top'
							src={screenshot3}
							alt={'select email page'}
						/>
						<div className='card-body'>
							<ul>
								<li className='card-text'>
									Select{' '}
									<b>eMail 2020 Schedule Leg Data to your company account</b>.
								</li>
							</ul>
						</div>
					</div>
					<div className='card shadow'>
						<div className='card-body'>
							<ul>
								<li className='card-text'>
									Check your company email for a message with an attachment. The
									file name will be similar to <b>2016_SCHEDULE_DATA.CSV</b>.
									Click on the attachment and download to your computer.
								</li>
								<li className='card-text'>
									Locate the file on your computer. On a Mac, check the
									Downloads folder. Your data will be displayed on the web page.
								</li>
							</ul>
							<ul>
								<small>
									Your data is not being saved. This is for your information
									only.
								</small>
							</ul>
						</div>
					</div>
				</>
			),
		},
	];

	const list = questions.map((question, index) => {
		return <QuestionDetail key={index} question={question} />;
	});
	return (
		<div className='container my-4'>
			<h1 className='w-50 mx-auto'>Frequently Asked Questions (FAQs)</h1>
			<div className='row'>
				<div className='col-md-6 mx-auto mt-4'>{list}</div>
			</div>
		</div>
	);
}
