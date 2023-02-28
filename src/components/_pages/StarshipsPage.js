import React from 'react';
import useNavigateByID from './useNavigateByID';

import { StarshipsList } from '../_sw-components';

const StarshipsPage = () => {
  const onListItemSelected = useNavigateByID();

  return (
    <StarshipsList onListItemSelected={ onListItemSelected }/>
  )
}

export default StarshipsPage;
