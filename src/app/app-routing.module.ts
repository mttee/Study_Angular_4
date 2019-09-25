import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import {CommonModule} from '@angular/common';

import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import module con
import { ContactsModule } from './contacts/contacts.module'

const routerConfig: Routes = [
    {path: 'detail/:id/:name/:phone', component: ContactDetailComponent},
    //Vừa vào thì redirect sang contacts luôn
    {path: '', redirectTo: '/contacts', pathMatch: 'full'},
    //Nhập đường dẫn không hợp lệ
    {path: '**', component: PageNotFoundComponent},
  ]

  @NgModule({
      imports: [
        CommonModule,
        ContactsModule,
        RouterModule.forRoot(routerConfig)
      ],
      declarations: [
          PageNotFoundComponent,
          ContactDetailComponent,
         
      ],
      exports: [RouterModule]
  })

  export class AppRoutingModule {};