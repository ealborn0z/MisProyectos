import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  valor1: number = 0; // Debe tener un valor inicial
  valor2: number = 0; // Debe tener un valor inicial
  operacion: string = '+'; // Debe tener un valor inicial y ser de tipo string
  resultado: number = 0; // Debe tener un valor inicial

  calcular() {
    const num1 = parseFloat(this.valor1.toString());
    const num2 = parseFloat(this.valor2.toString());
    switch (this.operacion) {
      case "+":
        this.resultado = num1 + num2;
        break;
      case "-":
        this.resultado = num1 - num2;
        break;
      case "*":
        this.resultado = num1 * num2;
        break;
      case "/":
        this.resultado = num1 / num2;
        break;
      default:
        this.resultado = 0;
        break;
    }
  }
}
