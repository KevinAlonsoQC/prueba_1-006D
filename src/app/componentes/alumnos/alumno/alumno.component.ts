import { Component, Input} from '@angular/core';
import { AlumnoModel } from '../../../modelos/alumno-model';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent {
  @Input() public alumno!: AlumnoModel;
}
