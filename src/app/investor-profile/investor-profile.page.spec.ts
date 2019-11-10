import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorProfilePage } from './investor-profile.page';

describe('InvestorProfilePage', () => {
  let component: InvestorProfilePage;
  let fixture: ComponentFixture<InvestorProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
