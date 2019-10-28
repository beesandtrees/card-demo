import React from 'react';

import './card.styles.css';

const status = ['unassigned', 'in progress', 'complete'];

const Image = ({ name, status, id }) => {
  const imgStr =
    status === 0
      ? 'https://via.placeholder.com/180'
      : `https://robohash.org/${id}?set=set2&size=180x180`;

  return <img alt={name} src={imgStr} />;
};

const Assignment = ({ email, name, status }) => {
  if (status === 0) {
    return <h2>Unassigned</h2>;
  }

  return (
    <>
      <h2>
        <span>Assigned to:</span> {name}
      </h2>
      <p>{email}</p>
    </>
  );
};

const Card = ({ monster }) => (
  <li className={`card-container card-status-${monster.status}`}>
    <span className="status">{status[monster.status]}</span>
    <span className="date">
      <span>Created:</span> {monster.created}
    </span>
    <Image name={monster.name} status={monster.status} id={monster.id} />
    <Assignment
      name={monster.name}
      email={monster.email}
      status={monster.status}
    />
  </li>
);

export default Card;
