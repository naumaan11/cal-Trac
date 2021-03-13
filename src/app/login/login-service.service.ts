import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LoginDetail } from '../Model/login'
import { Observable } from 'rxjs/internal/Observable';
import { observable } from 'rxjs/internal/symbol/observable';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  getUser() {
    const url = environment.baseUrl
    return this.http.get(url)   
  }

  postDetail(details: Partial<LoginDetail>): Observable<any> {
    const url =  environment.baseUrl
    return this.http.post<Partial<LoginDetail>>(url,details)
  }
}