import React, { useState } from 'react';
import Pdf from 'react-to-pdf';
import { CSVReader } from 'react-papaparse';
import formatRotations from '../utils/formatRotations';
import TimeAwayFromBase from '../TimeAwayFromBase';
import FlightPay from '../FlightPay';
import TripLength from '../TripLength';
import Equipment from '../Equipment';
import Layovers from '../Layovers';
import ShareComponent from './ShareComponent';

const ref = React.createRef();

export default function MyCSVReader() {
	const [rotations, setRotations] = useState([]);

	//create array of flight segments
	let list = [];
	for (let value of rotations.values()) {
		list.push(...value.segments);
	}

	const handleOnDrop = (e) => {
		const result = [];
		e.forEach((item) => result.push(item.data));
		const eMap = formatRotations([...result]);
		setRotations(eMap);
	};

	const handleOnError = (err, file, inputElem, reason) => {
		console.log(err);
	};

	const handleOnRemoveFile = (data) => {
		console.log('---------------------------');
		console.log(data);
		console.log('---------------------------');
	};

	if (rotations.size) {
		let year = rotations.keys().next().value;
		return (
			<>
				<div className='d-flex float-right'>
					<ShareComponent />
					<Pdf
						targetRef={ref}
						filename={`MyTravelLog${year.slice(5)}.pdf`}
						scale={0.575}
					>
						{({ toPdf }) => (
							<button
								className='btn btn-danger rounded-circle m-2'
								style={{ width: '45px', height: '45px' }}
								onClick={toPdf}
							>
								<span class='oi oi-data-transfer-download'></span>
							</button>
						)}
					</Pdf>
				</div>
				<div ref={ref}>
					<div className='card shadow my-3 w-100'>
						<h4 className='card-header'>My Time</h4>
						<div className='card-body'>
							<div className='row'>
								<TimeAwayFromBase rotations={rotations} list={list} />
								<FlightPay rotations={rotations} />
							</div>
						</div>
					</div>
					<div className='row'>
						<Layovers list={list} />
					</div>
					<div className='card-deck'>
						<TripLength rotations={rotations} />
						<Equipment list={list} />
					</div>
				</div>
			</>
		);
	} else {
		return (
			<>
				<div className='card'>
					<div className='card-body'>
						<div className='card-text'>
							<p>
								This is for Delta flight attendants only. I created this website
								to take your <b>Schedule Leg Data</b> that you get in iCrew and
								create a summary of your flight data.
							</p>
							<p>
								I am a former flight attendant and aspiring web developer. I
								created this application to demonstrate my skills in CSS, HTML,
								Javascript and React.js. I hope you enjoy it!
							</p>
							<p>
								NOTE: Your data is not being saved. When the page is refreshed,
								the data is gone. If you would like to save your travel log,
								please click on{' '}
								<button
									className='btn btn-danger rounded-circle m-2'
									style={{ width: '45px', height: '45px' }}
								>
									<span class='oi oi-data-transfer-download'></span>
								</button>
							</p>
							<ul>
								<li>How many times did I layover in Paris this year?</li>
								<li>Where did I layover the most?</li>
								<li>How much time did I spend on the road?</li>
								<li>What type of aircraft did I fly on the most?</li>
								<li>What percentage of my flying was international?</li>
								<li>How many flight hours did I average this year?</li>
								<li>Did I fly mostly turns or 3 day trips?</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='card shadow m-3'>
					<h4 className='card-header'>Drag or drop your file</h4>
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
				</div>
			</>
		);
	}
}
