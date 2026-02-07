import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonTypeColorService } from 'src/app/services/pokemon-type-color.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent {
  @Input() pokemon!: Pokemon;
  @Output() close = new EventEmitter();
  constructor(public typeColorService: PokemonTypeColorService) {}
}
