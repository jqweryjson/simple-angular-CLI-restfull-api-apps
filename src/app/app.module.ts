import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';





@NgModule({
  declarations: [ //указываем компонеты в декл�, HomeComponent�рациях
    AppComponent, //базовый компонент с которого начинается работа прилложения
    HomeComponent
  ],
  imports: [ //импортируем модули
    BrowserModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent] //указывается базовый компонент с которго начинается рендеренинг приложения
})
export class AppModule { }

