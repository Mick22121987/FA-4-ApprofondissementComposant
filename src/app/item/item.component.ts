import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {
  @Input() public fruit: string;
  @Output() public deleteF: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteFruit() {
    this.deleteF.emit(this.fruit);
  }
}
