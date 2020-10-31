import { Component, Output, EventEmitter, Input, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'cs-profile-layout-3',
  templateUrl: 'profile-layout-3.page.html',
  styleUrls: ['profile-layout-3.page.scss'],
})
export class ProfileLayout3Page implements OnChanges, AfterViewInit {
  @Input() data: any;

  @Output() onItemClick = new EventEmitter();
  @Output() onLike = new EventEmitter();
  @Output() onComment = new EventEmitter();

  viewEntered = false;

  constructor() { }

  ngAfterViewInit() {
    this.viewEntered = true;    
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onItemClickFunc(params, e) {
    if (e) {
      e.stopPropagation();
    }
    this.onItemClick.emit(params);
  }

  onLikeFunc(params, event) {
    if (event) {
      event.stopPropagation();
    }
    this.onLike.emit(params);
  }

  onCommentFunc(params, event) {
    if (event) {
      event.stopPropagation();
    }
    this.onComment.emit(params);
  }
}
