import React from 'react';
import { daysHoursMinutesConvert } from './utils/time-conversion';
import { Chart } from 'react-google-charts';
import { hoursMinutesConvert } from './utils/time-conversion';

function FlightPay({ rotations }) {
	let flightPay = 0;
	let intlPay = 0;
	let domPay = 0;

	for (let value of rotations.values()) {
		flightPay = flightPay + value.flt_pay;
		intlPay = intlPay + value.intl_pay;
	}
	domPay = flightPay - intlPay;

	return (
		<>
			<div className='col-md-6'>
				{/* <div className="card shadow m-3"> */}
				{/* <h4 className="card-header">My Flying</h4> */}
				{/* <div className="card-body"> */}
				<table className='table table-hover'>
					<tbody>
						<tr>
							<th scope='row'>First Rotation Date</th>
							<td>{rotations.keys().next().value}</td>
						</tr>
						<tr>
							<th scope='row'>Last Rotation Date</th>
							<td>{Array.from(rotations.keys()).pop()}</td>
						</tr>
						<tr>
							<th scope='row'>Domestic Flying</th>
							<td>
								{daysHoursMinutesConvert(domPay)} ({domPay} minutes)
								{/* {Math.round((domPay / flightPay) * 100)}% */}
							</td>
						</tr>
						<tr>
							<th scope='row'>International Flying</th>
							<td>
								{daysHoursMinutesConvert(intlPay)} ({intlPay} minutes)
								{/* {Math.round((intlPay / flightPay) * 100)}% */}
							</td>
						</tr>
						<tr>
							<th scope='row'>Total</th>
							<td>
								{daysHoursMinutesConvert(flightPay)} ({flightPay} minutes)
							</td>
						</tr>
					</tbody>
				</table>

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
					rootProps={{ 'data-testid': '1' }}
				/>
			</div>
		</>
	);
}
export default FlightPay;
