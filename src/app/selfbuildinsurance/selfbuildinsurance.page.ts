import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-selfbuildinsurance',
  templateUrl: './selfbuildinsurance.page.html',
  styleUrls: ['./selfbuildinsurance.page.scss'],
})
export class SelfbuildinsurancePage implements OnInit {
  show = false;
  constructor(public navCtrl: NavController,
    public iab: InAppBrowser) { }

  ngOnInit() {
  }
  goto() {
    console.log('url getting======')
    var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
    let browser = this.iab.create('https://suretybondsandguarantees.co.uk/structural_warranties/self-build_insurance.aspx', '_system', options);
    browser.show();
  }

  openform() {
    var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
    this.iab.create('https://share.hsforms.com/13kYlFwtkQc68KgxCTucqFg5n81m', '_system', options);

  }
}
