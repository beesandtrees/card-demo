import React from 'react';

import './card.styles.css';

const status = ['unassigned', 'in progress', 'complete'];

const Card = ({ monster }) => (
  <li className={`card-container card-status-${monster.status}`}>
    <span className="status">{status[monster.status]}</span>
    <span className="date">
      <span>Created:</span> {monster.created}
    </span>
    <img
      alt={monster.name}
      src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
    />
    <h2>{monster.name}</h2>
    <p>{monster.email}</p>
  </li>
);

export default Card;
