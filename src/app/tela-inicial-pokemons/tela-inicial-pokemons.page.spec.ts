import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInicialPokemonsPage } from './tela-inicial-pokemons.page';

describe('TelaInicialPokemonsPage', () => {
  let component: TelaInicialPokemonsPage;
  let fixture: ComponentFixture<TelaInicialPokemonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaInicialPokemonsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaInicialPokemonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
