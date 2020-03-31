import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaibaMaisPidgeyPage } from './saiba-mais-pidgey.page';

describe('SaibaMaisPidgeyPage', () => {
  let component: SaibaMaisPidgeyPage;
  let fixture: ComponentFixture<SaibaMaisPidgeyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaibaMaisPidgeyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaibaMaisPidgeyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
