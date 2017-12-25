import { InMemoryDbService } from 'angular-in-memory-web-api';

// Temporary
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const villains = [
      { id: 11, name: 'Atomic Skull' },
      { id: 12, name: 'Bizarro' },
      { id: 13, name: 'Doomsday' },
      { id: 14, name: 'Eradicator' },
      { id: 15, name: 'General Zod' },
      { id: 16, name: 'Jax-Ur' },
      { id: 17, name: 'Kryptonite Man' },
      { id: 18, name: 'Lex Luthor' }
    ];
    return { villains };
  }
}
