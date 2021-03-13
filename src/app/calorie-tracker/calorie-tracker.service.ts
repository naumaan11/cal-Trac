import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { foodMaster } from '../Model/foodMaster';
import { BreakFast } from '../Model/breakfast'
import { Observable } from 'rxjs/internal/Observable';




@Injectable({
  providedIn: 'root'
})
export class CalorieTrackerService {

  constructor(private http: HttpClient) { }
  getFood() {
    const url = `${environment.baseUrl}/foodList`
    return this.http.get(url)   
  }

  postDetail(details: Partial<BreakFast>): Observable<any> {
    const url =  `${environment.baseUrl}/breakFast`
    return this.http.post<Partial<BreakFast>>(url,details)
  }

  getLogFood() {
    const url = `${environment.baseUrl}/breakFast`
    return this.http.get(url)
  }
}
