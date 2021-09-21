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
		<Chart
			// width={'100%'}
			// height={'350px'}
			chartType='PieChart'
			loader={<div>Loading Chart</div>}
			data={[['Trip Length', 'Total Flown'], ...sortedMap]}
			options={{
				title: 'Trip Length',
				// is3D: true,
				legend: 'none',
				fontName: 'Nunito',
				slices: {
					0: { offset: 0.3, color: '#560bad' },
					1: { color: '#26c926' },
					2: { color: '#3f37c9' },
					3: { color: '#f72585' },
					4: { color: '#ffca3a' },
					5: { color: '#3a0ca3' },
					6: { color: '#7209b7' },
					7: { color: '#4361ee' },
					8: { color: '#8ac926' },
					9: { color: '#4cc9f0' },
					10: { color: '#480ca8' },
					11: { color: '#4895ef' },
					12: { color: '#b5179e' },
				},
			}}
			rootProps={{ 'data-testid': '5' }}
		/>
	);
}
export default TripLength;
