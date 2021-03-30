import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Hey guys!</h1>

  <img src="{{angularLogo}}">
  <img [src]="angularLogo">
  <img bind-src="angularLogo">

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  angularLogo = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fc%2Fcf%2FAngular_full_color_logo.svg%2F1200px-Angular_full_color_logo.svg.png&f=1&nofb=1';
}
