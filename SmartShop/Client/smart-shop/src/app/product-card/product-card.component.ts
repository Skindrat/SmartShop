
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/Product';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;
  @Output() obAddToBucket = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  public addToBucket(){
    this.obAddToBucket.emit(this.product);
  }

}
