import React from 'react'
import Card from './Card';

const CardList = ({ data }) => {
    return (
      <div  className="cardbody ">
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    );
  };

export default CardList