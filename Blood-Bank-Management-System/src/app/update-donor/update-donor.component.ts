import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BloodGroup } from 'src/model/BloodGroup.model';
import { Donor } from 'src/model/Donor.model';
import { DonorService } from '../Service/Donor.service';

@Component({
  selector: 'app-update-donor',
  templateUrl: './update-donor.component.html',
  styleUrls: ['./update-donor.component.css'],
})
export class UpdateDonorComponent implements OnInit {
  newDonor=new Donor();
  emptyBloodGroup= new BloodGroup();
  bloodGroup !: BloodGroup[];
  idblood!: number;
  constructor(
    private service: DonorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.emptyBloodGroup.bloodgroup = "";
    this.emptyBloodGroup.idbloodgroup= 0;
    this.service.listebloodgroup().subscribe((data) => {
      this.bloodGroup = data;

    });
    this.service.getDonorById(this.route.snapshot.params['id']).subscribe((data)=>{
      this.newDonor = data;
      this.idblood=this.newDonor.bloodGroup.idbloodgroup;
    });

  }
  update(){
    console.log(this.idblood)
    this.newDonor.bloodGroup.idbloodgroup=this.idblood
    this.service.updateDonor(this.newDonor).subscribe((data)=>{
      this.router.navigate(['view-donor']);
    });
  }

}



