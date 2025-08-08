import { createReducer, on } from '@ngrx/store';
import { AuthState } from '../models/auth';
import * as AuthActions from '../store/auth.actions';
// state information

export const AUTH_FEATURE_KEY = 'auth';

export const initialState: AuthState = {
  isLogin: false,
  user: null,
  token: null,
  refreshToken: null,
  error: null,
  loading: false,
};

export const authReducer = createReducer(
  initialState,
  on(
    AuthActions.loginSuccessAction,
    (state, { user, isLogin, token, refreshToken, loading }) => {
      return {
        ...state,
        isLogin,
        user,
        token,
        refreshToken,
        loading,
      };
    }
  ),
  on(AuthActions.logoutAction, (state, { isLogin }) => {
    return {
      ...state,
      isLogin,
      user: null,
      refreshToken: null,
      token: null,
      loading: false,
      error: null,
    };
  }),
  on(AuthActions.loginFailureAction, (state, { error }) => {
    return {
      ...state,
      isLogin: false,
      user: null,
      token: null,
      refreshToken: null,
      error,
      loading: false,
    };
  })
);
