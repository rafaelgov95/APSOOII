import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  LoginNome:String
  LoginSenha:String
  Logar(){
    console.log(this.LoginNome);

    console.log(this.LoginSenha);
    // alert(LoginNome,LoginSenha);
  }
  constructor() { }

  ngOnInit() {
  }

}
