import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-area-cliente',
  templateUrl: './area-cliente.page.html',
  styleUrls: ['./area-cliente.page.scss'],
})
export class AreaClientePage implements OnInit {

  nomeUsuario: String;
  idCliente: any;


  constructor(
    public storage: Storage,
    private navCtrl: NavController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.storage.get('nomeUsuario').then((name) => {
      this.nomeUsuario=name;
    });
  }

  goBack(){
    this.navCtrl.navigateBack('home');
  }

  goLogin(){
    this.navCtrl.navigateForward('login');
  }

  
  goPerfilCliente(){
    this.navCtrl.navigateForward("perfil-cliente");
  }

  goCadastro(){
    this.navCtrl.navigateForward("cadastro");
  }

  goDados(){
    this.navCtrl.navigateForward('dados-cliente');
  }

  goImpactPoints(){
    this.navCtrl.navigateForward("impact-points");
  }

  goMensagens(){
    this.navCtrl.navigateForward('mensagens-cliente');
  }

  goLogout(){
    this.storage.remove('nomeUsuario').then((name) => {
      console.log('Ola... nome removido do storage: ' + name + '! ');
    });
    this.storage.remove('pontuacaoUsuario').then((name) => {
      console.log('Ola... nome removido do storage: ' + name + '! ');
    });
    this.presentToast();
    this.navCtrl.navigateBack('home')
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Você efetuou Logout com sucesso!',
      duration: 2000
    });
    toast.present();
  }

  

}
