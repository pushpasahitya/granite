import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcontactdetialsComponent } from './getcontactdetials.component';

describe('GetcontactdetialsComponent', () => {
  let component: GetcontactdetialsComponent;
  let fixture: ComponentFixture<GetcontactdetialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetcontactdetialsComponent]
    });
    fixture = TestBed.createComponent(GetcontactdetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
