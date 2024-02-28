import { Component, OnInit, inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormBuilder } from '@angular/forms';
import { Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent {
  private snackBar = inject(MatSnackBar)
  private formBuilderService = inject(FormBuilder)
  protected form = this.formBuilderService.group({
    name: ["", Validators.required],
    email: ["", [Validators.email, Validators.required]],
    service: ["", Validators.required],
    subject: ["", Validators.required],
    message: ["", Validators.required],
  })

  handleSubmitForm() {
    this.snackBar.open('Email enviado!', 'Fechar')
    this.form.reset()
  }
}
