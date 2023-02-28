import ItemDetails, { Record } from '../ItemDetails';
import withSwapiService from '../_hoc-helpers/withSwapiService';

const PlanetDetails = (props) => {
  return (
    <ItemDetails { ...props }>
      <Record field="population" label="Population"/>
      <Record field="rotationPeriod" label="Rotation period"/>
      <Record field="diameter" label="Diameter"/>
    </ItemDetails>
  )
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageURL: swapiService.getPlanetImageURL
  }
}


export default withSwapiService(mapMethodsToProps)(PlanetDetails);