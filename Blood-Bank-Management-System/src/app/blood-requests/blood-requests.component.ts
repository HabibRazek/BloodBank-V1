import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BloodGroup } from 'src/model/BloodGroup.model';
import { Patient } from 'src/model/Patient.model';
import { Request } from 'src/model/Request.model';
import { PatientService } from '../Service/Patient.service';
import { RequestService } from '../Service/request.service';

@Component({
  selector: 'app-blood-requests',
  templateUrl: './blood-requests.component.html',
  styleUrls: ['./blood-requests.component.css']
})
export class BloodRequestsComponent implements OnInit {
  Patient = new Patient();
  BloodGroup!: BloodGroup[];
  newBloodGroup! :BloodGroup;
  idbloodgroup!: number;
  request!: Request;

  constructor(private service:PatientService,private router:Router,private serviceRequest:RequestService) { }

  ngOnInit(): void {
    this.service.listebloodgroup().subscribe((data) => {
      this.BloodGroup = data;
      console.log(this.BloodGroup);
    });
    // akil wahe7ed bch ytbadel bl nrecupirwh ml jwt token
    this.service.getPatientById(7).subscribe((data) => {
      this.Patient = data;
      console.log(this.Patient);
    });
  }

  addBloodRequest(){
    this.request = new Request();
    this.request.patient = this.Patient;
    console.log(this.request);
    this.serviceRequest.addRequest(this.request).subscribe((data) => {
      console.log(data);
    }
    );
    this.router.navigate(['blood-transfert']).then(() => {
      window.location.reload();
      }
    );
  }

}
