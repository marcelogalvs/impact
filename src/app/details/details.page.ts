import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  items: Array<any>=[];
  url: string="";
  valorId: any;
  tipo: string;


  constructor(
    public activeRoute: ActivatedRoute,
    private http: HttpClient,
    public navCtrl: NavController

  ) { }

  ngOnInit() {
    let produto = this.activeRoute.snapshot.paramMap.get('pkId');
    let produtoId = this.activeRoute.snapshot.params;
    
    let peganome = Array(produtoId);

    this.valorId=(peganome[0].id);

    this.url='https://www.r2msolucoes.com.br/impact/searchRoupasId.php?ref='+this.valorId;
    
    this.http
    .get(this.url)
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

  goBack(){
    this.navCtrl.back();
  }


}
