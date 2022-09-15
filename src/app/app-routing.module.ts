import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './componentes/alumnos/alumno/alumno.component';
import { ClaseComponent } from './componentes/clases/clase/clase.component';
import { DocenteComponent } from './componentes/docentes/docente/docente.component';
import { ListarDocenteComponent } from './componentes/docentes/listar-docente/listar-docente.component';
import { ListarAlumnoComponent } from './componentes/alumnos/listar-alumno/listar-alumno.component';
import { ListarClaseComponent } from './componentes/clases/listar-clase/listar-clase.component';

import { AsistenciaComponent } from './componentes/asistencias/asistencia/asistencia.component';
import { ListarAsistenciasComponent } from './componentes/asistencias/listar-asistencias/listar-asistencias.component';

const routes: Routes = [
  {path: 'alumnos', component: AlumnoComponent},
  {path: 'clases', component: ClaseComponent},
  {path: 'docentes', component: DocenteComponent},
  {path: 'asistencias', component: AsistenciaComponent},


  {path: 'listar-alumnos', component: ListarAlumnoComponent},
  {path: 'listar-clases', component: ListarClaseComponent},
  {path: 'listar-docente', component: ListarDocenteComponent},
  {path: 'listar-asistencias', component: ListarAsistenciasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
