import { createSlice } from '@reduxjs/toolkit';
import { getCampersThunk } from './advertsThunks';

const initialState = {
  items: [],
  customers: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
  state.error = null;
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    setCustomer: (state, { payload }) => {
      state.customers.push(payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCampersThunk.pending, handlePending)
      .addCase(getCampersThunk.fulfilled, handleFulfilled)
      .addCase(getCampersThunk.rejected, handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
export const { setCustomer } = advertsSlice.actions;
