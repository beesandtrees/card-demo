import React from 'react';

import './card-list.styles.css';

import Card from '../card/card';

const CardList = props => (
  <ul className="card-list">
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </ul>
);

export default CardList;
