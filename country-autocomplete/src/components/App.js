import React, { useState } from 'react';
import DropDown from './DropDown';
import SearchBar from './SearchBar';
import { countries } from '../countries';

function App() {
  const [countriesArr, SetCountriesArr] = useState(countries);

  const filterCountries = (str) => {
    str = str.toLowerCase();
    const filterArr = countriesArr.filter((country) => country.label.toLowerCase().includes(str));
    return filterArr;
  };
  return (
    <div>
      <h1>Country-Autocomplete</h1>
      <SearchBar />
      <DropDown countries={filterCountries('')} />
    </div>
  );
}

export default App;
