import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BloodGroup } from 'src/model/BloodGroup.model';
import { Patient } from 'src/model/Patient.model';
import { PatientService } from '../Service/Patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  newPatient = new Patient();
  emptyBloodGroup= new BloodGroup();
  bloodGroup !: BloodGroup[];
  idblood!: number;

  constructor(private service:PatientService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.emptyBloodGroup.bloodgroup = "";
    this.emptyBloodGroup.idbloodgroup= 0;
    this.service.listebloodgroup().subscribe((data) => {
      this.bloodGroup = data;

    }
    );
    this.service.getPatientById(this.route.snapshot.params['id']).subscribe((data)=>{
      this.newPatient = data;
      this.idblood=this.newPatient.bloodGroup.idbloodgroup;
    }
    );
  }

  update(){
    console.log(this.idblood)
    this.newPatient.bloodGroup.idbloodgroup=this.idblood
    this.service.updatePatient(this.newPatient).subscribe((data)=>{
      this.router.navigate(['view-patient']);
    });
  }

}
