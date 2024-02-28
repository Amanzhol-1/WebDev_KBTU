import { Product } from "./products";

export interface Category {
  id : number;
  name : string;
  productList : Product[];
}
