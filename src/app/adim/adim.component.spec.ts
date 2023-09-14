import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdimComponent } from './adim.component';

describe('AdimComponent', () => {
  let component: AdimComponent;
  let fixture: ComponentFixture<AdimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdimComponent]
    });
    fixture = TestBed.createComponent(AdimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
