import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalhePage } from './trabalhe.page';

describe('TrabalhePage', () => {
  let component: TrabalhePage;
  let fixture: ComponentFixture<TrabalhePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabalhePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
