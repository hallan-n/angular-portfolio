import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, AboutComponent, OverviewComponent, PortfolioComponent, ServicesComponent, ContactComponent, FooterComponent],
  template: `
    <app-header/>
    <app-home/>
    @defer (on idle){
      <app-about/>
      <app-overview/>
    }
      <app-portfolio/>
      <app-services/>
      <app-contact/>
      <app-footer/>
    <router-outlet />
  `
})
export class AppComponent {}
