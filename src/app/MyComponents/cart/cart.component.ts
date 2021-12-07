import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() data!: any[];
 
  @Output() mydata: EventEmitter<any> = new EventEmitter();
  @Output() remove = new EventEmitter();


  @Input() count!: number;
  constructor() { }

  ngOnInit(): void {

  }
  addQuantity(mydata: any) {

    mydata.quantity = mydata.quantity + 1;

    this.count += mydata.price;

    this.mydata.emit(mydata);

  }
  deleteQuantity(mydata: any) {
    if (mydata.quantity > 0) {
      mydata.quantity = mydata.quantity - 1;
      this.count -= mydata.price
    }
    this.mydata.emit(mydata);
  }

  //==================delete the product=================
  delete(deletedata: any) {
    let index = this.data.indexOf(deletedata);
    this.count = this.count - (deletedata.quantity * deletedata.price);
    deletedata.quantity = deletedata.quantity - deletedata.quantity;
    this.data.splice(index, 1);
    this.remove.emit(this.count);
    console.log("data is deleted")
  }

}
