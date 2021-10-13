import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBostrapComponent } from './table-bostrap.component';

describe('TableBostrapComponent', () => {
  let component: TableBostrapComponent;
  let fixture: ComponentFixture<TableBostrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableBostrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBostrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
