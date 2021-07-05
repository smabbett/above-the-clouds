import React from 'react';
import Chart from 'react-google-charts';

function TripLength({ rotations }) {
  let result = new Map();
  for (let [key, value] of rotations.entries()) {
    let startDate = new Date(key);

    let endDate = new Date(value.segments[value.segments.length - 1].dept_date);
    

    let tripDays =
     ( Math.round(endDate / (60 * 60 * 24 * 1000) - startDate / (60 * 60 * 24 * 1000) + 1)).toString()
      
    if (!result.has(tripDays)) {
      result.set(tripDays, 1);
    } else {
      let count = result.get(tripDays);
      result.set(tripDays, ++count);
    }
  }
  // let resultArray = [...result];
  // let tripLengths = resultArray.map((item, index) => {
  //   return (
  //     <li key={index}>
  //       {item[0]} Day - {item[1]}
  //     </li>
  //   );
  // });
  return (
    <div className="card shadow m-3">
      <h4 className="card-header">Trips by Length</h4>
      <div className="card-body">
      {/* <ul>{tripLengths}</ul> */}
     
  
      <Chart
  width={'100%'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Trip Length', 'Total Flown'],
    ...result
  ]}
  options={{
    title: 'My Trips',
    is3D: true,
  }}
  rootProps={{ 'data-testid': '1' }}
/>
    </div>
    </div>
  );
}
export default TripLength;
