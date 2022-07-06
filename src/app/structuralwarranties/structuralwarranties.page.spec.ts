import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StructuralwarrantiesPage } from './structuralwarranties.page';

describe('StructuralwarrantiesPage', () => {
  let component: StructuralwarrantiesPage;
  let fixture: ComponentFixture<StructuralwarrantiesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StructuralwarrantiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StructuralwarrantiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
