import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  addbooks(data:any){
    console.log(data);
   // return this.http.post<any>(`api/addbook`,data);

   return this.http.post("https://applibraryappheroku.herokuapp.com/addbook",{data})
  }
  getbooks(){
    //return this.http.get(`api/booklist`);
    return this.http.get("https://applibraryappheroku.herokuapp.com/booklist")
  }
}
