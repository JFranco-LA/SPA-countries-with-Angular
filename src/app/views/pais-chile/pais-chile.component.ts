import { Component } from '@angular/core';

@Component({
  selector: 'app-pais-chile',
  templateUrl: './pais-chile.component.html',
  styleUrls: ['./pais-chile.component.css']
})
export class PaisChileComponent {

  isLoading: boolean = false;

  myDataPais: any = {
    name: 'Chile',
    linkBander: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/2560px-Flag_of_Chile.svg.png',
    alt: 'bandera-chile',
    comments: {
      comment1: 'La bandera chilena que se izó por primera vez en medio de la decidida lucha por la independencia del imperio español no se parecía en nada a la versión actual. Una ley federal requiere a los chilenos que la hagan ondear en todos los hogares y negocios en ciertos días festivos anuales. La actual bandera nacional de Chile, adoptada en 1817, tiene un parecido sorprendente con una bandera utilizada por los indígenas mapuches de la región chilena, como se describe en el poema épico La Araucana, escrito por el poeta-soldado Alonso de Ercilla en el siglo XVI.',

      comment2: ' La bandera de Chile cuenta con dos franjas horizontales, la superior blanca y la inferior roja. En la esquina superior izquierda de la bandera hay una estrella blanca en el centro de un cuadrado azul.'
    }
  };

  constructor() {
    setInterval(() => { this.isLoading = true }, 450);
  }

}
