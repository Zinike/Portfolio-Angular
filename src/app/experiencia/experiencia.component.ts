import { Component } from '@angular/core';

@Component({
  selector: 'mi-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {

  experiencias: any[] = [
    {
      puesto: "Desarrollador Web",
      fecha: "2021 - Actualidad",
      descripcion: "Creación de aplicaciones web completas, gestión y mantenimiento de trabajos realizados"
    },
    {
      puesto: "Administrador | CB Negocios Inmobiliarios",
      fecha: "2022",
      descripcion: "Uso de paquete office para la gestión de propiedades"
    },
    {
      puesto: "Barista",
      fecha: "2019 - 2021",
      descripcion: "Atención al público, administración del stock y gestión de caja, preparación de bebidas en base al espresso"
    },
    {
      puesto: "Vendedor | Tecno+",
      fecha: "2021",
      descripcion: "Atención al público"
    },
    {
      puesto: "Profesor Adjunto | Instituto Marie Curie",
      fecha: "2016",
      descripcion: "Enseñanza a alumnos de diferentes áreas"
    },
    {
      puesto: "Ayudante de Farmacia | Farmacia Zingaretti",
      fecha: "2012",
      descripcion: "Atención al cliente"
    }
  ];

}
