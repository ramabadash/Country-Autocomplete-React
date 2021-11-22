import React from 'react';

function DropDown(props) {
  return (
    <div>
      <select id='countries'>
        {props.countries.map(({ code, label, phone }) => (
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
