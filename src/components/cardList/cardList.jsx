import React from 'react';

import './card-list.styles.css';

import Card from '../card/card';

const CardList = props => (
  <ul className="card-list">
    {props.data.map(d => (
      <Card key={d.id} data={d} />
    ))}
  </ul>
);

export default CardList;
