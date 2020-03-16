import { Component, OnInit } from '@angular/core';
import { Security } from '../model/security';

@Component({
  selector: 'app-security-detail',
  templateUrl: './security-detail.component.html',
  styleUrls: ['./security-detail.component.css']
})
export class SecurityDetailComponent implements OnInit {

  security: Security;

  constructor() { }

  ngOnInit(): void {
  }

}
