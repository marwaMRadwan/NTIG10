import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAddrComponent } from './add-addr.component';

describe('AddAddrComponent', () => {
  let component: AddAddrComponent;
  let fixture: ComponentFixture<AddAddrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAddrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAddrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
