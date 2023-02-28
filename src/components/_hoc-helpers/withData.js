import React, { Component } from 'react';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
      isLoading: true,
      isError: false
    }

    componentDidMount() {  
      this.props.getData()
      .then((data) => {
        this.setState({
          data,
          isLoading: false,
          isError: false
        })
      })
      .catch(() => {
        this.setState({
          isLoading: false,
          isError: true
        })
      })
    }

    render() {
      const { data, isLoading, isError } = this.state;

      if (isLoading) {
        return (
          <Spinner />
        );
      }

      if (isError) {
        return <ErrorIndicator />;
      }

      return <View { ...this.props } data={ data }/>
    }
  };
}

export default withData;