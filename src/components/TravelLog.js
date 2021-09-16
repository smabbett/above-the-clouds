import React from 'react';
import './log.css';
import Chart from 'react-google-charts';
import Log from './Log';

export default function TravelLog({ rotations }) {
	//create array of flight segments
	let list = [];
	for (let value of rotations.values()) {
		list.push(...value.segments);
	}
	//use Map to count layovers by city
	let result = new Map();
	list.forEach((item) => {
		if (item.layover_stn !== '   ') {
			if (!result.has(item.layover_stn + ' airport')) {
				result.set(item.layover_stn + ' airport', 1);
			} else {
				let count = result.get(item.layover_stn + ' airport');
				result.set(item.layover_stn + ' airport', ++count);
			}
		}
	});
	return (
		<div className='container'>
			<div className='item'>Hello</div>
			<div className='item'>Hello</div>
			<div className='item-double'>
				<div className='item'>
					<Log list={list} />
				</div>
				<div className='item'>Hello</div>
			</div>
		</div>
	);
}
