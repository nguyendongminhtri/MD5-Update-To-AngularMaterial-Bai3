import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNgdocheckComponent } from './child-ngdocheck.component';

describe('ChildNgdocheckComponent', () => {
  let component: ChildNgdocheckComponent;
  let fixture: ComponentFixture<ChildNgdocheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildNgdocheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildNgdocheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
