// import { MaterializeModule } from 'angular2-materialize';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './componente/_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AlertComponent } from './componente/_directives/index';
import { AuthGuard } from './componente/_guards/index';
import { AlertService, AuthenticationService, UserService } from './componente/_services/index';
import { HomeComponent } from './componente/home/index';
import { LoginComponent } from './componente/login/login.component';
import { RegisterComponent } from './componente/register/register.component';
import { NavbarComponent } from './componente/navbar/navbar.component';
import { ConteudoComponent } from './componente/conteudo/conteudo.component';
// LoginComponent
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ConteudoComponent
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,

    // providers used to create fake backend
    // fakeBackendProvider,
    MockBackend,
    BaseRequestOptions // uma suspeita que aqui que ve a request quando volta 
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }