import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoriosPage } from './acessorios.page';

describe('AcessoriosPage', () => {
  let component: AcessoriosPage;
  let fixture: ComponentFixture<AcessoriosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcessoriosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessoriosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
