import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { InicialComponent } from './cadastro/inicial/inicial.component';

//Modulos 
import { HeroFormTemplateModule } from './template/hero-form-template.module';
import { HeroFormReactiveModule } from './reactive/hero-form-reactive.module';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConteudoComponent,
    InicialComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeroFormReactiveModule,
    HeroFormTemplateModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
