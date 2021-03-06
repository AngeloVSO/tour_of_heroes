import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../heroes/hero.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 1,
        name: 'Wonder Woman',
      },
      {
        id: 2,
        name: 'Iron Man',
      },
      {
        id: 3,
        name: 'Spider-man',
      },
      {
        id: 4,
        name: 'Batman',
      },
      {
        id: 5,
        name: 'Hulk',
      },
      {
        id: 6,
        name: 'Flash',
      },
      {
        id: 7,
        name: 'Thor',
      },
      {
        id: 8,
        name: 'Dr. Strange',
      },
      {
        id: 9,
        name: 'Wolverine',
      },
      {
        id: 10,
        name: 'Superman',
      },
      {
        name: 'Vegeta',
        id: 11,
      },
      {
        name: 'Goku',
        id: 12,
      },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
