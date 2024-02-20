import { Component } from '@angular/core';
import { TopTitleComponent } from '../../components/top-title/top-title.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TopTitleComponent],
  templateUrl: './services.component.html'
})
export class ServicesComponent { }
