import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-rentbonds',
  templateUrl: './rentbonds.page.html',
  styleUrls: ['./rentbonds.page.scss'],
})
export class RentbondsPage implements OnInit {
  show = false;
  constructor(public navCtrl: NavController,
    public iab: InAppBrowser) { }

  ngOnInit() {
  }


  goto() {
    console.log('url getting======')
    var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
    let browser = this.iab.create('https://suretybondsandguarantees.co.uk/surety_bonds/rent_bonds.aspx', '_system', options);
    browser.show();
  }

  openform() {
    var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
    this.iab.create('https://share.hsforms.com/13kYlFwtkQc68KgxCTucqFg5n81m', '_system', options);

  }

}
