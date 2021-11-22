import React, { useState } from 'react';
import DropDown from './DropDown';
import SearchBar from './SearchBar';
import { countries } from '../countries';

function App() {
  const [countriesArr, setCountriesArr] = useState(countries);
  const [searchStr, setSearchStr] = useState('');
  const [pickedCountry, setPickedCountry] = useState('');

  const changeSearchStr = (str) => {
    setSearchStr(str); // Update input value by typing
    setPickedCountry(str); // Update country pick by typing
  };

  const filterCountries = (str) => {
    str = str ? str.toLowerCase() : '';
    const filterArr = countriesArr.filter((country) => country.label.toLowerCase().includes(str));
    return filterArr;
  };

  const pickCountry = (event) => {
    const countryName = event.target.closest('li').id;
    setPickedCountry(countryName);
  };

  return (
    <div>
      <h1>Country-Autocomplete</h1>
      <SearchBar pickedCountry={pickedCountry} onStringChange={changeSearchStr} />
      <DropDown pickCountry={pickCountry} countries={filterCountries(searchStr)} />
    </div>
  );
}

export default App;
