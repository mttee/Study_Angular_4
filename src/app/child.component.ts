import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
    <button (click) = "addValueParent()">ADD</button>
    <button (click) = "subValueParent()">SUB</button>
    `
})

export class ChildComponent{

    //Check chỉ nhận vào kiểu boolean
    @Output() myClick = new EventEmitter<boolean>();

    addValueParent(){
        this.myClick.emit(true);
    }

    subValueParent(){
        this.myClick.emit(false);
    }


}