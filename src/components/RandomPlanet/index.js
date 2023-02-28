import { Fragment, useEffect, useState } from 'react';

import withSwapiService from '../_hoc-helpers/withSwapiService';

import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

import './index.css';

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <Fragment>
      <img className="planet-image"
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
            alt={ name }
            onError={ (e) => e.target.style.display = 'none' }
            onLoad={ (e) => e.target.style.display = 'block' }
      />
      <div>
        <h4> { name } </h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population: </span>
            <span> { population } </span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period: </span>
            <span> { rotationPeriod } </span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter: </span>
            <span> { diameter } </span>
          </li>
        </ul>
      </div>
    </Fragment>
  )
}

const RandomPlanet = ({ getData }) => {
  const [planet, setPlanet] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const onPlanetLoaded = (planet) => {
    setPlanet(planet);
    setIsLoading(false);
  }

  const onError = () => {
    setIsError(true);
    setIsLoading(false);
  }

  useEffect(() => {
    const updatePlanet = () => {
      const id = Math.floor(Math.random() * 10) + 1;
  
      getData(id)
        .then(onPlanetLoaded)
        .catch(onError);
    }
    
    updatePlanet();
    const interval = setInterval(updatePlanet, 5000)
    return () => {
      clearInterval(interval);
    }
    // eslint-disable-next-line
  }, [])

  let componentToShow; 

  if (isLoading) {
    componentToShow = <Spinner />;
  } else if (isError) {
    componentToShow = <ErrorIndicator />;
  } else {
    componentToShow = <PlanetView planet={ planet }/>;
  }

  return (
    <div className="random-planet rounded">
      { componentToShow }
    </div>
  );
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet
  }
}

export default withSwapiService(mapMethodsToProps)(RandomPlanet);