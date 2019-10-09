import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIdeaPage } from './edit-idea.page';

describe('EditIdeaPage', () => {
  let component: EditIdeaPage;
  let fixture: ComponentFixture<EditIdeaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditIdeaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIdeaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
