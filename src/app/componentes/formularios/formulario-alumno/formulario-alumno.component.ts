import { Component, Output, EventEmitter } from '@angular/core';
import { AlumnoModel } from '../../../modelos/alumno-model';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})


export class FormularioAlumnoComponent  {
  @Output() public enviarDato = new EventEmitter<AlumnoModel>();

  public nuevoHistorial: AlumnoModel = {
    rut: '',
    nombre: '',
    apellido: '',
    edad: 0,
    seccion:''

  }

  public cambiarNombre(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.nombre = elemento.value;
  }

  public cambiarApellido(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.apellido = elemento.value;
  }

  public cambiarSeccion(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.seccion = elemento.value;
  }

  public cambiarEdad(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.edad = Number.parseInt(elemento.value);
  }

  public cambiarRut(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.rut = elemento.value;
  }

  public guardarHistorial(): void {
    const copia: AlumnoModel = {
      ...this.nuevoHistorial
    }
    this.enviarDato.emit(copia);
    console.log('Guardado:', this.nuevoHistorial.nombre)

    this.nuevoHistorial.nombre = '';
    this.nuevoHistorial.apellido = '';
    this.nuevoHistorial.rut = '';
    this.nuevoHistorial.edad = 0;
    this.nuevoHistorial.seccion = '';

  }

}
