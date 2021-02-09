import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm :NgForm;//Helps to get Form element from html.So no need to pass as parameter.
  constructor(private router:Router) { }

  ngOnInit() {

  }

  // onSubmit(form : NgForm){
  //   try {
  //     console.log(form);
  //   } catch (error) {

  //   }
  // }
  onSubmit(){
    try {
      console.log(this.addPropertyForm);
    } catch (error) {

    }
  }

  onBack(){
    this.router.navigate(['/']);
  }
}
