import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-status-filter',
  templateUrl: './status-filter.component.html',
  styleUrls: ['./status-filter.component.css'],
})
export class StatusFilterComponent implements OnInit {
  @Output() filterStatusData: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onButtonGroupClick(event: any) {
    let clickedElement = event.target || event.srcElement;

    if (clickedElement.nodeName === 'BUTTON') {
      let isCertainButtonAlreadyActive =
        clickedElement.parentElement.querySelector('.active');
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove('active');
      }
      clickedElement.className += ' active';
    }
  }

  onFilter(value: any) {
    this.filterStatusData.emit(value);
  }
}
