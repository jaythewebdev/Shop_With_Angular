import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product/product.model';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent {
  cart:ProductModel[];
  TotalPoints:number=0;
  constructor(private productService:ProductService,private route: ActivatedRoute) {
    this.cart=this.productService.getCart();
    this.route.queryParams.subscribe(params => {
      this.TotalPoints = params['points'] || 0;
    });
  }
}
