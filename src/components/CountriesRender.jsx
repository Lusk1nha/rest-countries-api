import { Country } from './Country';

import '../styles/Countries-render/countries-render.scss';
import { useEffect, useState } from 'react';

export function CountriesRender(props) {
  const [value, setValue] = useState({})
  const {countries, selectedCountries} = props.countries
  
  useEffect(() => {
    setValue(countries)
  }, [countries, selectedCountries])

  return (
    <section className="countries-container">
      {Object.keys(value).map((index, key) => {
        return <Country information={value[index]} index={index} key={key} />
      })}
    </section>
  );
}