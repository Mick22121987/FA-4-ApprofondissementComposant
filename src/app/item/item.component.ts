import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  inputs: ['fruit']
})
export class ItemComponent implements OnInit {
  // @Input() public fruit: string;

  constructor() { }

  ngOnInit() {
  }

}
