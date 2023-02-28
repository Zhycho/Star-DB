import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const ItemList = ({ data, onListItemSelected, children: renderLabel }) => {
  const items = data.map(( item ) => {
    const { id, name } = item;
    const label = renderLabel(item);

    return (
      <li 
        className="list-group-item"
        onClick={() => onListItemSelected(id)} 
        key={ name + id }> 
        { label } 
      </li>
    )
  })

  return (
    <ul className="item-list list-group">
      { items }
    </ul>
  );
}

ItemList.defaultProps = {
  onListItemSelected: () => {}
};

ItemList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  onListItemSelected: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired
};

export default ItemList;