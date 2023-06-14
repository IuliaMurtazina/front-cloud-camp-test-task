import { createAction, createSlice, current } from "@reduxjs/toolkit";

export const reducerPrefix = "user";

// ACTIONS

export const sendUserInfo = createAction(`${reducerPrefix}/SEND_USER_INFO`);

// REDUCER

export const loadUsersStatus = {
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

const initialState = {
  userInfo: {},
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
      console.log(current(state));
    },
  },
});

export const { ADD_USER_INFO } = userSlice.actions;
export default userSlice.reducer;
