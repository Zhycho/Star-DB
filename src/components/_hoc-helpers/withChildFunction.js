const withChildFunction = (fnc) => (Wrapped) => {
  return (props) => {
    return (
      <Wrapped { ...props }>
        { fnc }
      </Wrapped>
    )
  };
};

export default withChildFunction;