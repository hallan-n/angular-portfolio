import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, MatIconModule, MatMenuModule, MatButtonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent { }
