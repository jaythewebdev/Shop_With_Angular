import { Injectable } from '@angular/core';
import { ProductModel } from '../product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product:ProductModel[];
  cart:ProductModel[];
  checkout:ProductModel[];
  TotalPoints:number=0
  constructor() { 
    this.product=[new ProductModel(1,"Apple iPhone 14",74000,10,"assets/images/iphone14.jpeg",false,0,110),
    new ProductModel(2,"Apple Macbook Air M2",174000,10,"assets/images/macm2.jpeg",false,0,1700),
    new ProductModel(3,"Apple Charger 18w",2000,10,"assets/images/charger.jpg",false,0,50),
    new ProductModel(4,"Apple Airpods 3rd Gen",20000,10,"assets/images/airpods.jpeg",false,0,200)]
    this.cart=[]
    this.checkout=[]
  }

  getProducts():ProductModel[]
  {
    return this.product;
  }

  addToCart(product:ProductModel){
    for (let index = 0; index < this.product.length; index++) {
              if(this.product[index].id == product.id)
                if(this.product[index].quantity>0)
                {
                  this.cart.push(product);
                  this.product[index].quantity--;
                }
  }
}

  getCart():ProductModel[]{
    return this.cart;
  }

  getCartCheckout():ProductModel[]{
    for(let i=0;i<this.cart.length;i++){
      this.checkout[i]=this.cart[i];
    }
    this.cart=[];
    return this.checkout;
  }

  getPoints(cart:ProductModel[]){
      for (let index = 0; index < cart.length; index++) {
        this.TotalPoints+= cart[index].points; 
  }
  return this.TotalPoints;
}
}