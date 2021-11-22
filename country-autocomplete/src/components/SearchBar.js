import React, { useRef } from 'react';
import '../styles/SearchBar.css';

function SearchBar(props) {
  const searchInput = useRef('');
  const toggleBtn = useRef(null);

  return (
    <div>
      <input
        type='text'
        placeholder='country name..'
        ref={searchInput}
        value={props.pickedCountry}
        onChange={() => {
          props.onStringChange(searchInput.current.value ? searchInput.current.value : '');
        }}
        onClick={() => {
          props.onSearchBarClick();
          toggleBtn.current.classList.toggle('open');
        }}
      />
      <button
        onClick={() => {
          props.onStringChange('');
        }}
      >
        ❌
      </button>
      ></span>
      <span
        ref={toggleBtn}
        className='open close'
        onClick={() => {
          props.onSearchBarClick();
          toggleBtn.current.classList.toggle('open');
        }}
      ></span>
    </div>
  );
}

export default SearchBar;
