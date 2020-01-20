import { Product } from './product';

export class BucketItem {

  constructor(
    public product: Product,
    public quantity: number
  ) { }

}
