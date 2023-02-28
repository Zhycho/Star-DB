import React from 'react';
import useNavigateByID from './useNavigateByID';

import { PeopleList } from '../_sw-components';

const PeoplePage = () => {
  const onListItemSelected = useNavigateByID();

  return (
    <PeopleList onListItemSelected={ onListItemSelected }/>
  )
}

export default PeoplePage;