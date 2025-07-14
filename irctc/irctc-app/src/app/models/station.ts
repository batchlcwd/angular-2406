export interface Station {
  id?: number;
  name: string;
  code: string;
  state: string;
  city: string;
}

export interface StationsResponse<T> {
  content: T[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
  first: boolean;
}
