import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-mensagens-cliente',
  templateUrl: './mensagens-cliente.page.html',
  styleUrls: ['./mensagens-cliente.page.scss'],
})
export class MensagensClientePage implements OnInit {

  nomeUsuario: any;
  idUsuario: any;
  items: any;

  txtMensagem: String;


  constructor(
    private storage: Storage,
    private navCtrl: NavController,
    private toastController: ToastController,
    public http: HttpClient
  ) { }

  ngOnInit() {
    this.storage.get('nomeUsuario').then((name) => {
      this.nomeUsuario=name;
      //console.log('Fala, ' + name + '! você já esta logado!');
    });

    this.storage.get('idUsuario').then((idusuario) => {
      this.idUsuario=idusuario;
      
      //console.log('Fala, ' + pontuacao + '! você já esta logado!');
    })

  }

  goSubmit(){   
    console.log("id: " + this.idUsuario +  " nome: " + this.nomeUsuario)
    this.http
    .get('https://r2msolucoes.com.br/impact/insertMensagens.php?txtId='+this.idUsuario+'&txtNome='+this.nomeUsuario+'&txtMensagem='+this.txtMensagem)
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
       this.cadastroError();
    });
  }

  async cadastroOK(){
    const toast = await this.toastController.create({
      message: 'Mensagem enviada com sucesso! Aguarde que entraremos em contato',
      duration: 2000
    });
    toast.present()
  }

  async cadastroError(){
    const toast = await this.toastController.create({
      message: 'Não foi possível enviar sua mensagem! Tente novamente mais tarde',
      duration: 2000
    });
    toast.present()
  }

  goBack(){
    this.navCtrl.navigateBack('area-cliente');
  }
}
