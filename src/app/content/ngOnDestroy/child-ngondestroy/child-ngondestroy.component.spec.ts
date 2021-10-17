import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNgondestroyComponent } from './child-ngondestroy.component';

describe('ChildNgondestroyComponent', () => {
  let component: ChildNgondestroyComponent;
  let fixture: ComponentFixture<ChildNgondestroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildNgondestroyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildNgondestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
