import React, { useState } from 'react';

import { Tabs, Tab } from 'react-bootstrap';
import WorldGeochart from './WorldGeoChart';
import AsiaGeochart from './AsiaGeoChart';
import EuropeGeochart from './EuropeGeoChart';
import USGeochart from './USGeoChart';

export default function Log({ list }) {
	// const chartEvents = [
	// 	{
	// 		eventName: 'select',
	// 		callback(chartWrapper, googleViz, selected) {
	// 			console.log('Region selected ', selected.region);
	// 		},
	// 	},
	// ];

	const [key, setKey] = useState('world');
	//use Map to count layovers by city
	let result = new Map();
	list.forEach((item) => {
		// if (item.layover_stn === 'LHR') {
		// 	item.layover_stn = '51.4700° N, 0.4543° W';
		// }
		if (item.layover_stn !== '   ') {
			if (!result.has(item.layover_stn + ' airport')) {
				result.set(item.layover_stn + ' airport', 1);
			} else {
				let count = result.get(item.layover_stn + ' airport');
				result.set(item.layover_stn + ' airport', ++count);
			}
		}
	});
	return (
		<>
			<Tabs
				id='region'
				activeKey={key}
				mountOnEnter={true}
				unmountOnExit={true}
				transition={false}
				onSelect={(k) => setKey(k)}
				className='mb-3'
			>
				<Tab eventKey='world' title='World'>
					<WorldGeochart result={result} />
				</Tab>
				<Tab eventKey='us' title='US'>
					<USGeochart result={result} />
				</Tab>
				<Tab eventKey='europe' title='Europe'>
					<EuropeGeochart result={result} />
				</Tab>
				<Tab eventKey='asia' title='Asia'>
					<AsiaGeochart result={result} />
				</Tab>
			</Tabs>
		</>
	);
}
