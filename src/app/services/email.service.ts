
import { Injectable } from '@angular/core';
import * as nodemailer from 'nodemailer';
import { EMAIL_USER, EMAIL_PASSWORD } from '../environments/environments'

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  async sendEmail(to: string, subject: string, text: string) {
    let transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD
      }
    });

    return await transporter.sendMail({
      from: 'Hállan Dev <hallansantos2017@gmail.com>',
      to: to,
      subject: subject,
      html: text
    }).then(res => {
        return Number.parseInt(res.response.split(' ')[0])
      }
    ).catch(err => {return err}
    )
  }
}
