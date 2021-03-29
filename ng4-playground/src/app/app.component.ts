import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Hey guys!</h1>
  <p>{{myObject.location}}</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myObject = {
    gender: 'male',
    age: 26,
    location: 'USA'
  }
}
