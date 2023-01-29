import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from 'src/model/Request.model';
import { Message } from 'src/model/Message.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  apiURL: string = 'http://localhost:8888/bloodbank/api/request';
  apiURLmsg: string = 'http://localhost:8888/bloodbank/api/message/patient';
  constructor(private http:HttpClient) {

  }

  listRequest(): Observable<Request[]> {
    return this.http.get<Request[]>(this.apiURL);
  }

  addRequest(request: Request): Observable<Request> {
    return this.http.post<Request>(this.apiURL, request);
  }

  deleteRequest(id: number): Observable<Request> {
    return this.http.delete<Request>(this.apiURL + '/' + id);
  }

  updateRequest(request: Request): Observable<Request> {
    return this.http.put<Request>(this.apiURL, request);
  }

  getMessagesByPatientId(id: number): Observable<Message[]> {
    return this.http.get<Message[]>(this.apiURLmsg + '/' + id);
  }







}
