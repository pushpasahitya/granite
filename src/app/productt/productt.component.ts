import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productt',
  templateUrl: './productt.component.html',
  styleUrls: ['./productt.component.css']
})
export class ProducttComponent {
  public users:any;
  isShow:boolean=false;
  // productService: any;

  res:any;

  public totalUser : number = 0;
  productList: any;
constructor(private http:HttpClient ,public productService:ProductService) { }
ngOnInit(): void {


let responce= this.http.get("http://localhost:9096/getmarksdetails");
responce.subscribe((data)=>{this.users=data
console.log("PN",this.users)
}

)



this.productService.getProducts()
.subscribe(res=>{
  this.totalUser= res.length;
  
    this.users = res;
  
      this.productList = res;
      this.productList.forEach((a:any) => {
       
        Object.assign(a,{quantity:1,total:a.price});
      });
})
}

addtocart(user:any){
  this.productService.addtoCart(user)
}


}

