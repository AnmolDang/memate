// src/redux/slices/authSlice.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {ApiBaseUrl, getOrganizationApi} from '../utils/Constants';

export const getOrganization = createAsyncThunk(
  'getOrganization',
  async payload => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIyMDcyMzAwLCJpYXQiOjE3MjE2NDAzMDAsImp0aSI6Ijg3NjI4Y2YwODY3MjQ2ZTk5Y2U5NmNiMDc5Mzc1ZDBmIiwidXNlcl9pZCI6MjZ9.HyuWXruxNxoT06oxBdNwgJl0L5pLppUup7oG1vngO5Q',
        },
      };
      console.log('Url ===> ', ApiBaseUrl + getOrganizationApi);

      const response = await axios.get(ApiBaseUrl + getOrganizationApi, config);
      console.log('Response Login ===> ', response.data);
      return response.data;
    } catch (error) {
      console.log('Error ===> ', error);
      throw error.response.data;
    }
  },
);

const getOrganizationSlice = createSlice({
  name: 'getOrganizationReducer',

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    getOrganizationClear: state => {
      // Reset the data property to an empty array
      state.data = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getOrganization.pending, state => {
        state.isLoading = true;
      })
      .addCase(getOrganization.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getOrganization.rejected, (state, action) => {
        state.isError = false;
      });
  },
});

export const {clearLoginData} = getOrganizationSlice.actions;
export default getOrganizationSlice.reducer;
