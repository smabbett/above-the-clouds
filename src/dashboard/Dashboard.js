import React, { useState } from 'react';
import { parse } from 'papaparse';
import classNames from '../utils/class-names';
import formatRotations from '../utils/formatRotations';
import timeConvert from '../utils/time-conversion';
import Layovers from '../Layovers';
import FlightPay from '../FlightPay';
import TripLength from '../TripLength';
import Equipment from '../Equipment';

export default function Dashboard() {
  const [highlighted, setHighlighted] = useState(false);
  const [rotations, setRotations] = useState([]);

  let tafb = 0;
  for (let value of rotations.values()) {
    tafb = tafb + value.dom_tafb + value.intl_tafb;
  }

    //create array of flight segments
    let list = [];
    for (let value of rotations.values()) {
      list.push(...value.segments);
    }

   //sum of layover_time for all flight segments
   const layoverHours = list.reduce((acc, item) => {
    return acc + item.layover_time;
  }, 0);
  let hours = timeConvert(layoverHours);

  if (rotations.size) {
    return (
      <>
        <h1 className="mt-4 text-center">
            Data for {rotations.keys().next().value} - {Array.from(rotations.keys()).pop()}
          </h1>
      <div className="card-deck">
        <div className="card shadow m-4">
        <h2 className="card-header">My Time</h2>
          <div className="card-body">
          <p className="card-text">You spent {timeConvert(tafb)} away from base.</p>
         
        <p className="card-text">You spent {hours} on a layover.</p>
          </div>
        </div>
        <FlightPay rotations={rotations} />
       
        </div>
        <div className="row">
          <Layovers list={list} />
         
        </div>
        <div className="card-deck">
        <TripLength rotations={rotations} />
        <Equipment list={list} />
        </div>
      </>
    );
  } else {
    return (
      <div className="card">
        <h1 className="card-header">File Upload</h1>

        <div
          className={classNames({
            'card-body': true,
            'border border-success bg-success': highlighted,
            'border border-dark': !highlighted,
          })}
          onDragEnter={() => {
            setHighlighted(true);
          }}
          onDragLeave={() => {
            setHighlighted(false);
          }}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(e) => {
            e.preventDefault();
            setHighlighted(false);

            Array.from(e.dataTransfer.files)
              .filter((file) => file.type === 'text/csv')
              .forEach(async (file) => {
                const text = await file.text();
                const result = parse(text, {
                  skipEmptyLines: true,
                  dynamicTyping: true,
                  header: true,
                  transformHeader: (header) =>
                    header
                      .replace('#', 'num')
                      .replaceAll(' ', '_')
                      .toLowerCase(),
                });
                const rotationsMap = formatRotations([...result.data]);
                console.log('rotationsMap', rotationsMap);
                setRotations(rotationsMap);
              });
          }}
        >
          DROP HERE
        </div>
      </div>
    );
  }
}
