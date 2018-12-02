import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Table = ({ header, body }) => (
  <table className="table">
    <thead>
      <tr>
        {header.map(item => (
          <th>{item}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {body.map(item => (
        <tr>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>{item.language}</td>
          <td>{item.tags}</td>
          <td>
            <a href="/test">edit</a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

Table.propTypes = {
  header: PropTypes.array.isRequired,
  body: PropTypes.array.isRequired,
};

export default Table;
