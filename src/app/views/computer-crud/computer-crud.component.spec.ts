import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerCrudComponent } from './computer-crud.component';

describe('ComputerCrudComponent', () => {
  let component: ComputerCrudComponent;
  let fixture: ComponentFixture<ComputerCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputerCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
