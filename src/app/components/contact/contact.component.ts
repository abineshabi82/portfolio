import { Component, Input, OnInit, Output, OnChanges, EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnChanges {
  @Output()
  toggleContacts: EventEmitter<any> = new EventEmitter<any>();
  @Input()
  public enableContact: any;

  public email: any;
  public subject: any;
  public message: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  ngOnChanges() {
    let element: any = document.querySelector(".contact-mail");
    if (this.enableContact) {
      element.style.transform = "translate(-50%,-50%) scaleY(1)";
    }
    else {
      element.style.transform = "translate(-50%,-50%) scaleY(0)";
    }
  }
  toggleContact() {
    this.toggleContacts.emit();
  }

  async sendMail() {
    fetch("/.netlify/functions/sendmail", {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "id": this.email,
        "subject": this.subject,
        "message": this.message
      })
    }).then(res => { alert("I received your mail. Please expect delay in response");}).catch((error) => alert(error));
  }

}
