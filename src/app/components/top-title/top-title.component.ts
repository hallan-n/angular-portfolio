import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-title',
  standalone: true,
  imports: [],
  templateUrl: './top-title.component.html'
})
export class TopTitleComponent {
  @Input() primaryTitle: string = ""
  @Input() secondaryTitle: string = ""
}
