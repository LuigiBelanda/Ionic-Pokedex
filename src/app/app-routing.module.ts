import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'saiba-mais-pikachu', loadChildren: './saiba-mais-pikachu/saiba-mais-pikachu.module#SaibaMaisPikachuPageModule' },
  { path: 'saiba-mais-charmander', loadChildren: './saiba-mais-charmander/saiba-mais-charmander.module#SaibaMaisCharmanderPageModule' },
  { path: 'saiba-mais-bulbasauro', loadChildren: './saiba-mais-bulbasauro/saiba-mais-bulbasauro.module#SaibaMaisBulbasauroPageModule' },
  { path: 'saiba-mais-squirtle', loadChildren: './saiba-mais-squirtle/saiba-mais-squirtle.module#SaibaMaisSquirtlePageModule' },
  { path: 'saiba-mais-pidgey', loadChildren: './saiba-mais-pidgey/saiba-mais-pidgey.module#SaibaMaisPidgeyPageModule' },
  { path: 'tela-inicial-pokemons', loadChildren: './tela-inicial-pokemons/tela-inicial-pokemons.module#TelaInicialPokemonsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
