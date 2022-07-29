import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
@Component({
  selector: 'app-jctcovers',
  templateUrl: './jctcovers.page.html',
  styleUrls: ['./jctcovers.page.scss'],
})
export class JctcoversPage implements OnInit {
  show = false
  constructor(public navCtrl: NavController,
    public iab: InAppBrowser) { }

  ngOnInit() {
  }

  goto() {
    console.log('url getting======')
    var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
    let browser = this.iab.create('https://suretybondsandguarantees.co.uk/jct_contract_specific_insurance.aspx', '_system', options);
    browser.show();
  }

  openform() {
    var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
    this.iab.create('https://share.hsforms.com/13kYlFwtkQc68KgxCTucqFg5n81m', '_system', options);

  }
}
