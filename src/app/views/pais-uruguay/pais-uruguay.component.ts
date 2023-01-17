import { Component } from '@angular/core';

@Component({
  selector: 'app-pais-uruguay',
  templateUrl: './pais-uruguay.component.html',
  styleUrls: ['./pais-uruguay.component.css']
})
export class PaisUruguayComponent {

  isLoading: boolean = false;

  myDataPais: any = {
    name: 'Uruguay',
    linkBander: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Bandera_Uruguay_2018.png',
    alt: 'bandera-uruguay',
    comments: {
      comment1: 'Las primeras banderas utilizadas en el actual territorio de Uruguay corresponden al Imperio Español, cada batallón tenía su propia bandera, que podía incorporar diversos elementos heráldicos, incluyendo el escudo de armas del rey de España. Uno de los símbolos más empleados era la cruz de Borgoña, una cruz aspada en color rojo sobre tela blanca. La cruz de Borgoña era uno de los principales emblemas del Imperio español en ultramar, por lo que flameaba sobre los buques de guerra y era transportada por las milicias en el territorio colonial.',

      comment2: ' En 1816 Artigas establece el primer Pabellón de la Provincia Oriental, consistía de tres franjas horizontales la superior azul, la del medio blanca y la inferior roja, estos son identificados como los colores artiguistas inspirados por la Revolución Francesa.'
    }
  };

  constructor() {
    setInterval(() => { this.isLoading = true }, 450);
  }
}
