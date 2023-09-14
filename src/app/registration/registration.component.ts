import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Sentdata } from '../sentdata';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  data:any;
    yes:any;
    isShows:boolean=false;
    x:any;
      newuser:Sentdata =new Sentdata();
  serv: any;
  users:any;
  constructor(private http:HttpClient,private testserv:ProductService) { }
    
  ngOnInit():void{}
  posted(){
    alert("triggered")
    console.log("user in ts",this.newuser);
   this.testserv.registerNewUser(this.newuser).subscribe(user=>{
     console.log("post",user);
   });
   alert("Succesfully added")
  }

}


