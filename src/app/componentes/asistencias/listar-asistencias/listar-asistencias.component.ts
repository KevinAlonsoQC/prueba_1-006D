import { Component, Input } from '@angular/core';
import { AsistenciaModel } from '../../../modelos/asistencia-model';


@Component({
  selector: 'app-listar-asistencias',
  templateUrl: './listar-asistencias.component.html',
  styleUrls: ['./listar-asistencias.component.scss']
})
export class ListarAsistenciasComponent {
  @Input() public asistencias!: Array<AsistenciaModel>;
}
