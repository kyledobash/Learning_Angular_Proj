import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <h1 [ngStyle]="titleStyles">Hello!</h1>

  `
})
export class AppComponent {

  titleStyles = {
    'color' : 'red',
    'font-size' : '4em'
  }

}
