import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  items: Array<any>=[];
  emailUsuario:String; 
  senhaUsuario:String;
  nomeUsuario: String;

  constructor(
    private navCtrl: NavController,
    public storage: Storage,
    public http: HttpClient ,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.storage.get('nomeUsuario').then((name) => {
      this.nomeUsuario=name;
    });
  }

  goBack(){
    this.navCtrl.navigateBack('impact-points')
  }

  goLogin(){
    this.http
    .get('https://r2msolucoes.com.br/impact/searchLogin.php?refEmail='+ this.emailUsuario +'&refSenha=' + this.senhaUsuario)
    .subscribe((data : any) =>
    {
      this.items = data;

      console.log(this.items);
      
      if(data[0].result=='sim') {
        this.storage.set("nomeUsuario", data[0].nomeUsuario);
        this.storage.set("pontuacaoUsuario", data[0].pontuacaoUsuario);
        this.storage.set("idUsuario", data[0].idUsuario);
        this.loginOK();
        this.navCtrl.navigateBack('home');
      } else {
        this.loginError()
        this.emailUsuario="";
        this.senhaUsuario="";
      }

    },
    (error : any) =>
    {
       console.dir(error);
    });
  }
  async loginOK(){
    const toast = await this.toastController.create({
      message: 'Login efetuado com sucesso!',
      duration: 2000
    });
    toast.present()
  }

  async loginError(){
    const toast = await this.toastController.create({
      message: 'Usuário/Senha incorrentos!',
      duration: 2000
    });
    toast.present()
  }

  goCadastro(){
    this.navCtrl.navigateForward('cadastro');
  }

}
