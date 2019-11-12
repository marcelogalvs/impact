import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcadosPage } from './calcados.page';

describe('CalcadosPage', () => {
  let component: CalcadosPage;
  let fixture: ComponentFixture<CalcadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
