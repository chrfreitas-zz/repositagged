import { all } from 'redux-saga/effects';
import repositoriesTakeActions from './repositories';
import repositoryTakeActions from './repository';

export default function* sagas() {
  yield all([
    ...repositoriesTakeActions,
    ...repositoryTakeActions,
  ]);
}
