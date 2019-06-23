import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorRazasComponent } from './contenedor-razas.component';

describe('ContenedorRazasComponent', () => {
  let component: ContenedorRazasComponent;
  let fixture: ComponentFixture<ContenedorRazasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenedorRazasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorRazasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
