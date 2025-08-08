export interface User {
  id?: string;
  name: string;
  email: string;
  password?: string;
  phone: string;
  createdAt?: Date;
  roles: Role[];
}

export interface Role {
  id?: string;
  name: string;
}
