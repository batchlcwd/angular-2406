import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

 productCategories = [
  {
    name: 'Electronics',
    products: [
      { name: 'Bluetooth Speaker', price: 2999, status: 'Available', image: 'https://picsum.photos/400/200' },
      { name: 'Smartphone', price: 15999, status: 'Out of Stock', image: 'https://picsum.photos/400/200' }
    ]
  },
  {
    name: 'Accessories',
    products: [
      { name: 'Laptop Bag', price: 899, status: 'Available', image: 'https://picsum.photos/400/200' },
      { name: 'USB-C Hub', price: 1299, status: 'Available', image: 'https://picsum.photos/400/200' }
    ]
  }
];

}
