import React, { useRef } from 'react';
import '../styles/SearchBar.css';

function SearchBar(props) {
  const searchInput = useRef('');
  const clearBtn = useRef(null);
  const toggleBtn = useRef(null);

  return (
    <div>
      <input
        type='text'
        placeholder='country name..'
        ref={searchInput}
        value={props.pickedCountry}
        onChange={() => {
          // clearBtn.current.classList.remove('clear');
          props.onStringChange(searchInput.current.value ? searchInput.current.value : '');
        }}
        onClick={() => {
          props.onSearchBarClick();
          toggleBtn.current.classList.toggle('open');
        }}
      />
      {/* Show or hide clear button depending on the input value */}
      {searchInput.current.value ? (
        <span
          className='clear'
          ref={clearBtn}
          onClick={() => {
            props.onStringChange('');
          }}
        ></span>
      ) : (
        ''
      )}
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
