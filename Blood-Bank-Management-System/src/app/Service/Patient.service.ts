import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BloodGroup } from 'src/model/BloodGroup.model';
import { Message } from 'src/model/Message.model';
import { Patient } from 'src/model/Patient.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  apiURL: string = 'http://localhost:8888/bloodbank/api/patient';
  apiURl: string = 'http://localhost:8888/bloodbank/api/bloodGroup';
  apiURL2: string = 'http://localhost:8888/bloodbank/api/message';

  constructor(private http:HttpClient) { }

  listPatient(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiURL);
  }

  addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.apiURL, patient);
  }

  listebloodgroup(): Observable<BloodGroup[]> {
    return this.http.get<BloodGroup[]>(this.apiURl);
  }

  deletePatient(id: number): Observable<Patient> {
    return this.http.delete<Patient>(this.apiURL + '/' + id);
  }

  updatePatient(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(this.apiURL, patient, httpOptions);
  }

  getPatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(this.apiURL + '/' + id);
  }


  countPatient(): Observable<number> {
    return this.http.get<number>(this.apiURL + '/count');
  }

  saveMessageApproved(message: Message): Observable<Message> {
    return this.http.post<Message>(this.apiURL2+'/approve', message);
  }

  saveMessageRejected(message: Message): Observable<Message> {
    return this.http.post<Message>(this.apiURL2+'/reject', message);
  }




}
