import React from 'react';
import {daysHoursMinutesConvert} from './utils/time-conversion'
import { hoursMinutesConvert } from './utils/time-conversion';
import Chart from 'react-google-charts';

function TimeAwayFromBase({rotations, list}){
    let tafb = 0;
    for (let value of rotations.values()) {
      tafb = tafb + value.dom_tafb + value.intl_tafb;
    }
     //create Map to get flight hours by month
  const result = new Map()
  list.forEach((item)=>{
    if (!result.has((item.dept_date).slice(2,5))){
      result.set((item.dept_date).slice(2,5), item.leg_block_time)
    } else{
      let count = result.get((item.dept_date).slice(2,5))
      result.set((item.dept_date).slice(2,5), count + item.leg_block_time)
    }
  })
  
  //sum of layover_time for all flight segments
  const layoverHours = list.reduce((acc, item) => {
    return acc + item.layover_time;
  }, 0);

   //WANT TO CONVERT TIME TO HH:MM
  // for (let [key,value] of result.entries()){
  //  result.set(key, hoursMinutesConvert(value))
  // }
  let resultArray = [...result]
 
  resultArray.forEach((item)=>{
    item.push(hoursMinutesConvert(item[1]))
  })
    
    return (
        <>
                <div className="col-6">
                    <table className="table">
                        <tbody>
                            <tr>
                            <th scope="row">Time Away From Base</th>
                            <td>
                            {daysHoursMinutesConvert(tafb)}
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">Layover Time</th>
                            <td>
                            {daysHoursMinutesConvert( layoverHours)}
                            </td>
                            </tr>
                        </tbody>
                    </table>

                    <Chart
            width={'500px'}
            height={'300px'}
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data={[
            // Note the third column definition
            ["Month", "Flight Block Time (minutes)", { role: "tooltip", type: "string"}],
           
            ...resultArray
          
            ]}
            options={{
              title: 'Monthly Flying',
              chartArea: {width: '50%'},
              // This must be also set to render the tooltip with html (vs svg)
              // tooltip: { isHtml: true, trigger: "visible" }
            }}
            rootProps={{ 'data-testid': '1' }}
          />
          
                </div>
           
           
            
     
        </>

    )
}
export default TimeAwayFromBase