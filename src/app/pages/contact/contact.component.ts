import { Component } from '@angular/core';
import { TopTitleComponent } from '../../components/top-title/top-title.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TopTitleComponent, ContactFormComponent],
  templateUrl: './contact.component.html'
})
export class ContactComponent {

}
