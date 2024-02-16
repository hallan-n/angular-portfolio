import { Component, Input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-about-item',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './about-item.component.html'
})
export class AboutItemComponent {
  @Input() labelItem: string = "".toUpperCase()
  @Input() contentItem: string = ""
  @Input() value:number = 0
}
