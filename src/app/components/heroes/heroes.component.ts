import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private _heroesService: HeroesService,
               private router: Router) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(index: number) {
    this.router.navigate(['/heroe', index]);
  }
}
