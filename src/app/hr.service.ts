import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { DepartmentDetails } from './Details';
import { Observable } from 'rxjs';
import { PathLocationStrategy } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HrService 
{
  constructor(private _http : HttpClient) { }

  getDetails(_id : number) : Observable<DepartmentDetails>
  {
    return this._http.get<DepartmentDetails>("http://localhost:5100/departments/"+_id)
  }
}
