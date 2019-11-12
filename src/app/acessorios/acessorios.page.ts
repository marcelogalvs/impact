import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AcessoriosService } from '../api/acessorios.service';

@Component({
  selector: 'app-acessorios',
  templateUrl: './acessorios.page.html',
  styleUrls: ['./acessorios.page.scss'],
})
export class AcessoriosPage implements OnInit {

  public items : Array<any> = [];
  public id: any;

  constructor(
    private navCtrl: NavController,
    private http: HttpClient,
    public router: Router,
    public acessoriosService: AcessoriosService

  ) { }

  ngOnInit() {

    this.acessoriosService.getProdutos().subscribe((data:any)=>{
      this.items = data;
    })

    // this.http
    // .get('http://www.r2msolucoes.com.br/impact/searchAcessorios.php')
    // .subscribe((data : any) =>
    // {
    //    console.dir(data);
    //    this.items = data;
    // },
    // (error : any) =>
    // {
    //    console.dir(error);
    // });
  }

  chamaDetalhes(pkId){
    this.router.navigate(['details/', pkId])
  }

  goBack(){
    this.navCtrl.navigateBack('home');
  }

}
