import { createReducer, on } from '@ngrx/store';
import { AuthState } from '../models/auth';
import * as AuthActions from '../store/auth.actions';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as CryptoJS from 'crypto-js';

export const AUTH_FEATURE_KEY = 'auth';
const secretKey = 'hoasdhalfahupatfabnvabgsdfasgasgbkjgagghoasdfgh';

//get token from local storage
function getToken() {
  const encToken = localStorage.getItem('token');
  if (!encToken) {
    return null;
  }

  try {
    const token = CryptoJS.AES.decrypt(encToken, secretKey);
    return token.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.log('error in decrypting token');
    return null;
  }
}

function getRefreshToken() {
  const encToken = localStorage.getItem('refreshToken');
  if (!encToken) {
    return null;
  }
  try {
    const token = CryptoJS.AES.decrypt(encToken, secretKey);
    return token.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.log('error in decrypting refresh token');
    return null;
  }
}

function isLogin() {
  return getToken() != null;
}

// state information
// initial state
export const initialState: AuthState = {
  isLogin: isLogin(),
  user: null,
  token: getToken(),
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
  })
);
