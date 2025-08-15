import { createReducer, on } from '@ngrx/store';
import { AuthState } from '../models/auth';
import * as AuthActions from '../store/auth.actions';
import {
  getRefreshToken,
  isLogin,
  getLocalToken,
  getUserFromLocal,
} from '../utils/local.storage';

export const AUTH_FEATURE_KEY = 'auth';
const secretKey = 'hoasdhalfahupatfabnvabgsdfasgasgbkjgagghoasdfgh';

// state information
// initial state
export const initialState: AuthState = {
  isLogin: isLogin(),
  user: getUserFromLocal(),
  token: getLocalToken(),
  refreshToken: getRefreshToken(),
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
  }),
  on(AuthActions.refreshTokenAction, (state, { refreshToken, token }) => {
    return {
      ...state,
      refreshToken: refreshToken,
      token: token,
    };
  })
);
function getToken(): string | null {
  throw new Error('Function not implemented.');
}
