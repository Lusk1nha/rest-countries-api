import { CountriesRender } from '../components/CountriesRender';

import { RegionSelect } from '../components/RegionSelect';
import { SearchCountry } from '../components/SearchCountry';

import { useState } from 'react';

import { useCountry } from '../hooks/useCountry';

import '../styles/home.scss';

export function Home() {
  const {countries} = useCountry()
  const [region, setRegion] = useState('')
  const [selectedCountries, setSelectedCountries] = useState(countries)

  return (
    <main className="home">
      <form className="search-countries-container">
        <SearchCountry countries={{countries, setSelectedCountries}} region={region} />
        <RegionSelect countries={{countries, setSelectedCountries}} />
      </form>

      <CountriesRender countries={{countries, selectedCountries}} />
    </main>
  );
}