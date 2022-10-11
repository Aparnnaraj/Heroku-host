import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  addbooks(data:any){
   // console.log(data);
   // return this.http.post<any>(`api/addbook`,data);

   return this.http.post("https://applibraryappheroku.herokuapp.com/addbook",{data})
   .subscribe(data =>{console.log(data)})
  }
  getbooks(){
    //return this.http.get(`api/booklist`);
    return this.http.get("https://applibraryappheroku.herokuapp.com/booklist")
  }
  deletebook(id:any)
  {

    return this.http.delete("http://localhost:3000/remove/"+id)

  }
  editbook(book:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/addbook",book)
    .subscribe(data =>{console.log(data)})
  }
}
