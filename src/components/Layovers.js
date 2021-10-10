import React from 'react';
import { Chart } from 'react-google-charts';

function Layovers({ list }) {
	//use Map to count layovers by city
	let result = new Map();
	list.forEach((item) => {
		if (item.layover_stn !== '   ') {
			if (!result.has(item.layover_stn)) {
				result.set(item.layover_stn, 1);
			} else {
				let count = result.get(item.layover_stn);
				result.set(item.layover_stn, ++count);
			}
		}
	});
	let dataArray = [...result];
	let sortedMap = new Map(dataArray.sort((a, b) => b[1] - a[1]));

	let sentence = '';
	switch (sortedMap.keys().next().value) {
		case 'CDG':
			sentence = 'Parlez-vous Français?';
			break;
		case 'LHR':
		case 'LGW':
			sentence = 'Fancy a cuppa?';
			break;
		case 'AMS':
			sentence = 'Spreek je Nederlands?';
			break;
		default:
			sentence = 'Was it a Holiday Inn or Doubletree?';
	}

	return (
		<>
			{/* <div className='row'>
			<div className='col-md-3 mx-auto align-self-center'> */}
			<hr></hr>
			<p className='font-italic text-center'>
				{sentence} I had {sortedMap.values().next().value} layovers at{' '}
				{sortedMap.keys().next().value}.
			</p>

			{/* </div> */}
			{/* <div className='col-md-8 mt-3'> */}
			<Chart
				// height={'300px'}
				chartType='Bar'
				loader={<div>Loading Chart</div>}
				data={[['Airport Code', 'Layovers'], ...sortedMap]}
				options={{
					hAxis: { fontName: 'Nunito' },
					legend: { position: 'none' },
					colors: ['#3a0ca3'],
					//font not working?
					fontName: 'Nunito',
				}}
				// For tests
				rootProps={{ 'data-testid': '2' }}
			/>
			{/* </div>
			
			</div> */}
		</>
	);
}
export default Layovers;
