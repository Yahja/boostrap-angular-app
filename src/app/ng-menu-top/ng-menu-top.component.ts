import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-menu-top',
  templateUrl: './ng-menu-top.component.html',
  styleUrls: ['./ng-menu-top.component.css']
})
export class NgMenuTopComponent implements OnInit {

  model = {
    home: false,
    about: false,
    feature: false,
    work: false,
    team: false,
    pricing: false,
    blog: false,
    contact: false
  };

  constructor() { }

  ngOnInit() {
  }

}
