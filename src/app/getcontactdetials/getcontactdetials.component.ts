import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-getcontactdetials',
  templateUrl: './getcontactdetials.component.html',
  styleUrls: ['./getcontactdetials.component.css']
})
export class GetcontactdetialsComponent {
  public users:any;

contact:any

  
constructor(private http:HttpClient ,public productService:ProductService) { }
ngOnInit(): void {
let responce= this.http.get("http://localhost:9096/getContact");
responce.subscribe((data)=>{this.users=data
console.log("PN",this.users)
}

)
}
}
