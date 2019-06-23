import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRazasComponent } from './lista-razas.component';

describe('ListaRazasComponent', () => {
  let component: ListaRazasComponent;
  let fixture: ComponentFixture<ListaRazasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaRazasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRazasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
