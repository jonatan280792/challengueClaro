import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.html',
})
export class PricesComponent implements OnInit {
  @Input() dataPrices: any;

  constructor() { }

  ngOnInit() {
    console.log(this.dataPrices);
  }
}
