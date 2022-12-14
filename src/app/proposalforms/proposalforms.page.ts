import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-proposalforms',
  templateUrl: './proposalforms.page.html',
  styleUrls: ['./proposalforms.page.scss'],
})
export class ProposalformsPage implements OnInit {
  show = false
  constructor(public navCtrl: NavController,
    public iab: InAppBrowser,) { }

  ngOnInit() {
  }

  goto() {
    console.log('url getting======')
    var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
    let browser = this.iab.create('https://suretybondsandguarantees.co.uk/proposal_forms.aspx', '_system', options);
    browser.show();
  }

  openform() {
    var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
    this.iab.create('https://share.hsforms.com/13kYlFwtkQc68KgxCTucqFg5n81m', '_system', options);

  }
}
