import { Component } from '@angular/core';
import { ProductModel } from '../product/product.model';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  likeCount:number=0;
  products:ProductModel[];
  cartToggle:boolean;
  constructor(private productService:ProductService, private router:Router) {
    this.products=productService.getProducts();
    this.cartToggle = false;
}
selectPic(productid:any){
  this.router.navigate(["products/pic",productid])
}
}
