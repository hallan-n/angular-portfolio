import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './pages/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, AboutComponent],
  template: `
    <app-header/>
    <app-home/>
    <app-about/>
    <router-outlet />
  `
})
export class AppComponent {
  title = 'angular-portfolio';
}
