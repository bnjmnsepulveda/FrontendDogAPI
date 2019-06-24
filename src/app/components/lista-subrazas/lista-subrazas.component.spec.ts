import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSubrazasComponent } from './lista-subrazas.component';

describe('ListaSubrazasComponent', () => {
  let component: ListaSubrazasComponent;
  let fixture: ComponentFixture<ListaSubrazasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSubrazasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSubrazasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
