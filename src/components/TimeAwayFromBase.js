import React from 'react';
import { daysHoursMinutesConvert } from '../utils/time-conversion';
import { hoursMinutesConvert } from '../utils/time-conversion';

function TimeAwayFromBase({ rotations, list }) {
	let tafb = 0;
	for (let value of rotations.values()) {
		tafb = tafb + value.dom_tafb + value.intl_tafb;
	}

	const result = new Map([
		['JAN', 0],
		['FEB', 0],
		['MAR', 0],
		['APR', 0],
		['MAY', 0],
		['JUN', 0],
		['JUL', 0],
		['AUG', 0],
		['SEP', 0],
		['OCT', 0],
		['NOV', 0],
		['DEC', 0],
	]);
	list.forEach((item) => {
		if (!result.has(item.dept_date.slice(2, 5))) {
			result.set(item.dept_date.slice(2, 5), item.leg_block_time);
		} else {
			let count = result.get(item.dept_date.slice(2, 5));
			result.set(item.dept_date.slice(2, 5), count + item.leg_block_time);
		}
	});

	//sum of layover_time for all flight segments
	const layoverHours = list.reduce((acc, item) => {
		return acc + item.layover_time;
	}, 0);

	let resultArray = [...result];
	let monthCount = 0;
	resultArray.forEach((item) => {
		if (item[1] !== 0) {
			monthCount++;
		}
		item.push(hoursMinutesConvert(item[1]));
	});

	const totalHours = resultArray.reduce((acc, item) => {
		return acc + item[1];
	}, 0);
	const avg = hoursMinutesConvert(totalHours / monthCount);

	return (
		<>
			<p className='medium-text'>
				My total time away from base was {daysHoursMinutesConvert(tafb)}
				{/* {hoursMinutesConvert(tafb)}  */}
			</p>
			<hr></hr>
			<p>
				My layover time was {daysHoursMinutesConvert(layoverHours)}
				{/* {hoursMinutesConvert(layoverHours)} */}
			</p>
			<hr></hr>
			<p>My monthly average flying was {avg} </p>
			<hr></hr>
			<p>
				My first rotation was {rotations.keys().next().value} and my last
				rotation was {Array.from(rotations.keys()).pop()}
			</p>

			{/* <Chart
				width={'100%'}
				height={'250px'}
				chartType='BarChart'
				loader={<div>Loading Chart</div>}
				data={[
					// Note the third column definition
					[
						'Month',
						'Flight Block Time (minutes)',
						{ role: 'tooltip', type: 'string' },
					],

					...resultArray,
				]}
				options={{
					title: 'Monthly Flying',
					chartArea: { width: '50%' },
					// This must be also set to render the tooltip with html (vs svg)
					// tooltip: { isHtml: true, trigger: "visible" }
				}}
				rootProps={{ 'data-testid': '7' }}
			/> */}
			{/* </div> */}
		</>
	);
}
export default TimeAwayFromBase;
