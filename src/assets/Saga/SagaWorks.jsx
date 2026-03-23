
import LoginWork from './SagaLogin';
import { all } from 'redux-saga/effects';

export default function* SagaWork() {
  yield all([
    LoginWork()
  ]);
}