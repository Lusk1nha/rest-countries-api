import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { CountryContextProvider } from './contexts/CountryContext';

import { Home } from './pages/Home';
import { Country } from './pages/Country';

import './styles/app.scss';

function App() {
  return (
    <>
      <header>
        <nav className="navbar">
          <h3 className="nav-title">Where in the world?</h3>
          <section className="theme-mode">Dark Mode</section>
        </nav>
      </header>

      <BrowserRouter>
        <CountryContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/country/:name" component={Country} />
          </Switch>
        </CountryContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
