import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParceirosPage } from './parceiros.page';

describe('ParceirosPage', () => {
  let component: ParceirosPage;
  let fixture: ComponentFixture<ParceirosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParceirosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParceirosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
