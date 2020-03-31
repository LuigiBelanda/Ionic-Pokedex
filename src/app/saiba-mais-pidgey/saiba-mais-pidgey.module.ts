import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SaibaMaisPidgeyPage } from './saiba-mais-pidgey.page';

const routes: Routes = [
  {
    path: '',
    component: SaibaMaisPidgeyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SaibaMaisPidgeyPage]
})
export class SaibaMaisPidgeyPageModule {}
