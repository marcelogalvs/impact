import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.page.html',
  styleUrls: ['./perfil-cliente.page.scss'],
})
export class PerfilClientePage implements OnInit {

  nomeUsuario: String;

  txtCamiseta: any;
  txtBermuda: any;
  txtCalca: any;
  txtTenis: any;

  idUsuario: any;
  url: any;
  items: Array<any>=[];



  constructor(
    private storage: Storage,
    private navCtrl: NavController,
    public http: HttpClient,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.storage.get('nomeUsuario').then((name) => {
      this.nomeUsuario=name;
      //console.log('Fala, ' + name + '! você já esta logado!');
    });

    this.storage.get('idUsuario').then((pontuacao) => {
      this.idUsuario=pontuacao;
      
      //console.log('Fala, ' + pontuacao + '! você já esta logado!');
    })
  }

  goSubmit(){   

    // this.url='https://www.r2msolucoes.com.br/impact/insertCadastro.php?txtNome='+this.txtNome+'&txtIdade='+this.txtCidade+'&txtCidade='+this.txtEmail+'&txtEmail='+this.txtTelefone+'&txtNascimento='+this.txtNascimento;
    // console.log(this.url)

    this.http
    .get('https://r2msolucoes.com.br/impact/insertPerfil.php?txtCamiseta='+this.txtCamiseta+'&txtBermuda='+this.txtBermuda+'&txtCalca='+this.txtCalca+'&txtTenis='+this.txtTenis+'&txtId='+this.idUsuario)
    .subscribe((data : any) =>
    {
       console.dir(data);
       this.items = data;
       if(data[0].result=='sucesso'){
        this.cadastroOK();
        this.navCtrl.navigateBack('area-cliente');
       }
    },
    (error : any) =>
    {
       console.dir(error);
    });
  }

  async cadastroOK(){
    const toast = await this.toastController.create({
      message: 'Cadastro efetuado com sucesso! Acesse seus dados na Área de Clientes',
      duration: 2000
    });
    toast.present()
  }


  goBack (){
    this.navCtrl.navigateBack('area-cliente');
  }

}
