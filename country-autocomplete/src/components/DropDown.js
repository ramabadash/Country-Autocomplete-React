import React from 'react';
import { countries } from '../countries';

function DropDown() {
  return (
    <div>
      <select id='countries'>
        {countries.map(({ code, label, phone }) => (
          // TODO - replace with component
          <option value={label} key={label}>
            {code} {label} {phone}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;
