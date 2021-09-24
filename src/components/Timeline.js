import React from 'react';
import { Chart } from 'react-google-charts';
import './Timeline.css';

export default function Timeline({ rotations }) {
	let result = [];

	for (let [key, value] of rotations.entries()) {
		let rotNumber = 'Rotation ' + value.rotation.toString();
		let startDate = new Date(key);

		startDate.setHours(0, 0, 0);
		// let startYear = startDate.getFullYear();
		// let startMonth = startDate.getMonth();
		// let startDay = startDate.getDate();
		// console.log(`(${startYear}, ${startMonth}, ${startDay}, 0, 0, 0, 0)`);
		// let start = new Date(startYear, startMonth, startDay, 0, 0, 0, 0);

		let endDate = new Date(value.segments[value.segments.length - 1].dept_date);
		endDate.setHours(24, 0, 0);
		// let endYear = endDate.getFullYear();
		// let endMonth = endDate.getMonth();
		// let endDay = endDate.getDate();
		// let end = new Date(endYear, endMonth, endDay, 24, 0, 0, 0);

		result.push([
			rotNumber,
			`<div style="padding:5px 5px 5px 5px;width:150px"><h6>${rotNumber}</h6><p>${startDate
				.toString()
				.slice(0, 11)} - ${new Date(
				value.segments[value.segments.length - 1].dept_date
			)
				.toString()
				.slice(0, 11)}</p></div>`,
			startDate,
			endDate,
		]);
	}
	console.log('timeline', result);

	let resultArray = [...result];
	console.log('resultArray', resultArray);
	resultArray.forEach((e) => e.unshift(rotations.keys().next().value.slice(5)));
	return (
		<div id='chart_wrapper'>
			<Chart
				//width={'100%'}
				// height={'200px'}
				chartType='Timeline'
				loader={<div>Loading Chart</div>}
				data={[
					[
						{ type: 'string', id: 'Year' },
						{ type: 'string', id: 'Rotation' },
						{ type: 'string', role: 'tooltip', p: { html: true } },
						{ type: 'date', id: 'Start' },
						{ type: 'date', id: 'End' },
					],
					...resultArray,
				]}
				options={{
					timeline: { showRowLabels: false, showBarLabels: false },

					width: 1400,
					tooltip: { isHtml: true },
				}}
				rootProps={{ 'data-testid': '4' }}
			/>
		</div>
	);
}

// timeline: { rowLabelStyle: {fontName: 'Helvetica', fontSize: 24, color: '#603913' },
// barLabelStyle: { fontName: 'Garamond', fontSize: 14 } }
