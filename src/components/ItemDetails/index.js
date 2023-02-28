import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Spinner from '../Spinner';

import './index.css';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{ label }: </span>
      <span>{ item[field] }</span>
    </li>
  )
}

const ItemDetails = ({ getData, getImageURL, children }) => {
  const [item, setItem] = useState({ id: null });
  const [imageURL, setImageURL] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id: itemId } = useParams();

  const updateItem = () => {
    if (!itemId) {
      return;
    }

    setIsLoading(true)

    getData(itemId)
      .then((item) => {
        setItem(item)
        setImageURL(getImageURL(itemId))
      })
      .finally(() => {
        setIsLoading(false);
      })
  }


  useEffect(updateItem, [itemId])

  if (itemId === undefined) {
    return <p>Select an item from the list.</p>
  } else if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="item-details card">
      <img 
        className="item-image"
        src={ imageURL } 
        alt={ item.name }
        onError={ (e) => e.target.style.display = 'none' }
      />
      <div className="card-body">
        <h4>{ item.name }</h4>
        <ul className="list-group list-group-flush">
          { 
            React.Children.map(children, (children) => {
              return React.cloneElement(children, { item });
            })
          }
        </ul>
      </div>
    </div>
  )
}

export {
  Record
};

export default ItemDetails;
