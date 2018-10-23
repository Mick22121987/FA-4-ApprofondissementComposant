import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  public fruit: string;
  public fruits: string[] = ['pomme', 'poire', 'fraise', 'melon'];

  constructor() {
  }

  public deleteFruit(fruit: string) {
    this.fruits.splice(this.fruits.indexOf(fruit), 1);
  }

  public addFruit(reference: any) {
    this.fruits.push(reference.value);
  }
}
