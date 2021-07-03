import React from 'react';
import timeConvert from './utils/time-conversion';
import {Chart} from "react-google-charts"

function FlightPay({ rotations }) {
  let flightPay = 0;
  let intlPay = 0;
  let domPay = 0;
  
  for (let value of rotations.values()) {
    flightPay = flightPay + value.flt_pay;
    intlPay = intlPay + value.intl_pay;
  }
  domPay = flightPay - intlPay;
  
  const avg = flightPay/12
  const flightHours = Math.floor(avg/60)
  const flightMinutes = Math.round(avg % 60)
  return (
    <div className="card shadow m-4">
      <h2 className="card-header">My Flying</h2>
      <div className="card-body">
        <table className="table">
          <tbody>
          <tr>
            <th scope="row">Domestic</th>
            <td>
          {timeConvert(domPay)}
        {/* {Math.round((domPay / flightPay) * 100)}% */}
            </td>
          </tr>
          <tr>
            <th scope="row">International</th>
            <td>
            {timeConvert(intlPay)}
        {/* {Math.round((intlPay / flightPay) * 100)}% */}
            </td>
          </tr>
          <tr>
            <th scope="row">Total</th>
            <td>
            {timeConvert(flightPay)} 
            </td>
          </tr>
          <tr>
            <th scope="row">Monthly Average</th>
            <td>
              {flightHours}: {flightMinutes}
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
    ['Type of Flying', 'Hours'],
    ['International', intlPay],
    ['Domestic', domPay],
    
  ]}
  options={{
    title: 'My Flying',
  }}
  rootProps={{ 'data-testid': '1' }}
/>
</div>
    </div>
  );
}
export default FlightPay;
