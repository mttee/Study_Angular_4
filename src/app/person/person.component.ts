import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() name: string;
  @Input() age: Number;

  @Output() removePerson = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  removeByClick(){
    this.removePerson.emit(this.name)
  }

}
