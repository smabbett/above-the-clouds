import React from 'react';
//import { useMediaQuery } from 'react-responsive';
import FlightPay from './FlightPay';
import Log from './Log';
import TimeAwayFromBase from './TimeAwayFromBase';
import Timeline from './Timeline';
import Equipment from './Equipment';
import Layovers from './Layovers';
import TripLength from './TripLength';
import './TravelLog.css';

export default function TravelLog({ rotations }) {
	// const isDesktopOrLaptop = useMediaQuery({
	// 	query: '(min-width:1224px)',
	// });
	//create array of flight segments
	let list = [];
	for (let value of rotations.values()) {
		list.push(...value.segments);
	}

	return (
		<>
			<h2 className='mt-4'>
				My travel log in {rotations.keys().next().value.slice(5)}
			</h2>
			{/* {isDesktopOrLaptop && <Timeline rotations={rotations} />} */}
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
		</>
	);
}
