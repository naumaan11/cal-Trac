import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { foodMaster } from '../Model/foodMaster';
import { WaterMaster } from '../Model/water'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class WaterTrackerService {

  constructor(private http: HttpClient) { }

  getWaterDetail() {
    const url = `${environment.baseUrl}/getWater`
    return this.http.get(url)   
  }

  waterDetail(details: Partial<WaterMaster>): Observable<any> {
    const url =  `${environment.baseUrl}/water`
    return this.http.post<Partial<WaterMaster>>(url,details)
  }
}
