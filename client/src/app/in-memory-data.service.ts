import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Member } from './member';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const members = [
      { id: 11, name: 'Family Member11', giftName1: 'iPhone XS' },
      { id: 13, name: 'Family Member13', giftName1: 'Galaxy Fold' },
      { id: 14, name: 'Family Member14', giftName1: 'French Press' },
      { id: 15, name: 'Family Member15', giftName1: 'Loveseat' },
      { id: 16, name: 'Family Member16', giftName1: 'Spa Giftcard' },
      { id: 17, name: 'Family Member17', giftName1: 'Sonos' },
      { id: 18, name: 'Family Member18', giftName1: 'New Ties' },
      { id: 19, name: 'Family Member19', giftName1: 'Amazon Prime Subscription' },
      { id: 20, name: 'Family Member20', giftName1: 'Bicycle' }
    ];
    return { members };
  }

  // Overrides the genId method to ensure that a member always has an id.
  // If the members array is empty,
  // the method below returns the initial number (11).
  // if the members array is not empty, the method below returns the highest
  // member id + 1.
  genId(members: Member[]): number {
    return members.length > 0 ? Math.max(...members.map(member => member.id)) + 1 : 11;
  }
}