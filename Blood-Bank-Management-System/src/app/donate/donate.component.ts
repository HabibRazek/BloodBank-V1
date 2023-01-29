import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Donor } from 'src/model/Donor.model';
import { DonorService } from '../Service/Donor.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {
  donors!: Donor[];
  donorid!: number;
  // tab de donor id

  constructor(private service:DonorService ,private router:Router) {

  }

  ngOnInit(): void {
    this.service.listDonor().subscribe((data)=>{
      this.donors=data;
      console.log(this.donors);
    });
  }

  
  onSelected(donorid:number){
    this.donorid=donorid;
  }
  // kol mata3ml select tzid id fi tab w service n3adiw

  donate(){
    this.service.donateBlood(this.donorid).subscribe((data)=>{
      console.log(data);
    })
    this.router.navigate(['blood-stock']).then(() => {
      window.location.reload();
      });

  }






}
