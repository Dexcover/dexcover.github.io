import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  public slogan:string = 'Bienvenidos Todos, ¡sin zapatos por favor!';
  public initial:string = 'Inicio';
  public profesionalProfile:string = 'Perfil Porfesional';
  public galery:string = 'Galeria';
  public moments:string = 'Momentos';

  public IMG_PATH:string = 'assets/imgs/logo.jpg';

  constructor() { }

  ngOnInit() {
  }

}
