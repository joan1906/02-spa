import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  heroes = [];

  constructor(private _heroesService: HeroesService) {}

  ngOnInit(): void {}

  buscarHeroe(termino: string) {
    this.heroes = this._heroesService.buscarHeroes(termino);
  }
}
