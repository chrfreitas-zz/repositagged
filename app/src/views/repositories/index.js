import React, { Fragment } from 'react';
import Progressbar from '../../components/progressbar';
import Input from '../../components/ui/input';
import Table from '../../components/ui/table';
import './index.scss';

const isLoading = false;

const header = ['Repository', 'Description', 'Language', 'Tags', ''];

const repositories = [
  {
    id: 1,
    name: 'kubernetes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, nihil.s',
    language: 'go',
    tag: '',
  },
  {
    id: 2,
    name: 'django',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, nihil.s',
    language: 'python',
    tag: '',
  },
  {
    id: 3,
    name: 'jest',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, nihil.s',
    language: 'javascript',
    tag: '',
  },
];

const Repositories = () => (
  <Fragment>
    {isLoading && (
      <Progressbar text="Getting the repositories list from Github" />
    )}
    <div className="repositories">
      <div className="repositories__row">
        <Input placeholder="search by tag" className="input input--medium" />
      </div>
      <div className="repositories__row">
        <Table header={header} body={repositories} />
      </div>
    </div>
  </Fragment>
);

export default Repositories;
