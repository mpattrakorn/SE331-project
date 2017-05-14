import {Product} from "../Product/Product";
export class Transaction{
  id : number;
  productList: Product[];
  userId : number;
  totalPrice : number;
  confirmation: string;
  status : boolean;
}
