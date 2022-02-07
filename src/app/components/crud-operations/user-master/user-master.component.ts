import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.scss'],
})
export class UserMasterComponent implements OnInit {
  userList: any;
  isAlert: boolean = false;

  constructor(private httpClient: HttpClient) {
    this.userList = [];
  }

  ngOnInit(): void {
    this.getUserList();
    this.onAlertOpen();

    setTimeout(() => {
      this.onAlertClose();
    }, 3000);
  }

  getUserList() {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((result: any) => {
        this.userList = result;
      });
  }

  onAlertClose() {
    this.isAlert = false;
  }
  onAlertOpen() {
    this.isAlert = true;
  }
}
