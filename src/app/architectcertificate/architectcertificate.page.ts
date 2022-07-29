import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
@Component({
  selector: 'app-architectcertificate',
  templateUrl: './architectcertificate.page.html',
  styleUrls: ['./architectcertificate.page.scss'],
})
export class ArchitectcertificatePage implements OnInit {

  constructor(public iab: InAppBrowser) { }

  ngOnInit() {
  }

  goto() {
    console.log('url getting======')
    var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
    let browser = this.iab.create('https://suretybondsandguarantees.co.uk/structural_warranties/architects_certificate.aspx', '_system', options);
    browser.show();
  }

  openform() {
    var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
    this.iab.create('https://share.hsforms.com/13kYlFwtkQc68KgxCTucqFg5n81m', '_system', options);

  }

}
