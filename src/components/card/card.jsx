import React from 'react';

import './card.styles.css';

const Details = ({ description, status }) => {
  if (status === 0) {
    return <h2>Unassigned</h2>;
  }

  return <p>{description}</p>;
};

const Card = ({ data }) => (
  <li
    className={`card-container card-status-${data.assignment.status.toLowerCase()}`}
  >
    <span className="status">
      <span>{data.assignment.status.toLowerCase()}</span>
      <span>{data.location}</span>
    </span>
    <h2>{data.tail_no}</h2>
    <span>Avg work time: {data.work_time}</span>
    <hr />
    <Details description={data.description} status={data.status} />
    {data.watching && (
      <div className="watching">
        <span role="image" aria-label="watching">
          👁️
        </span>
      </div>
    )}
  </li>
);

export default Card;
