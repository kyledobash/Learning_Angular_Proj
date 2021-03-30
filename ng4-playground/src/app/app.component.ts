import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1 [class]="titleClass">Hello!</h1>
  `,
  styles: [`
  h1 {
    text-decoration: underline;
  }

  .red-title {
    color: red;
  }
  `]
})
export class AppComponent {

  titleClass = 'red-title'

}
