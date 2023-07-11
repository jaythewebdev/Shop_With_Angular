import { Component } from '@angular/core';
import { customerModel } from './customer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  customer:customerModel;
constructor(){
  this.customer=new customerModel(1,"assets/images/Dp.jpeg","Ram",22,"Male","9087654321","ram@gmail.com");
}
}
