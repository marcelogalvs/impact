import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dados-cliente',
  templateUrl: './dados-cliente.page.html',
  styleUrls: ['./dados-cliente.page.scss'],
})

export class DadosClientePage implements OnInit {

  nomeUsuario: String="";
  telefoneUsuario: String;
  emailUsuario: String;
  nascimentoUsuario: String;
  cidadeUsuario: String;

  camisetaUsuario: String;
  bermudaUsuario: String;
  calcaUsuario: String;
  tenisUsuario: String;

  idUsuario: String="";
  items: Array<any> = [];
  url: string;

  constructor(
    private navCtrl: NavController,
    public storage: Storage,
    public http: HttpClient
  ) { }

  ngOnInit() {
    this.storage.get('nomeUsuario').then((name) => {
      this.nomeUsuario=name;
      //console.log('Fala, ' + name + '! você já esta logado!');
    });

    this.storage.get('idUsuario').then((pontuacao) => {
      this.idUsuario=pontuacao;
      this.url='https://r2msolucoes.com.br/impact/searchDados.php?ref='+ this.idUsuario;
      //console.log('Fala, ' + pontuacao + '! você já esta logado!');
      this.goLogin()
    })

   ;
    
  }

  goBack(){
    this.navCtrl.navigateBack('area-cliente');
  }

  goLogin(){
    this.http
    .get(this.url)
    .subscribe((data : any) =>
    {
       console.dir(data);
       this.items = data;
       this.nomeUsuario=data[0].nomeUsuario;
       this.telefoneUsuario=data[0].telefoneUsuario;
       this.emailUsuario=data[0].emailUsuario;
       this.cidadeUsuario=data[0].cidadeUsuario;
       this.nascimentoUsuario=data[0].nascimentoUsuario;

       this.camisetaUsuario=data[0].camisetaUsuario;
       this.bermudaUsuario=data[0].bermudaUsuario;
       this.calcaUsuario=data[0].calcaUsuario;
       this.tenisUsuario=data[0].tenisUsuario;
    },
    (error : any) =>
    {
       console.dir(error);
    });
  }

}
