import { Component } from '@angular/core';

@Component({
  selector: 'app-web-presentation',
  templateUrl: './web-presentation.component.html',
  styleUrl: './web-presentation.component.scss'
})
export class WebPresentationComponent {
  categoriaSeleccionada: string = 'Angular'; // Establecer Angular como categoría predeterminada

  seleccionarCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
  }
  
  
}
