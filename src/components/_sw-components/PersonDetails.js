import ItemDetails, { Record } from '../ItemDetails';
import withSwapiService from '../_hoc-helpers/withSwapiService';
import withNavigateToBack from '../_hoc-helpers/withNavigateToBack';
import compose from '../_hoc-helpers/compose';

const PersonDetails = (props) => {
  return (
    <ItemDetails { ...props }>
      <Record field="gender" label="Gender"/>
      <Record field="birthYear" label="Birth year"/>
      <Record field="eyeColor" label="Eye color"/>
      <Record field="mass" label="Mass"/>
      <Record field="height" label="Height"/>
    </ItemDetails>
  )
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageURL: swapiService.getPersonImageURL
  }
}

export default compose(
  withSwapiService(mapMethodsToProps),
  withNavigateToBack()
)(PersonDetails);