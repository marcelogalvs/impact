import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-impact-points',
  templateUrl: './impact-points.page.html',
  styleUrls: ['./impact-points.page.scss'],
})
export class ImpactPointsPage implements OnInit {

  nomeUsuario: String="";
  pontuacaoUsuario: String="";

  constructor(
    private navCtrl: NavController,
    public storage: Storage,
    private toastController: ToastController,
    private alertController: AlertController
    ) { }

  ngOnInit() {
    this.storage.get('nomeUsuario').then((name) => {
      this.nomeUsuario=name;
      //console.log('Fala, ' + name + '! você já esta logado!');
    });

    this.storage.get('pontuacaoUsuario').then((pontuacao) => {
      this.pontuacaoUsuario=pontuacao;
    });
  }

  goBack(){
    this.navCtrl.navigateBack('area-cliente')
  }

  doLogin(){
    this.navCtrl.navigateForward("login");
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

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Impact Shop',
      subHeader: 'Aviso ao usuário',
      message: 'Você efetuou LOGOUT com sucesso.',
      buttons: ['OK']
    });

    await alert.present();
  }

  ionViewWillLeave(){
    this.storage.get('name').then((name) => {
      this.nomeUsuario=name;
      console.log('Fala, ' + name + '! você já esta logado!');
    },
    (error : any) => {
      console.log('Sorry. You not logged yet');
    });
  }

  goCadastro(){
    this.navCtrl.navigateForward('cadastro');
  }
  

}
