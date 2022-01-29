import React, { useEffect, useState } from 'react';

import Card from './Card';
import Error from '../Error/Error';
import SearchBox from '../Search/SearchBox';

const CardList = (props) => {
  const {
    data,
    dataType,
    dataSource,
    error
  } = props;
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!data.length) dataSource();
  }, [data]);

  const onSearchChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const renderCards = (cardData, linkPath) => {
    const filteredData = cardData.filter(item => {
      const { name, title } = item;

      if (name) {
        if (name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return item;
        }
      } else {
        if (title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return item;
        }
      }
    });

    return filteredData.map(item => <Card item={item} linkPath={linkPath} key={item.name} />);
  }

  if (error.message) return <Error message={error.message} redirect={dataType} />
  if (!data.length) return null;

  return (
    <div className="">
      <SearchBox search={dataType} onSearchChange={(e) => onSearchChange(e)} />
      <div className={`tc white flex justify-around vehicles card-list`}>
        {renderCards(data, dataType)}
      </div>
    </div>

  );
}

export default CardList;