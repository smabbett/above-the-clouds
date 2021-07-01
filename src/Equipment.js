import React from 'react';

function Equipment({ list }) {
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
  let equipArray = [...result];
  let equipList = equipArray.map((item, index) => {
    return (
      <li key={index}>
        {item[0]} - {item[1]}
      </li>
    );
  });
  return (
    <div>
      <h1>Aircraft Flown</h1>
      <ul>{equipList}</ul>
    </div>
  );
}

export default Equipment;
