import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent implements OnInit {

  pageTitle: string = 'Product List!';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string;


  products: IProduct[];

  constructor(private _productService: ProductService) {
  }

  ngOnInit() {
    this.products = this._productService.getProducts();
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

}


