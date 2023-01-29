import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloodRequestsComponent } from './blood-requests/blood-requests.component';
import { BloodStockComponent } from './blood-stock/blood-stock.component';
import { BloodTransfertComponent } from './blood-transfert/blood-transfert.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonateComponent } from './donate/donate.component';
import { DonorComponent } from './donor/donor.component';
import { MessageComponent } from './message/message.component';
import { NavComponent } from './nav/nav.component';
import { PatientComponent } from './patient/patient.component';
import { UpdateDonorComponent } from './update-donor/update-donor.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewDonorComponent } from './view-donor/view-donor.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';

const routes: Routes = [
  {path: 'nav', component: NavComponent },
  {path: 'donor', component: DonorComponent },
  {path: 'patient', component: PatientComponent},
  {path: 'view-donor', component: ViewDonorComponent},
  {path: 'update-donor/:id' ,component: UpdateDonorComponent},
  {path: 'view-patient', component: ViewPatientComponent},
  {path: 'update-patient/:id', component: UpdatePatientComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'blood-stock', component: BloodStockComponent},
  {path: 'donate', component: DonateComponent},
  {path: 'blood-transfert', component: BloodTransfertComponent},
  {path: 'blood-requests' , component: BloodRequestsComponent},
  {path:'message', component: MessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
