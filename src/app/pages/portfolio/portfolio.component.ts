import { Component, OnInit } from '@angular/core';
import { TopTitleComponent } from '../../components/top-title/top-title.component';
import { ProjectItemComponent } from '../../components/project-item/project-item.component';
import { GithubApiService } from '../../services/github-api.service'
import { Repositorie } from '../../models/repositorie';
import { PexelsApiService } from '../../services/pexels-api.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TopTitleComponent, ProjectItemComponent],
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit{
  
  repositories: Repositorie[] = []

  constructor(private serviceGitHub: GithubApiService, private servicePexels: PexelsApiService) { 
  
  }
  ngOnInit(): void {
    this.serviceGitHub.getRepos().subscribe(
      {
        next: (res)=> this.repositories = res,
        error: (err) => console.log(err)
      }
    )

    this.servicePexels.getRepos().subscribe(
      {
        next: (res)=> console.log(res),
        error: (err)=> console.log(err),
      }
    )
   }
}
