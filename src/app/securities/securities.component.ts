import { Component, OnInit } from '@angular/core';
import { Security } from '../model/security';

import { SECURITIES} from '../mock/mock-securities'

@Component({
  selector: 'app-securities',
  templateUrl: './securities.component.html',
  styleUrls: ['./securities.component.css']
})
export class SecuritiesComponent implements OnInit {

  securities = SECURITIES;

  security = this.securities[0];

  constructor() { }

  ngOnInit(): void {
  }

}
