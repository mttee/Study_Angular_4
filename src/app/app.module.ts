import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
// import { Routes, RouterModule } from '@angular/router'

// const routerConfig: Routes = [
//   {path: 'contacts', component: ContactsComponent},
//   {path: 'detail', component: ContactDetailComponent},
//   //Vừa vào thì redirect sang contacts luôn
//   {path: '', redirectTo: '/contacts', pathMatch: 'full'},
//   //Nhập đường dẫn không hợp lệ
//   {path: '**', component: PageNotFoundComponent},
// ]

import  {AppRoutingModule} from './app-routing.module'

import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import {Bootstrap} from './bootstrap.component';
import { BookComponent } from './book/book.component';
import { StructComponent } from './struct/struct.component';
import { WordsComponent } from './words/words.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component'
import {ParentComponent} from './parent.component'
import {ChildComponent} from './child.component'
import {CardComponent} from './card.component';
import { PipeComponent } from './pipe/pipe.component'
import { RoundPipe } from './round.pipe'
import { IpComponent } from './ip.component'
import {SignInComponent} from './sign-in.component'
import {SignUpComponent} from './sign-up.component'

import { IpService } from './ip.service';
import { SignInService } from './sign-in.service';
// import { ContactsComponent } from './contacts/contacts.component';
// import { ContactDetailComponent } from './contact-detail/contact-detail.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    Bootstrap,
    BookComponent,
    StructComponent,
    WordsComponent,
    PersonComponent,
    ListPersonComponent,
    ParentComponent,
    ChildComponent,
    CardComponent,
    PipeComponent,
    IpComponent,
    RoundPipe,
    SignInComponent,
    SignUpComponent,
    // ContactsComponent,
    // ContactDetailComponent,
    // PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // RouterModule.forRoot(routerConfig)
    AppRoutingModule
  ],
  providers: [IpService, SignInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
