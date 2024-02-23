import { Component, OnDestroy, inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
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
    NgOptimizedImage,
    MatButtonModule
  ],
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent {

  private snackBar = inject(MatSnackBar)
  private formBuilderService = inject(FormBuilder)
  protected form = this.formBuilderService.group({
    name: ["", Validators.required],
    email: ["", [
      Validators.email, Validators.required
    ]
    ],
    service: ["", Validators.required],
    subject: ["", Validators.required],
    message: ["", Validators.required],
  })
  isTouched: boolean = false
  handleSubmitForm() {

    if (this.form.valid) {
      this.openSnackBar('Email enviado com sucesso!', 'Fechar')
      this.form.reset()
    }
  }
  
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

}
