import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ContentComponent } from './content/content.component';
import { CadastroConcluidoComponent } from './cadastro-concluido/cadastro-concluido.component';
import { HomeLogadaComponent } from './home-logada/home-logada.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'cadastro-clientes', component: CadastroClientesComponent },
  { path: 'cadastro-concluido', component: CadastroConcluidoComponent },
  { path: 'home-logada', component: HomeLogadaComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  declarations: [],
  exports: [RouterModule]

})
export class AppRoutingModule { }
