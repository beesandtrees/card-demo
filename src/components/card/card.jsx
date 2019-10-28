import React from 'react';

import './card.styles.css';

const Card = ({ monster }) => (
  <li className="card-container">
    <img
      alt={monster.name}
      src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
    />
    <h2>{monster.name}</h2>
    <hr />
    <p>{monster.email}</p>
  </li>
);

export default Card;
