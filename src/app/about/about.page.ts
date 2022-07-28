import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
declare var cordova: any;
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  show = false

  constructor(public navCtrl: NavController,
    public iab: InAppBrowser) { }

  ngOnInit() {
  }


  goto() {
    console.log('url getting======')
    var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
    // let browser = this.iab.create('https://suretybondsandguarantees.co.uk/about/default.aspx', '_system', options);
    // browser.show();
    cordova.InAppBrowser.open('https://suretybondsandguarantees.co.uk/about/default.aspx', '_system', options)
  }
  openform() {
    var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
    this.iab.create('https://share.hsforms.com/13kYlFwtkQc68KgxCTucqFg5n81m', '_blank', options);

  }
  readmore() {
    this.show = true
  }

  open() {
    this.navCtrl.navigateRoot('contactus');
  }

}
