import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorDeleteComponent } from './monitor-delete.component';

describe('MonitorDeleteComponent', () => {
  let component: MonitorDeleteComponent;
  let fixture: ComponentFixture<MonitorDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
