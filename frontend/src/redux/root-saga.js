import {all} from 'redux-saga/effects';

// import authSagas from './auth/saga';
// import ecommerceSaga from './ecommerce/saga';
// import userSagas from './user/saga';
import productSaga from './product/saga';

export default function* rootSaga(getState) {
  yield all([productSaga()]);
  // yield all([authSagas(), ecommerceSaga()]);
  // yield all([authSagas(), userSagas()]);
}
