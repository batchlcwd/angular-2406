import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  user: any;

  private productService = inject(ProductService);

  constructor(private apiService: ApiService) {
    this.user = apiService.getUser();
    this.productService.createProduct();
  }
}
