import { Injectable } from '@angular/core';
import { Hero } from '../heroes/hero.model';
import { HeroService } from './hero.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalContextService {
  heroes: Hero[];

  constructor(private heroService: HeroService) {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((data) => (this.heroes = data));
  }
}
