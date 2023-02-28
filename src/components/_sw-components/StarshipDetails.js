import ItemDetails, { Record } from '../ItemDetails';
import withSwapiService from '../_hoc-helpers/withSwapiService';
import withNavigateToBack from '../_hoc-helpers/withNavigateToBack';
import compose from '../_hoc-helpers/compose';

const StarshipDetails = (props) => {
  return (
    <ItemDetails { ...props }>
      <Record field="model" label="Model"/>
      <Record field="starshipClass" label="Starship class"/>
      <Record field="passengers" label="Passengers"/>
      <Record field="maxAtmospheringSpeed" label="Max atmosphering speed"/>
      <Record field="costInCredits" label="Cost in credits"/>
      <Record field="hyperdriveRating" label="Hyperdrive rating"/>
      <Record field="costInCredits" label="Cost in credits"/>
    </ItemDetails>
  )
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageURL: swapiService.getStarshipImageURL
  }
}

export default compose(
  withSwapiService(mapMethodsToProps),
  withNavigateToBack()
)(StarshipDetails);