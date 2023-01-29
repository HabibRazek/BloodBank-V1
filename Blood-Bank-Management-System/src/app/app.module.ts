import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DonorComponent } from './donor/donor.component';
import { FormsModule } from '@angular/forms';
import { PatientComponent } from './patient/patient.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ViewDonorComponent } from './view-donor/view-donor.component';
import { UpdateDonorComponent } from './update-donor/update-donor.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonateComponent } from './donate/donate.component';
import { BloodStockComponent } from './blood-stock/blood-stock.component';
import { BloodTransfertComponent } from './blood-transfert/blood-transfert.component';
import { BloodRequestsComponent } from './blood-requests/blood-requests.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DonorComponent,
    PatientComponent,
    ViewDonorComponent,
    UpdateDonorComponent,
    ViewPatientComponent,
    UpdatePatientComponent,
    DashboardComponent,
    DonateComponent,
    BloodStockComponent,
    BloodTransfertComponent,
    BloodRequestsComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
