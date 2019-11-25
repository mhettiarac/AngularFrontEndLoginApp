import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WileyhomeComponent } from './wileyhome.component';

describe('WileyhomeComponent', () => {
  let component: WileyhomeComponent;
  let fixture: ComponentFixture<WileyhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WileyhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WileyhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
