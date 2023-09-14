import { Component } from '@angular/core';
import { Post } from '../post';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-apipage',
  templateUrl: './apipage.component.html',
  styleUrls: ['./apipage.component.css']
})
export class ApipageComponent {

data:any;
    yes:any;
    isShows:boolean=false;
    x:any;
      user:Post =new Post();
  serv: any;
  users:any;
myForm: FormGroup;
  

      constructor(private http:HttpClient,private testserv:ProductService , private fb: FormBuilder) { 
        this.myForm = this.fb.group({
          // Define your form controls with validation
         Image: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          // Add more form controls as needed
        });
        
      }
      
    
    ngOnInit():void{
     // let contaact = this.http.post("http://localhost:9088/postContactdata");
     // contaact.subscribe((data: any)=>this.yes=data)
     let responce= this.http.get("http://localhost:9096/getmarksdetails");
     responce.subscribe((data)=>{this.users=data
     console.log("PN",this.users)
     }
     
     )

    //  console.log(this.searchRes[0].id)
    }
    shows(){
      this.isShows=true;
    }
    onSubmit() {
      if (this.myForm.valid) {
        // Form is valid, perform submission logic here
        console.log(this.myForm.value);
        
      }
      else {
        alert("FILL THE THE DATA")
      }
      
    }
    
    openaccount(event:any){
      console.log("user in ts",this.user);
     this.testserv.saveuser(this.user).subscribe(user=>{
       console.log("post",user);
     });
     alert("Succesfully added")
    }
    // openstates(user: { id: any; }){

    //   //alert(this.document.getElementById('statename').value)
    //  // alert(user.country_name) argsumen
    //    this.x=user.id  
    //   alert("test"+this.x);
    //   this.serv.deleteStudent(this.x).subscribe(()=>{
    //          alert("deleted")
    //   })
    // }
    // edit(user: { id: any; }){
    //   console.log("user in ts",this.user);
    //   this.x=user.id
    //  this.serv.updatee(this.x,this.user).subscribe((user: any)=>{
    //    console.log(user);
    //  });
    //  alert("updated")
    // }  
    
  }
