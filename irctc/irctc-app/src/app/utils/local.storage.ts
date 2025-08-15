import * as CryptoJS from 'crypto-js';
import { User } from '../models/user';
// local storage for token management
const secretKey = 'hoasdhalfahupatfabnvabgsdfasgasgbkjgagghoasdfgh';

// save refresh token
export function saveRefreshToken(refreshToken: string | null) {
  if (refreshToken == null) {
    localStorage.removeItem('refreshToken');
    return;
  }
  const encToken = CryptoJS.AES.encrypt(refreshToken, secretKey);
  localStorage.setItem('refreshToken', encToken.toString());
}

// get refresh token
export function getRefreshToken() {
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

// token store:

export function login(token: string | null) {
  if (token == null) {
    localStorage.removeItem('token');
    return;
  }
  const encToken = CryptoJS.AES.encrypt(token, secretKey);
  localStorage.setItem('token', encToken.toString());
}

export function getLocalToken() {
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

export function isLogin() {
  return getLocalToken() != null;
}

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
}

// save user information
export function saveUserToLocal(user: User | null) {
  localStorage.setItem('user', JSON.stringify(user));
}

export function getUserFromLocal() {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
}
