import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import {CommonModule} from '@angular/common';
import { ContactsComponent } from './contacts.component'

const routesConfig: Routes = [
    {path:'contacts', component: ContactsComponent}
];


@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(routesConfig) //dùng child vì nó là module con nhé
    ],
    declarations:[ContactsComponent]
})

export class ContactsModule {}