import { createStore, compose, applyMiddleware } from 'redux';
import combinedReducers from './CombinedReducers';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { rootSaga } from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combinedReducers,
  compose(applyMiddleware(sagaMiddleware, createLogger())),
);
sagaMiddleware.run(rootSaga);

export { store };
