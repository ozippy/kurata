import { ProductService } from './products/product.service';
import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]

})
export class AppComponent {
  title = 'app works!';
}
