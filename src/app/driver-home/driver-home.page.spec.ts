import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DriverHomePage } from './driver-home.page';

describe('DriverHomePage', () => {
  let component: DriverHomePage;
  let fixture: ComponentFixture<DriverHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DriverHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
