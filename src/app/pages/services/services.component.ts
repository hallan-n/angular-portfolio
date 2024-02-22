import { Component } from '@angular/core';
import { TopTitleComponent } from '../../components/top-title/top-title.component';
import { ServiceItemComponent } from '../../components/service-item/service-item.component';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TopTitleComponent, ServiceItemComponent, ServiceItemComponent],
  templateUrl: './services.component.html'
})
export class ServicesComponent { }
