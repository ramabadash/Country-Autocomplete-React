import React, { useRef } from 'react';

function SearchBar(props) {
  const searchInput = useRef('');
  return (
    <input
      type='text'
      placeholder='country name..'
      ref={searchInput}
      value={props.pickedCountry}
      onChange={() => {
        props.onStringChange(searchInput.current.value ? searchInput.current.value : '');
      }}
      onClick={props.onSearchBarClick}
    />
  );
}

export default SearchBar;
