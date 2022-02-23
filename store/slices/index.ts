import { combineReducers, AnyAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import users from './users';
import posts from './posts';
import { IUser } from '../interface/user';
import { IPost } from '../interface/post';
​
export interface State {
  users: IUser;
  posts: IPost;
}
​
const rootReducer = (state: State | undefined, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      console.log('HYDRATE');
      return action.payload;
​
    default: {
      const combineReducer = combineReducers({
        users,
        posts,
      });
      return combineReducer(state, action);
    }
  }
};
// 21.03.31 제거
// export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;