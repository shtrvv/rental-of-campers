import { createSlice } from '@reduxjs/toolkit';
import {
  getCampersThunk,
  getAllCampersThunk,
} from './advertsThunks';

const LS = JSON.parse(localStorage.getItem('persist:favorites')) || [];

const initialState = {
  items: [],
  filter: {
    items: [],
    filtered: [],
  },
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

const handleFulfilledGet = (state, { payload }) => {
  state.isLoading = false;
  state.items = [...state.items, ...payload];
  state.error = null;
};

const handleFulfilledAll = (state, { payload }) => {
  state.isLoading = false;
  state.filter.items = payload;
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
      state.filter.filtered = payload;
    },
    resetFilteredCampers(state) {
      state.filter.filtered = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCampersThunk.fulfilled, handleFulfilledGet)
      .addCase(getAllCampersThunk.fulfilled, handleFulfilledAll)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
export const {
  setFavorites,
  deleteFavorite,
  setFilteredCampers,
  resetFilteredCampers,
} = advertsSlice.actions;
