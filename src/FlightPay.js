import React from 'react';
import {daysHoursMinutesConvert} from './utils/time-conversion';
import {Chart} from "react-google-charts"
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
  
  const avg = hoursMinutesConvert(flightPay/12)
  // const flightHours = Math.floor(avg/60)
  // const flightMinutes = Math.round(avg % 60)
  
  return (
    <>
    <div className="col-6">
    {/* <div className="card shadow m-3"> */}
      {/* <h4 className="card-header">My Flying</h4> */}
      {/* <div className="card-body"> */}
        <table className="table">
          <tbody>
          <tr>
            <th scope="row">Domestic Flying</th>
            <td>
          {daysHoursMinutesConvert(domPay)}
        {/* {Math.round((domPay / flightPay) * 100)}% */}
            </td>
          </tr>
          <tr>
            <th scope="row">International Flying</th>
            <td>
            {daysHoursMinutesConvert(intlPay)}
        {/* {Math.round((intlPay / flightPay) * 100)}% */}
            </td>
          </tr>
          <tr>
            <th scope="row">Total</th>
            <td>
            {daysHoursMinutesConvert(flightPay)} 
            </td>
          </tr>
          <tr>
            <th scope="row">Monthly Average</th>
            <td>
              {avg}
            </td>
          </tr>
          </tbody>
        </table>
        
      <Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Type of Flying', 'Hours',{ role: "tooltip", type: "string"}],
    ['International', intlPay, hoursMinutesConvert(intlPay)],
    ['Domestic', domPay, hoursMinutesConvert(domPay)],
    
  ]}
  options={{
    title: 'My Flying',
  }}
  rootProps={{ 'data-testid': '1' }}
/>
</div>
</>

   
  );
}
export default FlightPay;
