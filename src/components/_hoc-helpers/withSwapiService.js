import { SwapiServiceConsumer } from '../SwapiServiceContext';

const withSwapiService = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {
          (swapiService) => {
            const serviceProps = mapMethodsToProps(swapiService);

            return <Wrapped { ...props } { ...serviceProps }/>;
          }
        }
      </SwapiServiceConsumer>
    )
  }
}

export default withSwapiService;