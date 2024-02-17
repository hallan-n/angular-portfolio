import { Component, OnInit } from '@angular/core';
import { TopTitleComponent } from '../../components/top-title/top-title.component';
import { ProjectItemComponent } from '../../components/project-item/project-item.component';
import { GithubApiService } from '../../services/github-api.service'
import { Repositorie } from '../../models/repositorie';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TopTitleComponent, ProjectItemComponent],
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit{
  
  repositories: Repositorie[] = []

  constructor(private service: GithubApiService) { 
  
  }
  ngOnInit(): void {
    this.service.getRepos().subscribe(
      {
        next: (res)=> this.repositories = res,
        error: (err) => console.log(err)
      }
    )
   }
}
