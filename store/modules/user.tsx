// store/modules/user.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 초기 상태 타입
export type UserState = {
  isLoggedIn: boolean;
  userData: any;
};

// 액션 Payload 타입
export type LoginPayload = {
  userId: string;
  password: string;
};

// 초기 상태
const initialState: UserState = {
  isLoggedIn: false,
  userData: null,
};

// 리듀서 슬라이스
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAction(state: UserState, action: PayloadAction<LoginPayload>) {
      state.isLoggedIn = true;
      state.userData = action.payload;
    },
    logoutAction(state: UserState) {
      state.isLoggedIn = false;
      state.userData = null;
    },
  },
});

// 리듀서 & 액션 리턴
const { reducer, actions } = userSlice;
export const { loginAction, logoutAction } = actions;
export default reducer;