import axios from "axios";
import { call, takeEvery, put } from "redux-saga/effects";
import { sendUserInfo } from "../reducers/user";

// WORKERS

function* sendUserInfoWorker({ payload }) {
  try {
    // const { data } = yield call(() => axios.get(``));
  } catch (err) {}
}

// WATCHER

export default function* commentsWatcher() {
  yield takeEvery(sendUserInfo, sendUserInfoWorker);
}
