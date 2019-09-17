import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-child',
    template: `<h3>{{value}}</h3>`
})

export class ChildComponent{
    value = 0;
}