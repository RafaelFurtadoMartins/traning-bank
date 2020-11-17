import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CadastroConcluidoComponent } from './cadastro-concluido/cadastro-concluido.component';
import { HomeLogadaComponent } from './home-logada/home-logada.component';
import { AuthGuard } from '../../auth.guard';
import { AuthService } from '../../auth.service';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado/acesso-negado.component';
<<<<<<< HEAD
import { MatSliderModule } from '@angular/material/slider';

=======
>>>>>>> parent of 166365c... add bootstrap

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    CadastroClientesComponent,
    LoginComponent,
    CadastroConcluidoComponent,
    HomeLogadaComponent,
    AcessoNegadoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSliderModule
    

  ],
  providers: [AuthGuard, AuthService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
