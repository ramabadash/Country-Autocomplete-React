import React, { useState } from 'react';
import DropDown from './DropDown';
import SearchBar from './SearchBar';
import { countries } from '../countries';

function App() {
  const [countriesArr, SetCountriesArr] = useState(countries);
  return (
    <div>
      <h1>Country-Autocomplete</h1>
      <DropDown countries={countriesArr} />
    </div>
  );
}

export default App;
