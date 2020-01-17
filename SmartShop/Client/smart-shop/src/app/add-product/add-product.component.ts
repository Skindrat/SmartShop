import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm = this.fb.group({
    name: ['', Validators.required],
    price: [0],
    description: [''],
    imageUrl: [''],
    quantity: [0],
    isCounted: [true],
    isFeatured: [false]
  });

  constructor(private fb: FormBuilder, private productService: ProductsService) { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.productService.addProduct(this.productForm.value);
    this.productForm.reset();
  }

}
