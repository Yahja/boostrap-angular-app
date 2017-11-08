import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-menu-top',
  templateUrl: './ng-menu-top.component.html',
  styleUrls: ['./ng-menu-top.component.css']
})
export class NgMenuTopComponent implements OnInit {

  model = {
    left: true,
    middle: false,
    right: false
  };

  constructor() { }

  ngOnInit() {
  }

}
