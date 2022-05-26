import { Category } from './../category/category.model';

export interface Budget {
  id?: number,
  value: number,
  name: string,
  category: Category,
  category_id?: number,
  created_at?: string;
}
