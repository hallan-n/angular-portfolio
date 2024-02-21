import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { ServiceItemComponent } from '../service-item/service-item.component';



@Component({
  selector: 'app-service-carousel',
  standalone: true,
  imports: [ServiceItemComponent],
  templateUrl: './service-carousel.component.html'
})
export class ServiceCarouselComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite()
  }
}
