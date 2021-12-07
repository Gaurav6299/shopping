import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product!:Product[];

  constructor() {
    this.product=[
      {
        id:1,
        name:"Jeans",
        price:200,
        image:"./assets/img/shopping1.webp",
        quantity:0,
        type:{
          jeans:"Jeans"
        }
        
      },
      {
        id:2,
        name:"Shirt",
        price:250,
        image:"./assets/img/shopping2.webp",
        quantity:0,
        type:{
          shirt:"Shirt"
        }
      },
      {
        id:3,
        name:"T-Shirt",
        price:300,
        image:"./assets/img/shopping3.webp",
        quantity:0,
        type:{
          tshirt:"t-shirt"
        }
      },
      {
        id:4,
        name:"Jeans",
        price:350,
        image:"./assets/img/shopping4.webp",
        quantity:0,
        type:{
          jeans1:"Jeans"
        }
      },
      {
        id:5,
        name:"Shirt",
        price:400,
        image:"./assets/img/shopping5.webp",
        quantity:0,
        type:{
          shirt1:"Shirt"
        }
      },
      {
        id:6,
        name:"T-Shirt",
        price:450,
        image:"./assets/img/shopping6.webp",
        quantity:0,
        type:{
          tshirt1:"T-Shirt"
        }
      },
      {
        id:7,
        name:"T-Shirt",
        price:500,
        image:"./assets/img/shopping7.webp",
        quantity:0,
        type:{
          tshirt2:"T-Shirt"
        }
      },
      {
        id:8,
        name:"T-Shirt",
        price:550,
        image:"./assets/img/shopping8.webp",
        quantity:0,
        type:{
          tshirt2:"T-Shirt"
        }
      }
    ];
   }

  ngOnInit(): void {
  }

}
