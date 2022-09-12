import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST,  SET_PRODUCT_LIST ,LOAD_MORE_DATA } from "./constant";

function* getProducts() {
  let data = yield fetch("https://api.coincap.io/v2/assets");
  data = yield data.json();
  //    now call to send the data to action
   
  yield put({
    type: SET_PRODUCT_LIST,
    data,
  });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
 
}

export default productSaga;
