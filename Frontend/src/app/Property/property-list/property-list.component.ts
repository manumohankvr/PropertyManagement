import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/Services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties: Array<IProperty>;
  constructor(private housingService:HousingService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent=2;//If the url is Rent-Properties
    }
    this.housingService.getProperties(this.SellRent).subscribe(
      data=> {
        this.properties=data;
        console.log(this.route.snapshot.url.toString());
      },error=>{
        console.log(error);
      }
    )
  }

}
