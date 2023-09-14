import { Component } from '@angular/core';
import { Sentdata } from '../sentdata';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adim',
  templateUrl: './adim.component.html',
  styleUrls: ['./adim.component.css']
})
export class AdimComponent {
  public users:any;
  isShow:boolean=false;
  // productService: any;
  loginCheck:Sentdata[]=[];
    valid:Sentdata= new Sentdata();

  // check:Sentdata= new Sentdata();
  x:any;
  res:any;
  searchRes: Sentdata[] = [];
 user:Sentdata=new Sentdata();
 data:Sentdata =new Sentdata();
  public totalUser : number = 0;
  productList: any;
  searchRs:any;
constructor(private http:HttpClient ,public productService:ProductService,private route:Router) { }
ngOnInit(): void {
let responce= this.http.get("http://localhost:9096/getclientdetails");
responce.subscribe((data)=>{this.users=data
console.log("PN",this.users)
}
)
this.productService.regiclients()
console.log("GET PRODs",this.productService.regiclients())
}




checkUser(valid:Sentdata){     // Search function to filter the data for Login
  //alert(user.id);
  this.productService.findUser(valid).subscribe(data =>{this.loginCheck=data
        console.log("res"+JSON.stringify(data))
    console.log(this.loginCheck[0].email)

}
  );
}


}
