import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorListPage } from './investor-list.page';

describe('InvestorListPage', () => {
  let component: InvestorListPage;
  let fixture: ComponentFixture<InvestorListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
