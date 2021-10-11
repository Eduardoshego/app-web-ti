import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchsCrudComponent } from './switchs-crud.component';

describe('SwitchsCrudComponent', () => {
  let component: SwitchsCrudComponent;
  let fixture: ComponentFixture<SwitchsCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchsCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
