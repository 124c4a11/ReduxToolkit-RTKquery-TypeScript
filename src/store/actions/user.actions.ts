import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IUser } from '../models/user.model';


export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');

      return data;
    } catch (err) {
      if (err instanceof Error) {
        return thunkApi.rejectWithValue(err.message);
      }

      return thunkApi.rejectWithValue('Something went wrong!');
    }
  }
);
