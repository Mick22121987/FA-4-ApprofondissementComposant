import { Component, ViewEncapsulation, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  public fruit: string;
  public fruits: string[] = ['pomme', 'poire', 'fraise', 'melon'];
  @ViewChild('f') public el: ElementRef

  constructor() {
  }

  public deleteFruit(fruit: string) {
    this.fruits.splice(this.fruits.indexOf(fruit), 1);
  }

  public addFruit() {
    this.fruits.push(this.el.nativeElement.value)
  }
}
