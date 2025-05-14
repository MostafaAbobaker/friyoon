import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GovernoratesService {

  constructor(private _http:HttpClient) { }

  getAllGovernorates(): Observable<any> {
    return this._http.get('Governorates/GetAll');
  }
  getGovernoratesById(id:number): Observable<any> {
    return this._http.get(`Governorates/GetById/${id}`);
  }

  addGovernorates(form:any):Observable<any> {
    return this._http.post(`Governorates/Add`, form)
  }
  updataGovernorates(form:any):Observable<any> {
    return this._http.put(`Governorates/Update`, form)
  }
  deleteGovernorates(id:number):Observable<any> {
    return this._http.delete(`Governorates/Delete/${id}`)
  }
}
