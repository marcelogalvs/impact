import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosClientePage } from './dados-cliente.page';

describe('DadosClientePage', () => {
  let component: DadosClientePage;
  let fixture: ComponentFixture<DadosClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosClientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
