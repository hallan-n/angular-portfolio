import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { TimelineComponent } from '../../components/timeline/timeline.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [NgOptimizedImage, TimelineComponent],
  templateUrl: './overview.component.html'
})
export class OverviewComponent {

}
