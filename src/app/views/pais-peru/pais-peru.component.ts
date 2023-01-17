import { Component } from '@angular/core';

@Component({
  selector: 'app-pais-peru',
  templateUrl: './pais-peru.component.html',
  styleUrls: ['./pais-peru.component.css']
})
export class PaisPeruComponent {

  isLoading:boolean = false;

  myDataPais:any = {
    name: 'Perú',
    linkBander: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_Peru_%281884%E2%80%931950%29.svg/2560px-Flag_of_Peru_%281884%E2%80%931950%29.svg.png',
    alt: 'bandera-peru',
    comments: {
      comment1: 'La bandera de Perú es una bandera rectangular formada por tres bandas verticales de igual ancho, de color rojo las laterales y de blanco la central. Es un símbolo patrio del Perú. Cuenta con variantes para usos distintos: el Estado peruano usa el pabellón nacional y la bandera de guerra, que incluyen el escudo nacional al centro con distintos adherentes; mientras que los civiles usan la bandera nacional, de forma simple, sin el escudo nacional.',
      
      comment2: ' La primigenia bandera nacional del Perú fue desplegada por primera vez en la Plaza Mayor de Lima, el 28 de julio de 1821, en el momento de la proclamación de la independencia por el general José de San Martín. El diseño de esta primera bandera era distinto al actual, y solo se ha mantenido sus colores. El ejército del Perú desde el año 1821 emplea la bandera nacional para diferenciarse de otras fuerzas militares. La actual bandera fue constituida el 25 de febrero de 1825, durante el gobierno de Simón Bolívar.'
    }
  };

  constructor() {
    setInterval(() => { this.isLoading = true }, 300);
  }
  
}
