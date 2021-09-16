import React from 'react';
import './log.css';
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
		// <div className='container'>
		// 	<div className='item'>Hello</div>
		// 	<div className='item'>Hello</div>
		// 	<div className='item-double'>
		// 		<div className='item'>
		<Chart
			width={'100%'}
			height={'300px'}
			chartType='GeoChart'
			data={[['City', 'Layovers'], ...result]}
			options={{
				displayMode: 'markers',
				colorAxis: { colors: ['#EFF2C0', '#A52422'] },
				backgroundColor: '#C2E4FF',
				datalessRegionColor: '#28536B',
				enableRegionInteractivity: true,
				sizeAxis: { minValue: 0, maxSize: 10 },
			}}
			mapsApiKey='AIzaSyBwWq-oJkR_gEeqnY-mPI8LCneQg6zvX38'
			rootProps={{ 'data-testid': '2' }}
		/>
		// 		</div>
		// 		<div className='item'>Hello</div>
		// 	</div>
		// </div>
	);
}
