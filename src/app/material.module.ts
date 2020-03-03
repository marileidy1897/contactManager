import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
imports: [
MatToolbarModule,
MatCardModule,
MatButtonModule,
MatIconModule,
MatFormFieldModule,
MatInputModule
],
exports: [
MatToolbarModule,
MatCardModule,
MatButtonModule,
MatIconModule,
MatFormFieldModule,
MatInputModule
],
})
export class MaterialModule { }