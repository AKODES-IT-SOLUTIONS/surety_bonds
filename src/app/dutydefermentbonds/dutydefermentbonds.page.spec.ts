import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DutydefermentbondsPage } from './dutydefermentbonds.page';

describe('DutydefermentbondsPage', () => {
  let component: DutydefermentbondsPage;
  let fixture: ComponentFixture<DutydefermentbondsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DutydefermentbondsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DutydefermentbondsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
