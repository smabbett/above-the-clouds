import React from 'react';
import TimeAwayFromBase from './TimeAwayFromBase';
import FlightPay from './FlightPay';
import TripLength from './TripLength';
import Equipment from './Equipment';
import Layovers from './Layovers';
import ShareComponent from './ShareComponent';
import Pdf from 'react-to-pdf';

export default function Home({ rotations }) {
	//create array of flight segments
	let list = [];
	for (let value of rotations.values()) {
		list.push(...value.segments);
	}

	const ref = React.createRef();

	if (rotations.size) {
		let year = rotations.keys().next().value;
		return (
			<>
				<div className='row'>
					<div className='col text-right'>
						<ShareComponent />
						<Pdf
							targetRef={ref}
							filename={`MyTravelLog${year.slice(5)}.pdf`}
							scale={0.8}
							options={{ orientation: 'landscape' }}
						>
							{({ toPdf }) => (
								<button
									className='btn btn-danger rounded-circle m-2'
									style={{ width: '45px', height: '45px' }}
									onClick={toPdf}
								>
									<span className='oi oi-data-transfer-download'></span>
								</button>
							)}
						</Pdf>
					</div>
				</div>
				<div ref={ref}>
					<div className='row'>
						<div className='col-md-8 mb-1'>
							<div className='card shadow h-100'>
								<h4 className='card-header'>My Time</h4>
								<div className='card-body'>
									<div className='row'>
										<TimeAwayFromBase rotations={rotations} list={list} />
										<FlightPay rotations={rotations} />
									</div>
								</div>
							</div>
						</div>
						<div className='col-md-4'>
							<TripLength rotations={rotations} />
							<Equipment list={list} />
						</div>
					</div>
					<div className='row'>
						<Layovers list={list} />
					</div>
				</div>
			</>
		);
	}
}
