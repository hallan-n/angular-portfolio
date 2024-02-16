import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AboutItemComponent } from '../../components/about-item/about-item.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgOptimizedImage, MatProgressBarModule, MatButtonModule, AboutItemComponent],
  templateUrl: './about.component.html'
})
export class AboutComponent { }