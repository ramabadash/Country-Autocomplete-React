import React, { useState } from 'react';
import DropDown from './DropDown';
import SearchBar from './SearchBar';
import { countries } from '../countries';

function App() {
  const [countriesArr, setCountriesArr] = useState(countries);
  const [searchStr, setSearchStr] = useState('');

  const changeSearchStr = (str) => {
    setSearchStr(str);
  };

  const filterCountries = (str) => {
    str = str.toLowerCase();
    const filterArr = countriesArr.filter((country) => country.label.toLowerCase().includes(str));
    return filterArr;
  };

  return (
    <div>
      <h1>Country-Autocomplete</h1>
      <SearchBar onStringChange={changeSearchStr} />
      <DropDown countries={filterCountries(searchStr)} />
    </div>
  );
}

export default App;
