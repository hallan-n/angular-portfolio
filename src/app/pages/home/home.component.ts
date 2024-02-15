import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage],
  templateUrl: './home.component.html'
})
export class HomeComponent { }
