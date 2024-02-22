import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import {
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';



@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatSelectModule, MatInputModule, MatFormFieldModule, FormsModule, NgOptimizedImage],
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
