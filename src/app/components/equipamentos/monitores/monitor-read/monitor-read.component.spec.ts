import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorReadComponent } from './monitor-read.component';

describe('MonitorReadComponent', () => {
  let component: MonitorReadComponent;
  let fixture: ComponentFixture<MonitorReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
