import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BloodGroup } from 'src/model/BloodGroup.model';
import { Donor } from 'src/model/Donor.model';
import { DonorService } from '../Service/Donor.service';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {
  newDonor = new Donor();

  BloodGroup!: BloodGroup[];
  newBloodGroup! :BloodGroup;
  idbloodgroup!: number;

  constructor( private service: DonorService, private router: Router) {

  }

  ngOnInit(): void {
    this.service.listebloodgroup().subscribe((data) => {
      this.BloodGroup = data;
      console.log(this.BloodGroup);

    });
  }

  addDonor() {
    this.newDonor.bloodGroup = this.BloodGroup[this.idbloodgroup];
    console.log(this.newDonor);
    this.service.addDonor(this.newDonor).subscribe((data) => {
      console.log(data);
    });
    this.router.navigate(['view-donor']).then(() => {
      window.location.reload();
      });
  }

}
