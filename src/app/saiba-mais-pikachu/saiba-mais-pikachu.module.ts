import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SaibaMaisPikachuPage } from './saiba-mais-pikachu.page';

const routes: Routes = [
  {
    path: '',
    component: SaibaMaisPikachuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SaibaMaisPikachuPage]
})
export class SaibaMaisPikachuPageModule {}
