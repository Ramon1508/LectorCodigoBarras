import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-lector',
  templateUrl: './lector.component.html',
  styleUrls: ['./lector.component.css']
})
export class LectorComponent implements OnInit {
  cadena = "";
  camaras = [];
  selectcamara: string = null;
  constructor() { }
  lectura(entrada){
    if (entrada != null && entrada != undefined){
      console.log(entrada);
      this.cadena =  "Encontrada: " + entrada;
    }
  }
  camerasFoundHandler(cams){
    if (cams != null && cams != undefined){
      cams.forEach(cam => {
        const camara = {
          deviceId: cam.deviceId,
          label: cam.label
        }
        this.camaras.push(camara);
      });
      this.selectcamara = this.camaras[0];
      if (this.cadena.length > 1) {
        this.selectcamara = this.camaras[1];
      }
    }
  }
  ngOnInit() {
  }

}
