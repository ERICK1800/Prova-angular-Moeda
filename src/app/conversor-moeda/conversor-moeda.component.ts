import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor-moeda',
  templateUrl: './conversor-moeda.component.html',
  styleUrls: ['./conversor-moeda.component.css']
})
export class ConversorMoedaComponent {
  num1: number = 0;
  num2: number = 0;
  moeda: number = 0;
  resp: number = 0;

  converter(){
    this.resp = this.num1 + this.num2;
/*
    switch (this.moeda) {
      case 1:
        this.resp = 1;
        break;

      case 2:
        this.resp = 2;
        break;

      case 3:
        this.resp = 3;
        break;

      case 4:
        this.resp = 4;
        break;

      case 5:
        this.resp = 5;
        break;

      case 6:
        this.resp = 6;
        break;
    
      default:
        break;
    }
    */
  }
}
