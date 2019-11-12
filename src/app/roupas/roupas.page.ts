import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roupas',
  templateUrl: './roupas.page.html',
  styleUrls: ['./roupas.page.scss'],
})
export class RoupasPage implements OnInit {

  
  public items : Array<any> = [];
  public pkId: string;

  constructor(
    private navCtrl: NavController,
    private http: HttpClient,
    public router: Router
  ) { }

  ngOnInit() {
    this.http
    .get('https://www.r2msolucoes.com.br/impact/searchRoupas.php')
    .subscribe((data : any) => 
    {
       console.dir(data);
       this.items = data;
    },
    (error : any) =>
    {
       console.dir(error);
    });
  }

  chamaDetalhes(pkId){
    this.router.navigate(['details/', pkId])
  }

  goBack(){
    this.navCtrl.navigateBack('home');
  }

}
