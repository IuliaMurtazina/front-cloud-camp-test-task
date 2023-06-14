import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import { configureStore } from "@reduxjs/toolkit";
import userReducer, {
  reducerPrefix as USERS_REDUCER_PREFIX,
} from "./reducers/user";
import uiReducer, { reducerPrefix as UI_REDUCER_PREFIX } from "./reducers/ui";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    [USERS_REDUCER_PREFIX]: userReducer,
    [UI_REDUCER_PREFIX]: uiReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export default store;
