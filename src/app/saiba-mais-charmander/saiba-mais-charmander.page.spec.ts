import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaibaMaisCharmanderPage } from './saiba-mais-charmander.page';

describe('SaibaMaisCharmanderPage', () => {
  let component: SaibaMaisCharmanderPage;
  let fixture: ComponentFixture<SaibaMaisCharmanderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaibaMaisCharmanderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaibaMaisCharmanderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
