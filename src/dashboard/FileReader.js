import React, { useState } from 'react';
import { CSVReader } from 'react-papaparse';
import formatRotations from '../utils/formatRotations';
import TravelLog from '../components/TravelLog';
import './Dashboard.css';
import ErrorAlert from '../layout/ErrorAlert';

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

export default function FileReader() {
	const [rotations, setRotations] = useState([]);
	const [error, setError] = useState(null);
	let invalidFields = [];

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
				<ErrorAlert error={error} />

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
			</>
		);
	}
}
