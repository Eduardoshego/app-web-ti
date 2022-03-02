import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoSaidaCreateComponent } from './produto-saida-create.component';

describe('ProdutoSaidaCreateComponent', () => {
  let component: ProdutoSaidaCreateComponent;
  let fixture: ComponentFixture<ProdutoSaidaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoSaidaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoSaidaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
