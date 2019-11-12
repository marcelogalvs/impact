import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-trabalhe',
  templateUrl: './trabalhe.page.html',
  styleUrls: ['./trabalhe.page.scss'], 
})
export class TrabalhePage implements OnInit {

  public txtNome: string;
  public txtEndereco: string;
  public txtIdade: string;
  public txtTelefone: string;
  public txtFormacao: string;
  public txtCursos: string;
  public txtProfissional: string;
  public txtDefeitos: string;
  public txtQualidades: string;
  public txtObjetivosProfissionais: string;
  public txtObjetivosPessoais: string;
  public txtPorque: string;

  items: Array<any>=[];

  constructor(
    private navCtrl: NavController,
    private http: HttpClient,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  goSubmit(){
    this.http
    .get('https://www.r2msolucoes.com.br/impact/insertTrabalhe.php?txtNome='+this.txtNome+'&txtIdade='+this.txtIdade+'&txtEndereco='+this.txtEndereco+'&txtTelefone='+this.txtTelefone+'&txtFormacao='+this.txtFormacao+'&txtCursos='+this.txtCursos
    +'&txtProfissional='+this.txtProfissional+'&txtDefeitos='+this.txtDefeitos+'&txtQualidades='+this.txtQualidades+'&txtObjetivosPessoais='+this.txtObjetivosPessoais+'&txtObjetivosProfissionais='+this.txtObjetivosProfissionais+'&txtPorque='+this.txtPorque)
    .subscribe((data : any) =>
    {
       console.dir(data);
       this.items = data;
       if(data[0].result=='sucesso'){
        this.cadastroOK();
        this.navCtrl.navigateBack('home');
       }
    },
    (error : any) =>
    {
       console.dir(error);
    });
  }

  async cadastroOK(){
    const toast = await this.toastController.create({
      message: 'Cadastro efetuado com sucesso!',
      duration: 2000
    });
    toast.present()
  }

  goBack(){
    this.navCtrl.navigateBack('home')
  }


}
