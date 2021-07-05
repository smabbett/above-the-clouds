import React, { useState } from 'react';
import { parse } from 'papaparse';
import classNames from '../utils/class-names';
import formatRotations from '../utils/formatRotations';
import Layovers from '../Layovers';
import FlightPay from '../FlightPay';
import TripLength from '../TripLength';
import Equipment from '../Equipment';
import "./Dashboard.css"

import TimeAwayFromBase from '../TimeAwayFromBase';

export default function Dashboard() {
  const [highlighted, setHighlighted] = useState(false);
  const [rotations, setRotations] = useState([]);

  //create array of flight segments
  let list = [];
  for (let value of rotations.values()) {
    list.push(...value.segments)
  }
  console.log('list', list)
  
  if (rotations.size) {
    return (
      <>
        <h1 className="mt-4 text-center">
            Data for {rotations.keys().next().value} - {Array.from(rotations.keys()).pop()}
        </h1>
        <div className="card shadow my-3 w-100">
          <h4 className="card-header">My Time</h4>
          <div className="card-body">
            <div className="row">
              <TimeAwayFromBase rotations={rotations} list={list}/>
              <FlightPay rotations={rotations} />
            </div>
          </div>
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
