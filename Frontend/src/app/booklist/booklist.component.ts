import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  book=[{
    title:'',
    author:'',
    status:'',
    duedate:''
  }]

  constructor(public bookservice:BookService, public router:Router) { }

  ngOnInit(): void {
this.bookservice.getbooks().subscribe((data)=>{
  this.book=JSON.parse(JSON.stringify((data)));
})
  }

}
