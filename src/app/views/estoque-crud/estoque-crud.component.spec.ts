import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueCrudComponent } from './estoque-crud.component';

describe('EstoqueCrudComponent', () => {
  let component: EstoqueCrudComponent;
  let fixture: ComponentFixture<EstoqueCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstoqueCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstoqueCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
