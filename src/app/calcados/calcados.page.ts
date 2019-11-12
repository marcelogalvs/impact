import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CalcadosService } from '../api/calcados.service';

@Component({
  selector: 'app-calcados',
  templateUrl: './calcados.page.html',
  styleUrls: ['./calcados.page.scss'],
})
export class CalcadosPage implements OnInit {

  public items : Array<any> = [];
  public id: any;

  constructor(
    private navCtrl: NavController,
    private http: HttpClient,
    public router: Router,
    public calcadosService: CalcadosService

  ) { }

  ngOnInit() {

    this.calcadosService.getProdutos().subscribe((data:any)=>{
      this.items = data;
    })

    this.http
    .get('http://www.r2msolucoes.com.br/impact/searchCalcados.php')
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
