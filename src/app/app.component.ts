import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import   {ContactService} from './contact/contact.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  vista :string = "Contacts"
  constructor(public router: Router, public routeTo:ContactService){}
   restore(){
     localStorage.clear()
     window.location.reload()
   }

 
}
