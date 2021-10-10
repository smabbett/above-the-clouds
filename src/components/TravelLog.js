import React from 'react';
import { useMediaQuery } from 'react-responsive';
import FlightHours from './FlightHours';
import Log from './Log';
import TimeAwayFromBase from './TimeAwayFromBase';
import Timeline from './Timeline';
import Equipment from './Equipment';
import Layovers from './Layovers';
import TripLength from './TripLength';
import './TravelLog.css';

export default function TravelLog({ rotations }) {
	const isSmallScreen = useMediaQuery({
		query: '(max-width:576px)',
	});

	//create array of flight segments
	let list = [];
	for (let value of rotations.values()) {
		list.push(...value.segments);
	}

	return (
		<div className='container-fluid'>
			<h2 className='mt-4'>
				My flights {rotations.keys().next().value.slice(5)}
			</h2>
			{/* {isDesktopOrLaptop && <Timeline rotations={rotations} />} */}
			<Timeline rotations={rotations} />
			<div id='share-canvas' className='row'>
				<div className='col-md-3'>
					<TimeAwayFromBase rotations={rotations} list={list} />
					<hr></hr>
					<TripLength rotations={rotations} />
					{isSmallScreen && <hr></hr>}
				</div>
				<div className='col-md-3 bordered'>
					<FlightHours rotations={rotations} />
					<hr></hr>
					<Equipment list={list} />
					{isSmallScreen && <hr></hr>}
				</div>
				<div className='col-md-6'>
					<Log list={list} />
					<Layovers list={list} />
				</div>
			</div>
		</div>
	);
}
