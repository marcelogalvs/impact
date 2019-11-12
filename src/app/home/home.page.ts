import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public storage: Storage
  ) {}

  
  slider = [
    {
      descricao: "Tênis DC E.Tribeka SE traz todo o estilo dos anos 90, com um solado de borracha em três densidades diferentes, palmilhas ORTHOLITE que garante um extremo conforto e reforço na estabilidade durante as manobras.",
      preco: "",
      imagem: '../../assets/slider/dcShoes.jpg'
    },
    
    {
      descricao: "Novo modelo Emergente pra por na lixa sem dó! Sintético com detalhes silkados e Forro Esportivo; Solado de borracha A+ garantindo resistência extrema ao desgaste sem perder o grip e a flexibilidade. Palmilha Circular Light para abranger o uso diário e a prática do skate.",
      preco: "",
      imagem: '../../assets/slider/uos.jpg'
    },
    
    {
      descricao: "Para Anthony Van Engelen, 'bom' não é o suficiente. Ele mal se satisfaz com o que é 'incrível'. Você pode imaginar como foi exaustivo o processo de design para o seu novo Pro Shoe. Ele exigiu o mais intransigente e tecnicamente avançado tênis de skate que nós já lançamos. The AVE PRO com a nova sola ULTIMATEWAFFLE™",
      preco: "",
      imagem: '../../assets/slider/vans.jpg'
    }

  ];


}
