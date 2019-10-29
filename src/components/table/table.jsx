import React from 'react';

import './table.styles.css';

import TableRow from './table-row';

const Table = props => (
  <table>
    <thead>
      <tr className="row1">
        <td>id</td>
        <td>tail no</td>
        <td>Status</td>
        <td>Progress</td>
        <td>Location</td>
        <td>Company</td>
        <td>Issue</td>
        <td>Watching</td>
        <td>Estimate</td>
      </tr>
    </thead>
    <tbody>
      {props.data.map(d => (
        <TableRow key={d.id} data={d} />
      ))}
    </tbody>
  </table>
);

export default Table;
