import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  private slogan:string = 'Bienvenidos Todos, ¡sin zapatos por favor!';
  private initial:string = 'Inicio';
  private profesionalProfile:string = 'Perfil Porfesional';
  private galery:string = 'Galeria';
  private moments:string = 'Momentos';

  private IMG_PATH:string = 'assets/imgs/logo.jpg';

  constructor() { }

  ngOnInit() {
  }

}
