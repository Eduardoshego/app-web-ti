import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetoresReadComponent } from './setores-read.component';

describe('SetoresReadComponent', () => {
  let component: SetoresReadComponent;
  let fixture: ComponentFixture<SetoresReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetoresReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetoresReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
