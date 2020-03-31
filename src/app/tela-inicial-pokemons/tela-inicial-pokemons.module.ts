import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TelaInicialPokemonsPage } from './tela-inicial-pokemons.page';

const routes: Routes = [
  {
    path: '',
    component: TelaInicialPokemonsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TelaInicialPokemonsPage]
})
export class TelaInicialPokemonsPageModule {}
