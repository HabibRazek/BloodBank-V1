import { Component, OnInit } from '@angular/core';
import { Donor } from 'src/model/Donor.model';
import { DonorService } from '../Service/Donor.service';

@Component({
  selector: 'app-view-donor',
  templateUrl: './view-donor.component.html',
  styleUrls: ['./view-donor.component.css']
})
export class ViewDonorComponent implements OnInit {

  donors!: Donor[];



  constructor(private service: DonorService) {


  }



  ngOnInit(): void {
    this.service.listDonor().subscribe((data) => {
      this.donors = data;
      console.log(this.donors);
    });
  }

  deleteDonor(id: number) {
    this.service.deleteDonor(id).subscribe((data) => {
      console.log(data);
      this.service.listDonor().subscribe((data) => {
        this.donors = data;
        console.log(this.donors);
      });
    });
  }



}
