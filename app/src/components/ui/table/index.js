import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import './index.scss';

const Table = ({ header, body, onClick }) => (
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
            <Button onClick={() => onClick(item)}>edit</Button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

Table.propTypes = {
  header: PropTypes.array.isRequired,
  body: PropTypes.array.isRequired,
  onClick: PropTypes.func,
};

Table.defaultProps = {
  onClick: () => {},
};

export default Table;
