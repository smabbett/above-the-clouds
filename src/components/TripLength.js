import React from 'react';
import Chart from 'react-google-charts';
import { parseDate } from '../utils/parseDate';

function TripLength({ rotations }) {
	let result = new Map();
	for (let [key, value] of rotations.entries()) {
		let startDate = parseDate(key);
		let endDate = parseDate(
			value.segments[value.segments.length - 1].dept_date
		);
		let tripDays =
			Math.round(
				endDate / (60 * 60 * 24 * 1000) - startDate / (60 * 60 * 24 * 1000) + 1
			).toString() + ' Day';

		if (!result.has(tripDays)) {
			result.set(tripDays, 1);
		} else {
			let count = result.get(tripDays);
			result.set(tripDays, ++count);
		}
	}
	let dataArray = [...result];
	let sortedMap = new Map(dataArray.sort((a, b) => b[1] - a[1]));

	return (
		<>
			<Chart
				// width={'100%'}
				// height={'350px'}
				chartType='PieChart'
				loader={<div>Loading Chart</div>}
				data={[['Trip Length', 'Total Flown'], ...sortedMap]}
				options={{
					title: 'Trip Length',
					// is3D: true,
					legend: { position: 'bottom' },
					fontName: 'Nunito',
					pieSliceText: 'label',
					slices: {
						0: { color: '#7209b7' }, //mar
						1: { color: '#4361ee' }, //aug
						2: { color: '#8ac926' }, //dec
						3: { color: '#f72585' }, //jan
						4: { color: '#ffca3a' }, //nov
						5: { color: '#3a0ca3' }, //jun
						6: { color: '#560bad' }, //apr
						7: { color: '#b5179e' }, //feb2
						8: { color: '#3f37c9' }, //jul
						9: { color: '#4cc9f0' }, //oct
						10: { color: '#480ca8' }, //may
						11: { color: '#4895ef' }, //sep
						12: { color: '#b5179e' }, //feb2
					},
				}}
				rootProps={{ 'data-testid': '5' }}
			/>
		</>
	);
}
export default TripLength;
