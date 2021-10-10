import React from 'react';
import { Chart } from 'react-google-charts';

function Equipment({ list }) {
	const firstLegDate = list[0].dept_date;
	const lastLegDate = list[list.length - 1].dept_date;

	//use Map to count equipment flown
	let result = new Map();
	list.forEach((item) => {
		if (item.equip !== '   ') {
			if (!result.has(item.equip)) {
				result.set(item.equip, 1);
			} else {
				let count = result.get(item.equip);
				result.set(item.equip, ++count);
			}
		}
	});

	let dataArray = [
		['320', (result.get(320) || 0) + (result.get('32K') || 0)],
		[
			'757',
			(result.get(757) || 0) +
				(result.get('75Y') || 0) +
				(result.get('75D') || 0),
		],
		[
			'767',
			(result.get('76Q') || 0) +
				(result.get('76P') || 0) +
				(result.get('76D') || 0) +
				(result.get('76L') || 0) +
				(result.get('76Z') || 0),
		],
		['330', (result.get(333) || 0) + (result.get(332) || 0)],
		['737', (result.get(739) || 0) + (result.get(738) || 0)],
		['319', (result.get('31J') || 0) + (result.get(319) || 0)],
		['M90', result.get('M90') || 0],
		['777', result.get(777) || 0],
		['321', result.get(321) || 0],
		['Charter', result.get('75C') || 0],
		['220', (result.get(221) || 0) + (result.get(223) || 0)],
		['717', result.get(717) || 0],
		['SkyWest', result.get('OO ') || 0],
	];

	let sortedMap = new Map(dataArray.sort((a, b) => b[1] - a[1]));

	return (
		<>
			<p>
				Between {firstLegDate} and {lastLegDate}, I flew {list.length} flight
				segments,{' '}
				<em>
					which means {list.length} boardings, the toughest part of the job.
				</em>
			</p>
			<hr></hr>
			<Chart
				chartType='PieChart'
				loader={<div>Loading Chart</div>}
				data={[['Type of Aircraft', 'Flights'], ...sortedMap]}
				options={{
					title: 'Aircraft Flown',
					// is3D: true,
					legend: { position: 'bottom' },
					fontName: 'Nunito',
					pieSliceText: 'label',
					slices: {
						0: { color: '#560bad' }, //apr
						1: { color: '#b5179e' }, //feb2
						2: { color: '#8ac926' }, //dec
						3: { color: '#f72585' }, //jan
						4: { color: '#ffca3a' }, //nov
						5: { color: '#3a0ca3' }, //jun
						6: { color: '#7209b7' }, //mar
						7: { color: '#4361ee' }, //aug
						8: { color: '#3f37c9' }, //jul
						9: { color: '#4cc9f0' }, //oct
						10: { color: '#480ca8' }, //may
						11: { color: '#4895ef' }, //sep
						12: { color: '#b5179e' }, //feb2
					},
				}}
				rootProps={{ 'data-testid': '1' }}
			/>
		</>
	);
}

export default Equipment;
