import { Component, Input } from '@angular/core';
import { ClaseModel } from '../../../modelos/clase-model';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.scss']
})
export class ClaseComponent {
  @Input() public clase!: ClaseModel;

}
