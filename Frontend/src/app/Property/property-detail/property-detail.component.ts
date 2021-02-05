import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  public propertyId : number;
  ngOnInit() {
    this.propertyId = this.route.snapshot.params ['id'];
  }

}
