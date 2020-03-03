import {Injectable}             from '@angular/core';
import {Subject}                from 'rxjs';
import {Router } from '@angular/router';
import { values, concat} from 'lodash';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
const contact_data = 'https://jsonplaceholder.typicode.com/users'; 
interface Contact {
  name: string;
  email: string;
  phone_number: string;
}
@Injectable()
export class ContactService {


    private contacts$: Observable<Contact[]> = localStorage.getItem('contacts') ? values(JSON.parse(localStorage.getItem('contacts'))) : localStorage.getItem('contacts');
    constructor(private http: HttpClient, public router: Router) {
     }
  
    private getUsers() : Observable<Contact>{
       return this.http
       .get<Contact[]>(contact_data)
       .pipe(map(data => values(data.slice(0,5))))
     }

     public observableData(){
         var O = this.getUsers()
         this.setData(O)
         return O;
    }

    private setData(Observable) {
        if(this.contacts$ == undefined){

            Observable.subscribe((data) => {
             this.contacts$ = values(data)
              localStorage.setItem('contacts', JSON.stringify(data))
            })
      
          }
     }

    

      getData() : Observable<Contact[]> {
        return this.contacts$

     }

     routeTo(TO) : void {
       this.contacts$ = values(JSON.parse(localStorage.getItem('contacts')))
       this.router.navigate(TO);
     }
}