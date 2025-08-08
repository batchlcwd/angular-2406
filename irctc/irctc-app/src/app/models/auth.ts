import { User } from './user';

export interface AuthState {
  isLogin: boolean;
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  error: string | null;
  loading: boolean;
}
