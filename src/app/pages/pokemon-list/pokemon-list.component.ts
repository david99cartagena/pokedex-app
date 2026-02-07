import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonTypeColorService } from 'src/app/services/pokemon-type-color.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  selectedPokemon: Pokemon | null = null;
  loading = false;

  constructor(
    private service: PokemonService,
    private route: ActivatedRoute,
    private router: Router,
    public typeColorService: PokemonTypeColorService,
  ) {}

  ngOnInit() {
    // this.loading = true;
    this.service.loading$.subscribe((l) => (this.loading = l));

    this.service.loadRandomPokemons();

    this.service.pokemons$.subscribe((p) => {
      if (p) this.pokemons = p;
    });

    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) this.openDetail(+id, false);
      else this.selectedPokemon = null;
    });
  }

  trackById(_: number, p: Pokemon) {
    return p.id;
  }

  openDetail(id: number, navigate = true) {
    this.service.getPokemonById(id).subscribe({
      next: (p) => {
        this.selectedPokemon = p;
        if (navigate) this.router.navigate(['/pokemon', id]);
      },
      error: (err) => {
        console.error('Error al cargar Pokémon:', err);
        this.selectedPokemon = {
          id,
          name: `❌ Este Pokémon no existe`,
          sprites: { front_default: '' },
          types: [],
          abilities: [],
        };
        if (navigate) this.router.navigate(['/pokemon', id]);
      },
    });
  }

  closeDetail() {
    this.selectedPokemon = null;
    this.router.navigate(['/']);
  }

  refresh() {
    this.service.refreshPokemons();
  }
}
