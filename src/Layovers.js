import React from 'react';
import {Chart} from "react-google-charts"

function Layovers({ list }) {
  //use Map to count layovers by city
  let result = new Map();
  list.forEach((item) => {
    if (item.layover_stn !== '   ') {
      if (!result.has(item.layover_stn)) {
        result.set(item.layover_stn, 1);
      } else {
        let count = result.get(item.layover_stn);
        result.set(item.layover_stn, ++count);
      }
    }
  });

  // let layoverStns = [...result];
  // let layovers = layoverStns.map((item, index) => {
  //   return (
  //     <li key={index}>
  //       {item[0]} - {item[1]}
  //     </li>
  //   );
  // });

  return (
    <>
      <div className="card shadow m-3 w-100">
        <h4 className="card-header">My Layovers</h4>
       {/* <ul>{layovers}</ul> */}
      <div className="card-body">
        <div className="row">
        <div className="col">
        <Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[["Airport Code", "Number of Visits"],...result]}
  options={{
    title: 'My Layovers',
    // sliceVisibilityThreshold: 0.05, //5%
  }}
  rootProps={{ 'data-testid': '1' }}
/>
</div>
{/* <Chart
  width={'500px'}
  height={'300px'}
  chartType="GeoChart"
  data={[
    ['Country', 'Visits'],
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 600],
    ['RU', 700],
  ]}
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  mapsApiKey="YOUR_KEY_HERE"
  rootProps={{ 'data-testid': '1' }}
/> */}

<div className="col">
<Chart
  width={'500px'}
  height={'300px'}
  chartType="Bar"
  loader={<div>Loading Chart</div>}
  data={[
    ['Airport Code', 'Layovers'],
    ...result
  ]}
  options={{
    // Material design options
    chart: {
      title: 'My Layovers',
    },
  }}
  // For tests
  rootProps={{ 'data-testid': '2' }}
/>
</div>
</div>
</div>
    
      
      </div>
    </>
  );
}
export default Layovers;
