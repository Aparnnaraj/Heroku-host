import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(public http: HttpClient, public router:Router) { }
  login(user: any){
    //return this .http.post(`api/login`,user)

    return this.http.post("https://applibraryappheroku.herokuapp.com/user/login",{user})

    .subscribe((res)=>{
      this.router.navigate(['booklist']);
      alert("Successful login");
    })

  }
  signup(form:any) {
//return this.http.post(`api/signup`,form)
return this.http.post("https://applibraryappheroku.herokuapp.com/user/signup",{form})
.subscribe((res)=>{
  this.router.navigate(['booklist']);
  alert("Signup completed");
})
  }


}