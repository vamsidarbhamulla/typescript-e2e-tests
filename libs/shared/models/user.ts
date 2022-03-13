import { AxiosData } from './axiosData';

export interface User extends AxiosData {
  name?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;
  id?: number;
  email?: string;
  phone?: string;
  job?: string;
  updatedAt?: string;
  createdAt?: string;
  error?: string;
}

export interface Support {
  url: string;
  text: string;
}

export interface UsersListResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: Support;
}
