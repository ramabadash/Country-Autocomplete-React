import React from 'react';

function DropDown(props) {
  return (
    <div>
      <ul id='countries'>
        {props.countries.map(({ code, label, phone }) => (
          // TODO - replace with component
          <li key={label}>
            {code} {label} {phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDown;
