import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSubrazaComponent } from './detalle-subraza.component';

describe('DetalleSubrazaComponent', () => {
  let component: DetalleSubrazaComponent;
  let fixture: ComponentFixture<DetalleSubrazaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleSubrazaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleSubrazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
