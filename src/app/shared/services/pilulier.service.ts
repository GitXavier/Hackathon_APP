import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pilulier } from '../models/Pilulier';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PilulierService {

  constructor(private http: HttpClient) { }

  private static BASE_URL = 'http://localhost:8080/piluliers';

  public getAll(): Observable<Pilulier[]> {
    return this.http.get<Pilulier[]>(PilulierService.BASE_URL);
  }

  public post(pilulier: Pilulier): Observable<Pilulier>{
    return this.http.post<Pilulier>(PilulierService.BASE_URL, pilulier);
  }
}
