import React, { useState } from 'react';
import DropDown from './DropDown';
import SearchBar from './SearchBar';
import { countries } from '../countries';

function App() {
  const [countriesArr, setCountriesArr] = useState(countries);
  const [searchStr, setSearchStr] = useState('');
  const [pickedCountry, setPickedCountry] = useState('');
  const [isOpenList, setIsOpenList] = useState(false);

  //Show and Hide list
  const onSearchBarClick = () => {
    setIsOpenList((prevState) => !prevState);
  };

  //Update state of searchStr & pickedCountry by the search string
  const changeSearchStr = (str) => {
    setSearchStr(str); // Update input value by typing
    setPickedCountry(str); // Update country pick by typing
  };

  // Return filteres country array by country lebel
  const filterCountries = (str) => {
    str = str ? str.toLowerCase() : '';
    const filterArr = countriesArr.filter((country) => country.label.toLowerCase().includes(str));
    return filterArr;
  };
  // On country click
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
