import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GiftService {

  url: string = "http://localhost:3000/gift";

  constructor() { }
}
