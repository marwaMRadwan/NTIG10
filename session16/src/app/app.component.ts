import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class AppComponent {
  // x = 1.02858451454848484515474
  // y=50
  // title = 'session16';
  // slides = [
  //   "assets/images/slider-1.jpg",
  //   "assets/images/slider-2.jpg",
  //   "assets/images/slider-3.jpg",
  //   "assets/images/slider-1.jpg",
  //   "assets/images/slider-2.jpg",
  //   "assets/images/slider-3.jpg",
  //   "assets/images/slider-1.jpg",
  //   "assets/images/slider-2.jpg",
  //   "assets/images/slider-3.jpg",
  //   "assets/images/slider-1.jpg",
  //   "assets/images/slider-2.jpg",
  //   "assets/images/slider-3.jpg",
  // ]
  // now = new Date()
}
