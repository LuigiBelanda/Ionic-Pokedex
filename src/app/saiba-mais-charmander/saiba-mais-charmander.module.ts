import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SaibaMaisCharmanderPage } from './saiba-mais-charmander.page';

const routes: Routes = [
  {
    path: '',
    component: SaibaMaisCharmanderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SaibaMaisCharmanderPage]
})
export class SaibaMaisCharmanderPageModule {}
