import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  fromCurrency: string = 'USD';

  url = `https://api.exchangerate-api.com/v4/latest/${this.fromCurrency}`;

  convert(){
    return this.http.get(this.url)
  }



}
