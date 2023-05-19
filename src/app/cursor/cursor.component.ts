import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'mi-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.css']
})
export class CursorComponent implements OnInit {
  isActive: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // Obtener las coordenadas del cursor
    const x = event.clientX;
    const y = event.clientY;

    // Lógica para activar/desactivar el efecto de luz
    if (x < 10 || y < 10 || x > window.innerWidth - 10 || y > window.innerHeight - 10) {
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  }
}
