import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  birthday = new Date(2019, 7 ,25);

  person = {name:"Minh Trí", age: 25};

  address = Promise.resolve('628/18 Âu Cơ, phường 10, Q. Tân Bình, TP.HCM');

  constructor() { }

  ngOnInit() {
  }

}
