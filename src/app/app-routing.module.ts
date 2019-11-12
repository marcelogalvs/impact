import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'trabalhe', loadChildren: './trabalhe/trabalhe.module#TrabalhePageModule' },
  { path: 'impact-points', loadChildren: './impact-points/impact-points.module#ImpactPointsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'acessorios', loadChildren: './acessorios/acessorios.module#AcessoriosPageModule' },
  { path: 'details/:id', loadChildren: './details/details.module#DetailsPageModule' },
  { path: 'calcados', loadChildren: './calcados/calcados.module#CalcadosPageModule' },
  { path: 'roupas', loadChildren: './roupas/roupas.module#RoupasPageModule' },
  { path: 'parceiros', loadChildren: './parceiros/parceiros.module#ParceirosPageModule' },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'area-cliente', loadChildren: './area-cliente/area-cliente.module#AreaClientePageModule' },
  { path: 'perfil-cliente', loadChildren: './perfil-cliente/perfil-cliente.module#PerfilClientePageModule' },
  { path: 'dados-cliente', loadChildren: './dados-cliente/dados-cliente.module#DadosClientePageModule' },
  { path: 'mensagens-cliente', loadChildren: './mensagens-cliente/mensagens-cliente.module#MensagensClientePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
