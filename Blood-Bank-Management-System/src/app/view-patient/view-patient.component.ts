import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/model/Patient.model';
import { PatientService } from '../Service/Patient.service';


@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent implements OnInit {
  patients! : Patient[];
  constructor(private service : PatientService) { }

  ngOnInit(): void {
    this.service.listPatient().subscribe((data) => {
      this.patients = data;
      console.log(this.patients);
    }
    );
  }

  deletePatient(id: number) {
    this.service.deletePatient(id).subscribe((data) => {
      console.log(data);
      this.service.listPatient().subscribe((data) => {
        this.patients = data;
        console.log(this.patients);
      });
    });
  }

}

