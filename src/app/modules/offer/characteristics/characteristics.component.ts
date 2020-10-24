import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.html',
})
export class CharacteristicsComponent implements OnInit {
  @Input() dataCharacteristics: any;

  constructor() { }

  ngOnInit() {
    console.log(this.dataCharacteristics);
  }
}
