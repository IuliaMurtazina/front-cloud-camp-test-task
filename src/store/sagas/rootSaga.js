import { all, spawn, call } from "redux-saga/effects";
import userInfoWatcher from "./user";

export default function* rootSaga() {
  const sagas = [userInfoWatcher];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      }),
    ),
  );
}
