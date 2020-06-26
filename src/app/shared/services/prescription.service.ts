import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prescription } from '../models/Prescription';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  constructor(private http: HttpClient) { }

  private static BASE_URL = 'http://localhost:8080/prescriptions';

  public getAll(): Observable<Prescription[]> {
    return this.http.get<Prescription[]>(PrescriptionService.BASE_URL);
  }




}
