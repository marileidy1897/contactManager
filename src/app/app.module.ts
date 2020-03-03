import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact/contact.service';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormContactComponent } from './contact/form-contact/form-contact.component';
import {  FormsModule } from '@angular/forms'
const appRoutes: Routes = [
  { path: 'contact/:id',      component: FormContactComponent },
  { path: 'contact',      component: FormContactComponent },
  {
    path: 'contacts',
    component: ContactComponent,
    data: { title: 'contact List' }
  },
  { path: '',
    redirectTo: '/contacts',
    pathMatch: 'full'
  },
];


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FormContactComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    MaterialModule,
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
