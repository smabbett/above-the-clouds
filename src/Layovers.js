import React from 'react';
import Equipment from './Equipment';

function Layovers({ rotations }) {
  let list = [];

  for (let value of rotations.values()) {
    list.push(...value.segments);
  }
  console.log('list', list);

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

  let layoverStns = [...result];
  let layovers = layoverStns.map((item, index) => {
    return (
      <li key={index}>
        {item[0]} - {item[1]}
      </li>
    );
  });

  return (
    <>
      <div>
        <h1>Your Layovers</h1>
        <ul>{layovers}</ul>
        <h1>Layover Hours</h1>
        <ul></ul>
        <Equipment list={list} />
      </div>
    </>
  );
}
export default Layovers;
