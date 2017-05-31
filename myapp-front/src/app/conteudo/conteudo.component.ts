import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {
CriarEmail:String;
CriarNome:String;
CriarSenha:String;
CriarConfirmaSenha:String;
CriarCpf:String;

CriarConta(){
        console.log("Entro ")

  if(this.CriarEmail && this.CriarNome && this.CriarSenha && this.CriarConfirmaSenha && this.CriarCpf != null ){
          console.log("Deu Certo 2 ")

    if(this.CriarConfirmaSenha == this.CriarSenha  ){
      console.log("Deu Certo")
    }
  }
      console.log("Nao Deu Certo")

}
  constructor() { }

  ngOnInit() {
  }

}
