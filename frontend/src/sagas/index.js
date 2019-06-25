import { all } from 'redux-saga/effects'

export function * combineSagas (sagas) {
  yield all(sagas.flat())
}

export default {}
