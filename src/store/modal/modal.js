import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modals: {},
  stack: [],
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, { payload }) {
      const { name, data } = payload;
      state.modals[name] = { isOpen: true, data };
      state.stack.push(name);
    },
    closeModal(state, { payload }) {
      const { name } = payload;
      delete state.modals[name];
      state.stack = state.stack.filter(modalName => modalName !== name);
    },
    closeLastModal(state) {
      const name = state.stack[state.stack.length - 1];
      delete state.modals[name];
      state.stack.pop();
    },
    closeAllModals(state) {
      state.modals = {};
      state.stack = [];
    },
  },
});

export const { openModal, closeModal, closeLastModal, closeAllModals } =
  modalSlice.actions;
export const modalReducer = modalSlice.reducer;
