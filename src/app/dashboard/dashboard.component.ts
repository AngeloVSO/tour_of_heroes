import { Hero } from './../heroes/hero.model';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { GlobalContextService } from '../services/global-context.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = this.globalContextService.heroes;

  constructor(
    private heroService: HeroService,
    private globalContextService: GlobalContextService
  ) {}

  ngOnInit(): void {
    // this.getTopHeroes();
  }

  getTopHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((data) => (this.heroes = data.slice(1, 5)));
  }
}
