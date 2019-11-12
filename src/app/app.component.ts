import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Início',
      url: '/home',
      icon: '../assets/icones/home.png'
    },
    {
      title: 'Área do Cliente',
      url: '/area-cliente',
      icon: '../assets/icones/partners.png'
    },
    {
      title: 'Acessórios',
      url: '/acessorios',
      icon: '../assets/icones/clock.png'
    },
    {
      title: 'Calçados',
      url: '/calcados',
      icon: '../assets/icones/calcados.png'
    },
    {
      title: 'Roupas',
      url: '/roupas',
      icon: '../assets/icones/tshirts.png'
    },
    {
      title: 'Promoções',
      url: '/home',
      icon: '../assets/icones/promotion.png'
    },
    {
      title: 'Parceiros',
      url: '/parceiros',
      icon: '../assets/icones/partners.png'
    },
    {
      title: 'Cadastre-se',
      url: '/cadastro',
      icon: '../assets/icones/cadastro.png'
    },
    {
      title: 'Trabalhe na Impact',
      url: '/trabalhe',
      icon: '../assets/icones/workUs.png'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
