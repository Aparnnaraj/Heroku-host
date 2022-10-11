import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  book={
    title:"",
    author:"",
    status:"",
   duedate:""
    
}

  constructor(private bookservice:BookService) { }

  ngOnInit(): void {
  }
  addbook_f(){
    console.log(this.book);
    this.bookservice.addbooks(this.book)
    .subscribe((res)=>{
      alert('Course successfully added')
    })
  }

}
