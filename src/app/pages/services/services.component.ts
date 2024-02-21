import { Component, OnInit } from '@angular/core';
import { TopTitleComponent } from '../../components/top-title/top-title.component';
import { ServiceItemComponent } from '../../components/service-item/service-item.component';
import { ServiceCarouselComponent } from '../../components/service-carousel/service-carousel.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TopTitleComponent, ServiceItemComponent, ServiceCarouselComponent],
  templateUrl: './services.component.html'
})
export class ServicesComponent { }
