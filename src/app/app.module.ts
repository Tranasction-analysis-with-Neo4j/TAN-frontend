import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrxnComponent } from './trxn/trxn.component';
import { RecoComponent } from './reco/reco.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { TargetUserComponent } from './target-user/target-user.component';


@NgModule({
  declarations: [
    AppComponent,
    TrxnComponent,
    RecoComponent,
    TargetUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  exports: [
    TrxnComponent,
    RecoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
