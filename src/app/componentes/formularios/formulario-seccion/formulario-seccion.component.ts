import { Component, Output,EventEmitter } from '@angular/core';
import { ClaseModel } from '../../../modelos/clase-model';

@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent {

  @Output() public enviarDato = new EventEmitter<ClaseModel>();

  public nuevoHistorial: ClaseModel = {
    seccion: '',
    nombre: '',

  }

  public cambiarNombre(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.nombre = elemento.value;
  }

  public cambiarSeccion(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.seccion = elemento.value;
  }


  public guardarHistorialSecc(): void {
    const copia: ClaseModel = {
      ...this.nuevoHistorial
    }
    this.enviarDato.emit(copia);
    console.log('Guardado:', this.nuevoHistorial.nombre)

    this.nuevoHistorial.nombre = '';
    this.nuevoHistorial.seccion = '';

  }

}
