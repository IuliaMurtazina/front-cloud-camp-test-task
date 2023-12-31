import { createSlice } from "@reduxjs/toolkit";

export const reducerPrefix = "ui";

// ACTIONS

// REDUCER

export const loadUsersStatus = {
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

const initialState = {
  currentStep: 1,
  isModalOpen: false,
  modalMessage: "",
};

const uiSlice = createSlice({
  name: reducerPrefix,
  initialState,
  reducers: {
    SET_STEP: (state, action) => {
      state.currentStep = action.payload;
    },
    SET_MODAL_OPEN: (state, action) => {
      state.isModalOpen = true;
      state.modalMessage = action.payload;
    },
    SET_MODAL_CLOSE: (state) => {
      state.isModalOpen = false;
    },
    CLEAR_UI_STATE: () => {
      return initialState;
    },
  },
});

export const { SET_STEP, SET_MODAL_OPEN, SET_MODAL_CLOSE, CLEAR_UI_STATE } =
  uiSlice.actions;
export default uiSlice.reducer;
