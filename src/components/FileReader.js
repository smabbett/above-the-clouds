import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { CSVReader } from 'react-papaparse';
import formatRotations from '../utils/formatRotations';
import ErrorAlert from '../layout/ErrorAlert';
import ShareComponent from './ShareComponent';
import './FileReader.css';

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

export default function FileReader({ setRotations }) {
	const [error, setError] = useState(null);
	const [isActive, setIsActive] = useState(false);
	let invalidFields = [];
	const history = useHistory();

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
			setIsActive(true);
			history.push('/');
		}
	};

	const handleOnError = (err, file, inputElem, reason) => {
		setError(err);
	};

	const handleOnRemoveFile = (data) => {
		console.log('---------------------------');
		console.log(data);
		console.log('---------------------------');
		setIsActive(false);
		setError(null);
	};

	return (
		<>
			<ErrorAlert error={error} />
			{isActive ? (
				<>
					{/* <button className='btn btn-primary' style={{ width: '99px' }}>
						Share
					</button> */}
					<div className='row d-flex align-items-center'>
						<ShareComponent />

						<span
							className='oi oi-circle-x'
							style={{
								color: 'red',
								width: '45px',
								height: '45px',
								fontSize: '44px',
								border: 'none',
								padding: '2px 0px 0px 4px',
								marginRight: '8px',
							}}
							onClick={handleOnRemoveFile}
						></span>
					</div>
				</>
			) : (
				<CSVReader
					style={{
						dropArea: {
							width: 198,
							height: 40,
							borderRadius: 5,
							background: '#18a0fb',
							color: 'white',
							padding: 6,
							borderWidth: 0,
						},
					}}
					onDrop={handleOnDrop}
					onError={handleOnError}
					noDrag
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
					<span>Upload Schedule Log</span>
				</CSVReader>
			)}
		</>
	);
	// }
}
