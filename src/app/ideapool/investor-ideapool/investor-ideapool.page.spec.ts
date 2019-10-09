import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorIdeapoolPage } from './investor-ideapool.page';

describe('InvestorIdeapoolPage', () => {
  let component: InvestorIdeapoolPage;
  let fixture: ComponentFixture<InvestorIdeapoolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorIdeapoolPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorIdeapoolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
