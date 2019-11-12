import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AcessoriosService {

  constructor(

    public http: HttpClient

  ) { }

  getProdutos(){
    return this.http.get('https://www.r2msolucoes.com.br/impact/searchAcessorios.php');
  }
}
