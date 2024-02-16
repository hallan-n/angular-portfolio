import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { OverviewComponent } from './pages/overview/overview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, AboutComponent, OverviewComponent],
  template: `
    <app-header/>
    <app-home/>
    <app-about/>
    <app-overview></app-overview>
    <router-outlet />
  `
})
export class AppComponent {
  title = 'angular-portfolio';
}
