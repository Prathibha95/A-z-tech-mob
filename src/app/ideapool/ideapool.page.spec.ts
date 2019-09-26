import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeapoolPage } from './ideapool.page';

describe('IdeapoolPage', () => {
  let component: IdeapoolPage;
  let fixture: ComponentFixture<IdeapoolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeapoolPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeapoolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
