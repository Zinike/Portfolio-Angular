import { Component } from '@angular/core';

@Component({
  selector: 'mi-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  educaciones: any[] = [

    {
      titulo: "Curso",
      institucion: "Argentina Programa 2.0",
      fecha: "2022",
      descripcion: "Curso de programacion con salida de Desarrollador Web Full-Stack"
    },
    {
      titulo: "Secundario",
      institucion: "Instituto Nuestra Madre de la Merced",
      fecha: "2012",
      descripcion: "Bachiller con orientacion en Ciencias Sociales"
    }
  ];
  
}
