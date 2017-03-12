import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnChanges() {
    this.starWidth = this.rating * 86 / 5;
  }

  onClick() {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }

}
