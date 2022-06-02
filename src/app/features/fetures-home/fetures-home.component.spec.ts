import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeturesHomeComponent } from './fetures-home.component';

describe('FeturesHomeComponent', () => {
  let component: FeturesHomeComponent;
  let fixture: ComponentFixture<FeturesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeturesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeturesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
