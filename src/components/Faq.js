import React from 'react';
import { Link } from 'react-router-dom';
import './Faq.css';

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
					Please follow the instructions, found <Link to='/help'>here</Link>,
					with helpful images.
				</>
			),
		},
	];

	const list = questions.map((question, index) => {
		return <QuestionDetail key={index} question={question} />;
	});
	return (
		<div className='my-4'>
			<h1 className='w-50 mx-auto'>Frequently Asked Questions (FAQs)</h1>
			<div className='row'>
				<div className='col-md-6 mx-auto mt-4'>{list}</div>
			</div>
		</div>
	);
}
