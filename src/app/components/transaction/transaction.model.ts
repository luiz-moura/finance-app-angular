import { Category } from '../category/category.model';

export interface Transaction {
  id?: number;
  title: string;
  value: number;
  type: string;
  created_at?: Date;
  categories?: Category[];
}
