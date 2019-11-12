import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.page.html',
  styleUrls: ['./parceiros.page.scss'],
})
export class ParceirosPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  goBack(){
    this.navCtrl.navigateBack('home');
  }

}
