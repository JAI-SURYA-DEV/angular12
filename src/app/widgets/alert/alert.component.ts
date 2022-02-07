import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  @Input() type: any;
  @Output() close = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.close.emit();
  }
}
