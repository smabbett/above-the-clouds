import React from 'react';
import Chart from 'react-google-charts';

function TripLength({ rotations }) {
	let result = new Map();
	for (let [key, value] of rotations.entries()) {
		let startDate = Date.parse(key);
		let endDate = Date.parse(
			value.segments[value.segments.length - 1].dept_date
		);
		let tripDays = Math.round(
			endDate / (60 * 60 * 24 * 1000) - startDate / (60 * 60 * 24 * 1000) + 1
		).toString();

		if (!result.has(tripDays)) {
			result.set(tripDays, 1);
		} else {
			let count = result.get(tripDays);
			result.set(tripDays, ++count);
		}
	}

	return (
		<div className='card shadow mb-1'>
			<h4 className='card-header'>Trips by Length</h4>
			<div className='card-body'>
				{/* <ul>{tripLengths}</ul> */}

				<Chart
					// width={'100%'}
					// height={'350px'}
					chartType='PieChart'
					loader={<div>Loading Chart</div>}
					data={[['Trip Length', 'Total Flown'], ...result]}
					options={{
						title: 'My Trips (days)',
						is3D: true,
					}}
					rootProps={{ 'data-testid': '1' }}
				/>
			</div>
		</div>
	);
}
export default TripLength;
