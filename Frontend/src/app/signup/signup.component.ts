import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form={
    fname:'',
    email:'',
    password:'',
    mobile:''
}
integerRegex=/^\d+$/
emailRegex='^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$'

signupfn(){
  console.log(this.form);
  alert("Successfully registered in the library app");
}

 constructor(private userservice: UserService) { }


  ngOnInit(): void {
  }
  loggedto() {
   this.userservice.signup(this.form) ;
  }
 

}
