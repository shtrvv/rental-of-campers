import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCampersApi } from '../../api/api';

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
