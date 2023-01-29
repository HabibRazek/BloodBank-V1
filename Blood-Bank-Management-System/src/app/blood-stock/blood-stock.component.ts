import { Component, OnInit } from '@angular/core';
import { BloodGroup } from 'src/model/BloodGroup.model';
import { BloodStock } from 'src/model/BloodStock.model';
import { DonorService } from '../Service/Donor.service';

@Component({
  selector: 'app-blood-stock',
  templateUrl: './blood-stock.component.html',
  styleUrls: ['./blood-stock.component.css']
})
export class BloodStockComponent implements OnInit {

  bloodStock!: BloodStock[];
  bloodGroup!: BloodGroup[];
  quantity!: number;

  constructor(private service:DonorService) { }

  ngOnInit(): void {
    this.service.getBloodStock().subscribe((data)=>{
      this.bloodStock = data;
      console.log(this.bloodStock);
    });
  }



}
