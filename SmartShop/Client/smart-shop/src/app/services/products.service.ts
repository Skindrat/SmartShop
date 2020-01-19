import {Injectable} from '@angular/core';
import { Product } from '../models/Product';
import { Logger } from './logger.service';


// tmp
export const phones: Product[] = [{
    name: 'iPhone Xr',
    price: 600,
    description: 'The Apple iPhone XR is a smartphone that was tested with the iOS 12.0.1 operating system.' +
      'This model weighs 6.9 ounces, has a 6.1 inch touch screen display, 12-megapixel main camera, and 7-megapixel' +
      'selfie camera. It comes with 3GB of RAM. It was tested with 64GB of storage.',
    imageUrl: 'https://res.cloudinary.com/dxddiink8/image/upload/v1578948102/iphone-xr_v8koqw.jpg',
    quantity: 200,
    isCounted: true,
    isFeatured: false
  },
  {
    name: 'iPhone 8 Plus',
    price: 500,
    description: 'The Apple iPhone 8 Plus is a smartphone that was tested with the iOS 11 operating system.' +
      'This model weighs 7.2 ounces, has a 5.5 inch touch screen display, 12-megapixel main camera,' +
      'and 7-megapixel selfie camera. It comes with 3GB of RAM. It was tested with 64GB of storage.',
    imageUrl: 'https://res.cloudinary.com/dxddiink8/image/upload/v1578948183/iphone-8-plus_lqd1ic.png',
    quantity: 200,
    isCounted: true,
    isFeatured: false
  },
  {
    name: 'iPhone Xs',
    price: 700,
    description: 'The Apple iPhone Xs is a smartphone that was tested with the iOS 13.0 operating system.' +
      'This model weighs 6.8 ounces, has a 6.1 inch touch screen display, 12-megapixel main camera, and 12-megapixel selfie camera.' +
      'It comes with 4GB of RAM. It was tested with 64GB of storage.',
    imageUrl: 'https://res.cloudinary.com/dxddiink8/image/upload/v1578947566/Apple-iPhone-11-Pro-Midnight-Green-frontimage_pflkvx.jpg',
    quantity: 200,
    isCounted: true,
    isFeatured: false
  },
];

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[];
  constructor(private logger: Logger) {
    this.products = phones;
  }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(newProduct: Product) {
    this.logger.log('new product was added');
    this.products.push(newProduct);
  }

}
