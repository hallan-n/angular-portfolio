import { Component } from '@angular/core';
import { TopTitleComponent } from '../../components/top-title/top-title.component';
import { ProjectItemComponent } from '../../components/project-item/project-item.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TopTitleComponent, ProjectItemComponent],
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent { }
