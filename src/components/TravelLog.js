import React from 'react';
import FlightPay from './FlightPay';
import Log from './Log';
import TimeAwayFromBase from './TimeAwayFromBase';
import Timeline from './Timeline';
import Equipment from './Equipment';
import Layovers from './Layovers';
import TripLength from './TripLength';
import './TravelLog.css';

export default function TravelLog({ rotations }) {
	//create array of flight segments
	let list = [];
	for (let value of rotations.values()) {
		list.push(...value.segments);
	}

	return (
		<div className='container-fluid'>
			<h2 className='mt-2'>
				My travel log in {rotations.keys().next().value.slice(5)}
			</h2>
			<Timeline rotations={rotations} />
			<div className='row'>
				<div className='col-md-3'>
					<TimeAwayFromBase rotations={rotations} list={list} />
					<hr></hr>
					<TripLength rotations={rotations} />
				</div>
				<div className='col-md-3 bordered'>
					<FlightPay rotations={rotations} />
					<hr></hr>
					<Equipment list={list} />
				</div>
				<div className='col-md-6'>
					<Log list={list} />
					<Layovers list={list} />
				</div>
			</div>
		</div>
	);
}
