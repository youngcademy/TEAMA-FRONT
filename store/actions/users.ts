import { createAsyncThunk } from '@reduxjs/toolkit';

import { IUser } from '../interface/user';​
interface rejectMessage {
  errorMessage: string;
}

// 아무것도 없음
export const logOutAction = createAsyncThunk('user/logOut', async (data, thnukAPI) => {});

export const logInAction = createAsyncThunk<IUser, any, { rejectValue: rejectMessage }>(
  'user/logIn',
  async (data) => {
    console.log(data, 'logIn action');

    return data;
  },
);