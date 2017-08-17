import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PhoneService {


  constructor(
    private http: Http
  ) { }


  getPhones() {

    const url = 'https://phonecontactlist-5ce90.firebaseio.com/phones.json';

    return this.http.get( url ).map( res => {
      return res.json();
    });
  }

}
