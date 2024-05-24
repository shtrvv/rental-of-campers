import { createSlice } from '@reduxjs/toolkit';
import { getCampersThunk, getAllCampersThunk } from './advertsThunks';

const LS = JSON.parse(localStorage.getItem('persist:favorites')) || [];

const initialState = {
  items: [],
  filteredItems: [],
  isLoading: false,
  error: null,
  favorites: LS,
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
  state.items = [...state.items, ...payload];
  state.error = null;
};

const handleAllFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.items = [...state.items, ...payload];
  state.error = null;
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    setFavorites(state, { payload }) {
      state.favorites.push(payload);
    },
    deleteFavorite(state, { payload }) {
      state.favorites = state.favorites.filter(item => item._id !== payload);
    },
    setFilteredCampers(state, { payload }) {
      state.filteredItems = [...payload];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCampersThunk.pending, handlePending)
      .addCase(getCampersThunk.fulfilled, handleFulfilled)
      .addCase(getCampersThunk.rejected, handleRejected)
      .addCase(getAllCampersThunk.pending, handlePending)
      .addCase(getAllCampersThunk.fulfilled, handleAllFulfilled)
      .addCase(getAllCampersThunk.rejected, handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
export const { setFavorites, deleteFavorite, setFilteredCampers } =
  advertsSlice.actions;
