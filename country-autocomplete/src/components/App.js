import React, { useState } from 'react';
import DropDown from './DropDown';
import SearchBar from './SearchBar';
import { countries } from '../countries';

function App() {
  const [countriesArr, setCountriesArr] = useState(countries);
  const [searchStr, setSearchStr] = useState('');
  const [pickedCountry, setPickedCountry] = useState('');
  const [isOpenList, setIsOpenList] = useState(false);

  const onSearchBarClick = () => {
    setIsOpenList((prevState) => !prevState);
  };

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
    setIsOpenList((prevState) => !prevState);
  };

  return (
    <div>
      <h1>Country-Autocomplete</h1>
      <SearchBar onSearchBarClick={onSearchBarClick} pickedCountry={pickedCountry} onStringChange={changeSearchStr} />
      <DropDown isOpenList={isOpenList} pickCountry={pickCountry} countries={filterCountries(searchStr)} />
    </div>
  );
}

export default App;
