import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorCrudComponent } from './supervisor-crud.component';

describe('SupervisorCrudComponent', () => {
  let component: SupervisorCrudComponent;
  let fixture: ComponentFixture<SupervisorCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
