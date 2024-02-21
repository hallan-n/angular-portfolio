import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-item',
  standalone: true,
  imports: [],
  templateUrl: './service-item.component.html'
})
export class ServiceItemComponent {
  @Input() iconName: string = ""
  @Input() itemName: string = ""
  @Input() description: string = ""
}
