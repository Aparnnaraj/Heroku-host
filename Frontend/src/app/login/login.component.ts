import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user={
  email:'',
  password:''
}
emailRegex= '^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$'

loginUser(){
console.log("this.user");
alert("Successful user login");
}
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
  }
  loggedto(){
    this.userservice.login(this.user)
    
  }

}
