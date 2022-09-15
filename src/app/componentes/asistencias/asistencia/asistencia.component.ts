import { Component, Input } from '@angular/core';
import { AsistenciaModel } from '../../../modelos/asistencia-model';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.scss']
})
export class AsistenciaComponent {
  @Input() public asistencia!: AsistenciaModel;

}
