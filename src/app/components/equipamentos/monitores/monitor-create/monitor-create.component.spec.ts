import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorCreateComponent } from './monitor-create.component';

describe('MonitorCreateComponent', () => {
  let component: MonitorCreateComponent;
  let fixture: ComponentFixture<MonitorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
