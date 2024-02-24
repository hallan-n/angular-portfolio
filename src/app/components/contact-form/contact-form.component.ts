import { Component, OnInit, inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormBuilder } from '@angular/forms';
import { Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from '../../services/email.service';

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
  // private emailService = inject(EmailService)
  private emailService: string = 'Quando injeta o Angular material para de funcionar'


  async handleSubmitForm() {    
    let respSendEmail = await this.handleSendEmail()
    if (this.form.valid && ![200, 250].includes(respSendEmail)) {
      this.snackBar.open('Email enviado com sucesso!', 'Fechar');
    } else {
      this.snackBar.open('Houve um erro ao enviar o Email!', 'Fechar');
    }
    this.snackBar.open('Email enviado com sucesso!', 'Fechar');
    this.form.reset()
  }

  async handleSendEmail() {
    let bodyMessage = `
      <h1>Contato iniciado via Portfolio</h1>
      <p><b>Nome:</b> ${this.form.value.name}</p>
      <p><b>Email:</b> ${this.form.value.email}</p>
      <p><b>Serviço desejado:</b> ${this.form.value.service}</p>
      <p><b>Mensagem:<br></b> ${this.form.value.message}</p>
    `
    return await this.emailService.sendEmail(
      'hallanneves01@gmail.com',
      `${this.form.value.subject}`,
      bodyMessage
    )
  }
}
