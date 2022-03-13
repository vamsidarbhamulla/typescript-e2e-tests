import { AxiosData } from './axiosData';

export interface ContactDetails extends AxiosData {
  contactType: string;
  contactValue: string;
}
