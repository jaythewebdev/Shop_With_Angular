import { Component, Input } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
@Input() product:ProductModel;
favClass:string="";
constructor(private productService:ProductService){
  this.product=new ProductModel();
  this.favClass=this.product.favStatus?"bi bi-heart-fill":"bi bi-heart";
}
favToggle()
{
    this.product.favStatus=!this.product.favStatus;
    this.favClass=this.product.favStatus?"bi bi-heart-fill":"bi bi-heart"
}
incrementLikes()
{
  this.product.likes++;
}
buy()
{
  var myProduct=new ProductModel();
  myProduct.id=this.product.id;
  myProduct.name=this.product.name;
  myProduct.price=this.product.price;
  myProduct.pic=this.product.pic;
  myProduct.points=this.product.points;
  myProduct.quantity=1;
  this.productService.addToCart(myProduct);
}
}
