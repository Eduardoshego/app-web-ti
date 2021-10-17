import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueCreatedComponent } from './estoque-created.component';

describe('EstoqueCreatedComponent', () => {
  let component: EstoqueCreatedComponent;
  let fixture: ComponentFixture<EstoqueCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstoqueCreatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstoqueCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
