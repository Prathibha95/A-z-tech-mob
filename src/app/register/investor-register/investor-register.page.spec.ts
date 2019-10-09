import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorRegisterPage } from './investor-register.page';

describe('InvestorRegisterPage', () => {
  let component: InvestorRegisterPage;
  let fixture: ComponentFixture<InvestorRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorRegisterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
