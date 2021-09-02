import api from '../services/api';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { useHistory } from 'react-router-dom';

import { BorderButton } from '../components/BorderButton';

import backArrow from '../assets/back-lg.png';
import '../styles/country.scss';

export function Country() {
  const history = useHistory()
  const params = useParams()
  const [country, setCountry] = useState({})
  const [borders, setBorders] = useState([])

  useEffect(() => {
    api
      .get(`/name/${params.name}`)
      .then(response => {
        setCountry(response.data[0])
        setBorders([])
        borderCountries(response.data[0].borders)
      })
  }, [params])

  const joinItens = obj => {
    if (obj) {
      const array = obj.map(element => {
        return element.name || element
      })

      return array.join(', ')
    }
  }

  const borderCountries = array => {
    if (array) {
      array.forEach(code => {
        api
          .get(`/alpha/${code}`)
          .then(response => {
            setBorders(borders => [...borders, response.data.name])
          })
      })
    }
  }

  return (
    <main id="country">
      <section className="button-container">
        <button onClick={() => history.push('/')}>
          <img src={backArrow} alt="Arrow to the left" />
          Back
        </button>
      </section>

      <main className="country-content">
        <aside className="flag-container">
          <img src={country.flag} alt={`Flag of ${country.name}`}/>
        </aside>

        <section className="country-infos">
          <h3 className="name">{country.name}</h3>

          <ul className="infos-container">
            <article>
              <li className="info">
                <strong>Native Name:</strong> {country.nativeName}
              </li>
              <li className="info">
                <strong>Population:</strong> {country.population}
              </li>
              <li className="info">
                <strong>Region:</strong> {country.region}
              </li>
              <li className="info">
                <strong>Sub Region:</strong> {country.subregion}
              </li>
              <li className="info">
                <strong>Capital:</strong> {country.capital}
              </li>
            </article>

            <article>
              <li className="info">
                <strong>Top Level Domain:</strong> {joinItens(country.topLevelDomain)}
              </li>
              <li className="info">
                <strong>Currencies:</strong> {joinItens(country.currencies)}
              </li>
              <li className="info">
                <strong>Languages:</strong> {joinItens(country.languages)}
              </li>
            </article>
          </ul>
          
          <section className="borders-container">          
            <h4>Borders Countries:</h4>

            <div>
              {borders.map((border, index) => {
                return <BorderButton key={index}>{border}</BorderButton>
              })}
            </div>
          </section>

        </section>
      </main>
    </main>
  );
}