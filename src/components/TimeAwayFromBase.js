import React from 'react';
import { daysHoursMinutesConvert } from '../utils/time-conversion';
import { hoursMinutesConvert } from '../utils/time-conversion';
import { Icon } from '@iconify/react';

function TimeAwayFromBase({ rotations, list }) {
	let tafb = 0;
	for (let value of rotations.values()) {
		tafb = tafb + value.dom_tafb + value.intl_tafb;
	}

	let shortFlight = [list[0].dept, list[0].arrv, list[0].leg_block_time];
	for (let i = 1; i < list.length; i++) {
		if (list[i].leg_block_time < shortFlight[2]) {
			shortFlight = [list[i].dept, list[i].arrv, list[i].leg_block_time];
		}
	}

	let longFlight = [list[0].dept, list[0].arrv, list[0].leg_block_time];
	for (let i = 1; i < list.length; i++) {
		if (list[i].leg_block_time > longFlight[2]) {
			longFlight = [list[i].dept, list[i].arrv, list[i].leg_block_time];
		}
	}

	let layovers = list.filter((item) => item.layover_stn !== '   ');

	let shortLayover = [layovers[0].layover_stn, layovers[0].layover_time];
	for (let i = 1; i < layovers.length; i++) {
		if (layovers[i].layover_time < shortLayover[1]) {
			shortLayover = [layovers[i].layover_stn, layovers[i].layover_time];
		}
	}

	let longLayover = [layovers[0].layover_stn, layovers[0].layover_time];
	for (let i = 1; i < layovers.length; i++) {
		if (layovers[i].layover_time > longLayover[1]) {
			longLayover = [layovers[i].layover_stn, layovers[i].layover_time];
		}
	}

	//flight hours by month
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
	// const layoverHours = list.reduce((acc, item) => {
	// 	return acc + item.layover_time;
	// }, 0);

	let resultArray = [...result];

	resultArray.sort((a, b) => b[1] - a[1]);
	console.log('resultArray', resultArray);
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
	const avg = totalHours / monthCount;
	const comparison = Math.round((tafb / 124800) * 100);
	const compareMonthly = Math.round((avg / 10400) * 100);

	return (
		<>
			<p>
				My total time away from base was {daysHoursMinutesConvert(tafb)}.{' '}
				<em>
					That's {comparison}% of the hours required of a 9 to 5 job!
					Psst...that time includes my layovers.
				</em>
			</p>
			<hr></hr>
			<div className='row mb-3 text-center'>
				<div className='small-text col-4'>
					Shortest Month
					<br /> {resultArray[resultArray.length - 1][0]}{' '}
					{resultArray[resultArray.length - 1][2]}
				</div>
				<div className='col'>
					<Icon color='#8ac926' width='50' icon='bi:calendar-month-fill' />
				</div>
				<div className='small-text col-4'>
					Longest Month
					<br /> {resultArray[0][0]} {resultArray[0][2]}
				</div>
			</div>
			<div className='row mb-3 text-center'>
				<div className='small-text col-4'>
					Shortest Flight
					<br /> {shortFlight[0]} - {shortFlight[1]}
					<br /> {hoursMinutesConvert(shortFlight[2])}
				</div>
				<div className='col'>
					<Icon color='#ffca3a' width='50' icon='cil:airplane-mode' />
				</div>
				<div className='small-text col-4'>
					Longest Flight
					<br /> {longFlight[0]} - {longFlight[1]}
					<br /> {hoursMinutesConvert(longFlight[2])}
				</div>
			</div>
			<div className='row mb-3 text-center'>
				<div className='small-text col-4'>
					Shortest Layover
					<br /> {shortLayover[0]} {hoursMinutesConvert(shortLayover[1])}
				</div>
				<div className='col'>
					<Icon color='#4cc9f0' width='50' icon='ic:baseline-local-hotel' />
				</div>
				<div className='small-text col-4'>
					Longest Layover
					<br /> {longLayover[0]} {hoursMinutesConvert(longLayover[1])}
				</div>
			</div>

			<hr></hr>
			<p>
				On average I worked {hoursMinutesConvert(avg)} over {monthCount} months.{' '}
				<em>That's {compareMonthly}% of the hours required of a 9 to 5 job.</em>
			</p>
			{/* <Chart
				width={'100%'}
				height={'250px'}
				chartType='BarChart'
				loader={<div>Loading Chart</div>}
				data={[
					// Note the third column definition
					[
						'Tafb',
						'Layover',
						'Domestic Flying',
						'International Flying',
						'Lost Time',
					],

					[
						'TAFB',
						layoverHours,
						domPay,
						intlPay,
						tafb - (layoverHours + domPay + intlPay),
					],
				]}
				options={{
					title: 'My Time',
					isStacked: true,
					//chartArea: { width: '50%' },
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
