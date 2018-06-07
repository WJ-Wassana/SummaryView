import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ForgotPage } from '../ForgotPassword/FG';
import { BasicPage } from '../SummaryView/sumView';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  forgotPage = ForgotPage;
  basicPage = BasicPage;
  
  constructor(public navCtrl: NavController) {

  }

}
