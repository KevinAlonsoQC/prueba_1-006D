import { Component, Input } from '@angular/core';
import { AlumnoModel } from '../../../modelos/alumno-model';

@Component({
  selector: 'app-listar-alumno',
  templateUrl: './listar-alumno.component.html',
  styleUrls: ['./listar-alumno.component.scss']
})
export class ListarAlumnoComponent {
  @Input() public alumnos!: Array<AlumnoModel>;

}
