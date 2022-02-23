import { createSlice } from '@reduxjs/toolkit';

import { logInAction, logOutAction } from '../actions/users';
import { IUser } from '../interface/user';

const initialState: IUser = {
  isLoggedIn: false,
  user: null,
};

export const users = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      // builder의 addCase는 typescript의 타입 추론 사용할 때 편하다.
      .addCase(logInAction.pending, (state, action) => {})
      .addCase(logInAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(logInAction.rejected, (state, action) => {})​
      .addCase(logOutAction.pending, (state, action) => {})
      .addCase(logOutAction.fulfilled, (state, action) => {})
      .addCase(logOutAction.rejected, (state, action) => {})
      .addDefaultCase(() => {}),
});

export default users.reducer;