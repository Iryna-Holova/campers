import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  values: {
    location: null,
    transmission: null,
    equipment: [],
    form: null,
  },
  isActive: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: INITIAL_STATE,
  reducers: {
    setFilter(state, { payload }) {
      state.values = payload;
      state.isActive = true;
    },
    setForm(state, { payload }) {
      state.values = { ...INITIAL_STATE.values, form: payload };
      state.isActive = true;
    },
    clearFilter() {
      return INITIAL_STATE;
    },
  },
});

export const { setFilter, clearFilter, setForm } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
