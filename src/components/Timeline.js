import React from 'react';
import { Chart } from 'react-google-charts';
import { parseDate } from '../utils/parseDate';

export default function Timeline({ rotations, list }) {
	let result = [];

	for (let [key, value] of rotations.entries()) {
		let rotNumber = value.rotation;
		let startDate = parseDate(key) + '00:00';
		let endDate =
			parseDate(value.segments[value.segments.length - 1].dept_date) + '23:59';
		result.push([rotNumber, startDate, endDate]);
	}
	console.log(result);
	return (
		<div className='col-12'>
			<div className='card shadow'>
				<h4 className='card-header'>My Timeline</h4>
				<div className='card-body'>
					<div className='row'>
						<Chart
							width={'100%'}
							height={'200px'}
							chartType='Timeline'
							loader={<div>Loading Chart</div>}
							data={[
								[
									{ type: 'string', id: 'Year' },
									{ type: 'string', id: 'Rotation' },
									{ type: 'date', id: 'Start' },
									{ type: 'date', id: 'End' },
								],
								['2020', ...result],
								// ['2020', 'DFW PHL', new Date(2020, 0, 1), new Date(2020, 0, 4)],
								// ['2020', 'LHR', new Date(2020, 2, 4), new Date(2020, 2, 6 + 1)],
								// ['2020', 'CDG', new Date(2020, 3, 8), new Date(2020, 3, 11)],
								// ['2020', 'Turn', new Date(2020, 4, 9), new Date(2020, 4, 9)],
							]}
							options={{
								timeline: { showRowLabels: false },
							}}
							rootProps={{ 'data-testid': '3' }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
