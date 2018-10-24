import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {
  @Input() public fruit: string;
  @Output() public deleteF: EventEmitter<string> = new EventEmitter();
  @ContentChild('p') public el2: ElementRef

  constructor() { }

  ngOnInit() {
  }

  deleteFruit() {
    // this.deleteF.emit(this.fruit);
    console.log(this.el2)
  }
}
