import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // @Input() mydata!:any;
  @Input() product!:Product[];

  myArray:any=[];
  @Input() count:number=0;
  constructor() {
   }

  ngOnInit(): void {
   
  }

  addData(mydata:any){
    console.log("My total data:"+this.count)
    if(!this.myArray.includes(mydata)){
      mydata.quantity=mydata.quantity+1;

      this.count+=(mydata.quantity*mydata.price)

      this.myArray.push(mydata);
    }else{
      mydata.quantity=mydata.quantity+1;
      this.count+=mydata.price;
     
      console.log(this.myArray)
     
    }
    console.log("Total:"+this.count);
    
  }

  subData(subdata:any){
    if(!this.myArray.includes(subdata)){
      if(subdata.quantity>0){
        subdata.quantity=subdata.quantity-1;
        this.count-=subdata.price;
      }
      this.myArray.push(subdata);
    }else{
      if(subdata.quantity>0){
        subdata.quantity=subdata.quantity-1;
        this.count-=subdata.price;
      }
     
      // this.myArray.push(subdata) 
    }
   
  }
  removeData(remove:any){
    // this.count=remove;
    console.log("My data is:"+this.count)
  }
}
