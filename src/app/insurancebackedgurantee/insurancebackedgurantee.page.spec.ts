import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsurancebackedguranteePage } from './insurancebackedgurantee.page';

describe('InsurancebackedguranteePage', () => {
  let component: InsurancebackedguranteePage;
  let fixture: ComponentFixture<InsurancebackedguranteePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InsurancebackedguranteePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsurancebackedguranteePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
