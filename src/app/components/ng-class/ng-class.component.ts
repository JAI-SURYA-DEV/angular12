import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss'],
})
export class NgClassComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onGotoAlert() {
    this.router.navigateByUrl('/alert');
  }
  onGoToUserData() {
    this.router.navigateByUrl('/userdata');
  }
}
