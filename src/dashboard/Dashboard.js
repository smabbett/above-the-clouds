import React, { useState } from 'react';
import { CSVReader } from 'react-papaparse';
import formatRotations from '../utils/formatRotations';
import TravelLog from '../components/TravelLog';
import './Dashboard.css';
import ErrorAlert from '../layout/ErrorAlert';
import { Link } from 'react-router-dom';
import Log from '../components/Log';

const demo = require('../data/demo-data');
const headers = [
	'arrv',
	'arrv_time',
	'date',
	'dept',
	'dept_date',
	'dept_time',
	'dom_tafb',
	'equip',
	'flt_num',
	'flt_pay',
	'intl_pay',
	'intl_tafb',
	'lang_pay',
	'layover_hotel',
	'layover_stn',
	'layover_time',
	'leg_block_time',
	'leg_status',
	'night_pay',
	'rotation',
	'ttl_rotn_cred',
];

export default function Dashboard() {
	const [rotations, setRotations] = useState([]);
	const [error, setError] = useState(null);
	let invalidFields = [];

	const handleClick = () => {
		const rotationsMap = formatRotations([...demo]);
		console.log('rotationsMap', rotationsMap);
		setRotations(rotationsMap);
	};
	const handleOnDrop = (e) => {
		const result = [];
		e.forEach((item) => result.push(item.data));

		invalidFields = Object.keys(result[0]).filter(
			(item) => !headers.includes(item)
		);

		if (invalidFields.length) {
			console.log(`Invalid fields`, invalidFields);
			const message = `The CSV file is not valid.`;
			setError(message);
		} else {
			const eMap = formatRotations([...result]);

			setRotations(eMap);
		}
	};

	const handleOnError = (err, file, inputElem, reason) => {
		console.log(err);
	};

	const handleOnRemoveFile = (data) => {
		console.log('---------------------------');
		console.log(data);
		console.log('---------------------------');
		setError(null);
	};

	if (rotations.size) {
		// return <TravelLog rotations={rotations} />;
		return <TravelLog rotations={rotations} />;
	} else {
		return (
			<>
				{/* <div className='card'>
					<div className='card-body'>
						<div className='card-text'>
							<p>
								This is for Delta flight attendants only. I created this website
								to take your <b>Schedule Leg Data</b> that you find in iCrew and
								create a summary of your flight data. For complete instructions
								on downloading your flight data, click <b>Help.</b>
							</p>
							<p>
								I flew for Delta and Northwest Airlines for 24 years. As a new
								web developer, I created this application to demonstrate my
								skills in CSS, HTML, Javascript and React.js. I hope you enjoy
								it!
							</p>
							<p>
								NOTE: Your data is not being saved. When the page is refreshed,
								the data is gone. If you would like to save your travel log,
								please click on{' '}
								<button
									className='btn btn-danger rounded-circle m-2'
									style={{ width: '45px', height: '45px' }}
								>
									<span className='oi oi-data-transfer-download'></span>
								</button>
							</p>
							<p></p>
							<ul>
								<li>How many times did I layover in Paris this year?</li>
								<li>Where did I layover the most?</li>
								<li>How much time did I spend on the road?</li>
								<li>What type of aircraft did I fly on the most?</li>
								<li>What percentage of my flying was international?</li>
								<li>How many flight hours did I average this year?</li>
								<li>Did I fly mostly turns or 3 day trips?</li>
							</ul>
							<button
								className='btn btn-warning btn-block mx-auto w-50'
								onClick={handleClick}
							>
								Demo
							</button>
						</div>
					</div>
					<div className='card-footer'>
						{' '}
						<Link to='/privacy'>Privacy Policy</Link>
					</div>
				</div> */}
				{/* <ErrorAlert error={error} />
				<div className='card shadow m-3'>
					<h4 className='card-header'>Upload your file</h4>
					<div className='card-body'>
						<CSVReader
							style={{
								dropAreaActive: {
									borderColor: 'red',
									backgroundColor: 'yellow',
								},
							}}
							onDrop={handleOnDrop}
							onError={handleOnError}
							addRemoveButton
							removeButtonColor='#659cef'
							onRemoveFile={handleOnRemoveFile}
							config={{
								header: true,
								skipEmptyLines: true,
								dynamicTyping: true,
								transformHeader: (header) =>
									header.replace('#', 'num').replaceAll(' ', '_').toLowerCase(),
							}}
						>
							<span>Drop CSV file here or click to upload.</span>
						</CSVReader>
					</div>
				</div> */}
			</>
		);
	}
}
