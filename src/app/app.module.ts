import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { Service } from './service.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingleVideoComponent } from './single-video/single-video.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TvshowsComponent,
    HeaderComponent,
    SingleVideoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
