import { Component } from '@angular/core';
import {DataService } from './data.service'

@Component({
  selector: 'app-root',
  template: `

  <p>{{ someProperty }}</p>

  `
})
export class AppComponent {

  constructor(private DataService:DataService) {

  }

  someProperty:string = '';

  ngOnInit() {
    console.log(this.DataService.cars)
    this.someProperty = this.DataService.myData();
  }
 
}
