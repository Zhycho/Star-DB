import ItemList from '../ItemList';
import withData from '../_hoc-helpers/withData';
import withChildFunction from '../_hoc-helpers/withChildFunction';
import withSwapiService from '../_hoc-helpers/withSwapiService';
import compose from '../_hoc-helpers/compose';

const renderName = (i) => i.name;
const renderNameWithDiameter = (i) => `${i.name} (diam. ${i.diameter})`;
const renderNameWithModel = (i) => `${i.name} (${i.starshipClass})`;

const mapPeopleMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
}

const mapPlanetsMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
}

const mapStarshipsMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
}

const PeopleList = compose(
                        withSwapiService(mapPeopleMethodsToProps),
                        withData,
                        withChildFunction(renderName)
                    )(ItemList);
const PlanetsList = compose(
                        withSwapiService(mapPlanetsMethodsToProps),
                        withData,
                        withChildFunction(renderNameWithDiameter)
                    )(ItemList);
const StarshipsList = compose(
                        withSwapiService(mapStarshipsMethodsToProps),
                        withData,
                        withChildFunction(renderNameWithModel)
                    )(ItemList);

export {
  PeopleList,
  PlanetsList,
  StarshipsList
}