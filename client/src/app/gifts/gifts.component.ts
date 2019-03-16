import { Component, OnInit } from '@angular/core';
import { Gift } from '../gift';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent implements OnInit {
  gifts: Gift[];

  constructor() { }

  ngOnInit() {
    this.getGifts();
  }

  // I need to create a giftService.
  getGifts(): void {
    this.giftService.getGifts()
      .subscribe(gifts => this.gifts = gifts);
  }

}
