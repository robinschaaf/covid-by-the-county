import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-google-card-list-layout-1',
  templateUrl: 'google-card-list-layout-1.page.html',
  styleUrls: ['google-card-list-layout-1.page.scss'],
})
export class GoogleCardListLayout1Page implements OnChanges {
  @Input() data: any;

  @Output() onItemClick = new EventEmitter();
  @Output() onFavorite = new EventEmitter();
  @Output() onLike = new EventEmitter();
  @Output() onShare = new EventEmitter();

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onEvent(item) {
    if (event) {
      event.stopPropagation();
    }
    this.onItemClick.emit(item);
  }
}
