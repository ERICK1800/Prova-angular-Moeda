import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor-moeda',
  templateUrl: './conversor-moeda.component.html',
  styleUrls: ['./conversor-moeda.component.css']
})
export class ConversorMoedaComponent {
  num1: number = 0;
  num2: number = 0;
  moeda :string = "0";
  resp: number = 0;

  converter(){
    switch (this.moeda) {
      case "1":
        this.resp = this.num1 * this.num2; // Conversão de dólar para euro
        break;

      case "2":
        this.resp = this.num1 * this.num2; // Conversão de dólar para real
        break;

      case "3":
        this.resp = this.num1 * this.num2; // Conversão de euro para dólar
        break;

      case "4":
        this.resp = this.num1 * this.num2; // Conversão de euro para real
        break;

      case "5":
        this.resp =  this.num1 * this.num2; //Conversão de real para dólar
        break;

      case "6":
        this.resp =  this.num1 * this.num2; // Conversão de real para euro
        break;
    
      default:
        break;
    }
  }
}
