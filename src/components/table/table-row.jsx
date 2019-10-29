import React from 'react';

import './table.styles.css';

const TableRow = props => {
  return (
    <>
      <tr className="row">
        {Object.keys(props.data).map((key, i) => {
          let classes = 'data';
          let value = props.data[key];
          if (key === 'assignment') {
            classes += ` td-status td-status-${props.data[
              key
            ].status.toLowerCase()}`;
            value = props.data[key].status;
          }
          if (key === 'watching') {
            value = props.data[key] ? '✔️' : '';
          }
          if (key === 'comments' || key === 'id') {
            return null;
          }
          return (
            <td className={classes} key={key}>
              {value}
            </td>
          );
        })}
      </tr>
    </>
  );
};

export default TableRow;
