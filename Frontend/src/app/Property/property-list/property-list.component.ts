import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      "Id": 1,
      "Name":"Birla House",
      "Type": "House",
      "Price": 1200
    },
    {
      "Id": 2,
      "Name":"Jass Villas",
      "Type": "House",
      "Price": 1000
    },
    {
      "Id": 3,
      "Name":"Mouk Residence",
      "Type": "Flat",
      "Price": 3000
    },
    {
      "Id": 4,
      "Name":"Hassess Buliding",
      "Type": "Flat",
      "Price": 2300
    },
    {
      "Id": 5,
      "Name":"LOL Homes",
      "Type": "House",
      "Price": 2300
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
