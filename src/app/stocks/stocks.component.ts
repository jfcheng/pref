import { Component, OnInit } from '@angular/core';
import { Stock } from '../model/stock';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  stock: Stock ={
  id: 1,
  name: 'BPO',
  base: 'bpo',
  series: 'aa'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
