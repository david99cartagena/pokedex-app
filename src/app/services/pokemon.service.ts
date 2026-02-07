import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, forkJoin, Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private api = 'https://pokeapi.co/api/v2';

  private pokemonsSubject = new BehaviorSubject<Pokemon[] | null>(null);
  pokemons$ = this.pokemonsSubject.asObservable();

  loading$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  loadRandomPokemons(force = false): void {
    if (this.pokemonsSubject.value && !force) return;

    this.loading$.next(true);

    const ids = new Set<number>();
    while (ids.size < 30) {
      ids.add(Math.floor(Math.random() * 151) + 1);
    }

    const requests = [...ids].map((id) =>
      this.http.get<Pokemon>(`${this.api}/pokemon/${id}`),
    );

    forkJoin(requests).subscribe((pokemons) => {
      this.pokemonsSubject.next(pokemons);
      this.loading$.next(false);
    });
  }

  refreshPokemons(): void {
    this.loadRandomPokemons(true);
  }

  getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.api}/pokemon/${id}`);
  }
}
