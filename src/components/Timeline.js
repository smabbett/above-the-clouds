import React from 'react';
import { Chart } from 'react-google-charts';
import './Timeline.css';

export default function Timeline({ rotations }) {
	let result = [];
	let months = [
		'JAN',
		'FEB',
		'MAR',
		'APR',
		'MAY',
		'JUN',
		'JUL',
		'AUG',
		'SEP',
		'OCT',
		'NOV',
		'DEC',
	];

	for (let [key, value] of rotations.entries()) {
		let rotNumber = 'Rotation ' + value.rotation.toString();
		let startDate = key;

		// startDate.setHours(0, 0, 0);
		let startDay = startDate.slice(0, 2);
		let startMonth = months.findIndex((e) => e === startDate.slice(2, 5));
		let startYear = startDate.slice(5);

		let start = new Date(startYear, startMonth, startDay, 0, 0, 0);

		let endDate = value.segments[value.segments.length - 1].dept_date;
		// endDate.setHours(24, 0, 0);
		let endDay = endDate.slice(0, 2);
		let endMonth = months.findIndex((e, index) => e === endDate.slice(2, 5));
		let endYear = endDate.slice(5);
		let end = new Date(endYear, endMonth, endDay, 24, 0, 0);

		result.push([
			rotNumber,
			`<div style="padding:5px 5px 5px 5px; width:fit-content;
            height:fit-content;white-space:nowrap;"><h6>${rotNumber}</h6><p>${startDate} - ${endDate}
			</p></div>`,
			start,
			end,
		]);
	}

	let resultArray = [...result];

	resultArray.forEach((e) => e.unshift(rotations.keys().next().value.slice(5)));
	return (
		<div id='chart_wrapper'>
			<Chart
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
					height: 100,
					//width: 1400,
					tooltip: { isHtml: true },
				}}
				rootProps={{ 'data-testid': '4' }}
			/>
		</div>
	);
}

// timeline: { rowLabelStyle: {fontName: 'Helvetica', fontSize: 24, color: '#603913' },
// barLabelStyle: { fontName: 'Garamond', fontSize: 14 } }
