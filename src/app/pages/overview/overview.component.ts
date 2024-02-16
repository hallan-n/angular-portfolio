import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { TopTitleComponent } from '../../components/top-title/top-title.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [NgOptimizedImage, TimelineComponent, TopTitleComponent],
  templateUrl: './overview.component.html'
})
export class OverviewComponent {

}
