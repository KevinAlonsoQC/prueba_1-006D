import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAsistenciaComponent } from './formulario-asistencia.component';

describe('FormularioAsistenciaComponent', () => {
  let component: FormularioAsistenciaComponent;
  let fixture: ComponentFixture<FormularioAsistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAsistenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
