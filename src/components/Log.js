import React from 'react';
import Chart from 'react-google-charts';

export default function Log({ list }) {
	//use Map to count layovers by city
	let result = new Map();
	list.forEach((item) => {
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
		<Chart
			width={'100%'}
			height={'300px'}
			chartType='GeoChart'
			data={[['City', 'Layovers'], ...result]}
			options={{
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
	);
}
