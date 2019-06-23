import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRazaComponent } from './detalle-raza.component';

describe('DetalleRazaComponent', () => {
  let component: DetalleRazaComponent;
  let fixture: ComponentFixture<DetalleRazaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleRazaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleRazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
