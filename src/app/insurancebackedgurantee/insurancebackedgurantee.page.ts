import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-insurancebackedgurantee',
  templateUrl: './insurancebackedgurantee.page.html',
  styleUrls: ['./insurancebackedgurantee.page.scss'],
})
export class InsurancebackedguranteePage implements OnInit {
  show = false
  constructor(public navCtrl: NavController,
    public iab: InAppBrowser) { }

  ngOnInit() {
  }

  goto() {
    console.log('url getting======')
    var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
    let browser = this.iab.create('https://suretybondsandguarantees.co.uk/insurance_backed_guarantees.aspx', '_system', options);
    browser.show();
  }

  openform() {
    var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
    this.iab.create('https://share.hsforms.com/15WbXcgaVQcyvSmlUG2EweQ5n81m', '_system', options);

  }
}
