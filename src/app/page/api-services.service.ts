import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http: HttpClient) { }

  apiurl = "https://api.npoint.io/d8974e2a83b76da4e84d"

  homeApi(): Observable<any> {
    return this.http.get(`${this.apiurl}`)
  }
}
