import { configureStore } from '@reduxjs/toolkit';
import Sagareducer from '../Saga/Sagareducer';
import SagaWork from '../Saga/SagaWorks';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    Login: Sagareducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false
    }).concat(sagaMiddleware)
});
sagaMiddleware.run(SagaWork)