import React from 'react';
import {Chart} from 'react-google-charts'

function Equipment({ list }) {
  //use Map to count equipment flown
  let result = new Map();
  list.forEach((item) => {
    if (item.equip !== '   ') {
      if (!result.has(item.equip)) {
        result.set(item.equip, 1);
      } else {
        let count = result.get(item.equip);
        result.set(item.equip, ++count);
      }
    }
  });

  return (
    <div className="card shadow m-3">
      <h4 className="card-header">Aircraft Flown</h4>
      <div className="card-body">
      {/* <ul>{equipList}</ul> */}

      <Chart
  width={'100%'}
  height={'100%'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Type of Aircraft', 'Flights'],
    ['320', result.get(320) + result.get("32K")],
    ['757', result.get(757) + result.get("75Y") + result.get("75D")],
    ['767', result.get("76Q") + result.get("76P") + result.get("76D")+ result.get("76L") + result.get("76Z")],
    ['330', result.get(333)+ result.get(332)],
    ['737', result.get(739)+ result.get(738)],
    ['319', result.get("31J") + result.get(319)],
    ['M90', result.get("M90")],
    ['777', result.get(777)],
    ['321', result.get(321)],
    ['Charter', result.get('75C')],
    ['220', result.get(221) + result.get(223)],
    ['717', result.get(717)],
    ['SkyWest', result.get('OO ')],
    
  ]}
  options={{
    title: 'My Aircraft',
    is3D: true,
  }}
  rootProps={{ 'data-testid': '1' }}
/>
</div>
    </div>
  );
}

export default Equipment;
