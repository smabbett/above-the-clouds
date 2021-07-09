import React, { useState } from 'react';
import { CSVReader } from 'react-papaparse';
import formatRotations from '../utils/formatRotations';
import TimeAwayFromBase from '../TimeAwayFromBase';
import FlightPay from '../FlightPay';
import TripLength from '../TripLength';
import Equipment from '../Equipment';
import Layovers from '../Layovers';

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
		return (
			<>
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
			</>
		);
	} else {
		return (
			<>
				<div className='card shadow m-3'>
					<h4 className='card-header'>Add your file </h4>
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
