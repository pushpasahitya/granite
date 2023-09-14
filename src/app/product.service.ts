import { BehaviorSubject, Observable } from "rxjs";

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Post } from "./post";
import { Sentdata } from "./sentdata";
import { Contactd } from "./contactd";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  private userposturl!: string;
  private resgposturl!: string;
  private userdelurl!: string;
  private userediturl!: string;
  private searchData!: string;
  private delData!:string;
  postcontacturl: string;
  getcontact: any;
  regiclients: any;
  login: string;
  public users:any;
  token:any;
  // private searchProd:number=0;
  constructor( private http:HttpClient,private routing:Router) {  
    this.userdelurl='http://localhost:9096/deletedetails';
    this.userediturl='http://localhost:9096/updateuserdata';
      this.userposturl='http://localhost:9096/postuserdataa';
      this.searchData='http://localhost:9096/search';
      this.delData='http://localhost:9096/deletedetails';
      this.resgposturl='http://localhost:9096/postthenewusersdataa';
      this.postcontacturl='http://localhost:9096/postcontactdataa';
      this.getcontact='http://localhost:9096/getContact';
      this.regiclients='http://localhost:9096/getclientdetails'
      this.login="http://localhost:9096/filter";
    }
    saveuser(user:Post){ 
      //console.log(user.name+" - "+user.email);
      return this.http.post<Post>(this.userposturl,user)
     }

     registerNewUser(newuser:Sentdata){
      return this.http.post<Sentdata>(this.resgposturl,newuser)

     }
  getProducts(){
    return this.productList.asObservable();
  }
  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){
 
    this.cartItemList.push(product);
    console.log("cartlist",this.cartItemList);
    this.productList.next(this.cartItemList);
    console.log("prodList",this.productList)
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
  deleteContent(id: number): Observable<any> { 
    alert("deleted") 
    return this.http.delete(`${this.userdelurl}/${id}`);  
  }
  
  updatee(id: number,user: Post) :Observable<any>{
    return this.http.put(`${this.userediturl}/${id}`,user);
  }
  
  findall(user:Post){
    console.log(this.search)
    
    let params=new HttpParams();

    params=params.append("id",user.id)
    console.log(params)
    return this.http.get<Post[]>(this.searchData,{params:params});
   }
   saveNewContact(user:Contactd){ 
    //console.log(user.name+" - "+user.email);
    return this.http.post<Contactd>(this.postcontacturl,user)
   }

  //  login aka search
findUser(regUser:Sentdata){
  console.log()
  let params=new HttpParams();
  params=params.append("email",regUser.email);
  params=params.append("password",regUser.password);
  console.log(params)

 
  let responce= this.http.get<Sentdata[]>(this.login,{params:params});
  responce.subscribe((data)=>{this.users=data
console.log("Login Check2",this.users.length)
this.token=this.users.length;
console.log("token",this.token)
console.log("login ",this.users[0].email,"pass",this.users[0].password);
console.log("length",this.users.length);
if(this.token==1){
alert("logged IN")
this.routing.navigate(['update'])
}

else
{
  alert("UserNAme or Password Incorrect")
  
  }
})
  return this.http.get<Sentdata[]>(this.login,{params:params}
    );
 
}


// fetchString() {
//   this.http.get<string>('/api/get-string').subscribe(data => {
//     this.message = data;
//   });
// }



}
