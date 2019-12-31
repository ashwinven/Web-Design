import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  // passing productsList - the Product[]
  @Input() productsList: Product[];

  // @Output onProductSelected - outputs the current Product whenever a new Product is selected
  @Output() onProductSelected: EventEmitter<Product>;

  // property currentProduct - local state containing the currently selected "Product"
  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product) {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

}
