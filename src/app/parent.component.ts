import {Component, ViewChild} from '@angular/core';
import { ChildComponent } from './child.component'

@Component({
    selector: 'app-parent',
    template: `
    <app-child></app-child>
        <button (click)="onAddForChild()">ADD for child</button>
    `
})

export class ParentComponent{
    //Lưu ý phải truyền vào 2 parameters
    @ViewChild(ChildComponent, {static: false})
    //Khai báo biến có kiểu ChildComponent để sử dụng
    myChild: ChildComponent;

    onAddForChild(){
        //Truy cập trực tiếp vào các thuộc tính của Child
        this.myChild.value++;
    }
}