import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactPointsPage } from './impact-points.page';

describe('ImpactPointsPage', () => {
  let component: ImpactPointsPage;
  let fixture: ComponentFixture<ImpactPointsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpactPointsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactPointsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
