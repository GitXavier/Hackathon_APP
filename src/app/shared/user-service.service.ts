import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  private static BASE_URL = 'http://localhost:8080/users';

  public getAll(): Observable<Users[]> {
    return this.http.get<Users[]>(UserServiceService.BASE_URL);
  }

  public post(user: Users): Observable <Users>  {
    return this.http.post<Users>(UserServiceService.BASE_URL, user);
  }

  public delete(id: number): Observable<Users>{
    return this.http.delete<Users>(UserServiceService.BASE_URL + '/' + id);
  }
}
