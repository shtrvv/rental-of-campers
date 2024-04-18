import { createSlice } from '@reduxjs/toolkit';
import { getCampersThunk } from './advertsThunks';

const initialState = {
  items: [],
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
  extraReducers: builder => {
    builder
      .addCase(getCampersThunk.pending, handlePending)
      .addCase(getCampersThunk.fulfilled, handleFulfilled)
      .addCase(getCampersThunk.rejected, handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
