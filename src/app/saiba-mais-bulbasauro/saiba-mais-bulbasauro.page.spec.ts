import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaibaMaisBulbasauroPage } from './saiba-mais-bulbasauro.page';

describe('SaibaMaisBulbasauroPage', () => {
  let component: SaibaMaisBulbasauroPage;
  let fixture: ComponentFixture<SaibaMaisBulbasauroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaibaMaisBulbasauroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaibaMaisBulbasauroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
