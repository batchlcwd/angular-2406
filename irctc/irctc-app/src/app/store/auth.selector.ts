import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../models/auth';
import { AUTH_FEATURE_KEY } from './auth.reducer';

export const selectAuthState =
  createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

// export const user = createFeatureSelector('user');

export const selectUser = createSelector(selectAuthState, (state) => state.user);
export const selectToken = createSelector(selectAuthState, (state) => state.token);
export const selectRefreshToken = createSelector(
  selectAuthState,
  (state) => state.refreshToken
);
export const selectError = createSelector(selectAuthState, (state) => state.error);
export const selectLoading = createSelector(
  selectAuthState,
  (state) => state.loading
);

export const selectIsLogin = createSelector(
  selectAuthState,
  (state) => state.isLogin
);
