import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { BloodGroup } from 'src/model/BloodGroup.model';
import { Patient } from 'src/model/Patient.model';
import { PatientService } from '../Service/Patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  newPatient = new Patient();
  BloodGroup!: BloodGroup[];
  newBloodGroup! :BloodGroup;
  idbloodgroup!: number;

  constructor(private service:PatientService,private router:Router) { }

  ngOnInit(): void {
    this.service.listebloodgroup().subscribe((data) => {
      this.BloodGroup = data;
      console.log(this.BloodGroup);
    });
  }

  addPatient() {
    this.newPatient.bloodGroup = this.BloodGroup[this.idbloodgroup];
    this.service.addPatient(this.newPatient).subscribe((data) => {
      console.log(data);
    });
    this.router.navigate(['view-patient']).then(() => {
      window.location.reload();
      });
  }


}



