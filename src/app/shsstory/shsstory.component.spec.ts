import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { shsnstoryComponent } from './shsnstory.component';

describe('shsnstoryComponent', () => {
  let component: shsnstoryComponent;
  let fixture: ComponentFixture<shsnstoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ shsnstoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(shsnstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
