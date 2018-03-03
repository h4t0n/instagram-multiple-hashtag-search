import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }        from '@angular/forms';

import { PostcrawlerService } from './postcrawler.service'
import { SearchHashtagsComponent } from './search-hashtags/search-hashtags.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchHashtagsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PostcrawlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
