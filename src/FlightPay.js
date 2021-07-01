import React from 'react';
import timeConvert from './utils/time-conversion';

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
    <div>
      <p>
        Domestic Flight Hours: {timeConvert(domPay)}{' '}
        {Math.round((domPay / flightPay) * 100)}%
      </p>
      <p>
        International Flight Hours: {timeConvert(intlPay)}{' '}
        {Math.round((intlPay / flightPay) * 100)}%
      </p>
      <p>Total Flight Hours: {timeConvert(flightPay)}</p>
    </div>
  );
}
export default FlightPay;
