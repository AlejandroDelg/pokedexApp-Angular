import { TestBed } from '@angular/core/testing';

import { PokemonnService } from './pokemonn.service';

describe('PokemonnService', () => {
  let service: PokemonnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
