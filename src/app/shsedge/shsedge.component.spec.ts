import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { shsnedgeComponent } from './shsnedge.component';

describe('shsnedgeComponent', () => {
  let component: shsnedgeComponent;
  let fixture: ComponentFixture<shsnedgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ shsnedgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(shsnedgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
