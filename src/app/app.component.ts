import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public fruit: string;
  public fruits: string[] = [];

  constructor() {
  }

  public deleteFruit(fruit: string) {
    this.fruits.splice(this.fruits.indexOf(fruit), 1);
  }
}
