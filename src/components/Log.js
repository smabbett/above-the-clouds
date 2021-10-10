import React, { useState } from 'react';
import Chart from 'react-google-charts';
import { Tabs, Tab } from 'react-bootstrap';

export default function Log({ list }) {
	const chartEvents = [
		{
			eventName: 'select',
			callback(chartWrapper, googleViz, selected) {
				console.log('Region selected ', selected.region);
			},
		},
	];

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
				id='controlled-tab-example'
				activeKey={key}
				onSelect={(k) => setKey(k)}
				className='mb-3'
			>
				<Tab eventKey='world' title='World'>
					<Chart
						chartEvents={chartEvents}
						width={'100%'}
						height={'300px'}
						chartType='GeoChart'
						data={[['City', 'Layovers'], ...result]}
						options={{
							showZoomOut: true,
							displayMode: 'markers',
							colorAxis: { colors: ['#f72585', '#3a0ca3'] },
							backgroundColor: '#cbe6ee',
							datalessRegionColor: '#EAEAEA',
							enableRegionInteractivity: true,
							sizeAxis: { minValue: 0, maxSize: 10 },
						}}
						mapsApiKey='AIzaSyBwWq-oJkR_gEeqnY-mPI8LCneQg6zvX38'
						rootProps={{ 'data-testid': '3' }}
					/>
				</Tab>
				<Tab eventKey='us' title='US' default>
					<Chart
						width={'100%'}
						height={'300px'}
						chartType='GeoChart'
						data={[['City', 'Layovers'], ...result]}
						options={{
							region: 'US',
							domain: 'US',
							displayMode: 'markers',
							colorAxis: { colors: ['#f72585', '#3a0ca3'] },
							backgroundColor: '#cbe6ee',
							datalessRegionColor: '#EAEAEA',
							enableRegionInteractivity: true,
							sizeAxis: { minValue: 0, maxSize: 10 },
						}}
						mapsApiKey='AIzaSyBwWq-oJkR_gEeqnY-mPI8LCneQg6zvX38'
						rootProps={{ 'data-testid': '3' }}
					/>
				</Tab>
				<Tab eventKey='europe' title='Europe'>
					<Chart
						width={'100%'}
						height={'300px'}
						chartType='GeoChart'
						data={[['City', 'Layovers'], ...result]}
						options={{
							region: 150,
							displayMode: 'markers',
							colorAxis: { colors: ['#f72585', '#3a0ca3'] },
							backgroundColor: '#cbe6ee',
							datalessRegionColor: '#EAEAEA',
							enableRegionInteractivity: true,
							sizeAxis: { minValue: 0, maxSize: 10 },
						}}
						mapsApiKey='AIzaSyBwWq-oJkR_gEeqnY-mPI8LCneQg6zvX38'
						rootProps={{ 'data-testid': '3' }}
					/>
				</Tab>
				<Tab eventKey='asia' title='Asia'>
					<Chart
						width={'100%'}
						height={'300px'}
						chartType='GeoChart'
						data={[['City', 'Layovers'], ...result]}
						options={{
							region: 142,
							displayMode: 'markers',
							colorAxis: { colors: ['#f72585', '#3a0ca3'] },
							backgroundColor: '#cbe6ee',
							datalessRegionColor: '#EAEAEA',
							enableRegionInteractivity: true,
							sizeAxis: { minValue: 0, maxSize: 10 },
						}}
						mapsApiKey='AIzaSyBwWq-oJkR_gEeqnY-mPI8LCneQg6zvX38'
						rootProps={{ 'data-testid': '3' }}
					/>
				</Tab>
			</Tabs>
		</>
	);
}
