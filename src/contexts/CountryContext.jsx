import { createContext, useState, useEffect } from 'react';

import api from '../services/api';

export const CountryContext = createContext({})

export function CountryContextProvider(props) {
  const [countries, setCountries] = useState({})

  useEffect(() => {
    const value = '/all'

    api
      .get(value)
      .then((response) => {
        setCountries(response.data)
      })
      .catch((err) => console.error("A error was found " + err))
  }, [])

  return (
    <CountryContext.Provider value={{ countries, setCountries }}>
      {props.children}
    </CountryContext.Provider>
  );
}