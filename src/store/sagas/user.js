import axios from "axios";
import { call, takeEvery, put, delay, select } from "redux-saga/effects";
import {
  SEND_USER_INFO_ERROR,
  SEND_USER_INFO_LOADING,
  SEND_USER_INFO_SUCCESS,
  selectUserInfo,
  sendUserInfo,
} from "../reducers/user";
import { SET_MODAL_OPEN } from "../reducers/ui";

// WORKERS

function* sendUserInfoWorker() {
  try {
    yield put(SEND_USER_INFO_LOADING());
    const userInfo = yield select(selectUserInfo);
    const { data } = yield call(() =>
      axios.post(
        `https://api.sbercloud.ru/content/v1/bootcamp/frofdgrsfntend`,
        userInfo,
      ),
    );
    yield delay(500);
    yield put(SEND_USER_INFO_SUCCESS());
    yield put(SET_MODAL_OPEN(data.message));
  } catch (err) {
    const errorMessage = err.message || "Не удалось отправить форму";
    yield put(SEND_USER_INFO_ERROR());
    yield put(SET_MODAL_OPEN(errorMessage));
  }
}

// WATCHER

export default function* userInfoWatcher() {
  yield takeEvery(sendUserInfo, sendUserInfoWorker);
}
