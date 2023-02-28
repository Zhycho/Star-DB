import { Fragment } from 'react';
import NavigateToBack from '../NavigateToBack';

const withNavigateToBack = () => (Wrapped) => {
  return (props) => {
    return (
      <Fragment>
        <div className="mb-2">
          <NavigateToBack />
        </div>
        <Wrapped { ...props } />
      </Fragment>
    )
  }
}

export default withNavigateToBack;