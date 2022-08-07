import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { DataAccessService } from './service/data-access.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  enableContact: boolean = false;
  loader: boolean=false;
  
  constructor(private dataService:DataAccessService) { }

  ngOnInit(): void {
    this.dataService.loader.subscribe(loader=>{
      this.loader=loader;
    })
  }

  toggleContact() {
    this.enableContact = !this.enableContact;
  }

}
