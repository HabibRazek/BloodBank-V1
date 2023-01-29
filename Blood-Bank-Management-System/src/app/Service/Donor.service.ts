import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donor } from 'src/model/Donor.model';
import { BloodGroup } from 'src/model/BloodGroup.model';
import { BloodStock } from 'src/model/BloodStock.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class DonorService {

  apiURL: string = 'http://localhost:8888/bloodbank/api';
  apiURL2: string = 'http://localhost:8888/bloodbank/api/bloodGroup';
  apiURL3: string = 'http://localhost:8888/bloodbank/api/bloodStock';
  apiURL4: string = 'http://localhost:8888/bloodbank/api/donate';
  apiURL5: string = 'http://localhost:8888/bloodbank/api/count';

  constructor(private http: HttpClient) {}


  listDonor(): Observable<Donor[]> {
    return this.http.get<Donor[]>(this.apiURL);
  }

  addDonor(donor: Donor): Observable<Donor> {
    return this.http.post<Donor>(this.apiURL, donor, httpOptions);
  }
  listebloodgroup(): Observable<BloodGroup[]> {
    return this.http.get<BloodGroup[]>(this.apiURL2);
  }

  deleteDonor(id: number): Observable<Donor> {
    return this.http.delete<Donor>(this.apiURL + '/' + id);
  }

  updateDonor(donor: Donor): Observable<Donor> {
    return this.http.put<Donor>(this.apiURL ,donor, httpOptions);
  }

  getDonorById(id: number): Observable<Donor> {
    return this.http.get<Donor>(this.apiURL + '/' + id);
  }

  getBloodStock(): Observable<BloodStock[]> {
    return this.http.get<BloodStock[]>(this.apiURL3);
  }

  donateBlood(donorid: number): Observable<number> {
    return this.http.put<number>(this.apiURL4 + '/' + donorid, httpOptions);
  }

  countDonor(): Observable<number> {
    return this.http.get<number>(this.apiURL5);
  }

  sumBloodGroupQuantities(): Observable<number> {
    return this.http.get<number>(this.apiURL3 + '/sum');
  }

}
