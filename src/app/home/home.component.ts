import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  private videoDescription:string = 'Aplica el patrón strategy en una autenticación de usuarios utilizando interfaz gráfica en Java8.';

  constructor() { }

  ngOnInit() {
  }

}
