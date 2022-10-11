import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
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

  constructor(private bookservice:BookService, private router:Router) { }

  ngOnInit(): void {
  }
  addbook_f(){
    //console.log(this.book);
    this.bookservice.addbooks(this.book)
    console.log("Called");
    alert("SUCCESSS!!!");
    this.router.navigate(['/'])
  }

}
