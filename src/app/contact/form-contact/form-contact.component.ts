import { Component, OnInit } from '@angular/core';
import {find, concat, map, orderBy} from 'lodash'
import {Router, ActivatedRoute} from '@angular/router';
import {ContactService} from '../contact.service'


@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {
  contact : any = {id: 0, email: "", phone: "", name: ""};
  listContact : any = JSON.parse( localStorage.getItem('contacts'));
  list : Array<object> = []
  Save : Function;
  id : number;
  constructor( private route: ActivatedRoute, private router: Router, public contactService: ContactService) { }

   ngOnInit() {
    this.contact.id = this.listContact != undefined ? orderBy(this.listContact, 'id', 'desc')[0].id < 5 ? 5 : orderBy(this.listContact, 'id', 'desc')[0].id : 5
    this.route.paramMap.subscribe(params => {
      this.Save = this.addContact();
      if(params.get('id')){
        this.Save = this.editContact();
        if(this.listContact == null){
          this.contactService.observableData().subscribe(data => {
            this.contact = find(data, contact => {
              return contact.id == params.get('id')
            });
          });
    
        } else {
          this.contact = find(this.listContact, contact => {
            return contact.id == params.get('id')
          });
        
      }


        if(this.contact == undefined){
          this.Save = this.addContact();
          this.router.navigate(['/contact']);
        }
    }

    })
    
  }

  is_valid() : boolean{
    if(this.contact.name == "" || this.contact.email == "" || this.contact.phone == ""){
      alert("All fields are required")
      return false
    } else {

      return true
    }
  }

  addContact(){
    return function () {
      if(this.is_valid()){
        alert(`${this.contact.name} has been created`);

      }  else {
        return false
      }
      this.listContact  = JSON.parse( localStorage.getItem('contacts'))
      ++this.contact.id
      this.listContact.push(this.contact);
      localStorage.setItem('contacts', JSON.stringify(this.listContact))
      
      this.contact = {id: 0, email: "", phone: "", name: ""}
    }
  }

  editContact(){
    return function () {
      if(this.is_valid()){
        alert(`${this.contact.name} has been edited`);
      } else { 
        return false
      }


      this.listContact = map(JSON.parse( localStorage.getItem('contacts')), o => {
        if(o.id === this.contact.id) {
          return this.contact
        } else {
          return o
        }
      })
      localStorage.setItem('contacts', JSON.stringify(this.listContact))
      
    }
  }


  


}
