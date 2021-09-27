import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmypostsComponent } from './showmyposts.component';

describe('ShowmypostsComponent', () => {
  let component: ShowmypostsComponent;
  let fixture: ComponentFixture<ShowmypostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowmypostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmypostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
