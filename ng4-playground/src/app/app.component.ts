import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Hey guys!</h1>
  <p>{{myObject.location}}</p>
  <ul>
    <li *ngIf="myArr">Yeah, I exist.</li>
  </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myObject = {
    gender: 'male',
    age: 26,
    location: 'USA'
  };
  myArr = ['him','hers','yours'];
}
