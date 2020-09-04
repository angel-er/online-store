import {all, takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';

import {actions} from './actions';
import config from '../../config/site.config';

export function* getAllProducts() {
  const products = yield fetch(`${config.apiProduct}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });

  yield put({
    type: actions.INIT_PRODUCTS,
    products,
  });
}

export default function* () {
  yield all([takeEvery(actions.INIT_PRODUCTS_SAGA, getAllProducts)]);
}
