import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaibaMaisPikachuPage } from './saiba-mais-pikachu.page';

describe('SaibaMaisPikachuPage', () => {
  let component: SaibaMaisPikachuPage;
  let fixture: ComponentFixture<SaibaMaisPikachuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaibaMaisPikachuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaibaMaisPikachuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
