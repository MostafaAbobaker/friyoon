import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor(private _http:HttpClient) { }

  getAllSubCategory(limit:number, size:number): Observable<any> {
    return this._http.get(`Service/GetAll?PageNumber=${limit}&PageSize=${size}`)
  }
  addSubCategory(form: any): Observable<any> {
    return this._http.post('Service/AddService', form);
  }
}
