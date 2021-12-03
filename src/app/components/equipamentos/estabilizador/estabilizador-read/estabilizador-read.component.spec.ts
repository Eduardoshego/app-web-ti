import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabilizadorReadComponent } from './estabilizador-read.component';

describe('EstabilizadorReadComponent', () => {
  let component: EstabilizadorReadComponent;
  let fixture: ComponentFixture<EstabilizadorReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstabilizadorReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstabilizadorReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
