import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintsCrudComponent } from './prints-crud.component';

describe('PrintsCrudComponent', () => {
  let component: PrintsCrudComponent;
  let fixture: ComponentFixture<PrintsCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintsCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
