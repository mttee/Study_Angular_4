import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  arrPeople = [
    {name:"Minh", age: 15},
    {name:"Trí", age: 19},
    {name:"Hồ", age: 22}
  ]

  constructor() { }

  ngOnInit() {
  }

  removePersonByName(name: string){
    const index = this.arrPeople.findIndex(e => e.name === name);
    this.arrPeople.splice(index, 1)
  }

}
