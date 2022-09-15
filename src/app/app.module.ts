import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './componentes/alumnos/alumno/alumno.component';
import { ClaseComponent } from './componentes/clases/clase/clase.component';
import { DocenteComponent } from './componentes/docentes/docente/docente.component';
import { ListarDocenteComponent } from './componentes/docentes/listar-docente/listar-docente.component';
import { ListarAlumnoComponent } from './componentes/alumnos/listar-alumno/listar-alumno.component';
import { ListarClaseComponent } from './componentes/clases/listar-clase/listar-clase.component';
import { AsistenciaComponent } from './componentes/asistencias/asistencia/asistencia.component';
import { ListarAsistenciasComponent } from './componentes/asistencias/listar-asistencias/listar-asistencias.component';
import { FormularioAlumnoComponent } from './componentes/formularios/formulario-alumno/formulario-alumno.component';
import { FormularioAsistenciaComponent } from './componentes/formularios/formulario-asistencia/formulario-asistencia.component';
import { FormularioSeccionComponent } from './componentes/formularios/formulario-seccion/formulario-seccion.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    ClaseComponent,
    DocenteComponent,
    ListarDocenteComponent,
    ListarAlumnoComponent,
    ListarClaseComponent,
    AsistenciaComponent,
    ListarAsistenciasComponent,
    FormularioAlumnoComponent,
    FormularioAsistenciaComponent,
    FormularioSeccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
