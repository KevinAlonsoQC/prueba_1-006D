import { Component, Input } from '@angular/core';
import { ClaseModel } from '../../../modelos/clase-model';

@Component({
  selector: 'app-listar-clase',
  templateUrl: './listar-clase.component.html',
  styleUrls: ['./listar-clase.component.scss']
})
export class ListarClaseComponent  {
  @Input() public clases!: Array<ClaseModel>;
}
