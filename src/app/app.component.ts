import { Component } from '@angular/core';
import { AlumnoModel } from '.././app/modelos/alumno-model';
import { ClaseModel } from '.././app/modelos/clase-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public elementosGuardados: Array<AlumnoModel> = [];
  public clasesGuardados: Array<ClaseModel> = [];

  public agregarNuevo(nuevo: AlumnoModel): void {
    this.elementosGuardados.push(nuevo);
  }

  public agregarNuevoClase(nuevo: ClaseModel): void {
    this.clasesGuardados.push(nuevo);
  }
}
