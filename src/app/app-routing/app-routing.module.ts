import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from '../content/content.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'cadastro', component: ContentComponent }
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
