import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { HorizontalScrollComponent } from './horizontal-scroll/horizontal-scroll.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, HorizontalScrollComponent],
  template: `
    <h1>Hello from Babu</h1>
    <app-horizontal-scroll></app-horizontal-scroll>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
