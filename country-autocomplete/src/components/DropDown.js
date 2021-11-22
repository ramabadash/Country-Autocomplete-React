import React from 'react';

function DropDown(props) {
  return (
    <div>
      <ul id='countries'>
        {props.countries.map(({ code, label, phone }) => (
          // TODO - replace with component
          <li value={label} key={label}>
            <img alt='fleg' src={`https://flagcdn.com/16x12/${code.toLowerCase()}.png`} />
            {code} {label} {phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDown;
