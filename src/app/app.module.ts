import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
