import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})

export class CadastroPage implements OnInit {

  public url: String;
  public txtNome: string;
  public txtEndereco: string;
  public txtTelefone: string;
  public txtEmail: string;
  public txtCidade: string;
  public txtSenha: string;
  public txtNascimento: Date;

  items: Array<any>=[];

  constructor(
    private navCtrl: NavController,
    private http: HttpClient,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  goSubmit(){   

    // this.url='https://www.r2msolucoes.com.br/impact/insertCadastro.php?txtNome='+this.txtNome+'&txtIdade='+this.txtCidade+'&txtCidade='+this.txtEmail+'&txtEmail='+this.txtTelefone+'&txtNascimento='+this.txtNascimento;
    // console.log(this.url)

    this.http
    .get('https://r2msolucoes.com.br/impact/insertCadastro.php?txtNome='+this.txtNome+'&txtCidade='+this.txtCidade+'&txtEmail='+this.txtEmail+'&txtTelefone='+this.txtTelefone+'&txtNascimento='+this.txtNascimento+'&txtSenha='+this.txtSenha)
    .subscribe((data : any) =>
    {
       console.dir(data);
       this.items = data;
       if(data[0].result=='sucesso'){
        this.cadastroOK();
        this.navCtrl.navigateBack('area-cliente');
       }
    },
    (error : any) =>
    {
       console.dir(error);
    });
  }

  async cadastroOK(){
    const toast = await this.toastController.create({
      message: 'Cadastro efetuado com sucesso! Acesse seus dados na Área de Clientes',
      duration: 2000
    });
    toast.present()
  }

  goBack(){
    this.navCtrl.navigateBack('home')
  }

}
