import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-phone-detail-component',
  templateUrl: './phone-detail-component.component.html',
  styleUrls: ['./phone-detail-component.component.css']
})
export class PhoneDetailComponentComponent implements OnInit {

  @Input('phone') phone;

  constructor() { }


  ngOnInit() {
  }

}
