import { createAction, props } from '@ngrx/store';
import { User } from '../models/user';

// This action is dispatched when the login is successful
export const loginSuccessAction = createAction(
  '[Auth] Login Success',
  props<{ user: User; isLogin: boolean; token: string; refreshToken: string,loading:boolean }>()
);

// This action is dispatched when the login fails
export const loginFailureAction = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);
// This action is dispatched when the user logs out
export const logoutAction = createAction(
  '[Auth] Logout',
  props<{ isLogin: boolean }>()
);
// export const registerAction = createAction();
// export const resetPasswordAction = createAction();
// export const updateProfileAction = createAction();
// export const fetchUserProfileAction = createAction();
