import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../../services/service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  currencies: string[] = ['USD', 'EUR', 'GBP', 'INR', 'AUD', 'CAD', 'SGD', 'CHF', 'MYR', 'JPY', 'CNY'];
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  amount: number = 1;
  result: number | null = null;

  constructor(private http: HttpClient,
              private service: ServiceService
  ) {}

  ngOnInit(): void {}


  convert() {
    this.service.convert().subscribe((data: any) => {
          const rate = data.rates[this.toCurrency];
          this.result = this.amount * rate;
        })
  }

}