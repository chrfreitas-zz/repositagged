import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.scss';

const Table = ({ header, body }) => (
  <table className="table">
    <thead>
      <tr>
        {header.map(item => (
          <th key={item}>{item}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {body.map(item => (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>{item.language}</td>
          <td>{item.tags}</td>
          <td>
            <Link to={`${item.id}/update`}>
              edit
            </Link>
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
