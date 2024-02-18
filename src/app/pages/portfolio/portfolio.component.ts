import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TopTitleComponent } from '../../components/top-title/top-title.component';
import { ProjectItemComponent } from '../../components/project-item/project-item.component';
import { GithubApiService } from '../../services/github-api.service'
import { Repositorie } from '../../models/repositorie';
import { PexelsApiService } from '../../services/pexels-api.service';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TopTitleComponent, ProjectItemComponent, MatProgressSpinnerModule],
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit {

  repositories: Repositorie[] = []
  photos: Photo[] = []


  constructor(private serviceGitHub: GithubApiService, private servicePexels: PexelsApiService) {

  }
  ngOnInit(): void {

    this.servicePexels.getRepos().subscribe(
      {
        next: (res) => {
          res.photos.map(item => {
            const photo: Photo = {
              alt: item.alt,
              src: {
                large: item.src.large,
                original: item.src.original,
                tiny: item.src.tiny
              }
            }
            this.photos.push(photo)
          })
        },
        error: (err) => console.log(err),
      }
    )
    this.serviceGitHub.getRepos().subscribe(
      {
        next: (res) => this.repositories = res,
        error: (err) => console.log(err)
      }
    )
  }
}
