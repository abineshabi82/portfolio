import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  enableContact: boolean = false;
  constructor() { }

  toggleContact() {
    this.enableContact = !this.enableContact;
  }

}
