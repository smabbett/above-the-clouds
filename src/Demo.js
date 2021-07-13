import React, { useState } from 'react';
import Home from './Home';
import Schedule_Data from './data/2016_SCHEDULE_DATA.CSV';
import formatRotations from './utils/formatRotations';
//import { Papa } from 'papaparse';

function Demo() {
	const [rotations, setRotations] = useState([]);

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

	let invalidFields = [];

	// Papa.parse(Schedule_Data, {
	// 	header: true,
	// 	skipEmptyLines: true,
	// 	dynamicTyping: true,
	// 	transformHeader: (header) =>
	// 		header.replace('#', 'num').replaceAll(' ', '_').toLowerCase(),
	// 	download: true,
	// 	complete: function (results) {
	// 		console.log(results);
	// 	},
	// });

	const resultArray = [];
	Schedule_Data.forEach((item) => resultArray.push(item.data));

	invalidFields = Object.keys(resultArray[0]).filter(
		(item) => !headers.includes(item)
	);

	if (invalidFields.length) {
		console.log(`Invalid fields`, invalidFields);
	} else {
		const eMap = formatRotations([...resultArray]);
		console.log(eMap);

		setRotations(eMap);
	}

	return <Home rotations={rotations} />;
}
export default Demo;
