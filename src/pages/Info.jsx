import api from '../services/api';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { useHistory } from 'react-router-dom';

export function Info() {
  const history = useHistory()
  const params = useParams()
  const [country, setCountry] = useState({})

  useEffect(() => {
    api
      .get(`/name/${params.name}`)
      .then(response => {
        setCountry(response.data[0])
      })
  }, [])

  
  return (
    <main>
      <button onClick={() => history.push('/')}>Back here</button>
      <h4>{country.name}</h4>
    </main>
  );
}