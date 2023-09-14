import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Post } from '../post';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public users:any;
  isShow:boolean=false;
  // productService: any;

  x:any;
  res:any;
  searchRes: Post[] = [];
 user:Post =new Post();
 data:Post =new Post();
  public totalUser : number = 0;
  productList: any;
  searchRs:any;
constructor(private http:HttpClient ,public productService:ProductService,private route:Router) { }
ngOnInit(): void {
let responce= this.http.get("http://localhost:9096/getmarksdetails");
responce.subscribe((data)=>{this.users=data
console.log("PN",this.users)
}
)
this.productService.getProducts()
console.log("GET PRODs",this.productService.getProducts())
}



edit(user:Post){     // Search function to filter the data for edit
  //alert(user.id);
  this.productService.findall(user).subscribe(data =>{this.searchRs=data
        console.log("res"+JSON.stringify(data))
    console.log(this.searchRes[0].id)

}

);
// this.route.navigate(['apipages']);
}
editExistingData(user: { id: any; }){   // edit the existing data 
  console.log("user in ts",this.user);
  this.x=user.id
 this.productService.updatee(this.x,this.user).subscribe(user=>{
   console.log(user);
 });
 alert("Succesfully Updated")
}

// del the data
delExistingData(user: { id: any; }){
  //alert(this.document.getElementById('statename').value)
 // alert(user.country_name)
   this.x=user.id
//  alert("test"+this.x);
  this.productService.deleteContent(this.x).subscribe(data=>{
         alert(" Succesfully Deleted")
  })

  let responce= this.http.get("http://localhost:9096/getmarksdetails");
responce.subscribe((data)=>{this.users=data
console.log("Content After Deleted",this.users)
}
)

}
}
