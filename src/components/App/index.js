import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorBoundary from '../ErrorBoundary';
import { SwapiServiceProvider } from '../SwapiServiceContext';
import SwapiService from '../../services/SwapiService';
import Routes from '../../router';

import './index.css';

const App = () => {
  const swapiService = new SwapiService();

  return (
    <div className="container">
      <Router>
        <SwapiServiceProvider value={ swapiService }>
          <Header />
          <RandomPlanet />
    
          <ErrorBoundary>
            <Routes />
          </ErrorBoundary>
        </SwapiServiceProvider>
      </Router>
    </div>
  );
}

export default App;

