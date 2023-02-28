import { useRoutes } from 'react-router-dom';

import { PeoplePage, PlanetsPage, StarshipsPage } from '../components/_pages';
import { StarshipDetails, PersonDetails } from '../components/_sw-components';

const HOME_PAGE_EL = <h2>Welcome to Star DB. <br /> Here you can find information about people, planets and starships from the Star&nbsp;Wars universe.</h2>;
const PAGE_NOT_FOUND_EL = <h2>Page not found :( <br /> Try to type correct URL or use navigation.</h2>;

const Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: HOME_PAGE_EL
    },
    {
      path: '*',
      element: PAGE_NOT_FOUND_EL
    },
    {
      path: '/people',
      element: <PeoplePage />
    },
    {
      path: '/people/:id',
      element: <PersonDetails />
    },
    {
      path: '/starships',
      element: <StarshipsPage />
    },
    {
      path: '/starships/:id',
      element: <StarshipDetails />
    },
    {
      path: '/planets/:id?',
      element: <PlanetsPage />
    }
  ]);
}

export default Routes;