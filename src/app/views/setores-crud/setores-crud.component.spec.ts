import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetoresCrudComponent } from './setores-crud.component';

describe('SetoresCrudComponent', () => {
  let component: SetoresCrudComponent;
  let fixture: ComponentFixture<SetoresCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetoresCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetoresCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
