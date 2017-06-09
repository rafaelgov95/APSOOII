import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { InicialComponent } from './cadastro/inicial/inicial.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConteudoComponent,
    InicialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
