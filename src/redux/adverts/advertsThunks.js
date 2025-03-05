import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCampersApi, getAllCampersApi } from '../../api/api';

export const getCampersThunk = createAsyncThunk(
  'adverts/getCampers',
  async (page, { rejectWithValue }) => {
    try {
      console.log(`[THUNK] Fetching campers for page: ${page}`);
      const data = await getCampersApi(page);
      console.log('[THUNK] Fetched campers:', data);
      return data;
    } catch (error) {
      console.error('[THUNK ERROR] getCampersThunk:', error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const getAllCampersThunk = createAsyncThunk(
  'adverts/getAllCampers',
  async (_, { rejectWithValue }) => {
    try {
      console.log('[THUNK] Fetching all campers');
      const data = await getAllCampersApi();
      console.log('[THUNK] Fetched all campers:', data);
      return data;
    } catch (error) {
      console.error('[THUNK ERROR] getAllCampersThunk:', error.message);
      return rejectWithValue(error.message);
    }
  }
);
