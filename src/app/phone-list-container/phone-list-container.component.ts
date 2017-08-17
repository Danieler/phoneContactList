import { Component, OnInit } from '@angular/core';
import {PhoneService} from '../services/phone.service';

@Component({
  selector: 'app-phone-list-container',
  templateUrl: './phone-list-container.component.html',
  styleUrls: ['./phone-list-container.component.css']
})
export class PhoneListContainerComponent implements OnInit {

  phones: any;

  constructor(public _PhoneServiceService: PhoneService) {
  }

  ngOnInit() {

    this._PhoneServiceService.getPhones().subscribe(data => {
     this.phones = data;
    });

  }

}
