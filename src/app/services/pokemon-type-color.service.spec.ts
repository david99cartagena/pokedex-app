import { TestBed } from '@angular/core/testing';

import { PokemonTypeColorService } from './pokemon-type-color.service';

describe('PokemonTypeColorService', () => {
  let service: PokemonTypeColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonTypeColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
