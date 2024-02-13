import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
// import * as SmoothScroll from 'smooth-scroll';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './header.component.html'
})
export class HeaderComponent { }
