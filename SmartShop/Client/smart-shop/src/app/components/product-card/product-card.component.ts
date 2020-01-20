import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() product: Product;
  @Output() addToBucket = new EventEmitter<Product>();

  constructor() { }

  public onAddToBucket() {
    this.addToBucket.emit(this.product);
  }
}
