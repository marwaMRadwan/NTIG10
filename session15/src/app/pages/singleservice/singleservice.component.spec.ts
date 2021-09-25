import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleserviceComponent } from './singleservice.component';

describe('SingleserviceComponent', () => {
  let component: SingleserviceComponent;
  let fixture: ComponentFixture<SingleserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
