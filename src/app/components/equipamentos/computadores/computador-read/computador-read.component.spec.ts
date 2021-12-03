import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputadorReadComponent } from './computador-read.component';

describe('ComputadorReadComponent', () => {
  let component: ComputadorReadComponent;
  let fixture: ComponentFixture<ComputadorReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputadorReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputadorReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
