import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonTypeColorService {
  private typeClassMap: Record<string, string> = {
    fire: 'bg-danger',
    water: 'bg-primary',
    grass: 'bg-success',
    electric: 'bg-warning text-dark',
    ice: 'bg-info text-dark',
    psychic: 'bg-pink',
    rock: 'bg-secondary',
    ground: 'bg-brown',
    bug: 'bg-success',
    ghost: 'bg-dark',
    dragon: 'bg-purple',
    poison: 'bg-purple',
    fighting: 'bg-danger',
    flying: 'bg-info',
    steel: 'bg-steel text-dark',
    dark: 'bg-dark',

    // tipos claros → con borde
    fairy: 'bg-light text-dark badge-bordered',
    normal: 'bg-light text-dark badge-bordered',
    stellar: 'bg-light text-dark badge-bordered',
    unknown: 'bg-light text-dark badge-bordered',
  };

  getClass(type: string): string {
    return this.typeClassMap[type] ?? 'bg-secondary';
  }
}
