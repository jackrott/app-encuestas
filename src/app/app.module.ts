import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EncuestaModule } from './encuesta/encuesta.module';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DialogComponent } from './global/components/dialog/dialog.component';
import { DialogConfirmComponent } from './global/components/dialog-confirm/dialog-confirm.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    DialogConfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EncuestaModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
