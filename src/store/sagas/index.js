import { all } from "redux-saga/effects";

import globalSaga from "./global";

export default function*() {
  yield all([globalSaga()]);
}
