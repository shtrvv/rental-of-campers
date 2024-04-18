import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCampersApi } from '../../api/api';

export const getCampersThunk = createAsyncThunk(
  'adverts/getCampers',
  async (_, { rejectWithValue }) => {
    try {
      return await getCampersApi();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
