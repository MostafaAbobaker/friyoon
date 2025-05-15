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
  deleteService(id: number): Observable<any> {
    return this._http.delete(`Service/Delete/${id}`);
  }
  getServiceById(id: string): Observable<any> {
    return this._http.get(`Service/GetServiceById/${id}`)
  }
  updateService(service: any): Observable<any> {
    return this._http.put('Service/Update', service);
  } 
  deleteServiceImage(deleteImage: any): Observable<any> {
    return this._http.post(`Service/DeleteImageService`, deleteImage);
  }
}
