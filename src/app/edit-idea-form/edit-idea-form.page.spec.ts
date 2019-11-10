import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIdeaFormPage } from './edit-idea-form.page';

describe('EditIdeaFormPage', () => {
  let component: EditIdeaFormPage;
  let fixture: ComponentFixture<EditIdeaFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditIdeaFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIdeaFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
