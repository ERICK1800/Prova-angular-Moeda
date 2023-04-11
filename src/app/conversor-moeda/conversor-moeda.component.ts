import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor-moeda',
  templateUrl: './conversor-moeda.component.html',
  styleUrls: ['./conversor-moeda.component.css']
})
export class ConversorMoedaComponent {
  num1: number = 0;
  num2: number = 0;
  moeda: string = "";
  resp: string = "";
  conv: string = "";

  converter(){

    this.conv = (this.num1 * this.num2).toFixed(2);

    switch (this.moeda) {
      case "1":
        this.resp = 'A conversão de Dólar Americano (USD) para Euro (EUR) é ficou em: ' + this.conv;
        break;

      case "2":
        this.resp = 'A conversão de Dólar Americano (USD) para Real Brasileiro (BRL) é ficou em: ' + this.conv;
        break;

      case "3":
        this.resp = 'A conversão de Euro (EUR) para Dólar Americano (USD) é ficou em: ' + this.conv;
        break;

      case "4":
        this.resp = 'A conversão de Euro (EUR) para Real Brasileiro (BRL) é ficou em: ' + this.conv;
        break;

      case "5":
        this.resp = 'A conversão de Real Brasileiro (BRL) para Dólar Americano (USD) é ficou em: ' + this.conv;
        break;

      case "6":
        this.resp = 'A conversão de Real Brasileiro (BRL) para Euro (EUR) é ficou em: ' + this.conv;
        break;
    
      default:
        break;
    }
  }
}
