import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorViewMorePage } from './investor-view-more.page';

describe('InvestorViewMorePage', () => {
  let component: InvestorViewMorePage;
  let fixture: ComponentFixture<InvestorViewMorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorViewMorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorViewMorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
