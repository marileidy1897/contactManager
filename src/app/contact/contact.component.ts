import { Component, OnInit, ɵConsole } from '@angular/core';
import {Router } from '@angular/router';
import { remove } from 'lodash';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import { promise } from 'protractor';
import {ContactService} from './contact.service'
const contact_data = 'https://jsonplaceholder.typicode.com/users'; 

interface Contact {
   name: string;
   email: string;
   phone_number: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contacts$: any;
  dataLoaded: Promise<boolean>;
  vista :string = "Contacts"

  constructor(public router: Router, private contactService: ContactService) {

   }

 

    ngOnInit() {

    this.contacts$ = this.contactService.getData()
    if(this.contacts$ == undefined){
      this.contactService.observableData().subscribe(data => this.contacts$ = data);

    }

    
 
                
  }

  remove(id){
    this.contacts$ = JSON.parse(localStorage.getItem('contacts'));
    this.contacts$ = remove(this.contacts$, function(contact) {
      return contact.id  !== id;
    });
    localStorage.setItem('contacts',JSON.stringify(this.contacts$))
  }

   


}
