import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagensClientePage } from './mensagens-cliente.page';

describe('MensagensClientePage', () => {
  let component: MensagensClientePage;
  let fixture: ComponentFixture<MensagensClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensagensClientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensagensClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
