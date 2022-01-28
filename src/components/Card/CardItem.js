import React from 'react';

import Card from './Card';

const CardItem = ({ item, linkPath }) => {
  const itemData = {
    name: '',
    url: item
  }

  return <Card item={itemData} linkPath={linkPath} />
}

export default CardItem;