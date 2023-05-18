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
      descripcion: "Diseño y desarrollo sitios web funcionales y atractivos. Implemento lenguajes de programación, me aseguro de la compatibilidad con diferentes navegadores y optimizo el rendimiento del sitio. Trabajo en equipo, resuelvo problemas y me mantengo actualizado con las últimas tendencias y tecnologías web."
    },
    {
      puesto: "Administrador | CB Negocios Inmobiliarios",
      fecha: "2022",
      descripcion: "Gestioné eficientemente las operaciones diarias, supervisé al equipo, y me encargué de la administración y mantenimiento de las propiedades. Coordiné transacciones inmobiliarias, mantuve registros precisos y brindé un excelente servicio al cliente."
    },
    {
      puesto: "Barista",
      fecha: "2019 - 2021",
      descripcion: "preparé y serví bebidas de alta calidad basadas en el espresso, brindé un servicio amable y personalizado a los clientes, y mantuve un ambiente limpio y acogedor. Trabajé en equipo, cumplí con estándares de calidad y contribuí al éxito del establecimiento."
    },
    {
      puesto: "Vendedor | Tecno+",
      fecha: "2021",
      descripcion: "Brindé atención al cliente, realicé ventas, asesoré sobre productos y logré alcanzar objetivos de ventas. Fomenté relaciones sólidas con los clientes y mantuve un enfoque en la satisfacción del cliente."
    },
    {
      puesto: "Profesor Adjunto | Instituto Marie Curie",
      fecha: "2016",
      descripcion: "Brindé apoyo en actividades académicas, impartí clases, colaboré con el profesorado y facilité el desarrollo de habilidades en los estudiantes."
    },
    {
      puesto: "Ayudante de Farmacia | Farmacia Zingaretti",
      fecha: "2012",
      descripcion: "Brindé apoyo en todas las actividades para un funcionamiento eficiente, incluyendo recepción, inventario, dispensación de medicamentos y atención al cliente."
    }
  ];

}
