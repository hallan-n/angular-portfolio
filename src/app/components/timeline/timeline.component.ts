import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './timeline.component.html'
})
export class TimelineComponent {
  @Input() start: string = "2010"
  @Input() end: string = "2010"
  @Input() current: boolean = false
  @Input() office: string = "Design Grágico"
  @Input() company: string = "TEx"
  @Input() description: string = "Empresa TEx Tecnologia"
  @Input() icon: string = "brush"
}
