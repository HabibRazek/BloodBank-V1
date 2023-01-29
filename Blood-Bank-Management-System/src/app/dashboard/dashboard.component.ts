import { Component, OnInit } from '@angular/core';
import { BloodGroup } from 'src/model/BloodGroup.model';
import { BloodStock } from 'src/model/BloodStock.model';
import { DonorService } from '../Service/Donor.service';
import { PatientService } from '../Service/Patient.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



  bloodStock!: BloodStock[];
  bloodGroup!: BloodGroup[];
  quantity!: number;
  count!: number;
  countPatient! : number;
  totalBlood!: number;

  constructor(private service:DonorService,private servicePatient:PatientService) { }

  ngOnInit(): void {
    this.service.getBloodStock().subscribe((data)=>{
      this.bloodStock = data;
    });
    this.service.countDonor().subscribe((data)=>{
      this.count = data;
    });
    this.servicePatient.countPatient().subscribe((data)=>{
      this.countPatient = data;
    });
    this.service.sumBloodGroupQuantities().subscribe((data)=>{
      this.totalBlood = data;
    });

  }

}
