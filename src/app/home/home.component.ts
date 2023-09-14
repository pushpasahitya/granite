import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Contactd } from '../contactd';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user:Contactd= new Contactd()
  
  constructor(private http:HttpClient,private testserv:ProductService) { }
  ngOnInit():void{}
  openaccount(event:any){
    console.log("user in ts",this.user);
   this.testserv.saveNewContact(this.user).subscribe(user=>{
     console.log("contactd",user);
   });
   alert("Succesfully added")
  }

}


