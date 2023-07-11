import { Component, Input } from '@angular/core';
import { ProductModel } from '../product/product.model';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { PointsComponent } from '../points/points.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart:ProductModel[];
  checkOut:ProductModel[];
  TotalPoints:number=0
  constructor(private productService:ProductService,private router:Router){
    this.cart = this.productService.getCart();
    this.TotalPoints=0;
    this.checkOut=[]
  }
  showPoints(){
    this.checkOut=this.productService.getCartCheckout();
    this.cart=[];
    this.TotalPoints=this.productService.getPoints(this.checkOut);
    this.router.navigate(["points"],{queryParams: { points: this.TotalPoints }})
  }
}
