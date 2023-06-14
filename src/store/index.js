import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import { configureStore } from "@reduxjs/toolkit";
import userReducer, {
  reducerPrefix as USERS_REDUCER_PREFIX,
} from "./reducers/user";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { [USERS_REDUCER_PREFIX]: userReducer },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export default store;
