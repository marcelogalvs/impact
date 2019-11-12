import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MensagensClientePage } from './mensagens-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: MensagensClientePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MensagensClientePage]
})
export class MensagensClientePageModule {}
