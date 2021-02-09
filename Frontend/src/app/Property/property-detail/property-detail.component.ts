import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }
  public propertyId : number;
  ngOnInit() {
    // this.propertyId = Number(this.route.snapshot.params ['id']);
    this.propertyId = +this.route.snapshot.params ['id'];//Adding + symbol to converting to number
    //The observables are used to execute the values when the vlaues will be change by the publisher.
    //Here when the Parameter changes in the url, the this method will be executed.
    //Subscribe menthod helps to initiate a function, when the parameter values changes.
    this.route.params.subscribe(
      (param)=>{
        this.propertyId= +param['id'];
      }
    )
  }

  onClickNext(){
    this.propertyId +=1;
    this.router.navigate(['property-detail',this.propertyId]);
  }

}
