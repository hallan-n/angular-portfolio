import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgOptimizedImage, MatProgressBarModule],
  templateUrl: './about.component.html'
})
export class AboutComponent {

}
