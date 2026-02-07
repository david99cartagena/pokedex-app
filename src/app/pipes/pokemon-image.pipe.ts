import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Pipe({ name: 'pokemonImage' })
export class PokemonImagePipe implements PipeTransform {
  transform(pokemon: Pokemon): string {
    return (
      pokemon?.sprites?.other?.['official-artwork']?.front_default ||
      pokemon?.sprites?.front_default ||
      'assets/pokemon-placeholder.png'
    );
  }
}
