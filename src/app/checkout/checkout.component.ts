import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  i:any;
  // isShow:boolean=false;
  public itemList: any ;
  public grandTotal !:number;
   products: any;

  public product :any = [];

constructor(private http:HttpClient, private productService: ProductService) { }
ngOnInit(): void {




this.productService.getProducts()
.subscribe((res: any)=>{
  this.itemList = res;

 this.grandTotal=this.productService.getTotalPrice();
  console.log("dataa",this.itemList)
});


}
addtocart(item: any){
this.productService.addtoCart(item);
}
removeUser(user:any){
  this.productService.removeCartItem(user);

}
emptyCart(){
  this.productService.removeAllCart();
}
}
