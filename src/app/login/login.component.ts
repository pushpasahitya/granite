import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Contactd } from '../contactd';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Sentdata } from '../sentdata';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public users:any;
  isShow:boolean=false;
  // productService: any;
  loginCheck:Sentdata[]=[];
    valid:Sentdata= new Sentdata();
    
  // check:Sentdata= new Sentdata();
  x:any;
  res:any;
  searchRes: Sentdata[] = [];
 user:Sentdata =new Sentdata();
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
        console.log("res"+(data))
    console.log(this.loginCheck[0].email)
    console.log(this.loginCheck[0].password)
    console.log(valid.email);
    console.log(valid.password);
    // if(valid.email==this.loginCheck[0].email && valid.password==this.loginCheck[0].password){
    //   alert("Logged In")
    // }
    // else if(this.loginCheck[0].email == null){
    //   alert("UserNAme or Password Incorrect")
    // }

}
  );
}


// fetchString() {
//   this.http.get<string>('/api/get-string').subscribe(data => {
//     this.message = data;
//   });
// }
}
