import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalLoginPage } from './professional-login.page';

describe('ProfessionalLoginPage', () => {
  let component: ProfessionalLoginPage;
  let fixture: ComponentFixture<ProfessionalLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
