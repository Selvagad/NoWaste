import { TestBed } from '@angular/core/testing';

import { ObjetTrieRepositoryService } from './objet-trie-repository.service';

describe('ObjetTrieRepositoryService', () => {
  let service: ObjetTrieRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjetTrieRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
