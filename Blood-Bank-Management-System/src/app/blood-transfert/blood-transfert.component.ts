import { Component, OnInit } from '@angular/core';
import { Message } from 'src/model/Message.model';
import { Patient } from 'src/model/Patient.model';
import { Request } from 'src/model/Request.model';
import { PatientService } from '../Service/Patient.service';
import { RequestService } from '../Service/request.service';

@Component({
  selector: 'app-blood-transfert',
  templateUrl: './blood-transfert.component.html',
  styleUrls: ['./blood-transfert.component.css']
})
export class BloodTransfertComponent implements OnInit {
  patients! : Patient[];
  num!: number;
  patient!: Patient;
  message!: Message;
  listRequest!:Request[];


  constructor(private service:PatientService,private servicerequest:RequestService) { }

  ngOnInit(): void {



    this.servicerequest.listRequest().subscribe((data) => {
      this.listRequest = data;
      console.log(this.listRequest);
    }
    );


  }

  Approve(patient:Patient){
    console.log(patient);
    this.message = new Message();
    this.message.subject = "Blood transfert";
    this.message.message = "Your blood transfert request has been approved";
    this.message.patient = patient;
    console.log(this.message);
    this.service.saveMessageApproved(this.message).subscribe((data) => {
      console.log(data);
    }
    );
  }

  Reject(patient:Patient){
    console.log(patient);
    this.message = new Message();
    this.message.subject = "Blood transfert";
    this.message.message = "Your blood transfert request has been rejected";
    this.message.patient = patient;
    console.log(this.message);
    this.service.saveMessageRejected(this.message).subscribe((data) => {
      console.log(data);
    }
    );
  }


}
