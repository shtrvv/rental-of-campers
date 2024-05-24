import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCampersApi, getAllCampersApi } from '../../api/api';

export const getCampersThunk = createAsyncThunk(
  'adverts/getCampers',
  async (page, { rejectWithValue }) => {
    try {
      return await getCampersApi(page);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllCampersThunk = createAsyncThunk(
  'adverts/getAllCampers',
  async (_, { rejectWithValue }) => {
    try {
      return await getAllCampersApi();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
