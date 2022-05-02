import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuilt',
  templateUrl: './inbuilt.component.html',
  styleUrls: ['./inbuilt.component.css']
})
export class InbuiltComponent implements OnInit {

  constructor() { }
str:string="Hi  Everybody ";
amount="122345678";
date =new Date();
preson={"name":"Thanesh","Age ":"23"}



  ngOnInit() {
  }

}
