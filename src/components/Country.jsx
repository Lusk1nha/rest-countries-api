import '../styles/Country/country.scss';

import { useHistory } from 'react-router-dom';

export function Country(props) {
  const history = useHistory()
  const openCountry = () => history.push(`/country/${props.information.name}`)

  return (
    <section className="country-container" onClick={openCountry}>
      <aside className="flag-container">
        <img className="flag-image" src={props.information.flag} alt={`Flag by ${props.information.name}`} />
      </aside>

      <article className="info-container">
        <h3 className="name">{props.information.name}</h3>
      
        <ul className="country-infos">
          <li className="info"><strong>Population:</strong> {props.information.population}</li>
          <li className="info"><strong>Region:</strong> {props.information.region}</li>
          <li className="info"><strong>Capital:</strong> {props.information.capital}</li>
        </ul>
      </article>
    </section>
  );
}