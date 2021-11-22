import React from 'react';

function DropDown(props) {
  return (
    <div>
      <ul id='countries' style={{ display: props.isOpenList ? 'block' : 'none' }}>
        {props.countries.map(({ code, label, phone }) => (
          // TODO - replace with component
          <li id={label} key={label} onClick={props.pickCountry}>
            <img alt='fleg' src={`https://flagcdn.com/16x12/${code.toLowerCase()}.png`} />
            {code} {label} {phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDown;
