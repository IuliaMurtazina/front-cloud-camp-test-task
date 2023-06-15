import { createAction, createSlice } from "@reduxjs/toolkit";

export const reducerPrefix = "user";

// ACTIONS

export const sendUserInfo = createAction(`${reducerPrefix}/SEND_USER_INFO`);

// REDUCER

export const sendUserInfoStatus = {
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

const initialState = {
  userInfo: {},
  status: "",
};

const userSlice = createSlice({
  name: reducerPrefix,
  initialState,
  reducers: {
    ADD_USER_INFO: (state, action) => {
      state.userInfo = {
        ...state.userInfo,
        ...action.payload,
      };
    },
    SEND_USER_INFO_LOADING: (state) => {
      state.status = sendUserInfoStatus.LOADING;
    },
    SEND_USER_INFO_SUCCESS: (state, action) => {
      state.status = sendUserInfoStatus.SUCCESS;
      state.responce = action.payload;
    },
    SEND_USER_INFO_ERROR: (state, action) => {
      state.status = sendUserInfoStatus.ERROR;
      state.responce = action.payload;
    },
    CLEAR_USER_INFO: () => {
      return initialState;
    },
  },
});

export const {
  ADD_USER_INFO,
  SEND_USER_INFO_LOADING,
  SEND_USER_INFO_SUCCESS,
  SEND_USER_INFO_ERROR,
  CLEAR_USER_INFO,
} = userSlice.actions;
export default userSlice.reducer;

// SELECTORS

export const selectUserInfo = (state) => state.user.userInfo;
