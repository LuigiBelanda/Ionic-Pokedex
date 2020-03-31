import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SaibaMaisBulbasauroPage } from './saiba-mais-bulbasauro.page';

const routes: Routes = [
  {
    path: '',
    component: SaibaMaisBulbasauroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SaibaMaisBulbasauroPage]
})
export class SaibaMaisBulbasauroPageModule {}
