import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public videoDescription:string = 'Utiliza el patrón de diseño Strategy para realizar una autenticación con redes sociales. Además utilizamos lo nuevo de la libreria date de Java 8.  ';

  constructor() { }

  ngOnInit() {
  }

}
