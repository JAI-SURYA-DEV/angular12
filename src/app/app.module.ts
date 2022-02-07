import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserMasterComponent } from './components/crud-operations/user-master/user-master.component';
import { AppBkupComponent } from './components/app-bkup/app-bkup.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { AlertComponent } from './widgets/alert/alert.component';

const routeArray = [
  {
    path: 'userdata',
    component: UserMasterComponent,
  },
  {
    path: 'appbkup',
    component: AppBkupComponent,
  },

  {
    path: 'ngclass',
    component: NgClassComponent,
  },
  {
    path: 'alert',
    component: AlertComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    UserMasterComponent,
    AppBkupComponent,
    NgClassComponent,
    AlertComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routeArray)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
