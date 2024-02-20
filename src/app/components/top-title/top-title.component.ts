import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-title',
  standalone: true,
  imports: [NgClass],
  templateUrl: './top-title.component.html'
})
export class TopTitleComponent {
  @Input() primaryTitle: string = ""
  @Input() secondaryTitle: string = ""
  @Input() isWhite: boolean = false
}
