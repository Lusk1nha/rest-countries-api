import { useEffect } from 'react';
import { useState } from 'react';
import searchIcon from '../assets/search.png';

export function SearchCountry(props) {
  const [value, setValue] = useState('')
  const {countries, setSelectedCountries} = props.countries
  const {region} = props


  useEffect(() => {
    for ( const key in countries ) {
      if (countries[key].name == value ) {
        return setSelectedCountries({state: countries[key]})
      }

      setSelectedCountries(countries)
    }
  }, [value])

  return (
    <section className="search-input-container">
      <img className="search-icon" src={searchIcon} alt="Search icon" />
      <input 
        className="search-input" 
        type="text" 
        placeholder={region != '' ? `Search for a country in ${region}...` : `Search for a country...`} 
        aria-label="Search for a country here" 
        onChange={event => setValue(event.target.value)}
        value={value}  
      />
    </section>
  );
}