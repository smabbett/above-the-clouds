import React, { useState } from 'react';
import { parse } from 'papaparse';
import classNames from '../utils/class-names';
import formatRotations from '../utils/formatRotations';
import timeConvert from '../utils/time-conversion';
import Layovers from '../Layovers';
import FlightPay from '../FlightPay';

export default function Dashboard() {
  const [highlighted, setHighlighted] = useState(false);
  const [rotations, setRotations] = useState([]);

  let tafb = 0;
  for (let value of rotations.values()) {
    tafb = tafb + value.dom_tafb + value.intl_tafb;
  }
  console.log('tafb', tafb);

  if (rotations.size) {
    return (
      <>
        <div>
          <p>
            Data for {rotations.keys().next().value} -
            {Array.from(rotations.keys()).pop()}
          </p>
          <h1>Days Away from Base</h1>
          <p>You spent {timeConvert(tafb)} away from base.</p>
        </div>
        <Layovers rotations={rotations} />
        <FlightPay rotations={rotations} />
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
