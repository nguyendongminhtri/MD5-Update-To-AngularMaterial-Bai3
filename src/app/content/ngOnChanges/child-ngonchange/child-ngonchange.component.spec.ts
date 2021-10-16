import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNgonchangeComponent } from './child-ngonchange.component';

describe('ChildNgonchangeComponent', () => {
  let component: ChildNgonchangeComponent;
  let fixture: ComponentFixture<ChildNgonchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildNgonchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildNgonchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
