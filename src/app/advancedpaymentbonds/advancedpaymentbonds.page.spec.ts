import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdvancedpaymentbondsPage } from './advancedpaymentbonds.page';

describe('AdvancedpaymentbondsPage', () => {
  let component: AdvancedpaymentbondsPage;
  let fixture: ComponentFixture<AdvancedpaymentbondsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedpaymentbondsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdvancedpaymentbondsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
