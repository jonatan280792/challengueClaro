import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClaroService } from '@services/claro-service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.html'
})
export class OfferComponent implements OnInit {
  public filterSearch: string;
  public dataSelect: any;
  dataOffers: any;
  lstOffers: any = [];
  

  public formOffers: FormGroup;
  ctrlOffers = new FormControl();
  isSearch: boolean;
  panelOpenState = false;

  constructor(
    private fb: FormBuilder,
    private claroService: ClaroService
  ) { }

  ngOnInit() {
    this.initForm();
    this.initValues();
    
  }

  initValues() {
    this.lstOffers = [];
    this.dataOffers = this.claroService.getData();
    console.log(this.dataOffers);
    
    this.dataOffers.forEach(element => {
      const dataElement = {
        id: element.id,
        name: element.versions[0].name,
        characteristics: element.versions[0].characteristics,
        prices: element.versions[0].productOfferingPrices
      }
      this.lstOffers.push(dataElement);
    });
  }

  initForm() {
    this.formOffers = this.fb.group({
      id: [null, Validators.required],
      name: [null, Validators.required]
    });
  }

  selectOffer(event) {
    this.isSearch = false;
    this.dataSelect = this.lstOffers.find(x=> x.id === event);

    if (this.dataSelect) {
      this.formOffers.controls['id'].setValue(this.dataSelect.id);
      this.formOffers.controls['name'].setValue(this.dataSelect.name);
    }

    setTimeout(() => {
      this.isSearch = true;
    });
  }
}
