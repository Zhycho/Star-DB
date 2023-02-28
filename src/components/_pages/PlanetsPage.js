import React from 'react';
import useNavigateByID from './useNavigateByID';

import Row from '../Row'
import { PlanetsList, PlanetDetails } from '../_sw-components';

const PlanetsPage = () => {
  const onListItemSelected = useNavigateByID(`/planets/`);

  return (
    <Row 
      left={ <PlanetsList onListItemSelected={ onListItemSelected } /> }
      right= { <PlanetDetails /> }
    />
  )
}

export default PlanetsPage;