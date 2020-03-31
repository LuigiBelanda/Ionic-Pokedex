import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SaibaMaisSquirtlePage } from './saiba-mais-squirtle.page';

const routes: Routes = [
  {
    path: '',
    component: SaibaMaisSquirtlePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SaibaMaisSquirtlePage]
})
export class SaibaMaisSquirtlePageModule {}
