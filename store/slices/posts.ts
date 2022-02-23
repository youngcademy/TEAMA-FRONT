import { createSlice } from '@reduxjs/toolkit';
​
import { logInAction } from '../actions/users';
import { IPost } from '../interface/post';

const initialState: IPost = {};

export const posts = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      // builder의 addCase는 typescript의 타입 추론 사용할 때 편하다.
      .addCase(logInAction.pending, (state, action) => {})
      .addCase(logInAction.fulfilled, (state, action) => {})
      .addCase(logInAction.rejected, (state, action) => {})

      .addDefaultCase(() => {}),
});
export default posts.reducer;