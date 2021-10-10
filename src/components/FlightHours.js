import React from 'react';
import { daysHoursMinutesConvert } from '../utils/time-conversion';
import './FlightHours.css';

function FlightHours({ rotations }) {
	let flightHours = 0;
	let intlHours = 0;
	let domHours = 0;

	for (let value of rotations.values()) {
		flightHours = flightHours + value.flt_pay;
		intlHours = intlHours + value.intl_pay;
	}
	domHours = flightHours - intlHours;

	return (
		<>
			<p className='medium-text'>
				In {rotations.keys().next().value.slice(5)}, I spent
			</p>
			<div className='bkgd-airplane d-flex mx-auto align-items-center justify-content-center'>
				<div className='small-text circle d-flex flex-column'>
					{daysHoursMinutesConvert(flightHours)} inflight
				</div>
			</div>
			<div className='row mt-3'>
				<div className='col'>
					<h6>Domestic Flights</h6>
					<p className='small-text'> {daysHoursMinutesConvert(domHours)}</p>
				</div>
				<div className='col'>
					<h6>International Flights</h6>
					<p className='small-text'>{daysHoursMinutesConvert(intlHours)}</p>
				</div>
			</div>

			{/* 
		
			<Chart
				width={'100%'}
				height={'200px'}
				chartType='PieChart'
				loader={<div>Loading Chart</div>}
				data={[
					['Type of Flying', 'Hours', { role: 'tooltip', type: 'string' }],
					['International', intlPay, hoursMinutesConvert(intlPay)],
					['Domestic', domPay, hoursMinutesConvert(domPay)],
				]}
				options={{
					title: 'My Flying',
					is3D: true,
				}}
				rootProps={{ 'data-testid': '6' }}
			/> */}
		</>
	);
}
export default FlightHours;
